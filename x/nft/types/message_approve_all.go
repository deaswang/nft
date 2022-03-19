package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgApproveAll = "approve_all"

var _ sdk.Msg = &MsgApproveAll{}

func NewMsgApproveAll(creator string, operator string, approved bool) *MsgApproveAll {
	return &MsgApproveAll{
		Creator:  creator,
		Operator: operator,
		Approved: approved,
	}
}

func (msg *MsgApproveAll) Route() string {
	return RouterKey
}

func (msg *MsgApproveAll) Type() string {
	return TypeMsgApproveAll
}

func (msg *MsgApproveAll) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgApproveAll) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgApproveAll) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
