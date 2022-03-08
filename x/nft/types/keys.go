package types

const (
	// ModuleName defines the module name
	ModuleName = "nft"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_nft"
)

var (
	CollectionPrefix = []byte{0x01}
	NFTPrefix        = []byte{0x02}
	OwnerPrefix      = []byte{0x03}

	Delimiter = []byte("/")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
