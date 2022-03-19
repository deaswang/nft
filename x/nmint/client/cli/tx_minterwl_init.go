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
	"strings"
)

var _ = strconv.Itoa(0)

func CmdMinterwlInit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "minterwl-init [admin] [collection-id] [supply] [whitelist] [wllimit] [price]",
		Short: "Broadcast message minterwl-init",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAdmin := args[0]
			argCollectionId := args[1]
			argSupply, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argWhitelist := strings.Split(args[3], listSeparator)
			argWllimit, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argPrice, err := sdk.ParseCoinNormalized(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMinterwlInit(
				clientCtx.GetFromAddress().String(),
				argAdmin,
				argCollectionId,
				argSupply,
				argWhitelist,
				argWllimit,
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
