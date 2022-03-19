import { Params } from "../nft/params";
import { Collection } from "../nft/collection";
import { Nft } from "../nft/nft";
import { Owner } from "../nft/owner";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "deaswang.nft.nft";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    collectionList: Collection[];
    nftList: Nft[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    ownerList: Owner[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
