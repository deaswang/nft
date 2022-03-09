package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// OwnerKeyPrefix is the prefix to retrieve all Owner
	OwnerKeyPrefix = "Owner/value/"
)

// OwnerKey returns the store key to retrieve a Owner from the index fields
func OwnerKey(
	index string,
	collectionId string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	collectionIdBytes := []byte(collectionId)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)
	key = append(key, collectionIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
