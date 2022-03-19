package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nft/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) TransferFrom(goCtx context.Context, msg *types.MsgTransferFrom) (*types.MsgTransferFromResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.IsApprovedOrOwner(ctx, msg.Creator, msg.CollectionId, msg.TokenId) {
		return nil, status.Error(codes.Internal, "")
	}

	nft, found := k.GetNft(ctx, msg.CollectionId, msg.TokenId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}
	if nft.Owner != msg.From {
		return nil, status.Error(codes.InvalidArgument, "from is not owner")
	}
	nft.Owner = msg.To
	nft.Approval = ""
	ownerFrom, found := k.GetOwner(ctx, msg.From, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}
	ownerTo, found := k.GetOwner(ctx, msg.To, msg.CollectionId)
	if !found {
		ownerTo.Index = msg.To
		ownerTo.CollectionId = msg.CollectionId
		ownerTo.Balance = 0
		ownerTo.Approvals = []string{}
	}
	ownerFrom.Balance -= 1
	ownerTo.Balance += 1

	k.SetNft(ctx, nft)
	k.SetOwner(ctx, ownerFrom)
	k.SetOwner(ctx, ownerTo)
	return &types.MsgTransferFromResponse{}, nil
}
