// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgTransferFrom } from "./types/nft/tx";
import { MsgCollectionInit } from "./types/nft/tx";
import { MsgApproveAll } from "./types/nft/tx";
import { MsgApprove } from "./types/nft/tx";
const types = [
    ["/deaswang.nft.nft.MsgTransferFrom", MsgTransferFrom],
    ["/deaswang.nft.nft.MsgCollectionInit", MsgCollectionInit],
    ["/deaswang.nft.nft.MsgApproveAll", MsgApproveAll],
    ["/deaswang.nft.nft.MsgApprove", MsgApprove],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgTransferFrom: (data) => ({ typeUrl: "/deaswang.nft.nft.MsgTransferFrom", value: MsgTransferFrom.fromPartial(data) }),
        msgCollectionInit: (data) => ({ typeUrl: "/deaswang.nft.nft.MsgCollectionInit", value: MsgCollectionInit.fromPartial(data) }),
        msgApproveAll: (data) => ({ typeUrl: "/deaswang.nft.nft.MsgApproveAll", value: MsgApproveAll.fromPartial(data) }),
        msgApprove: (data) => ({ typeUrl: "/deaswang.nft.nft.MsgApprove", value: MsgApprove.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
