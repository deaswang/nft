package types_test

import (
	"testing"

	"github.com/deaswang/nft/x/nft/types"
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

				CollectionList: []types.Collection{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				NftList: []types.Nft{
					{
						CollectionId: "0",
					},
					{
						CollectionId: "1",
					},
				},
				OwnerList: []types.Owner{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated collection",
			genState: &types.GenesisState{
				CollectionList: []types.Collection{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated nft",
			genState: &types.GenesisState{
				NftList: []types.Nft{
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
			desc: "duplicated owner",
			genState: &types.GenesisState{
				OwnerList: []types.Owner{
					{
						Index: "0",
					},
					{
						Index: "0",
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
