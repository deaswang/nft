package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/deaswang/nft/x/nmint/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
)

var _ = strconv.Itoa(0)

func CmdMinterwlWhitelist() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "minterwl-whitelist [collection-id] [whitelist] [wllimit]",
		Short: "Broadcast message minterwl-whitelist",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCollectionId := args[0]
			argWhitelist := strings.Split(args[1], listSeparator)
			argWllimit, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMinterwlWhitelist(
				clientCtx.GetFromAddress().String(),
				argCollectionId,
				argWhitelist,
				argWllimit,
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
