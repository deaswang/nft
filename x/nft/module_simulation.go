package nft

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/deaswang/nft/testutil/sample"
	nftsimulation "github.com/deaswang/nft/x/nft/simulation"
	"github.com/deaswang/nft/x/nft/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = nftsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgTransferFrom = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgTransferFrom int = 100

	opWeightMsgApprove = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgApprove int = 100

	opWeightMsgApproveAll = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgApproveAll int = 100

	opWeightMsgCollectionInit = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCollectionInit int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	nftGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&nftGenesis)
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

	var weightMsgTransferFrom int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgTransferFrom, &weightMsgTransferFrom, nil,
		func(_ *rand.Rand) {
			weightMsgTransferFrom = defaultWeightMsgTransferFrom
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgTransferFrom,
		nftsimulation.SimulateMsgTransferFrom(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgApprove int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgApprove, &weightMsgApprove, nil,
		func(_ *rand.Rand) {
			weightMsgApprove = defaultWeightMsgApprove
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApprove,
		nftsimulation.SimulateMsgApprove(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgApproveAll int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgApproveAll, &weightMsgApproveAll, nil,
		func(_ *rand.Rand) {
			weightMsgApproveAll = defaultWeightMsgApproveAll
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApproveAll,
		nftsimulation.SimulateMsgApproveAll(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCollectionInit int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCollectionInit, &weightMsgCollectionInit, nil,
		func(_ *rand.Rand) {
			weightMsgCollectionInit = defaultWeightMsgCollectionInit
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCollectionInit,
		nftsimulation.SimulateMsgCollectionInit(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
