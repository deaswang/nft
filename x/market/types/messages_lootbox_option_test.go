package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/deaswang/nft/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateLootboxOption_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateLootboxOption
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateLootboxOption{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateLootboxOption{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateLootboxOption_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateLootboxOption
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateLootboxOption{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateLootboxOption{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

// func TestMsgDeleteLootboxOption_ValidateBasic(t *testing.T) {
// 	tests := []struct {
// 		name string
// 		msg  MsgDeleteLootboxOption
// 		err  error
// 	}{
// 		{
// 			name: "invalid address",
// 			msg: MsgDeleteLootboxOption{
// 				Creator: "invalid_address",
// 			},
// 			err: sdkerrors.ErrInvalidAddress,
// 		}, {
// 			name: "valid address",
// 			msg: MsgDeleteLootboxOption{
// 				Creator: sample.AccAddress(),
// 			},
// 		},
// 	}
// 	for _, tt := range tests {
// 		t.Run(tt.name, func(t *testing.T) {
// 			err := tt.msg.ValidateBasic()
// 			if tt.err != nil {
// 				require.ErrorIs(t, err, tt.err)
// 				return
// 			}
// 			require.NoError(t, err)
// 		})
// 	}
// }
