package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/deaswang/nft/x/market/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-order [maker] [taker] [maker-relayer-fee] [taker-relayer-fee] [maker-protocol-fee] [taker-protocol-fee] [fee-recipient] [fee-method] [side] [sale-kind] [payment-token] [base-price] [extra-price] [listing-time] [expiration-time] [salt]",
		Short: "Create a new order",
		Args:  cobra.ExactArgs(17),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexMaker := args[0]
			indexTaker := args[1]

			// Get value arguments
			argMakerRelayerFee, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argTakerRelayerFee, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argMakerProtocolFee, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argTakerProtocolFee, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}
			argFeeRecipient := args[6]
			argFeeMethod, err := cast.ToInt32E(args[7])
			if err != nil {
				return err
			}
			argSide, err := cast.ToInt32E(args[8])
			if err != nil {
				return err
			}
			argSaleKind, err := cast.ToInt32E(args[9])
			if err != nil {
				return err
			}
			argPaymentToken := args[10]
			argBasePrice, err := cast.ToUint64E(args[11])
			if err != nil {
				return err
			}
			argExtraPrice, err := cast.ToUint64E(args[12])
			if err != nil {
				return err
			}
			argListingTime, err := cast.ToUint64E(args[13])
			if err != nil {
				return err
			}
			argExpirationTime, err := cast.ToUint64E(args[14])
			if err != nil {
				return err
			}
			argSalt, err := cast.ToUint64E(args[15])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateOrder(
				clientCtx.GetFromAddress().String(),
				indexMaker,
				indexTaker,
				argMakerRelayerFee,
				argTakerRelayerFee,
				argMakerProtocolFee,
				argTakerProtocolFee,
				argFeeRecipient,
				argFeeMethod,
				argSide,
				argSaleKind,
				argPaymentToken,
				argBasePrice,
				argExtraPrice,
				argListingTime,
				argExpirationTime,
				argSalt,
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

// func CmdUpdateOrder() *cobra.Command {
// 	cmd := &cobra.Command{
// 		Use:   "update-order [hash] [maker] [taker] [maker-relayer-fee] [taker-relayer-fee] [maker-protocol-fee] [taker-protocol-fee] [fee-recipient] [fee-method] [side] [sale-kind] [payment-token] [base-price] [extra-price] [listing-time] [expiration-time] [salt]",
// 		Short: "Update a order",
// 		Args:  cobra.ExactArgs(17),
// 		RunE: func(cmd *cobra.Command, args []string) (err error) {
// 			// Get indexes
// 			indexHash := args[0]
// 			indexMaker := args[1]
// 			indexTaker := args[2]

// 			// Get value arguments
// 			argMakerRelayerFee, err := cast.ToUint64E(args[3])
// 			if err != nil {
// 				return err
// 			}
// 			argTakerRelayerFee, err := cast.ToUint64E(args[4])
// 			if err != nil {
// 				return err
// 			}
// 			argMakerProtocolFee, err := cast.ToUint64E(args[5])
// 			if err != nil {
// 				return err
// 			}
// 			argTakerProtocolFee, err := cast.ToUint64E(args[6])
// 			if err != nil {
// 				return err
// 			}
// 			argFeeRecipient := args[7]
// 			argFeeMethod, err := cast.ToInt32E(args[8])
// 			if err != nil {
// 				return err
// 			}
// 			argSide, err := cast.ToInt32E(args[9])
// 			if err != nil {
// 				return err
// 			}
// 			argSaleKind, err := cast.ToInt32E(args[10])
// 			if err != nil {
// 				return err
// 			}
// 			argPaymentToken := args[11]
// 			argBasePrice, err := cast.ToUint64E(args[12])
// 			if err != nil {
// 				return err
// 			}
// 			argExtraPrice, err := cast.ToUint64E(args[13])
// 			if err != nil {
// 				return err
// 			}
// 			argListingTime, err := cast.ToUint64E(args[14])
// 			if err != nil {
// 				return err
// 			}
// 			argExpirationTime, err := cast.ToUint64E(args[15])
// 			if err != nil {
// 				return err
// 			}
// 			argSalt, err := cast.ToUint64E(args[16])
// 			if err != nil {
// 				return err
// 			}

// 			clientCtx, err := client.GetClientTxContext(cmd)
// 			if err != nil {
// 				return err
// 			}

// 			msg := types.NewMsgUpdateOrder(
// 				clientCtx.GetFromAddress().String(),
// 				indexHash,
// 				indexMaker,
// 				indexTaker,
// 				argMakerRelayerFee,
// 				argTakerRelayerFee,
// 				argMakerProtocolFee,
// 				argTakerProtocolFee,
// 				argFeeRecipient,
// 				argFeeMethod,
// 				argSide,
// 				argSaleKind,
// 				argPaymentToken,
// 				argBasePrice,
// 				argExtraPrice,
// 				argListingTime,
// 				argExpirationTime,
// 				argSalt,
// 			)
// 			if err := msg.ValidateBasic(); err != nil {
// 				return err
// 			}
// 			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
// 		},
// 	}

// 	flags.AddTxFlagsToCmd(cmd)

// 	return cmd
// }

func CmdCancelOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "Cancel-order [hash]",
		Short: "Cancel a order",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexHash := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCancelOrder(
				clientCtx.GetFromAddress().String(),
				indexHash,
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
