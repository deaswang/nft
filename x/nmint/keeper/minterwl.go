package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nmint/types"
)

// SetMinterwl set a specific minterwl in the store from its index
func (k Keeper) SetMinterwl(ctx sdk.Context, minterwl types.Minterwl) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MinterwlKeyPrefix))
	b := k.cdc.MustMarshal(&minterwl)
	store.Set(types.MinterwlKey(
		minterwl.CollectionId,
	), b)
}

// GetMinterwl returns a minterwl from its index
func (k Keeper) GetMinterwl(
	ctx sdk.Context,
	collectionId string,

) (val types.Minterwl, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MinterwlKeyPrefix))

	b := store.Get(types.MinterwlKey(
		collectionId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMinterwl removes a minterwl from the store
func (k Keeper) RemoveMinterwl(
	ctx sdk.Context,
	collectionId string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MinterwlKeyPrefix))
	store.Delete(types.MinterwlKey(
		collectionId,
	))
}

// GetAllMinterwl returns all minterwl
func (k Keeper) GetAllMinterwl(ctx sdk.Context) (list []types.Minterwl) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MinterwlKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Minterwl
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
