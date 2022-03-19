/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../nmint/params";
import { Minter } from "../nmint/minter";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Minterwl } from "../nmint/minterwl";

export const protobufPackage = "deaswang.nft.nmint";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetMinterRequest: object = { index: "" };

export const QueryGetMinterRequest = {
  encode(
    message: QueryGetMinterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMinterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMinterRequest } as QueryGetMinterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMinterRequest {
    const message = { ...baseQueryGetMinterRequest } as QueryGetMinterRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetMinterRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMinterRequest>
  ): QueryGetMinterRequest {
    const message = { ...baseQueryGetMinterRequest } as QueryGetMinterRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetMinterResponse: object = {};

export const QueryGetMinterResponse = {
  encode(
    message: QueryGetMinterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMinterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMinterResponse } as QueryGetMinterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMinterResponse {
    const message = { ...baseQueryGetMinterResponse } as QueryGetMinterResponse;
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = Minter.fromJSON(object.minter);
    } else {
      message.minter = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMinterResponse): unknown {
    const obj: any = {};
    message.minter !== undefined &&
      (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMinterResponse>
  ): QueryGetMinterResponse {
    const message = { ...baseQueryGetMinterResponse } as QueryGetMinterResponse;
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = Minter.fromPartial(object.minter);
    } else {
      message.minter = undefined;
    }
    return message;
  },
};

const baseQueryAllMinterRequest: object = {};

export const QueryAllMinterRequest = {
  encode(
    message: QueryAllMinterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMinterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMinterRequest } as QueryAllMinterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMinterRequest {
    const message = { ...baseQueryAllMinterRequest } as QueryAllMinterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMinterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMinterRequest>
  ): QueryAllMinterRequest {
    const message = { ...baseQueryAllMinterRequest } as QueryAllMinterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMinterResponse: object = {};

export const QueryAllMinterResponse = {
  encode(
    message: QueryAllMinterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.minter) {
      Minter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMinterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMinterResponse } as QueryAllMinterResponse;
    message.minter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter.push(Minter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMinterResponse {
    const message = { ...baseQueryAllMinterResponse } as QueryAllMinterResponse;
    message.minter = [];
    if (object.minter !== undefined && object.minter !== null) {
      for (const e of object.minter) {
        message.minter.push(Minter.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMinterResponse): unknown {
    const obj: any = {};
    if (message.minter) {
      obj.minter = message.minter.map((e) =>
        e ? Minter.toJSON(e) : undefined
      );
    } else {
      obj.minter = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMinterResponse>
  ): QueryAllMinterResponse {
    const message = { ...baseQueryAllMinterResponse } as QueryAllMinterResponse;
    message.minter = [];
    if (object.minter !== undefined && object.minter !== null) {
      for (const e of object.minter) {
        message.minter.push(Minter.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetMinterwlRequest: object = { collectionId: "" };

export const QueryGetMinterwlRequest = {
  encode(
    message: QueryGetMinterwlRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMinterwlRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMinterwlRequest,
    } as QueryGetMinterwlRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMinterwlRequest {
    const message = {
      ...baseQueryGetMinterwlRequest,
    } as QueryGetMinterwlRequest;
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    return message;
  },

  toJSON(message: QueryGetMinterwlRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMinterwlRequest>
  ): QueryGetMinterwlRequest {
    const message = {
      ...baseQueryGetMinterwlRequest,
    } as QueryGetMinterwlRequest;
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    return message;
  },
};

const baseQueryGetMinterwlResponse: object = {};

export const QueryGetMinterwlResponse = {
  encode(
    message: QueryGetMinterwlResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.minterwl !== undefined) {
      Minterwl.encode(message.minterwl, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMinterwlResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMinterwlResponse,
    } as QueryGetMinterwlResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minterwl = Minterwl.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMinterwlResponse {
    const message = {
      ...baseQueryGetMinterwlResponse,
    } as QueryGetMinterwlResponse;
    if (object.minterwl !== undefined && object.minterwl !== null) {
      message.minterwl = Minterwl.fromJSON(object.minterwl);
    } else {
      message.minterwl = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMinterwlResponse): unknown {
    const obj: any = {};
    message.minterwl !== undefined &&
      (obj.minterwl = message.minterwl
        ? Minterwl.toJSON(message.minterwl)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMinterwlResponse>
  ): QueryGetMinterwlResponse {
    const message = {
      ...baseQueryGetMinterwlResponse,
    } as QueryGetMinterwlResponse;
    if (object.minterwl !== undefined && object.minterwl !== null) {
      message.minterwl = Minterwl.fromPartial(object.minterwl);
    } else {
      message.minterwl = undefined;
    }
    return message;
  },
};

const baseQueryAllMinterwlRequest: object = {};

export const QueryAllMinterwlRequest = {
  encode(
    message: QueryAllMinterwlRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMinterwlRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMinterwlRequest,
    } as QueryAllMinterwlRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMinterwlRequest {
    const message = {
      ...baseQueryAllMinterwlRequest,
    } as QueryAllMinterwlRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMinterwlRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMinterwlRequest>
  ): QueryAllMinterwlRequest {
    const message = {
      ...baseQueryAllMinterwlRequest,
    } as QueryAllMinterwlRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMinterwlResponse: object = {};

export const QueryAllMinterwlResponse = {
  encode(
    message: QueryAllMinterwlResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.minterwl) {
      Minterwl.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMinterwlResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMinterwlResponse,
    } as QueryAllMinterwlResponse;
    message.minterwl = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minterwl.push(Minterwl.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMinterwlResponse {
    const message = {
      ...baseQueryAllMinterwlResponse,
    } as QueryAllMinterwlResponse;
    message.minterwl = [];
    if (object.minterwl !== undefined && object.minterwl !== null) {
      for (const e of object.minterwl) {
        message.minterwl.push(Minterwl.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMinterwlResponse): unknown {
    const obj: any = {};
    if (message.minterwl) {
      obj.minterwl = message.minterwl.map((e) =>
        e ? Minterwl.toJSON(e) : undefined
      );
    } else {
      obj.minterwl = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMinterwlResponse>
  ): QueryAllMinterwlResponse {
    const message = {
      ...baseQueryAllMinterwlResponse,
    } as QueryAllMinterwlResponse;
    message.minterwl = [];
    if (object.minterwl !== undefined && object.minterwl !== null) {
      for (const e of object.minterwl) {
        message.minterwl.push(Minterwl.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
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
  MinterwlAll(
    request: QueryAllMinterwlRequest
  ): Promise<QueryAllMinterwlResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Minter(request: QueryGetMinterRequest): Promise<QueryGetMinterResponse> {
    const data = QueryGetMinterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Query",
      "Minter",
      data
    );
    return promise.then((data) =>
      QueryGetMinterResponse.decode(new Reader(data))
    );
  }

  MinterAll(request: QueryAllMinterRequest): Promise<QueryAllMinterResponse> {
    const data = QueryAllMinterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Query",
      "MinterAll",
      data
    );
    return promise.then((data) =>
      QueryAllMinterResponse.decode(new Reader(data))
    );
  }

  Minterwl(
    request: QueryGetMinterwlRequest
  ): Promise<QueryGetMinterwlResponse> {
    const data = QueryGetMinterwlRequest.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Query",
      "Minterwl",
      data
    );
    return promise.then((data) =>
      QueryGetMinterwlResponse.decode(new Reader(data))
    );
  }

  MinterwlAll(
    request: QueryAllMinterwlRequest
  ): Promise<QueryAllMinterwlResponse> {
    const data = QueryAllMinterwlRequest.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Query",
      "MinterwlAll",
      data
    );
    return promise.then((data) =>
      QueryAllMinterwlResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
