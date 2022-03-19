export interface NmintMinter {
    admin?: string;
    collectionId?: string;
    /** @format uint64 */
    supply?: string;
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    price?: V1Beta1Coin;
    pause?: boolean;
    creator?: string;
}
export interface NmintMinterwl {
    collectionId?: string;
    admin?: string;
    /** @format uint64 */
    supply?: string;
    whitelist?: string[];
    /** @format uint64 */
    wllimit?: string;
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    price?: V1Beta1Coin;
    creator?: string;
}
export interface NmintMsgMintResponse {
    tokenId?: string;
}
export declare type NmintMsgMinterInitResponse = object;
export interface NmintMsgMinterMintResponse {
    tokenId?: string[];
}
export declare type NmintMsgMinterPauseResponse = object;
export declare type NmintMsgMinterPriceResponse = object;
export declare type NmintMsgMinterwlInitResponse = object;
export interface NmintMsgMinterwlMintResponse {
    tokenId?: string[];
}
export declare type NmintMsgMinterwlPriceResponse = object;
export declare type NmintMsgMinterwlWhitelistResponse = object;
/**
 * Params defines the parameters for the module.
 */
export declare type NmintParams = object;
export interface NmintQueryAllMinterResponse {
    minter?: NmintMinter[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface NmintQueryAllMinterwlResponse {
    minterwl?: NmintMinterwl[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface NmintQueryGetMinterResponse {
    minter?: NmintMinter;
}
export interface NmintQueryGetMinterwlResponse {
    minterwl?: NmintMinterwl;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface NmintQueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: NmintParams;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
    denom?: string;
    amount?: string;
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /**
     * reverse is set to true if results are to be returned in the descending order.
     *
     * Since: cosmos-sdk 0.43
     */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title nmint/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryMinterAll
     * @summary Queries a list of Minter items.
     * @request GET:/deaswang/nft/nmint/minter
     */
    queryMinterAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<NmintQueryAllMinterResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMinter
     * @summary Queries a Minter by index.
     * @request GET:/deaswang/nft/nmint/minter/{index}
     */
    queryMinter: (index: string, params?: RequestParams) => Promise<HttpResponse<NmintQueryGetMinterResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMinterwlAll
     * @summary Queries a list of Minterwl items.
     * @request GET:/deaswang/nft/nmint/minterwl
     */
    queryMinterwlAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<NmintQueryAllMinterwlResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMinterwl
     * @summary Queries a Minterwl by index.
     * @request GET:/deaswang/nft/nmint/minterwl/{collectionId}
     */
    queryMinterwl: (collectionId: string, params?: RequestParams) => Promise<HttpResponse<NmintQueryGetMinterwlResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Parameters queries the parameters of the module.
     * @request GET:/deaswang/nft/nmint/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<NmintQueryParamsResponse, RpcStatus>>;
}
export {};
