package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/testutil/nullify"
	"github.com/deaswang/nft/x/market/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestLootboxOptionQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNLootboxOption(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetLootboxOptionRequest
		response *types.QueryGetLootboxOptionResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetLootboxOptionRequest{
				Name: msgs[0].Name,
			},
			response: &types.QueryGetLootboxOptionResponse{LootboxOption: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetLootboxOptionRequest{
				Name: msgs[1].Name,
			},
			response: &types.QueryGetLootboxOptionResponse{LootboxOption: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetLootboxOptionRequest{
				Name: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.LootboxOption(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestLootboxOptionQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNLootboxOption(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllLootboxOptionRequest {
		return &types.QueryAllLootboxOptionRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.LootboxOptionAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.LootboxOption), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.LootboxOption),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.LootboxOptionAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.LootboxOption), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.LootboxOption),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.LootboxOptionAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.LootboxOption),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.LootboxOptionAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
