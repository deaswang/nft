package nmint

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nmint/keeper"
	"github.com/deaswang/nft/x/nmint/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the minter
	for _, elem := range genState.MinterList {
		k.SetMinter(ctx, elem)
	}
	// Set all the minterwl
	for _, elem := range genState.MinterwlList {
		k.SetMinterwl(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.MinterList = k.GetAllMinter(ctx)
	genesis.MinterwlList = k.GetAllMinterwl(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
