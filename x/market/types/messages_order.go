package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateOrder = "create_order"
	TypeMsgUpdateOrder = "update_order"
	TypeMsgCancelOrder = "Cancel_order"
)

var _ sdk.Msg = &MsgCreateOrder{}

func NewMsgCreateOrder(
	creator string,
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
	CollectionId string,
	TokenId string,
	basePrice sdk.Coin,
	extraPrice sdk.Coin,
	listingBlock uint64,
	expirationBlock uint64,
	salt uint64,

) *MsgCreateOrder {
	return &MsgCreateOrder{
		Creator:          creator,
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
		CollectionId:     CollectionId,
		TokenId:          TokenId,
		BasePrice:        basePrice,
		ExtraPrice:       extraPrice,
		ListingBlock:     listingBlock,
		ExpirationBlock:  expirationBlock,
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
	CollectionId string,
	TokenId string,
	basePrice sdk.Coin,
	extraPrice sdk.Coin,
	listingBlock uint64,
	expirationBlock uint64,
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
		CollectionId:     CollectionId,
		TokenId:          TokenId,
		BasePrice:        basePrice,
		ExtraPrice:       extraPrice,
		ListingBlock:     listingBlock,
		ExpirationBlock:  expirationBlock,
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

var _ sdk.Msg = &MsgCancelOrder{}

func NewMsgCancelOrder(
	creator string,
	hash string,

) *MsgCancelOrder {
	return &MsgCancelOrder{
		Creator: creator,
		Hash:    hash,
	}
}
func (msg *MsgCancelOrder) Route() string {
	return RouterKey
}

func (msg *MsgCancelOrder) Type() string {
	return TypeMsgCancelOrder
}

func (msg *MsgCancelOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCancelOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCancelOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
