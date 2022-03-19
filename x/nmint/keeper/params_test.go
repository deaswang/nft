package keeper_test

import (
	"testing"

	testkeeper "github.com/deaswang/nft/testutil/keeper"
	"github.com/deaswang/nft/x/nmint/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NmintKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
