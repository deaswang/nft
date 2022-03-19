import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMinterwlWhitelist } from "./types/nmint/tx";
import { MsgMinterPrice } from "./types/nmint/tx";
import { MsgMinterPause } from "./types/nmint/tx";
import { MsgMinterMint } from "./types/nmint/tx";
import { MsgMinterwlInit } from "./types/nmint/tx";
import { MsgMinterInit } from "./types/nmint/tx";
import { MsgMint } from "./types/nmint/tx";
import { MsgMinterwlMint } from "./types/nmint/tx";
import { MsgMinterwlPrice } from "./types/nmint/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgMinterwlWhitelist: (data: MsgMinterwlWhitelist) => EncodeObject;
    msgMinterPrice: (data: MsgMinterPrice) => EncodeObject;
    msgMinterPause: (data: MsgMinterPause) => EncodeObject;
    msgMinterMint: (data: MsgMinterMint) => EncodeObject;
    msgMinterwlInit: (data: MsgMinterwlInit) => EncodeObject;
    msgMinterInit: (data: MsgMinterInit) => EncodeObject;
    msgMint: (data: MsgMint) => EncodeObject;
    msgMinterwlMint: (data: MsgMinterwlMint) => EncodeObject;
    msgMinterwlPrice: (data: MsgMinterwlPrice) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
