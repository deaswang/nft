package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MinterwlKeyPrefix is the prefix to retrieve all Minterwl
	MinterwlKeyPrefix = "Minterwl/value/"
)

// MinterwlKey returns the store key to retrieve a Minterwl from the index fields
func MinterwlKey(
	collectionId string,
) []byte {
	var key []byte

	collectionIdBytes := []byte(collectionId)
	key = append(key, collectionIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
