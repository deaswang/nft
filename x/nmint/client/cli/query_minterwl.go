package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/deaswang/nft/x/nmint/types"
	"github.com/spf13/cobra"
)

func CmdListMinterwl() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-minterwl",
		Short: "list all minterwl",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMinterwlRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MinterwlAll(context.Background(), params)
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

func CmdShowMinterwl() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-minterwl [collection-id]",
		Short: "shows a minterwl",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argCollectionId := args[0]

			params := &types.QueryGetMinterwlRequest{
				CollectionId: argCollectionId,
			}

			res, err := queryClient.Minterwl(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
