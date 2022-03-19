package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/testutil/nullify"
	"github.com/deaswang/nft/x/nft/keeper"
	"github.com/deaswang/nft/x/nft/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNNft(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Nft {
	items := make([]types.Nft, n)
	for i := range items {
		items[i].CollectionId = strconv.Itoa(i)

		keeper.SetNft(ctx, items[i])
	}
	return items
}

func TestNftGet(t *testing.T) {
	keeper, ctx := keepertest.NftKeeper(t)
	items := createNNft(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetNft(ctx,
			item.CollectionId,
			item.TokenId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}

// func TestNftRemove(t *testing.T) {
// 	keeper, ctx := keepertest.NftKeeper(t)
// 	items := createNNft(keeper, ctx, 10)
// 	for _, item := range items {
// 		keeper.RemoveNft(ctx,
// 			item.CollectionId,
// 			item.TokenId,
// 		)
// 		_, found := keeper.GetNft(ctx,
// 			item.CollectionId,
// 			item.TokenId,
// 		)
// 		require.False(t, found)
// 	}
// }

func TestNftGetAll(t *testing.T) {
	keeper, ctx := keepertest.NftKeeper(t)
	items := createNNft(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllNft(ctx)),
	)
}
