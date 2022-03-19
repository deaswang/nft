/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export const protobufPackage = "deaswang.nft.nmint";
const baseMinter = {
    admin: "",
    collectionId: "",
    supply: 0,
    pause: false,
    creator: "",
};
export const Minter = {
    encode(message, writer = Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.collectionId !== "") {
            writer.uint32(18).string(message.collectionId);
        }
        if (message.supply !== 0) {
            writer.uint32(24).uint64(message.supply);
        }
        if (message.price !== undefined) {
            Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
        }
        if (message.pause === true) {
            writer.uint32(40).bool(message.pause);
        }
        if (message.creator !== "") {
            writer.uint32(50).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMinter };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.collectionId = reader.string();
                    break;
                case 3:
                    message.supply = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.price = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.pause = reader.bool();
                    break;
                case 6:
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
        const message = { ...baseMinter };
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
        if (object.pause !== undefined && object.pause !== null) {
            message.pause = Boolean(object.pause);
        }
        else {
            message.pause = false;
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
        message.admin !== undefined && (obj.admin = message.admin);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.supply !== undefined && (obj.supply = message.supply);
        message.price !== undefined &&
            (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
        message.pause !== undefined && (obj.pause = message.pause);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMinter };
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
        if (object.pause !== undefined && object.pause !== null) {
            message.pause = object.pause;
        }
        else {
            message.pause = false;
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
