package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMinterwlInit = "minterwl_init"

var _ sdk.Msg = &MsgMinterwlInit{}

func NewMsgMinterwlInit(creator string, admin string, collectionId string, supply uint64, whitelist []string, wllimit uint64, price sdk.Coin) *MsgMinterwlInit {
	return &MsgMinterwlInit{
		Creator:      creator,
		Admin:        admin,
		CollectionId: collectionId,
		Supply:       supply,
		Whitelist:    whitelist,
		Wllimit:      wllimit,
		Price:        price,
	}
}

func (msg *MsgMinterwlInit) Route() string {
	return RouterKey
}

func (msg *MsgMinterwlInit) Type() string {
	return TypeMsgMinterwlInit
}

func (msg *MsgMinterwlInit) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMinterwlInit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMinterwlInit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
