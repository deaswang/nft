package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMatch = "match"

var _ sdk.Msg = &MsgMatch{}

func NewMsgMatch(creator string, buy string, sell string) *MsgMatch {
	return &MsgMatch{
		Creator: creator,
		Buy:     buy,
		Sell:    sell,
	}
}

func (msg *MsgMatch) Route() string {
	return RouterKey
}

func (msg *MsgMatch) Type() string {
	return TypeMsgMatch
}

func (msg *MsgMatch) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMatch) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMatch) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
