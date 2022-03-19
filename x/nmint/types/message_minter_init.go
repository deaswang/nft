package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMinterInit = "minter_init"

var _ sdk.Msg = &MsgMinterInit{}

func NewMsgMinterInit(creator string, admin string, collectionId string, supply uint64, price sdk.Coin) *MsgMinterInit {
	return &MsgMinterInit{
		Creator:      creator,
		Admin:        admin,
		CollectionId: collectionId,
		Supply:       supply,
		Price:        price,
	}
}

func (msg *MsgMinterInit) Route() string {
	return RouterKey
}

func (msg *MsgMinterInit) Type() string {
	return TypeMsgMinterInit
}

func (msg *MsgMinterInit) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMinterInit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMinterInit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
