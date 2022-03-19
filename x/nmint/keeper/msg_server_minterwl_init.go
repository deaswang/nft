package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nmint/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) MinterwlInit(goCtx context.Context, msg *types.MsgMinterwlInit) (*types.MsgMinterwlInitResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.nftKeeper.GetCollection(ctx, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found collection")
	}
	_, found = k.GetMinterwl(ctx, msg.CollectionId)
	if found {
		return nil, status.Error(codes.AlreadyExists, "minter exist")
	}

	minterwl := types.Minterwl{
		Admin:        msg.Admin,
		CollectionId: msg.CollectionId,
		Supply:       msg.Supply,
		Whitelist:    msg.Whitelist,
		Wllimit:      msg.Wllimit,
		Price:        msg.Price,
		Creator:      msg.Creator,
	}

	k.SetMinterwl(ctx, minterwl)
	return &types.MsgMinterwlInitResponse{}, nil
}
