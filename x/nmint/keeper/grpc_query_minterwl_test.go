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

func TestMinterwlQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMinterwl(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetMinterwlRequest
		response *types.QueryGetMinterwlResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetMinterwlRequest{
				CollectionId: msgs[0].CollectionId,
			},
			response: &types.QueryGetMinterwlResponse{Minterwl: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetMinterwlRequest{
				CollectionId: msgs[1].CollectionId,
			},
			response: &types.QueryGetMinterwlResponse{Minterwl: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetMinterwlRequest{
				CollectionId: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Minterwl(wctx, tc.request)
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

func TestMinterwlQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMinterwl(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllMinterwlRequest {
		return &types.QueryAllMinterwlRequest{
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
			resp, err := keeper.MinterwlAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Minterwl), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Minterwl),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MinterwlAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Minterwl), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Minterwl),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.MinterwlAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Minterwl),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.MinterwlAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
