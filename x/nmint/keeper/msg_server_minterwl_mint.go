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

func (k msgServer) MinterwlMint(goCtx context.Context, msg *types.MsgMinterwlMint) (*types.MsgMinterwlMintResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	minterwl, found := k.GetMinterwl(ctx, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found minter")
	}

	collection, found := k.nftKeeper.GetCollection(ctx, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found collection")
	}
	if collection.Balance+msg.Count > minterwl.Supply || msg.Count > minterwl.Wllimit {
		return nil, status.Error(codes.NotFound, "not enough supply")
	}
	_, found = k.nftKeeper.GetOwner(ctx, msg.Creator, msg.CollectionId)
	if found {
		return nil, status.Error(codes.AlreadyExists, "minted already")
	}
	var tokenIds []string
	i := uint64(0)
	for ; i < msg.Count; i++ {
		tokenId := strconv.FormatInt(int64(collection.Balance+i), 10)
		tokenIds = append(tokenIds, tokenId)
		nft := nfttypes.Nft{
			CollectionId: msg.CollectionId,
			TokenId:      tokenId,
			Owner:        msg.Creator,
		}
		err := k.bankKeeper.SendCoins(ctx, sdk.AccAddress(msg.Creator), sdk.AccAddress(minterwl.Admin),
			sdk.NewCoins(minterwl.Price))
		if err != nil {
			break
		}
		k.nftKeeper.SetNft(ctx, nft)
	}
	owner := nfttypes.Owner{
		Index:        msg.Creator,
		CollectionId: msg.CollectionId,
		Balance:      i,
		Approvals:    []string{},
	}
	k.nftKeeper.SetOwner(ctx, owner)

	return &types.MsgMinterwlMintResponse{TokenId: tokenIds}, nil
}
