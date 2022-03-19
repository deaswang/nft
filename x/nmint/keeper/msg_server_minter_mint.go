package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	nfttypes "github.com/deaswang/nft/x/nft/types"
	"github.com/deaswang/nft/x/nmint/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) MinterMint(goCtx context.Context, msg *types.MsgMinterMint) (*types.MsgMinterMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	minter, found := k.GetMinter(ctx, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found minter")
	}
	if minter.Pause {
		return nil, status.Error(codes.NotFound, "minter paused")
	}
	collection, found := k.nftKeeper.GetCollection(ctx, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found collection")
	}
	if collection.Balance+msg.Count > minter.Supply {
		return nil, status.Error(codes.NotFound, "not enough supply")
	}

	var tokenIds []string
	i := uint64(0)
	for ; i < msg.Count; i++ {
		tokenId := strconv.FormatInt(int64(collection.Balance+i), 10)
		tokenIds = append(tokenIds, tokenId)
		nft := nfttypes.Nft{
			CollectionId: msg.CollectionId,
			TokenId:      tokenId,
			Owner:        msg.To,
		}
		err := k.bankKeeper.SendCoins(ctx, sdk.AccAddress(msg.Creator), sdk.AccAddress(minter.Admin),
			sdk.NewCoins(minter.Price))
		if err != nil {
			break
		}
		k.nftKeeper.SetNft(ctx, nft)
	}

	owner, found := k.nftKeeper.GetOwner(ctx, msg.Creator, msg.CollectionId)
	if found {
		owner.Balance += i
	} else {
		owner = nfttypes.Owner{
			Index:        msg.Creator,
			CollectionId: msg.CollectionId,
			Balance:      i,
			Approvals:    []string{},
		}
	}
	k.nftKeeper.SetOwner(ctx, owner)

	return &types.MsgMinterMintResponse{TokenId: tokenIds}, nil
}
