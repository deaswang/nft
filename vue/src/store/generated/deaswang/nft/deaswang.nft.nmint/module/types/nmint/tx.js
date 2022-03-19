/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";
export const protobufPackage = "deaswang.nft.nmint";
const baseMsgMint = { creator: "", collectionId: "", count: 0, to: "" };
export const MsgMint = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMint };
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
                    message.count = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgMint };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.count !== undefined && (obj.count = message.count);
        message.to !== undefined && (obj.to = message.to);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMint };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        return message;
    },
};
const baseMsgMintResponse = { tokenId: "" };
export const MsgMintResponse = {
    encode(message, writer = Writer.create()) {
        if (message.tokenId !== "") {
            writer.uint32(10).string(message.tokenId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgMintResponse };
        if (object.tokenId !== undefined && object.tokenId !== null) {
            message.tokenId = String(object.tokenId);
        }
        else {
            message.tokenId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.tokenId !== undefined && (obj.tokenId = message.tokenId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMintResponse };
        if (object.tokenId !== undefined && object.tokenId !== null) {
            message.tokenId = object.tokenId;
        }
        else {
            message.tokenId = "";
        }
        return message;
    },
};
const baseMsgMinterMint = {
    creator: "",
    collectionId: "",
    count: 0,
    to: "",
};
export const MsgMinterMint = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterMint };
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
                    message.count = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgMinterMint };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.count !== undefined && (obj.count = message.count);
        message.to !== undefined && (obj.to = message.to);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMinterMint };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        return message;
    },
};
const baseMsgMinterMintResponse = { tokenId: "" };
export const MsgMinterMintResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.tokenId) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterMintResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgMinterMintResponse };
        message.tokenId = [];
        if (object.tokenId !== undefined && object.tokenId !== null) {
            for (const e of object.tokenId) {
                message.tokenId.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.tokenId) {
            obj.tokenId = message.tokenId.map((e) => e);
        }
        else {
            obj.tokenId = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMinterMintResponse };
        message.tokenId = [];
        if (object.tokenId !== undefined && object.tokenId !== null) {
            for (const e of object.tokenId) {
                message.tokenId.push(e);
            }
        }
        return message;
    },
};
const baseMsgMinterInit = {
    creator: "",
    admin: "",
    collectionId: "",
    supply: 0,
};
export const MsgMinterInit = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterInit };
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
                    message.supply = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgMinterInit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = String(object.admin);
        }
        else {
            message.admin = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = Number(object.supply);
        }
        else {
            message.supply = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromJSON(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.admin !== undefined && (obj.admin = message.admin);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.supply !== undefined && (obj.supply = message.supply);
        message.price !== undefined &&
            (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMinterInit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        else {
            message.admin = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = object.supply;
        }
        else {
            message.supply = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromPartial(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
};
const baseMsgMinterInitResponse = {};
export const MsgMinterInitResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterInitResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgMinterInitResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgMinterInitResponse };
        return message;
    },
};
const baseMsgMinterPause = {
    creator: "",
    collectionId: "",
    paused: false,
};
export const MsgMinterPause = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterPause };
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
    fromJSON(object) {
        const message = { ...baseMsgMinterPause };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.paused !== undefined && object.paused !== null) {
            message.paused = Boolean(object.paused);
        }
        else {
            message.paused = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.paused !== undefined && (obj.paused = message.paused);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMinterPause };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.paused !== undefined && object.paused !== null) {
            message.paused = object.paused;
        }
        else {
            message.paused = false;
        }
        return message;
    },
};
const baseMsgMinterPauseResponse = {};
export const MsgMinterPauseResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterPauseResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgMinterPauseResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgMinterPauseResponse };
        return message;
    },
};
const baseMsgMinterwlInit = {
    creator: "",
    admin: "",
    collectionId: "",
    supply: 0,
    whitelist: "",
    wllimit: 0,
};
export const MsgMinterwlInit = {
    encode(message, writer = Writer.create()) {
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
            writer.uint32(42).string(v);
        }
        if (message.wllimit !== 0) {
            writer.uint32(48).uint64(message.wllimit);
        }
        if (message.price !== undefined) {
            Coin.encode(message.price, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterwlInit };
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
                    message.supply = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.whitelist.push(reader.string());
                    break;
                case 6:
                    message.wllimit = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgMinterwlInit };
        message.whitelist = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = String(object.admin);
        }
        else {
            message.admin = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = Number(object.supply);
        }
        else {
            message.supply = 0;
        }
        if (object.whitelist !== undefined && object.whitelist !== null) {
            for (const e of object.whitelist) {
                message.whitelist.push(String(e));
            }
        }
        if (object.wllimit !== undefined && object.wllimit !== null) {
            message.wllimit = Number(object.wllimit);
        }
        else {
            message.wllimit = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromJSON(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.admin !== undefined && (obj.admin = message.admin);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.supply !== undefined && (obj.supply = message.supply);
        if (message.whitelist) {
            obj.whitelist = message.whitelist.map((e) => e);
        }
        else {
            obj.whitelist = [];
        }
        message.wllimit !== undefined && (obj.wllimit = message.wllimit);
        message.price !== undefined &&
            (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMinterwlInit };
        message.whitelist = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        else {
            message.admin = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = object.supply;
        }
        else {
            message.supply = 0;
        }
        if (object.whitelist !== undefined && object.whitelist !== null) {
            for (const e of object.whitelist) {
                message.whitelist.push(e);
            }
        }
        if (object.wllimit !== undefined && object.wllimit !== null) {
            message.wllimit = object.wllimit;
        }
        else {
            message.wllimit = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromPartial(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
};
const baseMsgMinterwlInitResponse = {};
export const MsgMinterwlInitResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgMinterwlInitResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgMinterwlInitResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgMinterwlInitResponse,
        };
        return message;
    },
};
const baseMsgMinterwlMint = { creator: "", collectionId: "", count: 0 };
export const MsgMinterwlMint = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterwlMint };
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
                    message.count = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMinterwlMint };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.count !== undefined && (obj.count = message.count);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMinterwlMint };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        return message;
    },
};
const baseMsgMinterwlMintResponse = { tokenId: "" };
export const MsgMinterwlMintResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.tokenId) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgMinterwlMintResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgMinterwlMintResponse,
        };
        message.tokenId = [];
        if (object.tokenId !== undefined && object.tokenId !== null) {
            for (const e of object.tokenId) {
                message.tokenId.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.tokenId) {
            obj.tokenId = message.tokenId.map((e) => e);
        }
        else {
            obj.tokenId = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgMinterwlMintResponse,
        };
        message.tokenId = [];
        if (object.tokenId !== undefined && object.tokenId !== null) {
            for (const e of object.tokenId) {
                message.tokenId.push(e);
            }
        }
        return message;
    },
};
const baseMsgMinterwlWhitelist = {
    creator: "",
    collectionId: "",
    whitelist: "",
    wllimit: 0,
};
export const MsgMinterwlWhitelist = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionId !== "") {
            writer.uint32(18).string(message.collectionId);
        }
        for (const v of message.whitelist) {
            writer.uint32(26).string(v);
        }
        if (message.wllimit !== 0) {
            writer.uint32(32).uint64(message.wllimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterwlWhitelist };
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
                    message.wllimit = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMinterwlWhitelist };
        message.whitelist = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.whitelist !== undefined && object.whitelist !== null) {
            for (const e of object.whitelist) {
                message.whitelist.push(String(e));
            }
        }
        if (object.wllimit !== undefined && object.wllimit !== null) {
            message.wllimit = Number(object.wllimit);
        }
        else {
            message.wllimit = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        if (message.whitelist) {
            obj.whitelist = message.whitelist.map((e) => e);
        }
        else {
            obj.whitelist = [];
        }
        message.wllimit !== undefined && (obj.wllimit = message.wllimit);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMinterwlWhitelist };
        message.whitelist = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.whitelist !== undefined && object.whitelist !== null) {
            for (const e of object.whitelist) {
                message.whitelist.push(e);
            }
        }
        if (object.wllimit !== undefined && object.wllimit !== null) {
            message.wllimit = object.wllimit;
        }
        else {
            message.wllimit = 0;
        }
        return message;
    },
};
const baseMsgMinterwlWhitelistResponse = {};
export const MsgMinterwlWhitelistResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgMinterwlWhitelistResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgMinterwlWhitelistResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgMinterwlWhitelistResponse,
        };
        return message;
    },
};
const baseMsgMinterwlPrice = { creator: "", collectionId: "" };
export const MsgMinterwlPrice = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterwlPrice };
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
    fromJSON(object) {
        const message = { ...baseMsgMinterwlPrice };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromJSON(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.price !== undefined &&
            (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMinterwlPrice };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromPartial(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
};
const baseMsgMinterwlPriceResponse = {};
export const MsgMinterwlPriceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgMinterwlPriceResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgMinterwlPriceResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgMinterwlPriceResponse,
        };
        return message;
    },
};
const baseMsgMinterPrice = { creator: "", collectionId: "" };
export const MsgMinterPrice = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterPrice };
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
    fromJSON(object) {
        const message = { ...baseMsgMinterPrice };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromJSON(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.price !== undefined &&
            (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMinterPrice };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromPartial(object.price);
        }
        else {
            message.price = undefined;
        }
        return message;
    },
};
const baseMsgMinterPriceResponse = {};
export const MsgMinterPriceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMinterPriceResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgMinterPriceResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgMinterPriceResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Mint(request) {
        const data = MsgMint.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Msg", "Mint", data);
        return promise.then((data) => MsgMintResponse.decode(new Reader(data)));
    }
    MinterMint(request) {
        const data = MsgMinterMint.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Msg", "MinterMint", data);
        return promise.then((data) => MsgMinterMintResponse.decode(new Reader(data)));
    }
    MinterInit(request) {
        const data = MsgMinterInit.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Msg", "MinterInit", data);
        return promise.then((data) => MsgMinterInitResponse.decode(new Reader(data)));
    }
    MinterPause(request) {
        const data = MsgMinterPause.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Msg", "MinterPause", data);
        return promise.then((data) => MsgMinterPauseResponse.decode(new Reader(data)));
    }
    MinterwlInit(request) {
        const data = MsgMinterwlInit.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Msg", "MinterwlInit", data);
        return promise.then((data) => MsgMinterwlInitResponse.decode(new Reader(data)));
    }
    MinterwlMint(request) {
        const data = MsgMinterwlMint.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Msg", "MinterwlMint", data);
        return promise.then((data) => MsgMinterwlMintResponse.decode(new Reader(data)));
    }
    MinterwlWhitelist(request) {
        const data = MsgMinterwlWhitelist.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Msg", "MinterwlWhitelist", data);
        return promise.then((data) => MsgMinterwlWhitelistResponse.decode(new Reader(data)));
    }
    MinterwlPrice(request) {
        const data = MsgMinterwlPrice.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Msg", "MinterwlPrice", data);
        return promise.then((data) => MsgMinterwlPriceResponse.decode(new Reader(data)));
    }
    MinterPrice(request) {
        const data = MsgMinterPrice.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Msg", "MinterPrice", data);
        return promise.then((data) => MsgMinterPriceResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
