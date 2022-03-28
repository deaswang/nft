package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/market/types"
)

// SetSeed set seed in the store
func (k Keeper) SetSeed(ctx sdk.Context, seed types.Seed) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SeedKey))
	b := k.cdc.MustMarshal(&seed)
	store.Set([]byte{0}, b)
}

// GetSeed returns seed
func (k Keeper) GetSeed(ctx sdk.Context) (val types.Seed, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SeedKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSeed removes seed from the store
func (k Keeper) RemoveSeed(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SeedKey))
	store.Delete([]byte{0})
}
