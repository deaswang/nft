/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "deaswang.nft.nmint";

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

export interface MsgMinterInitResponse {}

export interface MsgMinterPause {
  creator: string;
  collectionId: string;
  paused: boolean;
}

export interface MsgMinterPauseResponse {}

export interface MsgMinterwlInit {
  creator: string;
  admin: string;
  collectionId: string;
  supply: number;
  whitelist: string[];
  wllimit: number;
  price: Coin | undefined;
}

export interface MsgMinterwlInitResponse {}

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

export interface MsgMinterwlWhitelistResponse {}

export interface MsgMinterwlPrice {
  creator: string;
  collectionId: string;
  price: Coin | undefined;
}

export interface MsgMinterwlPriceResponse {}

export interface MsgMinterPrice {
  creator: string;
  collectionId: string;
  price: Coin | undefined;
}

export interface MsgMinterPriceResponse {}

const baseMsgMint: object = { creator: "", collectionId: "", count: 0, to: "" };

export const MsgMint = {
  encode(message: MsgMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint64(message.count);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMint } as MsgMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    const message = { ...baseMsgMint } as MsgMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    return message;
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.count !== undefined && (obj.count = message.count);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = { ...baseMsgMint } as MsgMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    return message;
  },
};

const baseMsgMintResponse: object = { tokenId: "" };

export const MsgMintResponse = {
  encode(message: MsgMintResponse, writer: Writer = Writer.create()): Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = String(object.tokenId);
    } else {
      message.tokenId = "";
    }
    return message;
  },

  toJSON(message: MsgMintResponse): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = { ...baseMsgMintResponse } as MsgMintResponse;
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    } else {
      message.tokenId = "";
    }
    return message;
  },
};

const baseMsgMinterMint: object = {
  creator: "",
  collectionId: "",
  count: 0,
  to: "",
};

export const MsgMinterMint = {
  encode(message: MsgMinterMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint64(message.count);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterMint } as MsgMinterMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.to = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterMint {
    const message = { ...baseMsgMinterMint } as MsgMinterMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    return message;
  },

  toJSON(message: MsgMinterMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.count !== undefined && (obj.count = message.count);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMinterMint>): MsgMinterMint {
    const message = { ...baseMsgMinterMint } as MsgMinterMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    return message;
  },
};

const baseMsgMinterMintResponse: object = { tokenId: "" };

export const MsgMinterMintResponse = {
  encode(
    message: MsgMinterMintResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.tokenId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterMintResponse } as MsgMinterMintResponse;
    message.tokenId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterMintResponse {
    const message = { ...baseMsgMinterMintResponse } as MsgMinterMintResponse;
    message.tokenId = [];
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgMinterMintResponse): unknown {
    const obj: any = {};
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMinterMintResponse>
  ): MsgMinterMintResponse {
    const message = { ...baseMsgMinterMintResponse } as MsgMinterMintResponse;
    message.tokenId = [];
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    return message;
  },
};

const baseMsgMinterInit: object = {
  creator: "",
  admin: "",
  collectionId: "",
  supply: 0,
};

export const MsgMinterInit = {
  encode(message: MsgMinterInit, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.collectionId !== "") {
      writer.uint32(26).string(message.collectionId);
    }
    if (message.supply !== 0) {
      writer.uint32(32).uint64(message.supply);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterInit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterInit } as MsgMinterInit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.collectionId = reader.string();
          break;
        case 4:
          message.supply = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterInit {
    const message = { ...baseMsgMinterInit } as MsgMinterInit;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = Number(object.supply);
    } else {
      message.supply = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },

  toJSON(message: MsgMinterInit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.admin !== undefined && (obj.admin = message.admin);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.supply !== undefined && (obj.supply = message.supply);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMinterInit>): MsgMinterInit {
    const message = { ...baseMsgMinterInit } as MsgMinterInit;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    } else {
      message.supply = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },
};

const baseMsgMinterInitResponse: object = {};

export const MsgMinterInitResponse = {
  encode(_: MsgMinterInitResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterInitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterInitResponse } as MsgMinterInitResponse;
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

  fromJSON(_: any): MsgMinterInitResponse {
    const message = { ...baseMsgMinterInitResponse } as MsgMinterInitResponse;
    return message;
  },

  toJSON(_: MsgMinterInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMinterInitResponse>): MsgMinterInitResponse {
    const message = { ...baseMsgMinterInitResponse } as MsgMinterInitResponse;
    return message;
  },
};

const baseMsgMinterPause: object = {
  creator: "",
  collectionId: "",
  paused: false,
};

export const MsgMinterPause = {
  encode(message: MsgMinterPause, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.paused === true) {
      writer.uint32(24).bool(message.paused);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterPause {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterPause } as MsgMinterPause;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterPause {
    const message = { ...baseMsgMinterPause } as MsgMinterPause;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = Boolean(object.paused);
    } else {
      message.paused = false;
    }
    return message;
  },

  toJSON(message: MsgMinterPause): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMinterPause>): MsgMinterPause {
    const message = { ...baseMsgMinterPause } as MsgMinterPause;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.paused !== undefined && object.paused !== null) {
      message.paused = object.paused;
    } else {
      message.paused = false;
    }
    return message;
  },
};

const baseMsgMinterPauseResponse: object = {};

export const MsgMinterPauseResponse = {
  encode(_: MsgMinterPauseResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterPauseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterPauseResponse } as MsgMinterPauseResponse;
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

  fromJSON(_: any): MsgMinterPauseResponse {
    const message = { ...baseMsgMinterPauseResponse } as MsgMinterPauseResponse;
    return message;
  },

  toJSON(_: MsgMinterPauseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMinterPauseResponse>): MsgMinterPauseResponse {
    const message = { ...baseMsgMinterPauseResponse } as MsgMinterPauseResponse;
    return message;
  },
};

const baseMsgMinterwlInit: object = {
  creator: "",
  admin: "",
  collectionId: "",
  supply: 0,
  whitelist: "",
  wllimit: 0,
};

export const MsgMinterwlInit = {
  encode(message: MsgMinterwlInit, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (message.collectionId !== "") {
      writer.uint32(26).string(message.collectionId);
    }
    if (message.supply !== 0) {
      writer.uint32(32).uint64(message.supply);
    }
    for (const v of message.whitelist) {
      writer.uint32(42).string(v!);
    }
    if (message.wllimit !== 0) {
      writer.uint32(48).uint64(message.wllimit);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterwlInit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterwlInit } as MsgMinterwlInit;
    message.whitelist = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.collectionId = reader.string();
          break;
        case 4:
          message.supply = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.whitelist.push(reader.string());
          break;
        case 6:
          message.wllimit = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterwlInit {
    const message = { ...baseMsgMinterwlInit } as MsgMinterwlInit;
    message.whitelist = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = Number(object.supply);
    } else {
      message.supply = 0;
    }
    if (object.whitelist !== undefined && object.whitelist !== null) {
      for (const e of object.whitelist) {
        message.whitelist.push(String(e));
      }
    }
    if (object.wllimit !== undefined && object.wllimit !== null) {
      message.wllimit = Number(object.wllimit);
    } else {
      message.wllimit = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },

  toJSON(message: MsgMinterwlInit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.admin !== undefined && (obj.admin = message.admin);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.supply !== undefined && (obj.supply = message.supply);
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) => e);
    } else {
      obj.whitelist = [];
    }
    message.wllimit !== undefined && (obj.wllimit = message.wllimit);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMinterwlInit>): MsgMinterwlInit {
    const message = { ...baseMsgMinterwlInit } as MsgMinterwlInit;
    message.whitelist = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    } else {
      message.supply = 0;
    }
    if (object.whitelist !== undefined && object.whitelist !== null) {
      for (const e of object.whitelist) {
        message.whitelist.push(e);
      }
    }
    if (object.wllimit !== undefined && object.wllimit !== null) {
      message.wllimit = object.wllimit;
    } else {
      message.wllimit = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },
};

const baseMsgMinterwlInitResponse: object = {};

export const MsgMinterwlInitResponse = {
  encode(_: MsgMinterwlInitResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterwlInitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMinterwlInitResponse,
    } as MsgMinterwlInitResponse;
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

  fromJSON(_: any): MsgMinterwlInitResponse {
    const message = {
      ...baseMsgMinterwlInitResponse,
    } as MsgMinterwlInitResponse;
    return message;
  },

  toJSON(_: MsgMinterwlInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgMinterwlInitResponse>
  ): MsgMinterwlInitResponse {
    const message = {
      ...baseMsgMinterwlInitResponse,
    } as MsgMinterwlInitResponse;
    return message;
  },
};

const baseMsgMinterwlMint: object = { creator: "", collectionId: "", count: 0 };

export const MsgMinterwlMint = {
  encode(message: MsgMinterwlMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterwlMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterwlMint } as MsgMinterwlMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterwlMint {
    const message = { ...baseMsgMinterwlMint } as MsgMinterwlMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: MsgMinterwlMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMinterwlMint>): MsgMinterwlMint {
    const message = { ...baseMsgMinterwlMint } as MsgMinterwlMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseMsgMinterwlMintResponse: object = { tokenId: "" };

export const MsgMinterwlMintResponse = {
  encode(
    message: MsgMinterwlMintResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.tokenId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterwlMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMinterwlMintResponse,
    } as MsgMinterwlMintResponse;
    message.tokenId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterwlMintResponse {
    const message = {
      ...baseMsgMinterwlMintResponse,
    } as MsgMinterwlMintResponse;
    message.tokenId = [];
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgMinterwlMintResponse): unknown {
    const obj: any = {};
    if (message.tokenId) {
      obj.tokenId = message.tokenId.map((e) => e);
    } else {
      obj.tokenId = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMinterwlMintResponse>
  ): MsgMinterwlMintResponse {
    const message = {
      ...baseMsgMinterwlMintResponse,
    } as MsgMinterwlMintResponse;
    message.tokenId = [];
    if (object.tokenId !== undefined && object.tokenId !== null) {
      for (const e of object.tokenId) {
        message.tokenId.push(e);
      }
    }
    return message;
  },
};

const baseMsgMinterwlWhitelist: object = {
  creator: "",
  collectionId: "",
  whitelist: "",
  wllimit: 0,
};

export const MsgMinterwlWhitelist = {
  encode(
    message: MsgMinterwlWhitelist,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    for (const v of message.whitelist) {
      writer.uint32(26).string(v!);
    }
    if (message.wllimit !== 0) {
      writer.uint32(32).uint64(message.wllimit);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterwlWhitelist {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterwlWhitelist } as MsgMinterwlWhitelist;
    message.whitelist = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.whitelist.push(reader.string());
          break;
        case 4:
          message.wllimit = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterwlWhitelist {
    const message = { ...baseMsgMinterwlWhitelist } as MsgMinterwlWhitelist;
    message.whitelist = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.whitelist !== undefined && object.whitelist !== null) {
      for (const e of object.whitelist) {
        message.whitelist.push(String(e));
      }
    }
    if (object.wllimit !== undefined && object.wllimit !== null) {
      message.wllimit = Number(object.wllimit);
    } else {
      message.wllimit = 0;
    }
    return message;
  },

  toJSON(message: MsgMinterwlWhitelist): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) => e);
    } else {
      obj.whitelist = [];
    }
    message.wllimit !== undefined && (obj.wllimit = message.wllimit);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMinterwlWhitelist>): MsgMinterwlWhitelist {
    const message = { ...baseMsgMinterwlWhitelist } as MsgMinterwlWhitelist;
    message.whitelist = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.whitelist !== undefined && object.whitelist !== null) {
      for (const e of object.whitelist) {
        message.whitelist.push(e);
      }
    }
    if (object.wllimit !== undefined && object.wllimit !== null) {
      message.wllimit = object.wllimit;
    } else {
      message.wllimit = 0;
    }
    return message;
  },
};

const baseMsgMinterwlWhitelistResponse: object = {};

export const MsgMinterwlWhitelistResponse = {
  encode(
    _: MsgMinterwlWhitelistResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgMinterwlWhitelistResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMinterwlWhitelistResponse,
    } as MsgMinterwlWhitelistResponse;
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

  fromJSON(_: any): MsgMinterwlWhitelistResponse {
    const message = {
      ...baseMsgMinterwlWhitelistResponse,
    } as MsgMinterwlWhitelistResponse;
    return message;
  },

  toJSON(_: MsgMinterwlWhitelistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgMinterwlWhitelistResponse>
  ): MsgMinterwlWhitelistResponse {
    const message = {
      ...baseMsgMinterwlWhitelistResponse,
    } as MsgMinterwlWhitelistResponse;
    return message;
  },
};

const baseMsgMinterwlPrice: object = { creator: "", collectionId: "" };

export const MsgMinterwlPrice = {
  encode(message: MsgMinterwlPrice, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterwlPrice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterwlPrice } as MsgMinterwlPrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterwlPrice {
    const message = { ...baseMsgMinterwlPrice } as MsgMinterwlPrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },

  toJSON(message: MsgMinterwlPrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMinterwlPrice>): MsgMinterwlPrice {
    const message = { ...baseMsgMinterwlPrice } as MsgMinterwlPrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },
};

const baseMsgMinterwlPriceResponse: object = {};

export const MsgMinterwlPriceResponse = {
  encode(
    _: MsgMinterwlPriceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgMinterwlPriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMinterwlPriceResponse,
    } as MsgMinterwlPriceResponse;
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

  fromJSON(_: any): MsgMinterwlPriceResponse {
    const message = {
      ...baseMsgMinterwlPriceResponse,
    } as MsgMinterwlPriceResponse;
    return message;
  },

  toJSON(_: MsgMinterwlPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgMinterwlPriceResponse>
  ): MsgMinterwlPriceResponse {
    const message = {
      ...baseMsgMinterwlPriceResponse,
    } as MsgMinterwlPriceResponse;
    return message;
  },
};

const baseMsgMinterPrice: object = { creator: "", collectionId: "" };

export const MsgMinterPrice = {
  encode(message: MsgMinterPrice, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterPrice {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterPrice } as MsgMinterPrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMinterPrice {
    const message = { ...baseMsgMinterPrice } as MsgMinterPrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },

  toJSON(message: MsgMinterPrice): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMinterPrice>): MsgMinterPrice {
    const message = { ...baseMsgMinterPrice } as MsgMinterPrice;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = object.collectionId;
    } else {
      message.collectionId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    return message;
  },
};

const baseMsgMinterPriceResponse: object = {};

export const MsgMinterPriceResponse = {
  encode(_: MsgMinterPriceResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMinterPriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMinterPriceResponse } as MsgMinterPriceResponse;
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

  fromJSON(_: any): MsgMinterPriceResponse {
    const message = { ...baseMsgMinterPriceResponse } as MsgMinterPriceResponse;
    return message;
  },

  toJSON(_: MsgMinterPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMinterPriceResponse>): MsgMinterPriceResponse {
    const message = { ...baseMsgMinterPriceResponse } as MsgMinterPriceResponse;
    return message;
  },
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
  MinterwlWhitelist(
    request: MsgMinterwlWhitelist
  ): Promise<MsgMinterwlWhitelistResponse>;
  MinterwlPrice(request: MsgMinterwlPrice): Promise<MsgMinterwlPriceResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MinterPrice(request: MsgMinterPrice): Promise<MsgMinterPriceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("deaswang.nft.nmint.Msg", "Mint", data);
    return promise.then((data) => MsgMintResponse.decode(new Reader(data)));
  }

  MinterMint(request: MsgMinterMint): Promise<MsgMinterMintResponse> {
    const data = MsgMinterMint.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Msg",
      "MinterMint",
      data
    );
    return promise.then((data) =>
      MsgMinterMintResponse.decode(new Reader(data))
    );
  }

  MinterInit(request: MsgMinterInit): Promise<MsgMinterInitResponse> {
    const data = MsgMinterInit.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Msg",
      "MinterInit",
      data
    );
    return promise.then((data) =>
      MsgMinterInitResponse.decode(new Reader(data))
    );
  }

  MinterPause(request: MsgMinterPause): Promise<MsgMinterPauseResponse> {
    const data = MsgMinterPause.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Msg",
      "MinterPause",
      data
    );
    return promise.then((data) =>
      MsgMinterPauseResponse.decode(new Reader(data))
    );
  }

  MinterwlInit(request: MsgMinterwlInit): Promise<MsgMinterwlInitResponse> {
    const data = MsgMinterwlInit.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Msg",
      "MinterwlInit",
      data
    );
    return promise.then((data) =>
      MsgMinterwlInitResponse.decode(new Reader(data))
    );
  }

  MinterwlMint(request: MsgMinterwlMint): Promise<MsgMinterwlMintResponse> {
    const data = MsgMinterwlMint.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Msg",
      "MinterwlMint",
      data
    );
    return promise.then((data) =>
      MsgMinterwlMintResponse.decode(new Reader(data))
    );
  }

  MinterwlWhitelist(
    request: MsgMinterwlWhitelist
  ): Promise<MsgMinterwlWhitelistResponse> {
    const data = MsgMinterwlWhitelist.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Msg",
      "MinterwlWhitelist",
      data
    );
    return promise.then((data) =>
      MsgMinterwlWhitelistResponse.decode(new Reader(data))
    );
  }

  MinterwlPrice(request: MsgMinterwlPrice): Promise<MsgMinterwlPriceResponse> {
    const data = MsgMinterwlPrice.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Msg",
      "MinterwlPrice",
      data
    );
    return promise.then((data) =>
      MsgMinterwlPriceResponse.decode(new Reader(data))
    );
  }

  MinterPrice(request: MsgMinterPrice): Promise<MsgMinterPriceResponse> {
    const data = MsgMinterPrice.encode(request).finish();
    const promise = this.rpc.request(
      "deaswang.nft.nmint.Msg",
      "MinterPrice",
      data
    );
    return promise.then((data) =>
      MsgMinterPriceResponse.decode(new Reader(data))
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
