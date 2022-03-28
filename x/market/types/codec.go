package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateLootboxOption{}, "market/CreateLootboxOption", nil)
	cdc.RegisterConcrete(&MsgUpdateLootboxOption{}, "market/UpdateLootboxOption", nil)
	cdc.RegisterConcrete(&MsgDeleteLootboxOption{}, "market/DeleteLootboxOption", nil)
	cdc.RegisterConcrete(&MsgCreateOrder{}, "market/CreateOrder", nil)
	cdc.RegisterConcrete(&MsgUpdateOrder{}, "market/UpdateOrder", nil)
	cdc.RegisterConcrete(&MsgDeleteOrder{}, "market/DeleteOrder", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateLootboxOption{},
		&MsgUpdateLootboxOption{},
		&MsgDeleteLootboxOption{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateOrder{},
		&MsgUpdateOrder{},
		&MsgDeleteOrder{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
