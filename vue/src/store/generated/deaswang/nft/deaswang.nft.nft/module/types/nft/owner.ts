/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "deaswang.nft.nft";

/** Key: <index>/<collectionId>/ */
export interface Owner {
  index: string;
  collectionId: string;
  balance: number;
  approvals: string[];
  data: string;
}

const baseOwner: object = {
  index: "",
  collectionId: "",
  balance: 0,
  approvals: "",
  data: "",
};

export const Owner = {
  encode(message: Owner, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.balance !== 0) {
      writer.uint32(24).uint64(message.balance);
    }
    for (const v of message.approvals) {
      writer.uint32(34).string(v!);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOwner } as Owner;
    message.approvals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.balance = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.approvals.push(reader.string());
          break;
        case 5:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Owner {
    const message = { ...baseOwner } as Owner;
    message.approvals = [];
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
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Number(object.balance);
    } else {
      message.balance = 0;
    }
    if (object.approvals !== undefined && object.approvals !== null) {
      for (const e of object.approvals) {
        message.approvals.push(String(e));
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    return message;
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.balance !== undefined && (obj.balance = message.balance);
    if (message.approvals) {
      obj.approvals = message.approvals.map((e) => e);
    } else {
      obj.approvals = [];
    }
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<Owner>): Owner {
    const message = { ...baseOwner } as Owner;
    message.approvals = [];
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
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = 0;
    }
    if (object.approvals !== undefined && object.approvals !== null) {
      for (const e of object.approvals) {
        message.approvals.push(e);
      }
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
