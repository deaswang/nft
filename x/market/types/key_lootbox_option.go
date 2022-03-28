package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// LootboxOptionKeyPrefix is the prefix to retrieve all LootboxOption
	LootboxOptionKeyPrefix = "LootboxOption/value/"
)

// LootboxOptionKey returns the store key to retrieve a LootboxOption from the index fields
func LootboxOptionKey(
	name string,
) []byte {
	var key []byte

	nameBytes := []byte(name)
	key = append(key, nameBytes...)
	key = append(key, []byte("/")...)

	return key
}
