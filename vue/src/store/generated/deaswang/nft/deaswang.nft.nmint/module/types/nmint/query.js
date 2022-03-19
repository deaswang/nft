/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../nmint/params";
import { Minter } from "../nmint/minter";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Minterwl } from "../nmint/minterwl";
export const protobufPackage = "deaswang.nft.nmint";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryGetMinterRequest = { index: "" };
export const QueryGetMinterRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMinterRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryGetMinterRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMinterRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetMinterResponse = {};
export const QueryGetMinterResponse = {
    encode(message, writer = Writer.create()) {
        if (message.minter !== undefined) {
            Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMinterResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetMinterResponse };
        if (object.minter !== undefined && object.minter !== null) {
            message.minter = Minter.fromJSON(object.minter);
        }
        else {
            message.minter = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.minter !== undefined &&
            (obj.minter = message.minter ? Minter.toJSON(message.minter) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMinterResponse };
        if (object.minter !== undefined && object.minter !== null) {
            message.minter = Minter.fromPartial(object.minter);
        }
        else {
            message.minter = undefined;
        }
        return message;
    },
};
const baseQueryAllMinterRequest = {};
export const QueryAllMinterRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMinterRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllMinterRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMinterRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllMinterResponse = {};
export const QueryAllMinterResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.minter) {
            Minter.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMinterResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllMinterResponse };
        message.minter = [];
        if (object.minter !== undefined && object.minter !== null) {
            for (const e of object.minter) {
                message.minter.push(Minter.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.minter) {
            obj.minter = message.minter.map((e) => e ? Minter.toJSON(e) : undefined);
        }
        else {
            obj.minter = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMinterResponse };
        message.minter = [];
        if (object.minter !== undefined && object.minter !== null) {
            for (const e of object.minter) {
                message.minter.push(Minter.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetMinterwlRequest = { collectionId: "" };
export const QueryGetMinterwlRequest = {
    encode(message, writer = Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMinterwlRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetMinterwlRequest,
        };
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMinterwlRequest,
        };
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        return message;
    },
};
const baseQueryGetMinterwlResponse = {};
export const QueryGetMinterwlResponse = {
    encode(message, writer = Writer.create()) {
        if (message.minterwl !== undefined) {
            Minterwl.encode(message.minterwl, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMinterwlResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetMinterwlResponse,
        };
        if (object.minterwl !== undefined && object.minterwl !== null) {
            message.minterwl = Minterwl.fromJSON(object.minterwl);
        }
        else {
            message.minterwl = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.minterwl !== undefined &&
            (obj.minterwl = message.minterwl
                ? Minterwl.toJSON(message.minterwl)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMinterwlResponse,
        };
        if (object.minterwl !== undefined && object.minterwl !== null) {
            message.minterwl = Minterwl.fromPartial(object.minterwl);
        }
        else {
            message.minterwl = undefined;
        }
        return message;
    },
};
const baseQueryAllMinterwlRequest = {};
export const QueryAllMinterwlRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMinterwlRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllMinterwlRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMinterwlRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllMinterwlResponse = {};
export const QueryAllMinterwlResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.minterwl) {
            Minterwl.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMinterwlResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllMinterwlResponse,
        };
        message.minterwl = [];
        if (object.minterwl !== undefined && object.minterwl !== null) {
            for (const e of object.minterwl) {
                message.minterwl.push(Minterwl.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.minterwl) {
            obj.minterwl = message.minterwl.map((e) => e ? Minterwl.toJSON(e) : undefined);
        }
        else {
            obj.minterwl = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMinterwlResponse,
        };
        message.minterwl = [];
        if (object.minterwl !== undefined && object.minterwl !== null) {
            for (const e of object.minterwl) {
                message.minterwl.push(Minterwl.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    Minter(request) {
        const data = QueryGetMinterRequest.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Query", "Minter", data);
        return promise.then((data) => QueryGetMinterResponse.decode(new Reader(data)));
    }
    MinterAll(request) {
        const data = QueryAllMinterRequest.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Query", "MinterAll", data);
        return promise.then((data) => QueryAllMinterResponse.decode(new Reader(data)));
    }
    Minterwl(request) {
        const data = QueryGetMinterwlRequest.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Query", "Minterwl", data);
        return promise.then((data) => QueryGetMinterwlResponse.decode(new Reader(data)));
    }
    MinterwlAll(request) {
        const data = QueryAllMinterwlRequest.encode(request).finish();
        const promise = this.rpc.request("deaswang.nft.nmint.Query", "MinterwlAll", data);
        return promise.then((data) => QueryAllMinterwlResponse.decode(new Reader(data)));
    }
}
