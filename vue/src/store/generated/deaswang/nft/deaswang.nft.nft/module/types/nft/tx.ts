/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "deaswang.nft.nft";

export interface MsgTransferFrom {
  creator: string;
  from: string;
  to: string;
  collectionId: string;
  tokenId: string;
}

export interface MsgTransferFromResponse {}

export interface MsgApprove {
  creator: string;
  approver: string;
  collectionId: string;
  tokenId: string;
}

export interface MsgApproveResponse {}

export interface MsgApproveAll {
  creator: string;
  operator: string;
  approved: boolean;
  collectionId: string;
}

export interface MsgApproveAllResponse {}

export interface MsgCollectionInit {
  creator: string;
  index: string;
  contract: string;
  name: string;
  symbol: string;
  data: string;
}

export interface MsgCollectionInitResponse {}

const baseMsgTransferFrom: object = {
  creator: "",
  from: "",
  to: "",
  collectionId: "",
  tokenId: "",
};

export const MsgTransferFrom = {
  encode(message: MsgTransferFrom, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.collectionId !== "") {
      writer.uint32(34).string(message.collectionId);
    }
    if (message.tokenId !== "") {
      writer.uint32(42).string(message.tokenId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferFrom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferFrom } as MsgTransferFrom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.collectionId = reader.string();
          break;
        case 5:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferFrom {
    const message = { ...baseMsgTransferFrom } as MsgTransferFrom;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
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

  toJSON(message: MsgTransferFrom): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferFrom>): MsgTransferFrom {
    const message = { ...baseMsgTransferFrom } as MsgTransferFrom;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
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

const baseMsgTransferFromResponse: object = {};

export const MsgTransferFromResponse = {
  encode(_: MsgTransferFromResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferFromResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTransferFromResponse,
    } as MsgTransferFromResponse;
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

  fromJSON(_: any): MsgTransferFromResponse {
    const message = {
      ...baseMsgTransferFromResponse,
    } as MsgTransferFromResponse;
    return message;
  },

  toJSON(_: MsgTransferFromResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgTransferFromResponse>
  ): MsgTransferFromResponse {
    const message = {
      ...baseMsgTransferFromResponse,
    } as MsgTransferFromResponse;
    return message;
  },
};

const baseMsgApprove: object = {
  creator: "",
  approver: "",
  collectionId: "",
  tokenId: "",
};

export const MsgApprove = {
  encode(message: MsgApprove, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.approver !== "") {
      writer.uint32(18).string(message.approver);
    }
    if (message.collectionId !== "") {
      writer.uint32(26).string(message.collectionId);
    }
    if (message.tokenId !== "") {
      writer.uint32(34).string(message.tokenId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApprove {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApprove } as MsgApprove;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.approver = reader.string();
          break;
        case 3:
          message.collectionId = reader.string();
          break;
        case 4:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApprove {
    const message = { ...baseMsgApprove } as MsgApprove;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.approver !== undefined && object.approver !== null) {
      message.approver = String(object.approver);
    } else {
      message.approver = "";
    }
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

  toJSON(message: MsgApprove): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.approver !== undefined && (obj.approver = message.approver);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgApprove>): MsgApprove {
    const message = { ...baseMsgApprove } as MsgApprove;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.approver !== undefined && object.approver !== null) {
      message.approver = object.approver;
    } else {
      message.approver = "";
    }
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

const baseMsgApproveResponse: object = {};

export const MsgApproveResponse = {
  encode(_: MsgApproveResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveResponse } as MsgApproveResponse;
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

  fromJSON(_: any): MsgApproveResponse {
    const message = { ...baseMsgApproveResponse } as MsgApproveResponse;
    return message;
  },

  toJSON(_: MsgApproveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgApproveResponse>): MsgApproveResponse {
    const message = { ...baseMsgApproveResponse } as MsgApproveResponse;
    return message;
  },
};

const baseMsgApproveAll: object = {
  creator: "",
  operator: "",
  approved: false,
  collectionId: "",
};

export const MsgApproveAll = {
  encode(message: MsgApproveAll, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    if (message.approved === true) {
      writer.uint32(24).bool(message.approved);
    }
    if (message.collectionId !== "") {
      writer.uint32(34).string(message.collectionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveAll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveAll } as MsgApproveAll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.operator = reader.string();
          break;
        case 3:
          message.approved = reader.bool();
          break;
        case 4:
          message.collectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveAll {
    const message = { ...baseMsgApproveAll } as MsgApproveAll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = String(object.operator);
    } else {
      message.operator = "";
    }
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = Boolean(object.approved);
    } else {
      message.approved = false;
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    return message;
  },

  toJSON(message: MsgApproveAll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.operator !== undefined && (obj.operator = message.operator);
    message.approved !== undefined && (obj.approved = message.approved);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgApproveAll>): MsgApproveAll {
    const message = { ...baseMsgApproveAll } as MsgApproveAll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    } else {
      message.operator = "";
    }
    if (object.approved !== undefined && object.approved !== null) {
      message.approved = object.approved;
    } else {
      message.approved = false;
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    return message;
  },
};

const baseMsgApproveAllResponse: object = {};

export const MsgApproveAllResponse = {
  encode(_: MsgApproveAllResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveAllResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveAllResponse } as MsgApproveAllResponse;
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

  fromJSON(_: any): MsgApproveAllResponse {
    const message = { ...baseMsgApproveAllResponse } as MsgApproveAllResponse;
    return message;
  },

  toJSON(_: MsgApproveAllResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgApproveAllResponse>): MsgApproveAllResponse {
    const message = { ...baseMsgApproveAllResponse } as MsgApproveAllResponse;
    return message;
  },
};

const baseMsgCollectionInit: object = {
  creator: "",
  index: "",
  contract: "",
  name: "",
  symbol: "",
  data: "",
};

export const MsgCollectionInit = {
  encode(message: MsgCollectionInit, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.data !== "") {
      writer.uint32(50).string(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCollectionInit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCollectionInit } as MsgCollectionInit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.contract = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCollectionInit {
    const message = { ...baseMsgCollectionInit } as MsgCollectionInit;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = String(object.contract);
    } else {
      message.contract = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    return message;
  },

  toJSON(message: MsgCollectionInit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.contract !== undefined && (obj.contract = message.contract);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCollectionInit>): MsgCollectionInit {
    const message = { ...baseMsgCollectionInit } as MsgCollectionInit;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    } else {
      message.contract = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    return message;
  },
};

const baseMsgCollectionInitResponse: object = {};

export const MsgCollectionInitResponse = {
  encode(
    _: MsgCollectionInitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCollectionInitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCollectionInitResponse,
    } as MsgCollectionInitResponse;
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

  fromJSON(_: any): MsgCollectionInitResponse {
    const message = {
      ...baseMsgCollectionInitResponse,
    } as MsgCollectionInitResponse;
    return message;
  },

  toJSON(_: MsgCollectionInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCollectionInitResponse>
  ): MsgCollectionInitResponse {
    const message = {
      ...baseMsgCollectionInitResponse,
    } as MsgCollectionInitResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  TransferFrom(request: MsgTransferFrom): Promise<MsgTransferFromResponse>;
  Approve(request: MsgApprove): Promise<MsgApproveResponse>;
  ApproveAll(request: MsgApproveAll): Promise<MsgApproveAllResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CollectionInit(
    request: MsgCollectionInit
  ): Promise<MsgCollectionInitResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  TransferFrom(request: MsgTransferFrom): Promise<MsgTransferFromResponse> {
    const data = MsgTransferFrom.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nft.Msg",
      "TransferFrom",
      data
    );
    return promise.then((data) =>
      MsgTransferFromResponse.decode(new Reader(data))
    );
  }

  Approve(request: MsgApprove): Promise<MsgApproveResponse> {
    const data = MsgApprove.encode(request).finish();
    const promise = this.rpc.request("deaswang.nft.nft.Msg", "Approve", data);
    return promise.then((data) => MsgApproveResponse.decode(new Reader(data)));
  }

  ApproveAll(request: MsgApproveAll): Promise<MsgApproveAllResponse> {
    const data = MsgApproveAll.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nft.Msg",
      "ApproveAll",
      data
    );
    return promise.then((data) =>
      MsgApproveAllResponse.decode(new Reader(data))
    );
  }

  CollectionInit(
    request: MsgCollectionInit
  ): Promise<MsgCollectionInitResponse> {
    const data = MsgCollectionInit.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nft.Msg",
      "CollectionInit",
      data
    );
    return promise.then((data) =>
      MsgCollectionInitResponse.decode(new Reader(data))
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
