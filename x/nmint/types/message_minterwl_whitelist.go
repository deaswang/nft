package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMinterwlWhitelist = "minterwl_whitelist"

var _ sdk.Msg = &MsgMinterwlWhitelist{}

func NewMsgMinterwlWhitelist(creator string, collectionId string, whitelist []string, wllimit uint64) *MsgMinterwlWhitelist {
	return &MsgMinterwlWhitelist{
		Creator:      creator,
		CollectionId: collectionId,
		Whitelist:    whitelist,
		Wllimit:      wllimit,
	}
}

func (msg *MsgMinterwlWhitelist) Route() string {
	return RouterKey
}

func (msg *MsgMinterwlWhitelist) Type() string {
	return TypeMsgMinterwlWhitelist
}

func (msg *MsgMinterwlWhitelist) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMinterwlWhitelist) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMinterwlWhitelist) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
