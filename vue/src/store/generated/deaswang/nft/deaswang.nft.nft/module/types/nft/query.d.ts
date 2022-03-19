import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../nft/params";
import { Collection } from "../nft/collection";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Nft } from "../nft/nft";
import { Owner } from "../nft/owner";
export declare const protobufPackage = "deaswang.nft.nft";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetCollectionRequest {
    index: string;
}
export interface QueryGetCollectionResponse {
    collection: Collection | undefined;
}
export interface QueryAllCollectionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCollectionResponse {
    collection: Collection[];
    pagination: PageResponse | undefined;
}
export interface QueryGetNftRequest {
    collectionId: string;
    tokenId: string;
}
export interface QueryGetNftResponse {
    nft: Nft | undefined;
}
export interface QueryAllNftRequest {
    collectionId: string;
    pagination: PageRequest | undefined;
}
export interface QueryAllNftResponse {
    nft: Nft[];
    pagination: PageResponse | undefined;
}
export interface QueryGetOwnerRequest {
    index: string;
    collectionId: string;
}
export interface QueryGetOwnerResponse {
    owner: Owner | undefined;
}
export interface QueryAllOwnerRequest {
    index: string;
    pagination: PageRequest | undefined;
}
export interface QueryAllOwnerResponse {
    owner: Owner[];
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
export declare const QueryGetCollectionRequest: {
    encode(message: QueryGetCollectionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionRequest;
    fromJSON(object: any): QueryGetCollectionRequest;
    toJSON(message: QueryGetCollectionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCollectionRequest>): QueryGetCollectionRequest;
};
export declare const QueryGetCollectionResponse: {
    encode(message: QueryGetCollectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCollectionResponse;
    fromJSON(object: any): QueryGetCollectionResponse;
    toJSON(message: QueryGetCollectionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCollectionResponse>): QueryGetCollectionResponse;
};
export declare const QueryAllCollectionRequest: {
    encode(message: QueryAllCollectionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionRequest;
    fromJSON(object: any): QueryAllCollectionRequest;
    toJSON(message: QueryAllCollectionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCollectionRequest>): QueryAllCollectionRequest;
};
export declare const QueryAllCollectionResponse: {
    encode(message: QueryAllCollectionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCollectionResponse;
    fromJSON(object: any): QueryAllCollectionResponse;
    toJSON(message: QueryAllCollectionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCollectionResponse>): QueryAllCollectionResponse;
};
export declare const QueryGetNftRequest: {
    encode(message: QueryGetNftRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNftRequest;
    fromJSON(object: any): QueryGetNftRequest;
    toJSON(message: QueryGetNftRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetNftRequest>): QueryGetNftRequest;
};
export declare const QueryGetNftResponse: {
    encode(message: QueryGetNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNftResponse;
    fromJSON(object: any): QueryGetNftResponse;
    toJSON(message: QueryGetNftResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetNftResponse>): QueryGetNftResponse;
};
export declare const QueryAllNftRequest: {
    encode(message: QueryAllNftRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllNftRequest;
    fromJSON(object: any): QueryAllNftRequest;
    toJSON(message: QueryAllNftRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllNftRequest>): QueryAllNftRequest;
};
export declare const QueryAllNftResponse: {
    encode(message: QueryAllNftResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllNftResponse;
    fromJSON(object: any): QueryAllNftResponse;
    toJSON(message: QueryAllNftResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllNftResponse>): QueryAllNftResponse;
};
export declare const QueryGetOwnerRequest: {
    encode(message: QueryGetOwnerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetOwnerRequest;
    fromJSON(object: any): QueryGetOwnerRequest;
    toJSON(message: QueryGetOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetOwnerRequest>): QueryGetOwnerRequest;
};
export declare const QueryGetOwnerResponse: {
    encode(message: QueryGetOwnerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetOwnerResponse;
    fromJSON(object: any): QueryGetOwnerResponse;
    toJSON(message: QueryGetOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetOwnerResponse>): QueryGetOwnerResponse;
};
export declare const QueryAllOwnerRequest: {
    encode(message: QueryAllOwnerRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllOwnerRequest;
    fromJSON(object: any): QueryAllOwnerRequest;
    toJSON(message: QueryAllOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllOwnerRequest>): QueryAllOwnerRequest;
};
export declare const QueryAllOwnerResponse: {
    encode(message: QueryAllOwnerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllOwnerResponse;
    fromJSON(object: any): QueryAllOwnerResponse;
    toJSON(message: QueryAllOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllOwnerResponse>): QueryAllOwnerResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Collection by index. */
    Collection(request: QueryGetCollectionRequest): Promise<QueryGetCollectionResponse>;
    /** Queries a list of Collection items. */
    CollectionAll(request: QueryAllCollectionRequest): Promise<QueryAllCollectionResponse>;
    /** Queries a Nft by index. */
    Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse>;
    /** Queries a list of Nft items. */
    NftAll(request: QueryAllNftRequest): Promise<QueryAllNftResponse>;
    /** Queries a Owner by index. */
    Owner(request: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse>;
    /** Queries a list of Owner items. */
    OwnerAll(request: QueryAllOwnerRequest): Promise<QueryAllOwnerResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Collection(request: QueryGetCollectionRequest): Promise<QueryGetCollectionResponse>;
    CollectionAll(request: QueryAllCollectionRequest): Promise<QueryAllCollectionResponse>;
    Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse>;
    NftAll(request: QueryAllNftRequest): Promise<QueryAllNftResponse>;
    Owner(request: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse>;
    OwnerAll(request: QueryAllOwnerRequest): Promise<QueryAllOwnerResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
