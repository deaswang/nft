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
	var tokenIds []string
	for i := uint64(0); i < msg.Count; i++ {
		tokenId := strconv.FormatInt(int64(collection.Balance+i), 10)
		tokenIds = append(tokenIds, tokenId)
		nft := nfttypes.Nft{
			CollectionId: msg.CollectionId,
			TokenId:      tokenId,
			Owner:        msg.Creator,
		}
		k.bankKeeper.SendCoins(ctx, sdk.AccAddress(msg.Creator), sdk.AccAddress(minterwl.Admin),
			sdk.NewCoins(minterwl.Price))
		k.nftKeeper.SetNft(ctx, nft)
	}

	return &types.MsgMinterwlMintResponse{TokenId: tokenIds}, nil
}
