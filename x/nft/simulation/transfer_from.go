package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/deaswang/nft/x/nft/keeper"
	"github.com/deaswang/nft/x/nft/types"
)

func SimulateMsgTransferFrom(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgTransferFrom{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the TransferFrom simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "TransferFrom simulation not implemented"), nil, nil
	}
}