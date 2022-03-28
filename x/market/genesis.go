package market

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/market/keeper"
	"github.com/deaswang/nft/x/market/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the lootboxOption
	for _, elem := range genState.LootboxOptionList {
		k.SetLootboxOption(ctx, elem)
	}
	// Set if defined
	if genState.Seed != nil {
		k.SetSeed(ctx, *genState.Seed)
	}
	// Set all the order
	for _, elem := range genState.OrderList {
		k.SetOrder(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.LootboxOptionList = k.GetAllLootboxOption(ctx)
	// Get all seed
	seed, found := k.GetSeed(ctx)
	if found {
		genesis.Seed = &seed
	}
	genesis.OrderList = k.GetAllOrder(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
