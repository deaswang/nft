package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/deaswang/nft/x/market/types"
)

func (k msgServer) CreateOrder(goCtx context.Context, msg *types.MsgCreateOrder) (*types.MsgCreateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var order = types.Order{
		Creator:          msg.Creator,
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
		ListingBlock:     msg.ListingBlock,
		ExpirationBlock:  msg.ExpirationBlock,
		Salt:             msg.Salt,
	}

	order.Hash = k.HashOrder(ctx, order)

	// Check if the value already exists
	_, isFound := k.GetOrder(
		ctx,
		order.Hash,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	k.SetOrder(
		ctx,
		order,
	)
	return &types.MsgCreateOrderResponse{}, nil
}

func (k msgServer) CancelOrder(goCtx context.Context, msg *types.MsgCancelOrder) (*types.MsgCancelOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetOrder(
		ctx,
		msg.Hash,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	valFound.Status = 2

	k.SetOrder(ctx, valFound)

	return &types.MsgCancelOrderResponse{}, nil
}
