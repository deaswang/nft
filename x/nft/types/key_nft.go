package types

import (
	"encoding/binary"
)

var _ binary.ByteOrder

const (
	// NftKeyPrefix is the prefix to retrieve all Nft
	NftKeyPrefix = "Nft/value/"
)

// NftKey returns the store key to retrieve a Nft from the index fields
func NftKey(
	collectionId string,
	tokenId string,
) []byte {
	var key []byte

	collectionIdBytes := []byte(collectionId)
	tokenIdBytes := []byte(tokenId)
	key = append(key, collectionIdBytes...)
	key = append(key, []byte("/")...)
	key = append(key, tokenIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
