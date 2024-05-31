import { ChainId } from "@cronos-app/sdk";

import type { AddEthereumChainParameter } from "@react-web3-wallet/react";

const SUPPORTED_CHAIN_IDS = [338];
// const SUPPORTED_CHAIN_IDS = [Number(process.env.CHAIN_ID)];

export const getIsSupportedChainId = (chainId?: ChainId) =>
  !!chainId && SUPPORTED_CHAIN_IDS.includes(chainId);

export const explorers: Record<ChainId, string> = {
  [ChainId.CRONOS_MAINNET]: "https://cronoscan.com",
  [ChainId.CRONOS_TESTNET]: "https://testnet.cronoscan.com",
};

type ChainConfig = {
  [chainId in ChainId]: AddEthereumChainParameter;
};

const CHAIN_CONFIG: ChainConfig = {
  [ChainId.CRONOS_MAINNET]: {
    chainId: ChainId.CRONOS_MAINNET,
    chainName: "Cronos",
    nativeCurrency: {
      name: "CRO",
      symbol: "cro",
      decimals: 18,
    },
    rpcUrls: ["process.env.RPC_URL_25"], //FIXME
    blockExplorerUrls: [explorers[ChainId.CRONOS_MAINNET]],
  },
  [ChainId.CRONOS_TESTNET]: {
    chainId: 338,
    chainName: "Cronos Testnet",
    nativeCurrency: {
      name: "CRO",
      symbol: "cro",
      decimals: 18,
    },
    rpcUrls: ["process.env.RPC_URL_338"], //FIXME
    blockExplorerUrls: [explorers[ChainId.CRONOS_TESTNET]],
  },
};

export const getAddEthereumChainParameter = (
  chainId: ChainId
): AddEthereumChainParameter => {
  return CHAIN_CONFIG[chainId];
};
