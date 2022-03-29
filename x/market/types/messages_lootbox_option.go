package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateLootboxOption = "create_lootbox_option"
	TypeMsgUpdateLootboxOption = "update_lootbox_option"
	TypeMsgDeleteLootboxOption = "delete_lootbox_option"
)

var _ sdk.Msg = &MsgCreateLootboxOption{}

func NewMsgCreateLootboxOption(
	creator string,
	name string,
	maxQuantity uint64,
	probability []int32,
	guaranteed bool,
	guarantees []int32,

) *MsgCreateLootboxOption {
	return &MsgCreateLootboxOption{
		Creator:     creator,
		Name:        name,
		MaxQuantity: maxQuantity,
		Probability: probability,
		Guaranteed:  guaranteed,
		Guarantees:  guarantees,
	}
}

func (msg *MsgCreateLootboxOption) Route() string {
	return RouterKey
}

func (msg *MsgCreateLootboxOption) Type() string {
	return TypeMsgCreateLootboxOption
}

func (msg *MsgCreateLootboxOption) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateLootboxOption) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateLootboxOption) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateLootboxOption{}

func NewMsgUpdateLootboxOption(
	creator string,
	name string,
	maxQuantity uint64,
	probability []int32,
	guaranteed bool,
	guarantees []int32,

) *MsgUpdateLootboxOption {
	return &MsgUpdateLootboxOption{
		Creator:     creator,
		Name:        name,
		MaxQuantity: maxQuantity,
		Probability: probability,
		Guaranteed:  guaranteed,
		Guarantees:  guarantees,
	}
}

func (msg *MsgUpdateLootboxOption) Route() string {
	return RouterKey
}

func (msg *MsgUpdateLootboxOption) Type() string {
	return TypeMsgUpdateLootboxOption
}

func (msg *MsgUpdateLootboxOption) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateLootboxOption) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateLootboxOption) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

// var _ sdk.Msg = &MsgDeleteLootboxOption{}

// func NewMsgDeleteLootboxOption(
// 	creator string,
// 	name string,

// ) *MsgDeleteLootboxOption {
// 	return &MsgDeleteLootboxOption{
// 		Creator: creator,
// 		Name:    name,
// 	}
// }
// func (msg *MsgDeleteLootboxOption) Route() string {
// 	return RouterKey
// }

// func (msg *MsgDeleteLootboxOption) Type() string {
// 	return TypeMsgDeleteLootboxOption
// }

// func (msg *MsgDeleteLootboxOption) GetSigners() []sdk.AccAddress {
// 	creator, err := sdk.AccAddressFromBech32(msg.Creator)
// 	if err != nil {
// 		panic(err)
// 	}
// 	return []sdk.AccAddress{creator}
// }

// func (msg *MsgDeleteLootboxOption) GetSignBytes() []byte {
// 	bz := ModuleCdc.MustMarshalJSON(msg)
// 	return sdk.MustSortJSON(bz)
// }

// func (msg *MsgDeleteLootboxOption) ValidateBasic() error {
// 	_, err := sdk.AccAddressFromBech32(msg.Creator)
// 	if err != nil {
// 		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
// 	}
// 	return nil
// }
