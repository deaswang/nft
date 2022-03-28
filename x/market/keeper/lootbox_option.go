package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/market/types"
)

// SetLootboxOption set a specific lootboxOption in the store from its index
func (k Keeper) SetLootboxOption(ctx sdk.Context, lootboxOption types.LootboxOption) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LootboxOptionKeyPrefix))
	b := k.cdc.MustMarshal(&lootboxOption)
	store.Set(types.LootboxOptionKey(
		lootboxOption.Name,
	), b)
}

// GetLootboxOption returns a lootboxOption from its index
func (k Keeper) GetLootboxOption(
	ctx sdk.Context,
	name string,

) (val types.LootboxOption, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LootboxOptionKeyPrefix))

	b := store.Get(types.LootboxOptionKey(
		name,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLootboxOption removes a lootboxOption from the store
func (k Keeper) RemoveLootboxOption(
	ctx sdk.Context,
	name string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LootboxOptionKeyPrefix))
	store.Delete(types.LootboxOptionKey(
		name,
	))
}

// GetAllLootboxOption returns all lootboxOption
func (k Keeper) GetAllLootboxOption(ctx sdk.Context) (list []types.LootboxOption) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LootboxOptionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.LootboxOption
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
