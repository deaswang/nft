package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nmint/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) MinterwlPrice(goCtx context.Context, msg *types.MsgMinterwlPrice) (*types.MsgMinterwlPriceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	minterwl, found := k.GetMinterwl(ctx, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found minterwl")
	}
	if minterwl.Admin != msg.Creator {
		return nil, status.Error(codes.PermissionDenied, "permission denied")
	}
	minterwl.Price = msg.Price

	k.SetMinterwl(ctx, minterwl)

	return &types.MsgMinterwlPriceResponse{}, nil
}
