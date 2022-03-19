package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nmint/types"
)

// SetMinter set a specific minter in the store from its index
func (k Keeper) SetMinter(ctx sdk.Context, minter types.Minter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MinterKeyPrefix))
	b := k.cdc.MustMarshal(&minter)
	store.Set(types.MinterKey(
		minter.CollectionId,
	), b)
}

// GetMinter returns a minter from its index
func (k Keeper) GetMinter(
	ctx sdk.Context,
	collectionId string,

) (val types.Minter, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MinterKeyPrefix))

	b := store.Get(types.MinterKey(
		collectionId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMinter removes a minter from the store
func (k Keeper) RemoveMinter(
	ctx sdk.Context,
	collectionId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MinterKeyPrefix))
	store.Delete(types.MinterKey(
		collectionId,
	))
}

// GetAllMinter returns all minter
func (k Keeper) GetAllMinter(ctx sdk.Context) (list []types.Minter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MinterKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Minter
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
