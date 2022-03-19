package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nmint/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdMinterInit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "minter-init [admin] [collection-id] [supply] [price]",
		Short: "Broadcast message minter-init",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAdmin := args[0]
			argCollectionId := args[1]
			argSupply, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argPrice, err := sdk.ParseCoinNormalized(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMinterInit(
				clientCtx.GetFromAddress().String(),
				argAdmin,
				argCollectionId,
				argSupply,
				argPrice,
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
