package keeper

import (
	"github.com/deaswang/nft/x/nmint/types"
)

var _ types.QueryServer = Keeper{}
