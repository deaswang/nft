package nmint

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/deaswang/nft/testutil/sample"
	nmintsimulation "github.com/deaswang/nft/x/nmint/simulation"
	"github.com/deaswang/nft/x/nmint/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = nmintsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateMinter = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMinter int = 100

	opWeightMsgUpdateMinter = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMinter int = 100

	opWeightMsgDeleteMinter = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMinter int = 100

	opWeightMsgMint = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMint int = 100

	opWeightMsgMinterMint = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMinterMint int = 100

	opWeightMsgMinterInit = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMinterInit int = 100

	opWeightMsgMinterPause = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMinterPause int = 100

	opWeightMsgCreateMinterwl = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMinterwl int = 100

	opWeightMsgUpdateMinterwl = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMinterwl int = 100

	opWeightMsgDeleteMinterwl = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMinterwl int = 100

	opWeightMsgMinterwlInit = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMinterwlInit int = 100

	opWeightMsgMinterwlMint = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMinterwlMint int = 100

	opWeightMsgMinterwlWhitelist = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMinterwlWhitelist int = 100

	opWeightMsgMinterwlPrice = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMinterwlPrice int = 100

	opWeightMsgMinterPrice = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMinterPrice int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	nmintGenesis := types.GenesisState{
		MinterList: []types.Minter{
			{
				Creator:      sample.AccAddress(),
				CollectionId: "0",
			},
			{
				Creator:      sample.AccAddress(),
				CollectionId: "1",
			},
		},
		MinterwlList: []types.Minterwl{
			{
				Creator:      sample.AccAddress(),
				CollectionId: "0",
			},
			{
				Creator:      sample.AccAddress(),
				CollectionId: "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&nmintGenesis)
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

	var weightMsgMint int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMint, &weightMsgMint, nil,
		func(_ *rand.Rand) {
			weightMsgMint = defaultWeightMsgMint
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMint,
		nmintsimulation.SimulateMsgMint(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMinterMint int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMinterMint, &weightMsgMinterMint, nil,
		func(_ *rand.Rand) {
			weightMsgMinterMint = defaultWeightMsgMinterMint
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMinterMint,
		nmintsimulation.SimulateMsgMinterMint(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMinterInit int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMinterInit, &weightMsgMinterInit, nil,
		func(_ *rand.Rand) {
			weightMsgMinterInit = defaultWeightMsgMinterInit
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMinterInit,
		nmintsimulation.SimulateMsgMinterInit(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMinterPause int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMinterPause, &weightMsgMinterPause, nil,
		func(_ *rand.Rand) {
			weightMsgMinterPause = defaultWeightMsgMinterPause
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMinterPause,
		nmintsimulation.SimulateMsgMinterPause(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMinterwlInit int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMinterwlInit, &weightMsgMinterwlInit, nil,
		func(_ *rand.Rand) {
			weightMsgMinterwlInit = defaultWeightMsgMinterwlInit
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMinterwlInit,
		nmintsimulation.SimulateMsgMinterwlInit(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMinterwlMint int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMinterwlMint, &weightMsgMinterwlMint, nil,
		func(_ *rand.Rand) {
			weightMsgMinterwlMint = defaultWeightMsgMinterwlMint
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMinterwlMint,
		nmintsimulation.SimulateMsgMinterwlMint(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMinterwlWhitelist int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMinterwlWhitelist, &weightMsgMinterwlWhitelist, nil,
		func(_ *rand.Rand) {
			weightMsgMinterwlWhitelist = defaultWeightMsgMinterwlWhitelist
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMinterwlWhitelist,
		nmintsimulation.SimulateMsgMinterwlWhitelist(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMinterwlPrice int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMinterwlPrice, &weightMsgMinterwlPrice, nil,
		func(_ *rand.Rand) {
			weightMsgMinterwlPrice = defaultWeightMsgMinterwlPrice
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMinterwlPrice,
		nmintsimulation.SimulateMsgMinterwlPrice(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMinterPrice int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMinterPrice, &weightMsgMinterPrice, nil,
		func(_ *rand.Rand) {
			weightMsgMinterPrice = defaultWeightMsgMinterPrice
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMinterPrice,
		nmintsimulation.SimulateMsgMinterPrice(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
