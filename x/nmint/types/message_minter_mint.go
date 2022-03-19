package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMinterMint = "minter_mint"

var _ sdk.Msg = &MsgMinterMint{}

func NewMsgMinterMint(creator string, collectionId string, count uint64, to string) *MsgMinterMint {
	return &MsgMinterMint{
		Creator:      creator,
		CollectionId: collectionId,
		Count:        count,
		To:           to,
	}
}

func (msg *MsgMinterMint) Route() string {
	return RouterKey
}

func (msg *MsgMinterMint) Type() string {
	return TypeMsgMinterMint
}

func (msg *MsgMinterMint) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMinterMint) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMinterMint) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
