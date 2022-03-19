package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/deaswang/nft/x/nmint/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) MinterwlAll(c context.Context, req *types.QueryAllMinterwlRequest) (*types.QueryAllMinterwlResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var minterwls []types.Minterwl
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	minterwlStore := prefix.NewStore(store, types.KeyPrefix(types.MinterwlKeyPrefix))

	pageRes, err := query.Paginate(minterwlStore, req.Pagination, func(key []byte, value []byte) error {
		var minterwl types.Minterwl
		if err := k.cdc.Unmarshal(value, &minterwl); err != nil {
			return err
		}

		minterwls = append(minterwls, minterwl)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMinterwlResponse{Minterwl: minterwls, Pagination: pageRes}, nil
}

func (k Keeper) Minterwl(c context.Context, req *types.QueryGetMinterwlRequest) (*types.QueryGetMinterwlResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMinterwl(
		ctx,
		req.CollectionId,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetMinterwlResponse{Minterwl: val}, nil
}
