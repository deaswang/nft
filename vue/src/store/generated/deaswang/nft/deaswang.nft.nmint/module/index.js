// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const types = [
    ["/deaswang.nft.nmint.MsgMinterwlWhitelist", MsgMinterwlWhitelist],
    ["/deaswang.nft.nmint.MsgMinterPrice", MsgMinterPrice],
    ["/deaswang.nft.nmint.MsgMinterPause", MsgMinterPause],
    ["/deaswang.nft.nmint.MsgMinterMint", MsgMinterMint],
    ["/deaswang.nft.nmint.MsgMinterwlInit", MsgMinterwlInit],
    ["/deaswang.nft.nmint.MsgMinterInit", MsgMinterInit],
    ["/deaswang.nft.nmint.MsgMint", MsgMint],
    ["/deaswang.nft.nmint.MsgMinterwlMint", MsgMinterwlMint],
    ["/deaswang.nft.nmint.MsgMinterwlPrice", MsgMinterwlPrice],
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
        msgMinterwlWhitelist: (data) => ({ typeUrl: "/deaswang.nft.nmint.MsgMinterwlWhitelist", value: MsgMinterwlWhitelist.fromPartial(data) }),
        msgMinterPrice: (data) => ({ typeUrl: "/deaswang.nft.nmint.MsgMinterPrice", value: MsgMinterPrice.fromPartial(data) }),
        msgMinterPause: (data) => ({ typeUrl: "/deaswang.nft.nmint.MsgMinterPause", value: MsgMinterPause.fromPartial(data) }),
        msgMinterMint: (data) => ({ typeUrl: "/deaswang.nft.nmint.MsgMinterMint", value: MsgMinterMint.fromPartial(data) }),
        msgMinterwlInit: (data) => ({ typeUrl: "/deaswang.nft.nmint.MsgMinterwlInit", value: MsgMinterwlInit.fromPartial(data) }),
        msgMinterInit: (data) => ({ typeUrl: "/deaswang.nft.nmint.MsgMinterInit", value: MsgMinterInit.fromPartial(data) }),
        msgMint: (data) => ({ typeUrl: "/deaswang.nft.nmint.MsgMint", value: MsgMint.fromPartial(data) }),
        msgMinterwlMint: (data) => ({ typeUrl: "/deaswang.nft.nmint.MsgMinterwlMint", value: MsgMinterwlMint.fromPartial(data) }),
        msgMinterwlPrice: (data) => ({ typeUrl: "/deaswang.nft.nmint.MsgMinterwlPrice", value: MsgMinterwlPrice.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };