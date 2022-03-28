package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nmint/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) MinterInit(goCtx context.Context, msg *types.MsgMinterInit) (*types.MsgMinterInitResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.nftKeeper.GetCollection(ctx, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found collection")
	}

	_, found = k.GetMinter(ctx, msg.CollectionId)
	if found {
		return nil, status.Error(codes.AlreadyExists, "minter exist")
	}

	minter := types.Minter{
		Admin:        msg.Admin,
		CollectionId: msg.CollectionId,
		Supply:       msg.Supply,
		Price:        msg.Price,
		Pause:        true,
		Creator:      msg.Creator,
	}

	k.SetMinter(ctx, minter)

	return &types.MsgMinterInitResponse{}, nil
}
