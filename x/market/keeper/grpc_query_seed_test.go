package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/testutil/nullify"
	"github.com/deaswang/nft/x/market/types"
)

func TestSeedQuery(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestSeed(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetSeedRequest
		response *types.QueryGetSeedResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetSeedRequest{},
			response: &types.QueryGetSeedResponse{Seed: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Seed(wctx, tc.request)
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
