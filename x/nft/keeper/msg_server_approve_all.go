package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/deaswang/nft/x/nft/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k msgServer) ApproveAll(goCtx context.Context, msg *types.MsgApproveAll) (*types.MsgApproveAllResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if msg.Creator == msg.Operator {
		return nil, status.Error(codes.InvalidArgument, "approval to caller")
	}

	owner, found := k.GetOwner(ctx, msg.Creator, msg.CollectionId)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if msg.Approved {
		for _, approval := range owner.Approvals {
			if approval == msg.Operator {
				return nil, status.Error(codes.AlreadyExists, "exist")
			}
		}
		owner.Approvals = append(owner.Approvals, msg.Operator)
	} else {
		if len(owner.Approvals) == 0 {
			return nil, status.Error(codes.NotFound, "not found")
		}
		if len(owner.Approvals) == 1 {
			if owner.Approvals[0] == msg.Operator {
				owner.Approvals = []string{}
			} else {
				return nil, status.Error(codes.NotFound, "not found")
			}
		} else {
			for i, approval := range owner.Approvals {
				if approval == msg.Operator {
					owner.Approvals[i] = owner.Approvals[len(owner.Approvals)-1]
					owner.Approvals = owner.Approvals[:len(owner.Approvals)-1]
					break
				}
			}
		}
	}

	return &types.MsgApproveAllResponse{}, nil
}
