package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/deaswang/nft/x/market/types"
)

func (k msgServer) Match(goCtx context.Context, msg *types.MsgMatch) (*types.MsgMatchResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	buyOrder, found := k.GetOrder(ctx, msg.Buy)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "not found buy")
	}
	sellOrder, found := k.GetOrder(ctx, msg.Sell)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "not found sell")
	}

	if buyOrder.Status != 0 || sellOrder.Status != 0 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "status not process")
	}

	if !(buyOrder.Side == 1 && sellOrder.Side == 2 && buyOrder.FeeMethod == sellOrder.FeeMethod &&
		buyOrder.SaleKind == sellOrder.SaleKind && (sellOrder.Taker == "" || sellOrder.Taker == buyOrder.Maker) &&
		(buyOrder.Taker == "" || buyOrder.Taker == sellOrder.Maker) && buyOrder.CollectionId == sellOrder.CollectionId &&
		buyOrder.TokenId == sellOrder.TokenId && ((buyOrder.FeeRecipient == "" && sellOrder.FeeRecipient != "") ||
		(buyOrder.FeeRecipient != "" && sellOrder.FeeRecipient == ""))) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid args")
	}

	return &types.MsgMatchResponse{}, nil
}
