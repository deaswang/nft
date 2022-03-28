package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/testutil/nullify"
	"github.com/deaswang/nft/x/market/keeper"
	"github.com/deaswang/nft/x/market/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNLootboxOption(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.LootboxOption {
	items := make([]types.LootboxOption, n)
	for i := range items {
		items[i].Name = strconv.Itoa(i)

		keeper.SetLootboxOption(ctx, items[i])
	}
	return items
}

func TestLootboxOptionGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNLootboxOption(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetLootboxOption(ctx,
			item.Name,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestLootboxOptionRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNLootboxOption(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLootboxOption(ctx,
			item.Name,
		)
		_, found := keeper.GetLootboxOption(ctx,
			item.Name,
		)
		require.False(t, found)
	}
}

func TestLootboxOptionGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNLootboxOption(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllLootboxOption(ctx)),
	)
}
