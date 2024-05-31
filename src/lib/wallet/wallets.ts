import type { ChainId } from '@cronos-app/sdk';
import { BraveWallet } from '@react-web3-wallet/brave-wallet';
import { DeFiWallet } from '@react-web3-wallet/defiwallet';
import { MetaMask } from '@react-web3-wallet/metamask';
import type { CurrentWallet, Wallet, WalletName } from '@react-web3-wallet/react';
import { createCurrentWallet, createWallet } from '@react-web3-wallet/react';

import { getIsSupportedChainId } from './chainConfig';
import type { WalletConfig } from './walletConfigs';
import { getConfigByName } from './walletConfigs';

export const metaMask = createWallet(
  getConfigByName(MetaMask.walletName).connector,
);
export const defiWallet = createWallet(
  getConfigByName(DeFiWallet.walletName).connector,
);
export const braveWallet = createWallet(
  getConfigByName(BraveWallet.walletName).connector,
);

const walletMap: Record<WalletName, Wallet> = {
  [MetaMask.walletName]: metaMask,
  [DeFiWallet.walletName]: defiWallet,
  [BraveWallet.walletName]: braveWallet,
};

export const getWallet = (walletName: WalletName): Wallet => {
  const wallet = walletMap[walletName];

  if (wallet) return wallet;

  throw new Error(`unknown wallet ${walletName}`);
};

const _currentWallet = createCurrentWallet([metaMask, defiWallet, braveWallet]);

const { useWalletName, useChainId, useIsConnected } = _currentWallet;

const useWalletConfig = (): WalletConfig => {
  return getConfigByName(useWalletName());
};

const useIsConnectedToSupportedChain = (): boolean => {
  const chainId = useChainId();
  const isConnected = useIsConnected();

  return isConnected && getIsSupportedChainId(chainId);
};

const useSupportedChainId = (): ChainId | undefined => {
  const { useChainId } = _currentWallet;
  const chainId = useChainId();

  return chainId && getIsSupportedChainId(chainId) ? chainId : undefined;
};

const useIsWrongNetwork = (): boolean => {
  const chainId = useChainId();
  const isConnected = useIsConnected();

  return isConnected && !getIsSupportedChainId(chainId);
};

const useIsReadOnly = (): boolean => {
  return !useIsConnectedToSupportedChain();
};

export type EnhancedCurrentWallet = CurrentWallet & {
  useWalletConfig: typeof useWalletConfig;
  useIsConnectedToSupportedChain: typeof useIsConnectedToSupportedChain;
  useIsReadOnly: typeof useIsReadOnly;
  useIsWrongNetwork: typeof useIsWrongNetwork;
  useSupportedChainId: typeof useSupportedChainId;
};

export const currentWallet: EnhancedCurrentWallet = {
  ..._currentWallet,
  useWalletConfig,
  useIsConnectedToSupportedChain,
  useIsReadOnly,
  useIsWrongNetwork,
  useSupportedChainId,
};
