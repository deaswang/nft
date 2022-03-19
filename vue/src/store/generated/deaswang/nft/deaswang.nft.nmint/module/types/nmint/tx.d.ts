import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "deaswang.nft.nmint";
export interface MsgMint {
    creator: string;
    collectionId: string;
    count: number;
    to: string;
}
export interface MsgMintResponse {
    tokenId: string;
}
export interface MsgMinterMint {
    creator: string;
    collectionId: string;
    count: number;
    to: string;
}
export interface MsgMinterMintResponse {
    tokenId: string[];
}
export interface MsgMinterInit {
    creator: string;
    admin: string;
    collectionId: string;
    supply: number;
    price: Coin | undefined;
}
export interface MsgMinterInitResponse {
}
export interface MsgMinterPause {
    creator: string;
    collectionId: string;
    paused: boolean;
}
export interface MsgMinterPauseResponse {
}
export interface MsgMinterwlInit {
    creator: string;
    admin: string;
    collectionId: string;
    supply: number;
    whitelist: string[];
    wllimit: number;
    price: Coin | undefined;
}
export interface MsgMinterwlInitResponse {
}
export interface MsgMinterwlMint {
    creator: string;
    collectionId: string;
    count: number;
}
export interface MsgMinterwlMintResponse {
    tokenId: string[];
}
export interface MsgMinterwlWhitelist {
    creator: string;
    collectionId: string;
    whitelist: string[];
    wllimit: number;
}
export interface MsgMinterwlWhitelistResponse {
}
export interface MsgMinterwlPrice {
    creator: string;
    collectionId: string;
    price: Coin | undefined;
}
export interface MsgMinterwlPriceResponse {
}
export interface MsgMinterPrice {
    creator: string;
    collectionId: string;
    price: Coin | undefined;
}
export interface MsgMinterPriceResponse {
}
export declare const MsgMint: {
    encode(message: MsgMint, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(message: MsgMintResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(object: any): MsgMintResponse;
    toJSON(message: MsgMintResponse): unknown;
    fromPartial(object: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgMinterMint: {
    encode(message: MsgMinterMint, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterMint;
    fromJSON(object: any): MsgMinterMint;
    toJSON(message: MsgMinterMint): unknown;
    fromPartial(object: DeepPartial<MsgMinterMint>): MsgMinterMint;
};
export declare const MsgMinterMintResponse: {
    encode(message: MsgMinterMintResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterMintResponse;
    fromJSON(object: any): MsgMinterMintResponse;
    toJSON(message: MsgMinterMintResponse): unknown;
    fromPartial(object: DeepPartial<MsgMinterMintResponse>): MsgMinterMintResponse;
};
export declare const MsgMinterInit: {
    encode(message: MsgMinterInit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterInit;
    fromJSON(object: any): MsgMinterInit;
    toJSON(message: MsgMinterInit): unknown;
    fromPartial(object: DeepPartial<MsgMinterInit>): MsgMinterInit;
};
export declare const MsgMinterInitResponse: {
    encode(_: MsgMinterInitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterInitResponse;
    fromJSON(_: any): MsgMinterInitResponse;
    toJSON(_: MsgMinterInitResponse): unknown;
    fromPartial(_: DeepPartial<MsgMinterInitResponse>): MsgMinterInitResponse;
};
export declare const MsgMinterPause: {
    encode(message: MsgMinterPause, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterPause;
    fromJSON(object: any): MsgMinterPause;
    toJSON(message: MsgMinterPause): unknown;
    fromPartial(object: DeepPartial<MsgMinterPause>): MsgMinterPause;
};
export declare const MsgMinterPauseResponse: {
    encode(_: MsgMinterPauseResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterPauseResponse;
    fromJSON(_: any): MsgMinterPauseResponse;
    toJSON(_: MsgMinterPauseResponse): unknown;
    fromPartial(_: DeepPartial<MsgMinterPauseResponse>): MsgMinterPauseResponse;
};
export declare const MsgMinterwlInit: {
    encode(message: MsgMinterwlInit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterwlInit;
    fromJSON(object: any): MsgMinterwlInit;
    toJSON(message: MsgMinterwlInit): unknown;
    fromPartial(object: DeepPartial<MsgMinterwlInit>): MsgMinterwlInit;
};
export declare const MsgMinterwlInitResponse: {
    encode(_: MsgMinterwlInitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterwlInitResponse;
    fromJSON(_: any): MsgMinterwlInitResponse;
    toJSON(_: MsgMinterwlInitResponse): unknown;
    fromPartial(_: DeepPartial<MsgMinterwlInitResponse>): MsgMinterwlInitResponse;
};
export declare const MsgMinterwlMint: {
    encode(message: MsgMinterwlMint, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterwlMint;
    fromJSON(object: any): MsgMinterwlMint;
    toJSON(message: MsgMinterwlMint): unknown;
    fromPartial(object: DeepPartial<MsgMinterwlMint>): MsgMinterwlMint;
};
export declare const MsgMinterwlMintResponse: {
    encode(message: MsgMinterwlMintResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterwlMintResponse;
    fromJSON(object: any): MsgMinterwlMintResponse;
    toJSON(message: MsgMinterwlMintResponse): unknown;
    fromPartial(object: DeepPartial<MsgMinterwlMintResponse>): MsgMinterwlMintResponse;
};
export declare const MsgMinterwlWhitelist: {
    encode(message: MsgMinterwlWhitelist, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterwlWhitelist;
    fromJSON(object: any): MsgMinterwlWhitelist;
    toJSON(message: MsgMinterwlWhitelist): unknown;
    fromPartial(object: DeepPartial<MsgMinterwlWhitelist>): MsgMinterwlWhitelist;
};
export declare const MsgMinterwlWhitelistResponse: {
    encode(_: MsgMinterwlWhitelistResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterwlWhitelistResponse;
    fromJSON(_: any): MsgMinterwlWhitelistResponse;
    toJSON(_: MsgMinterwlWhitelistResponse): unknown;
    fromPartial(_: DeepPartial<MsgMinterwlWhitelistResponse>): MsgMinterwlWhitelistResponse;
};
export declare const MsgMinterwlPrice: {
    encode(message: MsgMinterwlPrice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterwlPrice;
    fromJSON(object: any): MsgMinterwlPrice;
    toJSON(message: MsgMinterwlPrice): unknown;
    fromPartial(object: DeepPartial<MsgMinterwlPrice>): MsgMinterwlPrice;
};
export declare const MsgMinterwlPriceResponse: {
    encode(_: MsgMinterwlPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterwlPriceResponse;
    fromJSON(_: any): MsgMinterwlPriceResponse;
    toJSON(_: MsgMinterwlPriceResponse): unknown;
    fromPartial(_: DeepPartial<MsgMinterwlPriceResponse>): MsgMinterwlPriceResponse;
};
export declare const MsgMinterPrice: {
    encode(message: MsgMinterPrice, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterPrice;
    fromJSON(object: any): MsgMinterPrice;
    toJSON(message: MsgMinterPrice): unknown;
    fromPartial(object: DeepPartial<MsgMinterPrice>): MsgMinterPrice;
};
export declare const MsgMinterPriceResponse: {
    encode(_: MsgMinterPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMinterPriceResponse;
    fromJSON(_: any): MsgMinterPriceResponse;
    toJSON(_: MsgMinterPriceResponse): unknown;
    fromPartial(_: DeepPartial<MsgMinterPriceResponse>): MsgMinterPriceResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * rpc CreateMinter(MsgCreateMinter) returns (MsgCreateMinterResponse);
     * rpc UpdateMinter(MsgUpdateMinter) returns (MsgUpdateMinterResponse);
     * rpc DeleteMinter(MsgDeleteMinter) returns (MsgDeleteMinterResponse);
     */
    Mint(request: MsgMint): Promise<MsgMintResponse>;
    MinterMint(request: MsgMinterMint): Promise<MsgMinterMintResponse>;
    MinterInit(request: MsgMinterInit): Promise<MsgMinterInitResponse>;
    MinterPause(request: MsgMinterPause): Promise<MsgMinterPauseResponse>;
    /**
     * rpc CreateMinterwl(MsgCreateMinterwl) returns (MsgCreateMinterwlResponse);
     * rpc UpdateMinterwl(MsgUpdateMinterwl) returns (MsgUpdateMinterwlResponse);
     * rpc DeleteMinterwl(MsgDeleteMinterwl) returns (MsgDeleteMinterwlResponse);
     */
    MinterwlInit(request: MsgMinterwlInit): Promise<MsgMinterwlInitResponse>;
    MinterwlMint(request: MsgMinterwlMint): Promise<MsgMinterwlMintResponse>;
    MinterwlWhitelist(request: MsgMinterwlWhitelist): Promise<MsgMinterwlWhitelistResponse>;
    MinterwlPrice(request: MsgMinterwlPrice): Promise<MsgMinterwlPriceResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    MinterPrice(request: MsgMinterPrice): Promise<MsgMinterPriceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Mint(request: MsgMint): Promise<MsgMintResponse>;
    MinterMint(request: MsgMinterMint): Promise<MsgMinterMintResponse>;
    MinterInit(request: MsgMinterInit): Promise<MsgMinterInitResponse>;
    MinterPause(request: MsgMinterPause): Promise<MsgMinterPauseResponse>;
    MinterwlInit(request: MsgMinterwlInit): Promise<MsgMinterwlInitResponse>;
    MinterwlMint(request: MsgMinterwlMint): Promise<MsgMinterwlMintResponse>;
    MinterwlWhitelist(request: MsgMinterwlWhitelist): Promise<MsgMinterwlWhitelistResponse>;
    MinterwlPrice(request: MsgMinterwlPrice): Promise<MsgMinterwlPriceResponse>;
    MinterPrice(request: MsgMinterPrice): Promise<MsgMinterPriceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
