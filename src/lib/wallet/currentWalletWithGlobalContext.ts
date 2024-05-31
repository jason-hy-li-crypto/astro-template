import { useMemo } from "react";

import { useDesiredChain, useGlobalContextStore } from "./globalContext";
import type { EnhancedCurrentWallet } from "./wallets";
import { currentWallet } from "./wallets";

const useIsWrongNetwork = (): boolean => {
  const chainId = currentWallet.useChainId();
  const isConnected = currentWallet.useIsConnected();
  const desiredChain = useDesiredChain();
  return isConnected && chainId !== desiredChain;
};

const useIsConnectedToSupportedChain = (): boolean => {
  const chainId = currentWallet.useChainId();
  const isConnected = currentWallet.useIsConnected();
  const desiredChain = useDesiredChain();
  return isConnected && chainId === desiredChain;
};

const useAccount = () => {
  const accountFromStore = useGlobalContextStore((s) => s.account);
  const accountFromWallet = currentWallet.useAccount();

  return useMemo(() => {
    // enable exclude prod
    // if (process.env.APP_ENV !== 'prod' && accountFromStore)
    // return accountFromStore;
    return accountFromWallet;
  }, [accountFromStore, accountFromWallet]);
};

const useIsReadOnly = (): boolean => {
  return !useIsConnectedToSupportedChain();
};

export const currentWalletWithGlobalContext: EnhancedCurrentWallet = {
  ...currentWallet,
  // override
  useIsWrongNetwork,
  useIsConnectedToSupportedChain,
  useAccount,
  useIsReadOnly,
};
