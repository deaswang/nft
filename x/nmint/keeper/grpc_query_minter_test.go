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
	"github.com/deaswang/nft/x/nmint/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestMinterQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMinter(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetMinterRequest
		response *types.QueryGetMinterResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetMinterRequest{
				Index: msgs[0].CollectionId,
			},
			response: &types.QueryGetMinterResponse{Minter: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetMinterRequest{
				Index: msgs[1].CollectionId,
			},
			response: &types.QueryGetMinterResponse{Minter: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetMinterRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Minter(wctx, tc.request)
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

func TestMinterQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMinter(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllMinterRequest {
		return &types.QueryAllMinterRequest{
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
			resp, err := keeper.MinterAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Minter), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Minter),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MinterAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Minter), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Minter),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.MinterAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Minter),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.MinterAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
