package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateOrder = "create_order"
	TypeMsgUpdateOrder = "update_order"
	TypeMsgDeleteOrder = "delete_order"
)

var _ sdk.Msg = &MsgCreateOrder{}

func NewMsgCreateOrder(
	creator string,
	hash string,
	maker string,
	taker string,
	makerRelayerFee uint64,
	takerRelayerFee uint64,
	makerProtocolFee uint64,
	takerProtocolFee uint64,
	feeRecipient string,
	feeMethod int32,
	side int32,
	saleKind int32,
	paymentToken string,
	basePrice uint64,
	extraPrice uint64,
	listingTime uint64,
	expirationTime uint64,
	salt uint64,

) *MsgCreateOrder {
	return &MsgCreateOrder{
		Creator:          creator,
		Hash:             hash,
		Maker:            maker,
		Taker:            taker,
		MakerRelayerFee:  makerRelayerFee,
		TakerRelayerFee:  takerRelayerFee,
		MakerProtocolFee: makerProtocolFee,
		TakerProtocolFee: takerProtocolFee,
		FeeRecipient:     feeRecipient,
		FeeMethod:        feeMethod,
		Side:             side,
		SaleKind:         saleKind,
		PaymentToken:     paymentToken,
		BasePrice:        basePrice,
		ExtraPrice:       extraPrice,
		ListingTime:      listingTime,
		ExpirationTime:   expirationTime,
		Salt:             salt,
	}
}

func (msg *MsgCreateOrder) Route() string {
	return RouterKey
}

func (msg *MsgCreateOrder) Type() string {
	return TypeMsgCreateOrder
}

func (msg *MsgCreateOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateOrder{}

func NewMsgUpdateOrder(
	creator string,
	hash string,
	maker string,
	taker string,
	makerRelayerFee uint64,
	takerRelayerFee uint64,
	makerProtocolFee uint64,
	takerProtocolFee uint64,
	feeRecipient string,
	feeMethod int32,
	side int32,
	saleKind int32,
	paymentToken string,
	basePrice uint64,
	extraPrice uint64,
	listingTime uint64,
	expirationTime uint64,
	salt uint64,

) *MsgUpdateOrder {
	return &MsgUpdateOrder{
		Creator:          creator,
		Hash:             hash,
		Maker:            maker,
		Taker:            taker,
		MakerRelayerFee:  makerRelayerFee,
		TakerRelayerFee:  takerRelayerFee,
		MakerProtocolFee: makerProtocolFee,
		TakerProtocolFee: takerProtocolFee,
		FeeRecipient:     feeRecipient,
		FeeMethod:        feeMethod,
		Side:             side,
		SaleKind:         saleKind,
		PaymentToken:     paymentToken,
		BasePrice:        basePrice,
		ExtraPrice:       extraPrice,
		ListingTime:      listingTime,
		ExpirationTime:   expirationTime,
		Salt:             salt,
	}
}

func (msg *MsgUpdateOrder) Route() string {
	return RouterKey
}

func (msg *MsgUpdateOrder) Type() string {
	return TypeMsgUpdateOrder
}

func (msg *MsgUpdateOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteOrder{}

func NewMsgDeleteOrder(
	creator string,
	hash string,
	maker string,
	taker string,

) *MsgDeleteOrder {
	return &MsgDeleteOrder{
		Creator: creator,
		Hash:    hash,
		Maker:   maker,
		Taker:   taker,
	}
}
func (msg *MsgDeleteOrder) Route() string {
	return RouterKey
}

func (msg *MsgDeleteOrder) Type() string {
	return TypeMsgDeleteOrder
}

func (msg *MsgDeleteOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
