package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/deaswang/nft/x/market/types"
)

func (k msgServer) CreateOrder(goCtx context.Context, msg *types.MsgCreateOrder) (*types.MsgCreateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetOrder(
		ctx,
		msg.Hash,
		msg.Maker,
		msg.Taker,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var order = types.Order{
		Creator:          msg.Creator,
		Hash:             msg.Hash,
		Maker:            msg.Maker,
		Taker:            msg.Taker,
		MakerRelayerFee:  msg.MakerRelayerFee,
		TakerRelayerFee:  msg.TakerRelayerFee,
		MakerProtocolFee: msg.MakerProtocolFee,
		TakerProtocolFee: msg.TakerProtocolFee,
		FeeRecipient:     msg.FeeRecipient,
		FeeMethod:        msg.FeeMethod,
		Side:             msg.Side,
		SaleKind:         msg.SaleKind,
		PaymentToken:     msg.PaymentToken,
		BasePrice:        msg.BasePrice,
		ExtraPrice:       msg.ExtraPrice,
		ListingTime:      msg.ListingTime,
		ExpirationTime:   msg.ExpirationTime,
		Salt:             msg.Salt,
	}

	k.SetOrder(
		ctx,
		order,
	)
	return &types.MsgCreateOrderResponse{}, nil
}

func (k msgServer) UpdateOrder(goCtx context.Context, msg *types.MsgUpdateOrder) (*types.MsgUpdateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetOrder(
		ctx,
		msg.Hash,
		msg.Maker,
		msg.Taker,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var order = types.Order{
		Creator:          msg.Creator,
		Hash:             msg.Hash,
		Maker:            msg.Maker,
		Taker:            msg.Taker,
		MakerRelayerFee:  msg.MakerRelayerFee,
		TakerRelayerFee:  msg.TakerRelayerFee,
		MakerProtocolFee: msg.MakerProtocolFee,
		TakerProtocolFee: msg.TakerProtocolFee,
		FeeRecipient:     msg.FeeRecipient,
		FeeMethod:        msg.FeeMethod,
		Side:             msg.Side,
		SaleKind:         msg.SaleKind,
		PaymentToken:     msg.PaymentToken,
		BasePrice:        msg.BasePrice,
		ExtraPrice:       msg.ExtraPrice,
		ListingTime:      msg.ListingTime,
		ExpirationTime:   msg.ExpirationTime,
		Salt:             msg.Salt,
	}

	k.SetOrder(ctx, order)

	return &types.MsgUpdateOrderResponse{}, nil
}

func (k msgServer) DeleteOrder(goCtx context.Context, msg *types.MsgDeleteOrder) (*types.MsgDeleteOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetOrder(
		ctx,
		msg.Hash,
		msg.Maker,
		msg.Taker,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveOrder(
		ctx,
		msg.Hash,
		msg.Maker,
		msg.Taker,
	)

	return &types.MsgDeleteOrderResponse{}, nil
}
