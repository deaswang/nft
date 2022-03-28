package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/deaswang/nft/x/market/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateLootboxOption() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-lootbox-option [name] [max-quantity] [probability] [guaranteed] [guarantees]",
		Short: "Create a new lootbox-option",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexName := args[0]

			// Get value arguments
			argMaxQuantity, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argCastProbability := strings.Split(args[2], listSeparator)
			argProbability := make([]int32, len(argCastProbability))
			for i, arg := range argCastProbability {
				value, err := cast.ToInt32E(arg)
				if err != nil {
					return err
				}
				argProbability[i] = value
			}
			argGuaranteed, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}
			argCastGuarantees := strings.Split(args[4], listSeparator)
			argGuarantees := make([]int32, len(argCastGuarantees))
			for i, arg := range argCastGuarantees {
				value, err := cast.ToInt32E(arg)
				if err != nil {
					return err
				}
				argGuarantees[i] = value
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateLootboxOption(
				clientCtx.GetFromAddress().String(),
				indexName,
				argMaxQuantity,
				argProbability,
				argGuaranteed,
				argGuarantees,
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

func CmdUpdateLootboxOption() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-lootbox-option [name] [max-quantity] [probability] [guaranteed] [guarantees]",
		Short: "Update a lootbox-option",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexName := args[0]

			// Get value arguments
			argMaxQuantity, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argCastProbability := strings.Split(args[2], listSeparator)
			argProbability := make([]int32, len(argCastProbability))
			for i, arg := range argCastProbability {
				value, err := cast.ToInt32E(arg)
				if err != nil {
					return err
				}
				argProbability[i] = value
			}
			argGuaranteed, err := cast.ToBoolE(args[3])
			if err != nil {
				return err
			}
			argCastGuarantees := strings.Split(args[4], listSeparator)
			argGuarantees := make([]int32, len(argCastGuarantees))
			for i, arg := range argCastGuarantees {
				value, err := cast.ToInt32E(arg)
				if err != nil {
					return err
				}
				argGuarantees[i] = value
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateLootboxOption(
				clientCtx.GetFromAddress().String(),
				indexName,
				argMaxQuantity,
				argProbability,
				argGuaranteed,
				argGuarantees,
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

func CmdDeleteLootboxOption() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-lootbox-option [name]",
		Short: "Delete a lootbox-option",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexName := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteLootboxOption(
				clientCtx.GetFromAddress().String(),
				indexName,
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
