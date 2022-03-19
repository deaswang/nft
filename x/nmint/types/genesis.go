package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		MinterList:   []Minter{},
		MinterwlList: []Minterwl{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in minter
	minterIndexMap := make(map[string]struct{})

	for _, elem := range gs.MinterList {
		index := string(MinterKey(elem.CollectionId))
		if _, ok := minterIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for minter")
		}
		minterIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in minterwl
	minterwlIndexMap := make(map[string]struct{})

	for _, elem := range gs.MinterwlList {
		index := string(MinterwlKey(elem.CollectionId))
		if _, ok := minterwlIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for minterwl")
		}
		minterwlIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
