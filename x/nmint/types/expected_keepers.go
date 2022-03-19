package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
	nfttypes "github.com/deaswang/nft/x/nft/types"
)

type NftKeeper interface {
	// Methods imported from nft should be defined here
	GetCollection(ctx sdk.Context, index string) (nfttypes.Collection, bool)
	SetNft(ctx sdk.Context, nft nfttypes.Nft)
	SetOwner(ctx sdk.Context, owner nfttypes.Owner)
	GetOwner(ctx sdk.Context, index string, collectionId string) (nfttypes.Owner, bool)
}

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	// Methods imported from account should be defined here
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	// Methods imported from bank should be defined here
	SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error
}
