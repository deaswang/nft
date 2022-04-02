package keeper

import (
	"encoding/binary"
	"fmt"

	"github.com/ethereum/go-ethereum/crypto"
	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/deaswang/nft/x/market/types"
)

type (
	Keeper struct {
		cdc        codec.BinaryCodec
		storeKey   sdk.StoreKey
		memKey     sdk.StoreKey
		paramstore paramtypes.Subspace

		bankKeeper types.BankKeeper
		nftKeeper  types.NftKeeper
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey sdk.StoreKey,
	ps paramtypes.Subspace,

	bankKeeper types.BankKeeper, nftKeeper types.NftKeeper,
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
		bankKeeper: bankKeeper, nftKeeper: nftKeeper,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) HashOrder(ctx sdk.Context, order types.Order) string {
	orderBytes := []byte{}

	orderBytes = append(orderBytes, []byte(order.Maker)...)
	orderBytes = append(orderBytes, []byte(order.Taker)...)
	orderBytes = append(orderBytes, intToBytes(order.MakerRelayerFee)...)
	orderBytes = append(orderBytes, intToBytes(order.TakerRelayerFee)...)
	orderBytes = append(orderBytes, intToBytes(order.MakerProtocolFee)...)
	orderBytes = append(orderBytes, intToBytes(order.TakerProtocolFee)...)
	orderBytes = append(orderBytes, []byte(order.FeeRecipient)...)
	orderBytes = append(orderBytes, intToBytes(uint64(order.FeeMethod))...)
	orderBytes = append(orderBytes, intToBytes(uint64(order.Side))...)
	orderBytes = append(orderBytes, intToBytes(uint64(order.SaleKind))...)
	orderBytes = append(orderBytes, []byte(order.CollectionId)...)
	orderBytes = append(orderBytes, []byte(order.TokenId)...)
	orderBytes = append(orderBytes, order.BasePrice.Amount.BigInt().Bytes()...)
	orderBytes = append(orderBytes, order.ExtraPrice.Amount.BigInt().Bytes()...)
	orderBytes = append(orderBytes, intToBytes(order.ListingBlock)...)
	orderBytes = append(orderBytes, intToBytes(order.ExpirationBlock)...)
	orderBytes = append(orderBytes, intToBytes(order.Salt)...)

	h := crypto.Keccak256Hash(orderBytes)
	return h.String()
}

func intToBytes(i uint64) []byte {
	b := make([]byte, 8)
	binary.LittleEndian.PutUint64(b, i)
	return b
}
