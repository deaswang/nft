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

func CmdTransferFrom() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "transfer-from [from] [to] [token-id]",
		Short: "Broadcast message transfer-from",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFrom := args[0]
			argTo := args[1]
			argTokenId := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgTransferFrom(
				clientCtx.GetFromAddress().String(),
				argFrom,
				argTo,
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
