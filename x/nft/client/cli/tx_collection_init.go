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

func CmdCollectionInit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "collection-init [index] [contract] [name] [symbol] [data]",
		Short: "Broadcast message collection-init",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIndex := args[0]
			argContract := args[1]
			argName := args[2]
			argSymbol := args[3]
			argData := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCollectionInit(
				clientCtx.GetFromAddress().String(),
				argIndex,
				argContract,
				argName,
				argSymbol,
				argData,
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
