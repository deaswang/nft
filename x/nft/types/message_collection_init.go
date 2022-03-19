package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCollectionInit = "collection_init"

var _ sdk.Msg = &MsgCollectionInit{}

func NewMsgCollectionInit(creator string, index string, contract string, name string, symbol string, data string) *MsgCollectionInit {
	return &MsgCollectionInit{
		Creator:  creator,
		Index:    index,
		Contract: contract,
		Name:     name,
		Symbol:   symbol,
		Data:     data,
	}
}

func (msg *MsgCollectionInit) Route() string {
	return RouterKey
}

func (msg *MsgCollectionInit) Type() string {
	return TypeMsgCollectionInit
}

func (msg *MsgCollectionInit) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCollectionInit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCollectionInit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
