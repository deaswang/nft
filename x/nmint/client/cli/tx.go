package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/deaswang/nft/x/nmint/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdMint())
	cmd.AddCommand(CmdMinterMint())
	cmd.AddCommand(CmdMinterInit())
	cmd.AddCommand(CmdMinterPause())
	cmd.AddCommand(CmdMinterwlInit())
	cmd.AddCommand(CmdMinterwlMint())
	cmd.AddCommand(CmdMinterwlWhitelist())
	cmd.AddCommand(CmdMinterwlPrice())
	cmd.AddCommand(CmdMinterPrice())
	// this line is used by starport scaffolding # 1

	return cmd
}
