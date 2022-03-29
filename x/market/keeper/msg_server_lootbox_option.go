package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/deaswang/nft/x/market/types"
)

func (k msgServer) CreateLootboxOption(goCtx context.Context, msg *types.MsgCreateLootboxOption) (*types.MsgCreateLootboxOptionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetLootboxOption(
		ctx,
		msg.Name,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var lootboxOption = types.LootboxOption{
		Creator:     msg.Creator,
		Name:        msg.Name,
		MaxQuantity: msg.MaxQuantity,
		Probability: msg.Probability,
		Guaranteed:  msg.Guaranteed,
		Guarantees:  msg.Guarantees,
	}

	k.SetLootboxOption(
		ctx,
		lootboxOption,
	)
	return &types.MsgCreateLootboxOptionResponse{}, nil
}

func (k msgServer) UpdateLootboxOption(goCtx context.Context, msg *types.MsgUpdateLootboxOption) (*types.MsgUpdateLootboxOptionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLootboxOption(
		ctx,
		msg.Name,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var lootboxOption = types.LootboxOption{
		Creator:     msg.Creator,
		Name:        msg.Name,
		MaxQuantity: msg.MaxQuantity,
		Probability: msg.Probability,
		Guaranteed:  msg.Guaranteed,
		Guarantees:  msg.Guarantees,
	}

	k.SetLootboxOption(ctx, lootboxOption)

	return &types.MsgUpdateLootboxOptionResponse{}, nil
}
