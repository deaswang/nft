package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nft/types"
)

// SetCollection set a specific collection in the store from its index
func (k Keeper) SetCollection(ctx sdk.Context, collection types.Collection) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectionKeyPrefix))
	b := k.cdc.MustMarshal(&collection)
	store.Set(types.CollectionKey(
		collection.Index,
	), b)
}

// GetCollection returns a collection from its index
func (k Keeper) GetCollection(
	ctx sdk.Context,
	index string,

) (val types.Collection, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectionKeyPrefix))

	b := store.Get(types.CollectionKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCollection removes a collection from the store
func (k Keeper) RemoveCollection(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectionKeyPrefix))
	store.Delete(types.CollectionKey(
		index,
	))
}

// GetAllCollection returns all collection
func (k Keeper) GetAllCollection(ctx sdk.Context) (list []types.Collection) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Collection
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
