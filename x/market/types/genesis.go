package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		LootboxOptionList: []LootboxOption{},
		Seed:              nil,
		OrderList:         []Order{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in lootboxOption
	lootboxOptionIndexMap := make(map[string]struct{})

	for _, elem := range gs.LootboxOptionList {
		index := string(LootboxOptionKey(elem.Name))
		if _, ok := lootboxOptionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for lootboxOption")
		}
		lootboxOptionIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in order
	orderIndexMap := make(map[string]struct{})

	for _, elem := range gs.OrderList {
		index := string(OrderKey(elem.Hash))
		if _, ok := orderIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for order")
		}
		orderIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
