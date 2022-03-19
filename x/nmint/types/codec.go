package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgMint{}, "nmint/Mint", nil)
	cdc.RegisterConcrete(&MsgMinterMint{}, "nmint/MinterMint", nil)
	cdc.RegisterConcrete(&MsgMinterInit{}, "nmint/MinterInit", nil)
	cdc.RegisterConcrete(&MsgMinterPause{}, "nmint/MinterPause", nil)
	cdc.RegisterConcrete(&MsgMinterwlInit{}, "nmint/MinterwlInit", nil)
	cdc.RegisterConcrete(&MsgMinterwlMint{}, "nmint/MinterwlMint", nil)
	cdc.RegisterConcrete(&MsgMinterwlWhitelist{}, "nmint/MinterwlWhitelist", nil)
	cdc.RegisterConcrete(&MsgMinterwlPrice{}, "nmint/MinterwlPrice", nil)
	cdc.RegisterConcrete(&MsgMinterPrice{}, "nmint/MinterPrice", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMint{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMinterMint{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMinterInit{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMinterPause{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMinterwlInit{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMinterwlMint{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMinterwlWhitelist{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMinterwlPrice{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMinterPrice{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
