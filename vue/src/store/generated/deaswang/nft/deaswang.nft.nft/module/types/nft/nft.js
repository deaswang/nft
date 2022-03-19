/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "deaswang.nft.nft";
const baseNft = {
    collectionId: "",
    tokenId: "",
    uri: "",
    uriHash: "",
    owner: "",
    approval: "",
    data: "",
};
export const Nft = {
    encode(message, writer = Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.tokenId !== "") {
            writer.uint32(18).string(message.tokenId);
        }
        if (message.uri !== "") {
            writer.uint32(26).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(34).string(message.uriHash);
        }
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        if (message.approval !== "") {
            writer.uint32(50).string(message.approval);
        }
        if (message.data !== "") {
            writer.uint32(58).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNft };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.tokenId = reader.string();
                    break;
                case 3:
                    message.uri = reader.string();
                    break;
                case 4:
                    message.uriHash = reader.string();
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                case 6:
                    message.approval = reader.string();
                    break;
                case 7:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNft };
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.tokenId !== undefined && object.tokenId !== null) {
            message.tokenId = String(object.tokenId);
        }
        else {
            message.tokenId = "";
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = String(object.uri);
        }
        else {
            message.uri = "";
        }
        if (object.uriHash !== undefined && object.uriHash !== null) {
            message.uriHash = String(object.uriHash);
        }
        else {
            message.uriHash = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.approval !== undefined && object.approval !== null) {
            message.approval = String(object.approval);
        }
        else {
            message.approval = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.tokenId !== undefined && (obj.tokenId = message.tokenId);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uriHash !== undefined && (obj.uriHash = message.uriHash);
        message.owner !== undefined && (obj.owner = message.owner);
        message.approval !== undefined && (obj.approval = message.approval);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNft };
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = object.collectionId;
        }
        else {
            message.collectionId = "";
        }
        if (object.tokenId !== undefined && object.tokenId !== null) {
            message.tokenId = object.tokenId;
        }
        else {
            message.tokenId = "";
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        else {
            message.uri = "";
        }
        if (object.uriHash !== undefined && object.uriHash !== null) {
            message.uriHash = object.uriHash;
        }
        else {
            message.uriHash = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.approval !== undefined && object.approval !== null) {
            message.approval = object.approval;
        }
        else {
            message.approval = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = "";
        }
        return message;
    },
};
