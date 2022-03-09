package keeper

import (
	"github.com/deaswang/nft/x/nft/types"
)

var _ types.QueryServer = Keeper{}
