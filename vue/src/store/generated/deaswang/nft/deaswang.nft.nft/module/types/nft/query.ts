/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../nft/params";
import { Collection } from "../nft/collection";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Nft } from "../nft/nft";
import { Owner } from "../nft/owner";

export const protobufPackage = "deaswang.nft.nft";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryGetCollectionRequest: object = { index: "" };

export const QueryGetCollectionRequest = {
  encode(
    message: QueryGetCollectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCollectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCollectionRequest,
    } as QueryGetCollectionRequest;
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

  fromJSON(object: any): QueryGetCollectionRequest {
    const message = {
      ...baseQueryGetCollectionRequest,
    } as QueryGetCollectionRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetCollectionRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCollectionRequest>
  ): QueryGetCollectionRequest {
    const message = {
      ...baseQueryGetCollectionRequest,
    } as QueryGetCollectionRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetCollectionResponse: object = {};

export const QueryGetCollectionResponse = {
  encode(
    message: QueryGetCollectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCollectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCollectionResponse,
    } as QueryGetCollectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCollectionResponse {
    const message = {
      ...baseQueryGetCollectionResponse,
    } as QueryGetCollectionResponse;
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromJSON(object.collection);
    } else {
      message.collection = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCollectionResponse>
  ): QueryGetCollectionResponse {
    const message = {
      ...baseQueryGetCollectionResponse,
    } as QueryGetCollectionResponse;
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection);
    } else {
      message.collection = undefined;
    }
    return message;
  },
};

const baseQueryAllCollectionRequest: object = {};

export const QueryAllCollectionRequest = {
  encode(
    message: QueryAllCollectionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCollectionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollectionRequest,
    } as QueryAllCollectionRequest;
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

  fromJSON(object: any): QueryAllCollectionRequest {
    const message = {
      ...baseQueryAllCollectionRequest,
    } as QueryAllCollectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCollectionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCollectionRequest>
  ): QueryAllCollectionRequest {
    const message = {
      ...baseQueryAllCollectionRequest,
    } as QueryAllCollectionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCollectionResponse: object = {};

export const QueryAllCollectionResponse = {
  encode(
    message: QueryAllCollectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.collection) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllCollectionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollectionResponse,
    } as QueryAllCollectionResponse;
    message.collection = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection.push(Collection.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllCollectionResponse {
    const message = {
      ...baseQueryAllCollectionResponse,
    } as QueryAllCollectionResponse;
    message.collection = [];
    if (object.collection !== undefined && object.collection !== null) {
      for (const e of object.collection) {
        message.collection.push(Collection.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCollectionResponse): unknown {
    const obj: any = {};
    if (message.collection) {
      obj.collection = message.collection.map((e) =>
        e ? Collection.toJSON(e) : undefined
      );
    } else {
      obj.collection = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCollectionResponse>
  ): QueryAllCollectionResponse {
    const message = {
      ...baseQueryAllCollectionResponse,
    } as QueryAllCollectionResponse;
    message.collection = [];
    if (object.collection !== undefined && object.collection !== null) {
      for (const e of object.collection) {
        message.collection.push(Collection.fromPartial(e));
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

const baseQueryGetNftRequest: object = { collectionId: "", tokenId: "" };

export const QueryGetNftRequest = {
  encode(
    message: QueryGetNftRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNftRequest } as QueryGetNftRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftRequest {
    const message = { ...baseQueryGetNftRequest } as QueryGetNftRequest;
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = String(object.tokenId);
    } else {
      message.tokenId = "";
    }
    return message;
  },

  toJSON(message: QueryGetNftRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetNftRequest>): QueryGetNftRequest {
    const message = { ...baseQueryGetNftRequest } as QueryGetNftRequest;
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    } else {
      message.tokenId = "";
    }
    return message;
  },
};

const baseQueryGetNftResponse: object = {};

export const QueryGetNftResponse = {
  encode(
    message: QueryGetNftResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nft !== undefined) {
      Nft.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNftResponse } as QueryGetNftResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = Nft.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNftResponse {
    const message = { ...baseQueryGetNftResponse } as QueryGetNftResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = Nft.fromJSON(object.nft);
    } else {
      message.nft = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNftResponse): unknown {
    const obj: any = {};
    message.nft !== undefined &&
      (obj.nft = message.nft ? Nft.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetNftResponse>): QueryGetNftResponse {
    const message = { ...baseQueryGetNftResponse } as QueryGetNftResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = Nft.fromPartial(object.nft);
    } else {
      message.nft = undefined;
    }
    return message;
  },
};

const baseQueryAllNftRequest: object = { collectionId: "" };

export const QueryAllNftRequest = {
  encode(
    message: QueryAllNftRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNftRequest } as QueryAllNftRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNftRequest {
    const message = { ...baseQueryAllNftRequest } as QueryAllNftRequest;
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNftRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllNftRequest>): QueryAllNftRequest {
    const message = { ...baseQueryAllNftRequest } as QueryAllNftRequest;
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllNftResponse: object = {};

export const QueryAllNftResponse = {
  encode(
    message: QueryAllNftResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.nft) {
      Nft.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNftResponse } as QueryAllNftResponse;
    message.nft = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft.push(Nft.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllNftResponse {
    const message = { ...baseQueryAllNftResponse } as QueryAllNftResponse;
    message.nft = [];
    if (object.nft !== undefined && object.nft !== null) {
      for (const e of object.nft) {
        message.nft.push(Nft.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNftResponse): unknown {
    const obj: any = {};
    if (message.nft) {
      obj.nft = message.nft.map((e) => (e ? Nft.toJSON(e) : undefined));
    } else {
      obj.nft = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllNftResponse>): QueryAllNftResponse {
    const message = { ...baseQueryAllNftResponse } as QueryAllNftResponse;
    message.nft = [];
    if (object.nft !== undefined && object.nft !== null) {
      for (const e of object.nft) {
        message.nft.push(Nft.fromPartial(e));
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

const baseQueryGetOwnerRequest: object = { index: "", collectionId: "" };

export const QueryGetOwnerRequest = {
  encode(
    message: QueryGetOwnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOwnerRequest } as QueryGetOwnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOwnerRequest {
    const message = { ...baseQueryGetOwnerRequest } as QueryGetOwnerRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    return message;
  },

  toJSON(message: QueryGetOwnerRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetOwnerRequest>): QueryGetOwnerRequest {
    const message = { ...baseQueryGetOwnerRequest } as QueryGetOwnerRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    return message;
  },
};

const baseQueryGetOwnerResponse: object = {};

export const QueryGetOwnerResponse = {
  encode(
    message: QueryGetOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetOwnerResponse } as QueryGetOwnerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = Owner.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOwnerResponse {
    const message = { ...baseQueryGetOwnerResponse } as QueryGetOwnerResponse;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromJSON(object.owner);
    } else {
      message.owner = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOwnerResponse): unknown {
    const obj: any = {};
    message.owner !== undefined &&
      (obj.owner = message.owner ? Owner.toJSON(message.owner) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOwnerResponse>
  ): QueryGetOwnerResponse {
    const message = { ...baseQueryGetOwnerResponse } as QueryGetOwnerResponse;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = Owner.fromPartial(object.owner);
    } else {
      message.owner = undefined;
    }
    return message;
  },
};

const baseQueryAllOwnerRequest: object = { index: "" };

export const QueryAllOwnerRequest = {
  encode(
    message: QueryAllOwnerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOwnerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOwnerRequest } as QueryAllOwnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllOwnerRequest {
    const message = { ...baseQueryAllOwnerRequest } as QueryAllOwnerRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOwnerRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllOwnerRequest>): QueryAllOwnerRequest {
    const message = { ...baseQueryAllOwnerRequest } as QueryAllOwnerRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllOwnerResponse: object = {};

export const QueryAllOwnerResponse = {
  encode(
    message: QueryAllOwnerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.owner) {
      Owner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllOwnerResponse } as QueryAllOwnerResponse;
    message.owner = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner.push(Owner.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOwnerResponse {
    const message = { ...baseQueryAllOwnerResponse } as QueryAllOwnerResponse;
    message.owner = [];
    if (object.owner !== undefined && object.owner !== null) {
      for (const e of object.owner) {
        message.owner.push(Owner.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllOwnerResponse): unknown {
    const obj: any = {};
    if (message.owner) {
      obj.owner = message.owner.map((e) => (e ? Owner.toJSON(e) : undefined));
    } else {
      obj.owner = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllOwnerResponse>
  ): QueryAllOwnerResponse {
    const message = { ...baseQueryAllOwnerResponse } as QueryAllOwnerResponse;
    message.owner = [];
    if (object.owner !== undefined && object.owner !== null) {
      for (const e of object.owner) {
        message.owner.push(Owner.fromPartial(e));
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
  /** Queries a Collection by index. */
  Collection(
    request: QueryGetCollectionRequest
  ): Promise<QueryGetCollectionResponse>;
  /** Queries a list of Collection items. */
  CollectionAll(
    request: QueryAllCollectionRequest
  ): Promise<QueryAllCollectionResponse>;
  /** Queries a Nft by index. */
  Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse>;
  /** Queries a list of Nft items. */
  NftAll(request: QueryAllNftRequest): Promise<QueryAllNftResponse>;
  /** Queries a Owner by index. */
  Owner(request: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse>;
  /** Queries a list of Owner items. */
  OwnerAll(request: QueryAllOwnerRequest): Promise<QueryAllOwnerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("deaswang.nft.nft.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Collection(
    request: QueryGetCollectionRequest
  ): Promise<QueryGetCollectionResponse> {
    const data = QueryGetCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nft.Query",
      "Collection",
      data
    );
    return promise.then((data) =>
      QueryGetCollectionResponse.decode(new Reader(data))
    );
  }

  CollectionAll(
    request: QueryAllCollectionRequest
  ): Promise<QueryAllCollectionResponse> {
    const data = QueryAllCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nft.Query",
      "CollectionAll",
      data
    );
    return promise.then((data) =>
      QueryAllCollectionResponse.decode(new Reader(data))
    );
  }

  Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse> {
    const data = QueryGetNftRequest.encode(request).finish();
    const promise = this.rpc.request("deaswang.nft.nft.Query", "Nft", data);
    return promise.then((data) => QueryGetNftResponse.decode(new Reader(data)));
  }

  NftAll(request: QueryAllNftRequest): Promise<QueryAllNftResponse> {
    const data = QueryAllNftRequest.encode(request).finish();
    const promise = this.rpc.request("deaswang.nft.nft.Query", "NftAll", data);
    return promise.then((data) => QueryAllNftResponse.decode(new Reader(data)));
  }

  Owner(request: QueryGetOwnerRequest): Promise<QueryGetOwnerResponse> {
    const data = QueryGetOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("deaswang.nft.nft.Query", "Owner", data);
    return promise.then((data) =>
      QueryGetOwnerResponse.decode(new Reader(data))
    );
  }

  OwnerAll(request: QueryAllOwnerRequest): Promise<QueryAllOwnerResponse> {
    const data = QueryAllOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nft.Query",
      "OwnerAll",
      data
    );
    return promise.then((data) =>
      QueryAllOwnerResponse.decode(new Reader(data))
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
