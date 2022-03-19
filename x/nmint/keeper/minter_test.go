package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/testutil/nullify"
	"github.com/deaswang/nft/x/nmint/keeper"
	"github.com/deaswang/nft/x/nmint/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNMinter(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Minter {
	items := make([]types.Minter, n)
	for i := range items {
		items[i].CollectionId = strconv.Itoa(i)

		keeper.SetMinter(ctx, items[i])
	}
	return items
}

func TestMinterGet(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	items := createNMinter(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMinter(ctx,
			item.CollectionId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMinterRemove(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	items := createNMinter(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMinter(ctx,
			item.CollectionId,
		)
		_, found := keeper.GetMinter(ctx,
			item.CollectionId,
		)
		require.False(t, found)
	}
}

func TestMinterGetAll(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	items := createNMinter(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMinter(ctx)),
	)
}
