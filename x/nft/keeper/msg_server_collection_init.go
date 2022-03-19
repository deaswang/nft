package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nft/types"
)

func (k msgServer) CollectionInit(goCtx context.Context, msg *types.MsgCollectionInit) (*types.MsgCollectionInitResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	collection := types.Collection{
		Index:    msg.Index,
		Contract: msg.Contract,
		Name:     msg.Name,
		Symbol:   msg.Symbol,
		Balance:  0,
		Data:     msg.Data,
	}
	k.SetCollection(ctx, collection)

	return &types.MsgCollectionInitResponse{}, nil
}
