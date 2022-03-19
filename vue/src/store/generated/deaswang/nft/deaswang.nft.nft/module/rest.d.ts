export interface NftCollection {
    index?: string;
    contract?: string;
    name?: string;
    symbol?: string;
    /** @format uint64 */
    balance?: string;
    data?: string;
}
export declare type NftMsgApproveAllResponse = object;
export declare type NftMsgApproveResponse = object;
export declare type NftMsgCollectionInitResponse = object;
export declare type NftMsgTransferFromResponse = object;
export interface NftNft {
    collectionId?: string;
    tokenId?: string;
    uri?: string;
    uriHash?: string;
    owner?: string;
    approval?: string;
    data?: string;
}
export interface NftOwner {
    index?: string;
    collectionId?: string;
    /** @format uint64 */
    balance?: string;
    approvals?: string[];
    data?: string;
}
/**
 * Params defines the parameters for the module.
 */
export declare type NftParams = object;
export interface NftQueryAllCollectionResponse {
    collection?: NftCollection[];
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
export interface NftQueryAllNftResponse {
    nft?: NftNft[];
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
export interface NftQueryAllOwnerResponse {
    owner?: NftOwner[];
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
export interface NftQueryGetCollectionResponse {
    collection?: NftCollection;
}
export interface NftQueryGetNftResponse {
    nft?: NftNft;
}
export interface NftQueryGetOwnerResponse {
    owner?: NftOwner;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface NftQueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: NftParams;
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
 * @title nft/collection.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryCollectionAll
     * @summary Queries a list of Collection items.
     * @request GET:/deaswang/nft/nft/collection
     */
    queryCollectionAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<NftQueryAllCollectionResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryCollection
     * @summary Queries a Collection by index.
     * @request GET:/deaswang/nft/nft/collection/{index}
     */
    queryCollection: (index: string, params?: RequestParams) => Promise<HttpResponse<NftQueryGetCollectionResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryNftAll
     * @summary Queries a list of Nft items.
     * @request GET:/deaswang/nft/nft/nft/{collectionId}
     */
    queryNftAll: (collectionId: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<NftQueryAllNftResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryNft
     * @summary Queries a Nft by index.
     * @request GET:/deaswang/nft/nft/nft/{collectionId}/{tokenId}
     */
    queryNft: (collectionId: string, tokenId: string, params?: RequestParams) => Promise<HttpResponse<NftQueryGetNftResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryOwnerAll
     * @summary Queries a list of Owner items.
     * @request GET:/deaswang/nft/nft/owner/{index}
     */
    queryOwnerAll: (index: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<NftQueryAllOwnerResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryOwner
     * @summary Queries a Owner by index.
     * @request GET:/deaswang/nft/nft/owner/{index}/{collectionId}
     */
    queryOwner: (index: string, collectionId: string, params?: RequestParams) => Promise<HttpResponse<NftQueryGetOwnerResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Parameters queries the parameters of the module.
     * @request GET:/deaswang/nft/nft/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<NftQueryParamsResponse, RpcStatus>>;
}
export {};
