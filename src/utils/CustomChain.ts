import { defineChain } from "viem";

export const XRPL = defineChain({
  id: 1440002,
  name: "XRPL EVM Sidechain",
  network: "XRPL EVM",
  nativeCurrency: {
    decimals: 18,
    name: "XRP",
    symbol: "XRP"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-evm-sidechain.xrpl.org"],
      webSocket: ["wss://rpc.zora.energy"]
    },
    public: {
      http: ["https://rpc-evm-sidechain.xrpl.org"],
      webSocket: ["wss://rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://evm-sidechain.xrpl.org" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 5882
    }
  }
});
