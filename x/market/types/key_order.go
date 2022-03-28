package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// OrderKeyPrefix is the prefix to retrieve all Order
	OrderKeyPrefix = "Order/value/"
)

// OrderKey returns the store key to retrieve a Order from the index fields
func OrderKey(
	hash string,
	maker string,
	taker string,
) []byte {
	var key []byte

	hashBytes := []byte(hash)
	key = append(key, hashBytes...)
	key = append(key, []byte("/")...)

	makerBytes := []byte(maker)
	key = append(key, makerBytes...)
	key = append(key, []byte("/")...)

	takerBytes := []byte(taker)
	key = append(key, takerBytes...)
	key = append(key, []byte("/")...)

	return key
}
