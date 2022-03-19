package types_test

import (
	"testing"

	"github.com/deaswang/nft/x/nmint/types"
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

				MinterList: []types.Minter{
					{
						CollectionId: "0",
					},
					{
						CollectionId: "1",
					},
				},
				MinterwlList: []types.Minterwl{
					{
						CollectionId: "0",
					},
					{
						CollectionId: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated minter",
			genState: &types.GenesisState{
				MinterList: []types.Minter{
					{
						CollectionId: "0",
					},
					{
						CollectionId: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated minterwl",
			genState: &types.GenesisState{
				MinterwlList: []types.Minterwl{
					{
						CollectionId: "0",
					},
					{
						CollectionId: "0",
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
