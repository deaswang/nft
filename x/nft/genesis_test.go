package nft_test

import (
	"testing"

	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/testutil/nullify"
	"github.com/deaswang/nft/x/nft"
	"github.com/deaswang/nft/x/nft/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		CollectionList: []types.Collection{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		NftList: []types.Nft{
			{
				CollectionId: "0",
			},
			{
				CollectionId: "1",
			},
		},
		OwnerList: []types.Owner{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NftKeeper(t)
	nft.InitGenesis(ctx, *k, genesisState)
	got := nft.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.CollectionList, got.CollectionList)
	require.ElementsMatch(t, genesisState.NftList, got.NftList)
	require.ElementsMatch(t, genesisState.OwnerList, got.OwnerList)
	// this line is used by starport scaffolding # genesis/test/assert
}
