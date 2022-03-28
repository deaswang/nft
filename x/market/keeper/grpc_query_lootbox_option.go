package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/deaswang/nft/x/market/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) LootboxOptionAll(c context.Context, req *types.QueryAllLootboxOptionRequest) (*types.QueryAllLootboxOptionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var lootboxOptions []types.LootboxOption
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	lootboxOptionStore := prefix.NewStore(store, types.KeyPrefix(types.LootboxOptionKeyPrefix))

	pageRes, err := query.Paginate(lootboxOptionStore, req.Pagination, func(key []byte, value []byte) error {
		var lootboxOption types.LootboxOption
		if err := k.cdc.Unmarshal(value, &lootboxOption); err != nil {
			return err
		}

		lootboxOptions = append(lootboxOptions, lootboxOption)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLootboxOptionResponse{LootboxOption: lootboxOptions, Pagination: pageRes}, nil
}

func (k Keeper) LootboxOption(c context.Context, req *types.QueryGetLootboxOptionRequest) (*types.QueryGetLootboxOptionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLootboxOption(
		ctx,
		req.Name,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetLootboxOptionResponse{LootboxOption: val}, nil
}
