package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/deaswang/nft/x/nft/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NftAll(c context.Context, req *types.QueryAllNftRequest) (*types.QueryAllNftResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var nfts []types.Nft
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	nftStore := prefix.NewStore(store, types.KeyPrefix(types.NftKeyPrefix+req.CollectionId+"/"))

	pageRes, err := query.Paginate(nftStore, req.Pagination, func(key []byte, value []byte) error {
		var nft types.Nft
		if err := k.cdc.Unmarshal(value, &nft); err != nil {
			return err
		}

		nfts = append(nfts, nft)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllNftResponse{Nft: nfts, Pagination: pageRes}, nil
}

func (k Keeper) Nft(c context.Context, req *types.QueryGetNftRequest) (*types.QueryGetNftResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetNft(
		ctx,
		req.CollectionId,
		req.TokenId,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetNftResponse{Nft: val}, nil
}
