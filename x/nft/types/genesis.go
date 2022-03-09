package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		CollectionList: []Collection{},
		NftList:        []Nft{},
		OwnerList:      []Owner{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in collection
	collectionIndexMap := make(map[string]struct{})

	for _, elem := range gs.CollectionList {
		index := string(CollectionKey(elem.Index))
		if _, ok := collectionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for collection")
		}
		collectionIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in nft
	nftIndexMap := make(map[string]struct{})

	for _, elem := range gs.NftList {
		index := string(NftKey(elem.CollectionId, elem.TokenId))
		if _, ok := nftIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for nft")
		}
		nftIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in owner
	ownerIndexMap := make(map[string]struct{})

	for _, elem := range gs.OwnerList {
		index := string(OwnerKey(elem.Index, elem.CollectionId))
		if _, ok := ownerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for owner")
		}
		ownerIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
