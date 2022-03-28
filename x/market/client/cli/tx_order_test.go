package cli_test

import (
	"fmt"
	"strconv"
	"testing"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/deaswang/nft/testutil/network"
	"github.com/deaswang/nft/x/market/client/cli"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestCreateOrder(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"111", "111", "111", "111", "xyz", "111", "111", "111", "xyz", "111", "111", "111", "111", "111"}
	for _, tc := range []struct {
		desc    string
		idHash  string
		idMaker string
		idTaker string

		args []string
		err  error
		code uint32
	}{
		{
			idHash:  strconv.Itoa(0),
			idMaker: strconv.Itoa(0),
			idTaker: strconv.Itoa(0),

			desc: "valid",
			args: []string{
				fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
				fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
				fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
				fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdk.NewInt(10))).String()),
			},
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idHash,
				tc.idMaker,
				tc.idTaker,
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreateOrder(), args)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				var resp sdk.TxResponse
				require.NoError(t, ctx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.Equal(t, tc.code, resp.Code)
			}
		})
	}
}

func TestUpdateOrder(t *testing.T) {
	net := network.New(t)
	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"111", "111", "111", "111", "xyz", "111", "111", "111", "xyz", "111", "111", "111", "111", "111"}
	common := []string{
		fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdk.NewInt(10))).String()),
	}
	args := []string{
		"0",
		"0",
		"0",
	}
	args = append(args, fields...)
	args = append(args, common...)
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreateOrder(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc    string
		idHash  string
		idMaker string
		idTaker string

		args []string
		code uint32
		err  error
	}{
		{
			desc:    "valid",
			idHash:  strconv.Itoa(0),
			idMaker: strconv.Itoa(0),
			idTaker: strconv.Itoa(0),

			args: common,
		},
		{
			desc:    "key not found",
			idHash:  strconv.Itoa(100000),
			idMaker: strconv.Itoa(100000),
			idTaker: strconv.Itoa(100000),

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idHash,
				tc.idMaker,
				tc.idTaker,
			}
			args = append(args, fields...)
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdUpdateOrder(), args)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				var resp sdk.TxResponse
				require.NoError(t, ctx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.Equal(t, tc.code, resp.Code)
			}
		})
	}
}

func TestDeleteOrder(t *testing.T) {
	net := network.New(t)

	val := net.Validators[0]
	ctx := val.ClientCtx

	fields := []string{"111", "111", "111", "111", "xyz", "111", "111", "111", "xyz", "111", "111", "111", "111", "111"}
	common := []string{
		fmt.Sprintf("--%s=%s", flags.FlagFrom, val.Address.String()),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastBlock),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin(net.Config.BondDenom, sdk.NewInt(10))).String()),
	}
	args := []string{
		"0",
		"0",
		"0",
	}
	args = append(args, fields...)
	args = append(args, common...)
	_, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdCreateOrder(), args)
	require.NoError(t, err)

	for _, tc := range []struct {
		desc    string
		idHash  string
		idMaker string
		idTaker string

		args []string
		code uint32
		err  error
	}{
		{
			desc:    "valid",
			idHash:  strconv.Itoa(0),
			idMaker: strconv.Itoa(0),
			idTaker: strconv.Itoa(0),

			args: common,
		},
		{
			desc:    "key not found",
			idHash:  strconv.Itoa(100000),
			idMaker: strconv.Itoa(100000),
			idTaker: strconv.Itoa(100000),

			args: common,
			code: sdkerrors.ErrKeyNotFound.ABCICode(),
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idHash,
				tc.idMaker,
				tc.idTaker,
			}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdDeleteOrder(), args)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				var resp sdk.TxResponse
				require.NoError(t, ctx.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.Equal(t, tc.code, resp.Code)
			}
		})
	}
}
