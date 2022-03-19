package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nft/types"
)

// SetNft set a specific nft in the store from its index
func (k Keeper) SetNft(ctx sdk.Context, nft types.Nft) {
	collection, found := k.GetCollection(ctx, nft.CollectionId)
	if !found {
		k.Logger(ctx).Error("not found collection")
		return
	}
	_, found = k.GetNft(ctx, nft.CollectionId, nft.TokenId)

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftKeyPrefix))
	b := k.cdc.MustMarshal(&nft)
	store.Set(types.NftKey(
		nft.CollectionId,
		nft.TokenId,
	), b)
	if !found {
		collection.Balance += 1
		k.SetCollection(ctx, collection)
	}
}

// GetNft returns a nft from its index
func (k Keeper) GetNft(
	ctx sdk.Context,
	collectionId string,
	tokenId string,

) (val types.Nft, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftKeyPrefix))

	b := store.Get(types.NftKey(
		collectionId,
		tokenId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// nft should never remove for balance as tokenid index
// RemoveNft removes a nft from the store
// func (k Keeper) RemoveNft(
// 	ctx sdk.Context,
// 	collectionId string,
// 	tokenId string,

// ) {
// 	collection, found := k.GetCollection(ctx, collectionId)
// 	if !found {
// 		k.Logger(ctx).Error("not found collection")
// 		return
// 	}
// 	_, found = k.GetNft(ctx, collectionId, tokenId)
// 	if !found {
// 		k.Logger(ctx).Error("not found nft")
// 		return
// 	}
// 	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftKeyPrefix))
// 	store.Delete(types.NftKey(
// 		collectionId,
// 		tokenId,
// 	))
// 	collection.Balance -= 1
// 	k.SetCollection(ctx, collection)
// }

// GetAllNft returns all nft
func (k Keeper) GetAllNft(ctx sdk.Context) (list []types.Nft) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NftKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Nft
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
