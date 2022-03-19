import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "deaswang.nft.nmint";
export interface Minterwl {
    collectionId: string;
    admin: string;
    supply: number;
    whitelist: string[];
    wllimit: number;
    price: Coin | undefined;
    creator: string;
}
export declare const Minterwl: {
    encode(message: Minterwl, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Minterwl;
    fromJSON(object: any): Minterwl;
    toJSON(message: Minterwl): unknown;
    fromPartial(object: DeepPartial<Minterwl>): Minterwl;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
