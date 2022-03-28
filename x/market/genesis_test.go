package market_test

import (
	"testing"

	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/testutil/nullify"
	"github.com/deaswang/nft/x/market"
	"github.com/deaswang/nft/x/market/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		LootboxOptionList: []types.LootboxOption{
			{
				Name: "0",
			},
			{
				Name: "1",
			},
		},
		Seed: &types.Seed{
			Seed: 81,
		},
		OrderList: []types.Order{
			{
				Hash:  "0",
				Maker: "0",
				Taker: "0",
			},
			{
				Hash:  "1",
				Maker: "1",
				Taker: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MarketKeeper(t)
	market.InitGenesis(ctx, *k, genesisState)
	got := market.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.LootboxOptionList, got.LootboxOptionList)
	require.Equal(t, genesisState.Seed, got.Seed)
	require.ElementsMatch(t, genesisState.OrderList, got.OrderList)
	// this line is used by starport scaffolding # genesis/test/assert
}
