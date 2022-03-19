import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "deaswang.nft.nft";
export interface MsgTransferFrom {
    creator: string;
    from: string;
    to: string;
    collectionId: string;
    tokenId: string;
}
export interface MsgTransferFromResponse {
}
export interface MsgApprove {
    creator: string;
    approver: string;
    collectionId: string;
    tokenId: string;
}
export interface MsgApproveResponse {
}
export interface MsgApproveAll {
    creator: string;
    operator: string;
    approved: boolean;
    collectionId: string;
}
export interface MsgApproveAllResponse {
}
export interface MsgCollectionInit {
    creator: string;
    index: string;
    contract: string;
    name: string;
    symbol: string;
    data: string;
}
export interface MsgCollectionInitResponse {
}
export declare const MsgTransferFrom: {
    encode(message: MsgTransferFrom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferFrom;
    fromJSON(object: any): MsgTransferFrom;
    toJSON(message: MsgTransferFrom): unknown;
    fromPartial(object: DeepPartial<MsgTransferFrom>): MsgTransferFrom;
};
export declare const MsgTransferFromResponse: {
    encode(_: MsgTransferFromResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferFromResponse;
    fromJSON(_: any): MsgTransferFromResponse;
    toJSON(_: MsgTransferFromResponse): unknown;
    fromPartial(_: DeepPartial<MsgTransferFromResponse>): MsgTransferFromResponse;
};
export declare const MsgApprove: {
    encode(message: MsgApprove, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApprove;
    fromJSON(object: any): MsgApprove;
    toJSON(message: MsgApprove): unknown;
    fromPartial(object: DeepPartial<MsgApprove>): MsgApprove;
};
export declare const MsgApproveResponse: {
    encode(_: MsgApproveResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApproveResponse;
    fromJSON(_: any): MsgApproveResponse;
    toJSON(_: MsgApproveResponse): unknown;
    fromPartial(_: DeepPartial<MsgApproveResponse>): MsgApproveResponse;
};
export declare const MsgApproveAll: {
    encode(message: MsgApproveAll, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApproveAll;
    fromJSON(object: any): MsgApproveAll;
    toJSON(message: MsgApproveAll): unknown;
    fromPartial(object: DeepPartial<MsgApproveAll>): MsgApproveAll;
};
export declare const MsgApproveAllResponse: {
    encode(_: MsgApproveAllResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApproveAllResponse;
    fromJSON(_: any): MsgApproveAllResponse;
    toJSON(_: MsgApproveAllResponse): unknown;
    fromPartial(_: DeepPartial<MsgApproveAllResponse>): MsgApproveAllResponse;
};
export declare const MsgCollectionInit: {
    encode(message: MsgCollectionInit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCollectionInit;
    fromJSON(object: any): MsgCollectionInit;
    toJSON(message: MsgCollectionInit): unknown;
    fromPartial(object: DeepPartial<MsgCollectionInit>): MsgCollectionInit;
};
export declare const MsgCollectionInitResponse: {
    encode(_: MsgCollectionInitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCollectionInitResponse;
    fromJSON(_: any): MsgCollectionInitResponse;
    toJSON(_: MsgCollectionInitResponse): unknown;
    fromPartial(_: DeepPartial<MsgCollectionInitResponse>): MsgCollectionInitResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    TransferFrom(request: MsgTransferFrom): Promise<MsgTransferFromResponse>;
    Approve(request: MsgApprove): Promise<MsgApproveResponse>;
    ApproveAll(request: MsgApproveAll): Promise<MsgApproveAllResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CollectionInit(request: MsgCollectionInit): Promise<MsgCollectionInitResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    TransferFrom(request: MsgTransferFrom): Promise<MsgTransferFromResponse>;
    Approve(request: MsgApprove): Promise<MsgApproveResponse>;
    ApproveAll(request: MsgApproveAll): Promise<MsgApproveAllResponse>;
    CollectionInit(request: MsgCollectionInit): Promise<MsgCollectionInitResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
