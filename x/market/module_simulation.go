package market

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/deaswang/nft/testutil/sample"
	marketsimulation "github.com/deaswang/nft/x/market/simulation"
	"github.com/deaswang/nft/x/market/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = marketsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateLootboxOption = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateLootboxOption int = 100

	opWeightMsgUpdateLootboxOption = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateLootboxOption int = 100

	opWeightMsgDeleteLootboxOption = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteLootboxOption int = 100

	opWeightMsgCreateOrder = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateOrder int = 100

	opWeightMsgUpdateOrder = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateOrder int = 100

	opWeightMsgDeleteOrder = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteOrder int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	marketGenesis := types.GenesisState{
		LootboxOptionList: []types.LootboxOption{
			{
				Creator: sample.AccAddress(),
				Name:    "0",
			},
			{
				Creator: sample.AccAddress(),
				Name:    "1",
			},
		},
		OrderList: []types.Order{
			{
				Creator: sample.AccAddress(),
				Hash:    "0",
				Maker:   "0",
				Taker:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Hash:    "1",
				Maker:   "1",
				Taker:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&marketGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateLootboxOption int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateLootboxOption, &weightMsgCreateLootboxOption, nil,
		func(_ *rand.Rand) {
			weightMsgCreateLootboxOption = defaultWeightMsgCreateLootboxOption
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateLootboxOption,
		marketsimulation.SimulateMsgCreateLootboxOption(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateLootboxOption int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateLootboxOption, &weightMsgUpdateLootboxOption, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateLootboxOption = defaultWeightMsgUpdateLootboxOption
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateLootboxOption,
		marketsimulation.SimulateMsgUpdateLootboxOption(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteLootboxOption int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteLootboxOption, &weightMsgDeleteLootboxOption, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteLootboxOption = defaultWeightMsgDeleteLootboxOption
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteLootboxOption,
		marketsimulation.SimulateMsgDeleteLootboxOption(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateOrder, &weightMsgCreateOrder, nil,
		func(_ *rand.Rand) {
			weightMsgCreateOrder = defaultWeightMsgCreateOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateOrder,
		marketsimulation.SimulateMsgCreateOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateOrder, &weightMsgUpdateOrder, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateOrder = defaultWeightMsgUpdateOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateOrder,
		marketsimulation.SimulateMsgUpdateOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteOrder int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteOrder, &weightMsgDeleteOrder, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteOrder = defaultWeightMsgDeleteOrder
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteOrder,
		marketsimulation.SimulateMsgDeleteOrder(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
