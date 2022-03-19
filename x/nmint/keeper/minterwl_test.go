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

func createNMinterwl(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Minterwl {
	items := make([]types.Minterwl, n)
	for i := range items {
		items[i].CollectionId = strconv.Itoa(i)

		keeper.SetMinterwl(ctx, items[i])
	}
	return items
}

func TestMinterwlGet(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	items := createNMinterwl(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMinterwl(ctx,
			item.CollectionId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMinterwlRemove(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	items := createNMinterwl(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMinterwl(ctx,
			item.CollectionId,
		)
		_, found := keeper.GetMinterwl(ctx,
			item.CollectionId,
		)
		require.False(t, found)
	}
}

func TestMinterwlGetAll(t *testing.T) {
	keeper, ctx := keepertest.NmintKeeper(t)
	items := createNMinterwl(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMinterwl(ctx)),
	)
}
