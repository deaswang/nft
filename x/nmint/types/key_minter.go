package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MinterKeyPrefix is the prefix to retrieve all Minter
	MinterKeyPrefix = "Minter/value/"
)

// MinterKey returns the store key to retrieve a Minter from the index fields
func MinterKey(
	collectionId string,
) []byte {
	var key []byte

	indexBytes := []byte(collectionId)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
