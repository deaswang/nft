package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nmint/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) MinterPause(goCtx context.Context, msg *types.MsgMinterPause) (*types.MsgMinterPauseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	minter, found := k.GetMinter(ctx, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found minter")
	}
	if minter.Admin != msg.Creator {
		return nil, status.Error(codes.PermissionDenied, "permission denied")
	}
	minter.Pause = msg.Paused

	k.SetMinter(ctx, minter)
	return &types.MsgMinterPauseResponse{}, nil
}
