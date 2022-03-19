package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMinterPrice = "minter_price"

var _ sdk.Msg = &MsgMinterPrice{}

func NewMsgMinterPrice(creator string, collectionId string, price sdk.Coin) *MsgMinterPrice {
	return &MsgMinterPrice{
		Creator:      creator,
		CollectionId: collectionId,
		Price:        price,
	}
}

func (msg *MsgMinterPrice) Route() string {
	return RouterKey
}

func (msg *MsgMinterPrice) Type() string {
	return TypeMsgMinterPrice
}

func (msg *MsgMinterPrice) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMinterPrice) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMinterPrice) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
