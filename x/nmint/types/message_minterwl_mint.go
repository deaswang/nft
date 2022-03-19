package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMinterwlMint = "minterwl_mint"

var _ sdk.Msg = &MsgMinterwlMint{}

func NewMsgMinterwlMint(creator string, collectionId string, count uint64) *MsgMinterwlMint {
	return &MsgMinterwlMint{
		Creator:      creator,
		CollectionId: collectionId,
		Count:        count,
	}
}

func (msg *MsgMinterwlMint) Route() string {
	return RouterKey
}

func (msg *MsgMinterwlMint) Type() string {
	return TypeMsgMinterwlMint
}

func (msg *MsgMinterwlMint) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMinterwlMint) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMinterwlMint) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
