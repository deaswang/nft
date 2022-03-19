package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nft/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) Approve(goCtx context.Context, msg *types.MsgApprove) (*types.MsgApproveResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	nft, found := k.GetNft(ctx, msg.CollectionId, msg.TokenId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}
	if nft.Owner == msg.Approver || msg.Creator == msg.Approver {
		return nil, status.Error(codes.InvalidArgument, "approval to current owner")
	}

	if !(nft.Owner == msg.Creator || k.IsApprovedForAll(ctx, nft.Owner, msg.Creator, msg.CollectionId, msg.TokenId)) {
		return nil, status.Error(codes.InvalidArgument, "approve caller is not owner nor approved for all")
	}
	nft.Approval = msg.Approver
	k.SetNft(ctx, nft)

	return &types.MsgApproveResponse{}, nil
}
