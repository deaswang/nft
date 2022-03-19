package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/deaswang/nft/x/nft/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdApprove() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "approve [approver] [token-id]",
		Short: "Broadcast message approve",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argApprover := args[0]
			argTokenId := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgApprove(
				clientCtx.GetFromAddress().String(),
				argApprover,
				argTokenId,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
