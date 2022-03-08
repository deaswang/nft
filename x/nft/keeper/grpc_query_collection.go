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

func (k Keeper) CollectionAll(c context.Context, req *types.QueryAllCollectionRequest) (*types.QueryAllCollectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var collections []types.Collection
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	collectionStore := prefix.NewStore(store, types.KeyPrefix(types.CollectionKeyPrefix))

	pageRes, err := query.Paginate(collectionStore, req.Pagination, func(key []byte, value []byte) error {
		var collection types.Collection
		if err := k.cdc.Unmarshal(value, &collection); err != nil {
			return err
		}

		collections = append(collections, collection)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCollectionResponse{Collection: collections, Pagination: pageRes}, nil
}

func (k Keeper) Collection(c context.Context, req *types.QueryGetCollectionRequest) (*types.QueryGetCollectionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCollection(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetCollectionResponse{Collection: val}, nil
}
