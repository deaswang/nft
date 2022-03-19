import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../nmint/params";
import { Minter } from "../nmint/minter";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Minterwl } from "../nmint/minterwl";
export declare const protobufPackage = "deaswang.nft.nmint";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetMinterRequest {
    index: string;
}
export interface QueryGetMinterResponse {
    minter: Minter | undefined;
}
export interface QueryAllMinterRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMinterResponse {
    minter: Minter[];
    pagination: PageResponse | undefined;
}
export interface QueryGetMinterwlRequest {
    collectionId: string;
}
export interface QueryGetMinterwlResponse {
    minterwl: Minterwl | undefined;
}
export interface QueryAllMinterwlRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMinterwlResponse {
    minterwl: Minterwl[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetMinterRequest: {
    encode(message: QueryGetMinterRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMinterRequest;
    fromJSON(object: any): QueryGetMinterRequest;
    toJSON(message: QueryGetMinterRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMinterRequest>): QueryGetMinterRequest;
};
export declare const QueryGetMinterResponse: {
    encode(message: QueryGetMinterResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMinterResponse;
    fromJSON(object: any): QueryGetMinterResponse;
    toJSON(message: QueryGetMinterResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMinterResponse>): QueryGetMinterResponse;
};
export declare const QueryAllMinterRequest: {
    encode(message: QueryAllMinterRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMinterRequest;
    fromJSON(object: any): QueryAllMinterRequest;
    toJSON(message: QueryAllMinterRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMinterRequest>): QueryAllMinterRequest;
};
export declare const QueryAllMinterResponse: {
    encode(message: QueryAllMinterResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMinterResponse;
    fromJSON(object: any): QueryAllMinterResponse;
    toJSON(message: QueryAllMinterResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMinterResponse>): QueryAllMinterResponse;
};
export declare const QueryGetMinterwlRequest: {
    encode(message: QueryGetMinterwlRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMinterwlRequest;
    fromJSON(object: any): QueryGetMinterwlRequest;
    toJSON(message: QueryGetMinterwlRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMinterwlRequest>): QueryGetMinterwlRequest;
};
export declare const QueryGetMinterwlResponse: {
    encode(message: QueryGetMinterwlResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMinterwlResponse;
    fromJSON(object: any): QueryGetMinterwlResponse;
    toJSON(message: QueryGetMinterwlResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMinterwlResponse>): QueryGetMinterwlResponse;
};
export declare const QueryAllMinterwlRequest: {
    encode(message: QueryAllMinterwlRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMinterwlRequest;
    fromJSON(object: any): QueryAllMinterwlRequest;
    toJSON(message: QueryAllMinterwlRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMinterwlRequest>): QueryAllMinterwlRequest;
};
export declare const QueryAllMinterwlResponse: {
    encode(message: QueryAllMinterwlResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMinterwlResponse;
    fromJSON(object: any): QueryAllMinterwlResponse;
    toJSON(message: QueryAllMinterwlResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMinterwlResponse>): QueryAllMinterwlResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Minter by index. */
    Minter(request: QueryGetMinterRequest): Promise<QueryGetMinterResponse>;
    /** Queries a list of Minter items. */
    MinterAll(request: QueryAllMinterRequest): Promise<QueryAllMinterResponse>;
    /** Queries a Minterwl by index. */
    Minterwl(request: QueryGetMinterwlRequest): Promise<QueryGetMinterwlResponse>;
    /** Queries a list of Minterwl items. */
    MinterwlAll(request: QueryAllMinterwlRequest): Promise<QueryAllMinterwlResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Minter(request: QueryGetMinterRequest): Promise<QueryGetMinterResponse>;
    MinterAll(request: QueryAllMinterRequest): Promise<QueryAllMinterResponse>;
    Minterwl(request: QueryGetMinterwlRequest): Promise<QueryGetMinterwlResponse>;
    MinterwlAll(request: QueryAllMinterwlRequest): Promise<QueryAllMinterwlResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
