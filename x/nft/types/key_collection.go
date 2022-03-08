package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CollectionKeyPrefix is the prefix to retrieve all Collection
	CollectionKeyPrefix = "Collection/value/"
)

// CollectionKey returns the store key to retrieve a Collection from the index fields
func CollectionKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
