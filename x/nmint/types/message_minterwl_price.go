package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMinterwlPrice = "minterwl_price"

var _ sdk.Msg = &MsgMinterwlPrice{}

func NewMsgMinterwlPrice(creator string, collectionId string, price sdk.Coin) *MsgMinterwlPrice {
	return &MsgMinterwlPrice{
		Creator:      creator,
		CollectionId: collectionId,
		Price:        price,
	}
}

func (msg *MsgMinterwlPrice) Route() string {
	return RouterKey
}

func (msg *MsgMinterwlPrice) Type() string {
	return TypeMsgMinterwlPrice
}

func (msg *MsgMinterwlPrice) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMinterwlPrice) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMinterwlPrice) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
