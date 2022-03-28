package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/testutil/nullify"
	"github.com/deaswang/nft/x/market/keeper"
	"github.com/deaswang/nft/x/market/types"
)

func createTestSeed(keeper *keeper.Keeper, ctx sdk.Context) types.Seed {
	item := types.Seed{}
	keeper.SetSeed(ctx, item)
	return item
}

func TestSeedGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	item := createTestSeed(keeper, ctx)
	rst, found := keeper.GetSeed(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestSeedRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	createTestSeed(keeper, ctx)
	keeper.RemoveSeed(ctx)
	_, found := keeper.GetSeed(ctx)
	require.False(t, found)
}
