package nmint_test

import (
	"testing"

	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/testutil/nullify"
	"github.com/deaswang/nft/x/nmint"
	"github.com/deaswang/nft/x/nmint/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		MinterList: []types.Minter{
			{
				CollectionId: "0",
			},
			{
				CollectionId: "1",
			},
		},
		MinterwlList: []types.Minterwl{
			{
				CollectionId: "0",
			},
			{
				CollectionId: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NmintKeeper(t)
	nmint.InitGenesis(ctx, *k, genesisState)
	got := nmint.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.MinterList, got.MinterList)
	require.ElementsMatch(t, genesisState.MinterwlList, got.MinterwlList)
	// this line is used by starport scaffolding # genesis/test/assert
}
