package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/deaswang/nft/x/market/types"
	"github.com/spf13/cobra"
)

func CmdListLootboxOption() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-lootbox-option",
		Short: "list all lootbox-option",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllLootboxOptionRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.LootboxOptionAll(context.Background(), params)
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

func CmdShowLootboxOption() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-lootbox-option [name]",
		Short: "shows a lootbox-option",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argName := args[0]

			params := &types.QueryGetLootboxOptionRequest{
				Name: argName,
			}

			res, err := queryClient.LootboxOption(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
