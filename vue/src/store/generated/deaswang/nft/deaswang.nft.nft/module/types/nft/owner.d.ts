import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "deaswang.nft.nft";
/** Key: <index>/<collectionId>/ */
export interface Owner {
    index: string;
    collectionId: string;
    balance: number;
    approvals: string[];
    data: string;
}
export declare const Owner: {
    encode(message: Owner, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Owner;
    fromJSON(object: any): Owner;
    toJSON(message: Owner): unknown;
    fromPartial(object: DeepPartial<Owner>): Owner;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
