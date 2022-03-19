package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMinterPause = "minter_pause"

var _ sdk.Msg = &MsgMinterPause{}

func NewMsgMinterPause(creator string, collectionId string, paused bool) *MsgMinterPause {
	return &MsgMinterPause{
		Creator:      creator,
		CollectionId: collectionId,
		Paused:       paused,
	}
}

func (msg *MsgMinterPause) Route() string {
	return RouterKey
}

func (msg *MsgMinterPause) Type() string {
	return TypeMsgMinterPause
}

func (msg *MsgMinterPause) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMinterPause) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMinterPause) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
