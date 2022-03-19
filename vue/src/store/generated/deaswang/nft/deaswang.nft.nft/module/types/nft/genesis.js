/* eslint-disable */
import { Params } from "../nft/params";
import { Collection } from "../nft/collection";
import { Nft } from "../nft/nft";
import { Owner } from "../nft/owner";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "deaswang.nft.nft";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.collectionList) {
            Collection.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.nftList) {
            Nft.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.ownerList) {
            Owner.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.collectionList = [];
        message.nftList = [];
        message.ownerList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.collectionList.push(Collection.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nftList.push(Nft.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ownerList.push(Owner.decode(reader, reader.uint32()));
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
        message.collectionList = [];
        message.nftList = [];
        message.ownerList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.collectionList !== undefined && object.collectionList !== null) {
            for (const e of object.collectionList) {
                message.collectionList.push(Collection.fromJSON(e));
            }
        }
        if (object.nftList !== undefined && object.nftList !== null) {
            for (const e of object.nftList) {
                message.nftList.push(Nft.fromJSON(e));
            }
        }
        if (object.ownerList !== undefined && object.ownerList !== null) {
            for (const e of object.ownerList) {
                message.ownerList.push(Owner.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.collectionList) {
            obj.collectionList = message.collectionList.map((e) => e ? Collection.toJSON(e) : undefined);
        }
        else {
            obj.collectionList = [];
        }
        if (message.nftList) {
            obj.nftList = message.nftList.map((e) => (e ? Nft.toJSON(e) : undefined));
        }
        else {
            obj.nftList = [];
        }
        if (message.ownerList) {
            obj.ownerList = message.ownerList.map((e) => e ? Owner.toJSON(e) : undefined);
        }
        else {
            obj.ownerList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.collectionList = [];
        message.nftList = [];
        message.ownerList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.collectionList !== undefined && object.collectionList !== null) {
            for (const e of object.collectionList) {
                message.collectionList.push(Collection.fromPartial(e));
            }
        }
        if (object.nftList !== undefined && object.nftList !== null) {
            for (const e of object.nftList) {
                message.nftList.push(Nft.fromPartial(e));
            }
        }
        if (object.ownerList !== undefined && object.ownerList !== null) {
            for (const e of object.ownerList) {
                message.ownerList.push(Owner.fromPartial(e));
            }
        }
        return message;
    },
};
