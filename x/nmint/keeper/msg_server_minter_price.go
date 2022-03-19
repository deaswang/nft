package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nmint/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) MinterPrice(goCtx context.Context, msg *types.MsgMinterPrice) (*types.MsgMinterPriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	minter, found := k.GetMinter(ctx, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found minter")
	}
	if minter.Admin != msg.Creator {
		return nil, status.Error(codes.PermissionDenied, "permission denied")
	}
	minter.Price = msg.Price

	k.SetMinter(ctx, minter)

	return &types.MsgMinterPriceResponse{}, nil
}
