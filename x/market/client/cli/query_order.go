package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/deaswang/nft/x/market/types"
	"github.com/spf13/cobra"
)

func CmdListOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-order",
		Short: "list all order",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllOrderRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.OrderAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-order [hash] [maker] [taker]",
		Short: "shows a order",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argHash := args[0]
			argMaker := args[1]
			argTaker := args[2]

			params := &types.QueryGetOrderRequest{
				Hash:  argHash,
				Maker: argMaker,
				Taker: argTaker,
			}

			res, err := queryClient.Order(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
