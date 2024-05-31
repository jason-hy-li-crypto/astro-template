export * from "./chainConfig";
export { currentWalletWithGlobalContext as currentWallet } from "./currentWalletWithGlobalContext";
export { useDesiredChain, useGlobalContextStore } from "./globalContext";
export * from "./walletConfigs";
export { braveWallet, defiWallet, getWallet, metaMask } from "./wallets";
export type { AddEthereumChainParameter } from "@react-web3-wallet/react";
