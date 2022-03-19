/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export const protobufPackage = "deaswang.nft.nmint";
const baseMinterwl = {
    collectionId: "",
    admin: "",
    supply: 0,
    whitelist: "",
    wllimit: 0,
    creator: "",
};
export const Minterwl = {
    encode(message, writer = Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.supply !== 0) {
            writer.uint32(24).uint64(message.supply);
        }
        for (const v of message.whitelist) {
            writer.uint32(34).string(v);
        }
        if (message.wllimit !== 0) {
            writer.uint32(40).uint64(message.wllimit);
        }
        if (message.price !== undefined) {
            Coin.encode(message.price, writer.uint32(50).fork()).ldelim();
        }
        if (message.creator !== "") {
            writer.uint32(58).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMinterwl };
        message.whitelist = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.supply = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.whitelist.push(reader.string());
                    break;
                case 5:
                    message.wllimit = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.price = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMinterwl };
        message.whitelist = [];
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = String(object.admin);
        }
        else {
            message.admin = "";
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.admin !== undefined && (obj.admin = message.admin);
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
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMinterwl };
        message.whitelist = [];
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        else {
            message.admin = "";
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
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
