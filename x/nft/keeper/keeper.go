package keeper

import (
	"fmt"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/deaswang/nft/x/nft/types"
)

type (
	Keeper struct {
		cdc        codec.BinaryCodec
		storeKey   sdk.StoreKey
		memKey     sdk.StoreKey
		paramstore paramtypes.Subspace

		bankKeeper types.BankKeeper
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey sdk.StoreKey,
	ps paramtypes.Subspace,

	bankKeeper types.BankKeeper,
) *Keeper {
	// set KeyTable if it has not already been set
	if !ps.HasKeyTable() {
		ps = ps.WithKeyTable(types.ParamKeyTable())
	}

	return &Keeper{
		cdc:        cdc,
		storeKey:   storeKey,
		memKey:     memKey,
		paramstore: ps,
		bankKeeper: bankKeeper,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) IsApprovedOrOwner(ctx sdk.Context, sender string, collectionId string, tokenId string) bool {
	nft, found := k.GetNft(ctx, collectionId, tokenId)
	if !found {
		return false
	}
	if nft.Owner == sender || nft.Approval == sender {
		return true
	}
	owner, found := k.GetOwner(ctx, sender, collectionId)
	if !found {
		return false
	}
	for _, approval := range owner.Approvals {
		if approval == sender {
			return true
		}
	}
	return false
}

func (k Keeper) IsApprovedForAll(ctx sdk.Context, creater string, approver string, collectionId string, tokenId string) bool {
	owner, found := k.GetOwner(ctx, creater, collectionId)
	if !found {
		return false
	}
	for _, approval := range owner.Approvals {
		if approval == approver {
			return true
		}
	}
	return false
}
