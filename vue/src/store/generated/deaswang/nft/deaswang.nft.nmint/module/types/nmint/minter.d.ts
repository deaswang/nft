import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "deaswang.nft.nmint";
export interface Minter {
    admin: string;
    collectionId: string;
    supply: number;
    price: Coin | undefined;
    pause: boolean;
    creator: string;
}
export declare const Minter: {
    encode(message: Minter, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial(object: DeepPartial<Minter>): Minter;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
