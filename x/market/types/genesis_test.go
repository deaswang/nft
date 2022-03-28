package types_test

import (
	"testing"

	"github.com/deaswang/nft/x/market/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				LootboxOptionList: []types.LootboxOption{
					{
						Name: "0",
					},
					{
						Name: "1",
					},
				},
				Seed: &types.Seed{
					Seed: 88,
				},
				OrderList: []types.Order{
					{
						Hash:  "0",
						Maker: "0",
						Taker: "0",
					},
					{
						Hash:  "1",
						Maker: "1",
						Taker: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated lootboxOption",
			genState: &types.GenesisState{
				LootboxOptionList: []types.LootboxOption{
					{
						Name: "0",
					},
					{
						Name: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated order",
			genState: &types.GenesisState{
				OrderList: []types.Order{
					{
						Hash:  "0",
						Maker: "0",
						Taker: "0",
					},
					{
						Hash:  "0",
						Maker: "0",
						Taker: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
