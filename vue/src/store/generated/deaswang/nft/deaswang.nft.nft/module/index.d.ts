import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgTransferFrom } from "./types/nft/tx";
import { MsgCollectionInit } from "./types/nft/tx";
import { MsgApproveAll } from "./types/nft/tx";
import { MsgApprove } from "./types/nft/tx";
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
    msgTransferFrom: (data: MsgTransferFrom) => EncodeObject;
    msgCollectionInit: (data: MsgCollectionInit) => EncodeObject;
    msgApproveAll: (data: MsgApproveAll) => EncodeObject;
    msgApprove: (data: MsgApprove) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
