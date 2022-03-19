package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgTransferFrom = "transfer_from"

var _ sdk.Msg = &MsgTransferFrom{}

func NewMsgTransferFrom(creator string, from string, to string, tokenId string) *MsgTransferFrom {
	return &MsgTransferFrom{
		Creator: creator,
		From:    from,
		To:      to,
		TokenId: tokenId,
	}
}

func (msg *MsgTransferFrom) Route() string {
	return RouterKey
}

func (msg *MsgTransferFrom) Type() string {
	return TypeMsgTransferFrom
}

func (msg *MsgTransferFrom) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgTransferFrom) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTransferFrom) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
