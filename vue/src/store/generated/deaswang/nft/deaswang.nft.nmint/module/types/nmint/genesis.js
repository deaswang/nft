/* eslint-disable */
import { Params } from "../nmint/params";
import { Minter } from "../nmint/minter";
import { Minterwl } from "../nmint/minterwl";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "deaswang.nft.nmint";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.minterList) {
            Minter.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.minterwlList) {
            Minterwl.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.minterList = [];
        message.minterwlList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.minterList.push(Minter.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.minterwlList.push(Minterwl.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.minterList = [];
        message.minterwlList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.minterList !== undefined && object.minterList !== null) {
            for (const e of object.minterList) {
                message.minterList.push(Minter.fromJSON(e));
            }
        }
        if (object.minterwlList !== undefined && object.minterwlList !== null) {
            for (const e of object.minterwlList) {
                message.minterwlList.push(Minterwl.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.minterList) {
            obj.minterList = message.minterList.map((e) => e ? Minter.toJSON(e) : undefined);
        }
        else {
            obj.minterList = [];
        }
        if (message.minterwlList) {
            obj.minterwlList = message.minterwlList.map((e) => e ? Minterwl.toJSON(e) : undefined);
        }
        else {
            obj.minterwlList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.minterList = [];
        message.minterwlList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.minterList !== undefined && object.minterList !== null) {
            for (const e of object.minterList) {
                message.minterList.push(Minter.fromPartial(e));
            }
        }
        if (object.minterwlList !== undefined && object.minterwlList !== null) {
            for (const e of object.minterwlList) {
                message.minterwlList.push(Minterwl.fromPartial(e));
            }
        }
        return message;
    },
};
