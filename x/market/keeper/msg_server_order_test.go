package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/x/market/keeper"
	"github.com/deaswang/nft/x/market/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestOrderMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.MarketKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateOrder{Creator: creator,
			Hash:  strconv.Itoa(i),
			Maker: strconv.Itoa(i),
			Taker: strconv.Itoa(i),
		}
		_, err := srv.CreateOrder(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetOrder(ctx,
			expected.Hash,
			expected.Maker,
			expected.Taker,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestOrderMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateOrder
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateOrder{Creator: creator,
				Hash:  strconv.Itoa(0),
				Maker: strconv.Itoa(0),
				Taker: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateOrder{Creator: "B",
				Hash:  strconv.Itoa(0),
				Maker: strconv.Itoa(0),
				Taker: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateOrder{Creator: creator,
				Hash:  strconv.Itoa(100000),
				Maker: strconv.Itoa(100000),
				Taker: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MarketKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateOrder{Creator: creator,
				Hash:  strconv.Itoa(0),
				Maker: strconv.Itoa(0),
				Taker: strconv.Itoa(0),
			}
			_, err := srv.CreateOrder(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateOrder(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetOrder(ctx,
					expected.Hash,
					expected.Maker,
					expected.Taker,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestOrderMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteOrder
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteOrder{Creator: creator,
				Hash:  strconv.Itoa(0),
				Maker: strconv.Itoa(0),
				Taker: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteOrder{Creator: "B",
				Hash:  strconv.Itoa(0),
				Maker: strconv.Itoa(0),
				Taker: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteOrder{Creator: creator,
				Hash:  strconv.Itoa(100000),
				Maker: strconv.Itoa(100000),
				Taker: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.MarketKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateOrder(wctx, &types.MsgCreateOrder{Creator: creator,
				Hash:  strconv.Itoa(0),
				Maker: strconv.Itoa(0),
				Taker: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteOrder(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetOrder(ctx,
					tc.request.Hash,
					tc.request.Maker,
					tc.request.Taker,
				)
				require.False(t, found)
			}
		})
	}
}
