package keeper

import (
	"github.com/deaswang/nft/x/market/types"
)

var _ types.QueryServer = Keeper{}
