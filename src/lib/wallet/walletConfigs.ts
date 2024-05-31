import { BraveWallet } from '@react-web3-wallet/brave-wallet';
import { DeFiWallet } from '@react-web3-wallet/defiwallet';
import { MetaMask } from '@react-web3-wallet/metamask';
import type { Connector, WalletName } from '@react-web3-wallet/react';

export interface WalletConfig {
  name: WalletName;
  title: string;
  icon: string;
  connector: Connector;
  getDownloadLink: (isMobile: boolean) => string | undefined;
}

export const walletConfigs: WalletConfig[] = [
  {
    title: 'MetaMask',
    name: MetaMask.walletName,
    icon: MetaMask.walletIcon,
    connector: new MetaMask({
      // p.isTrust is to enable using MetaMask to connect on DeFi Wallet
      // Brave wallet and MetaMask can't co-exist
      providerFilter: (p) =>
        (!!p.isMetaMask || !!p.isTrust) && !p.isBraveWallet,
    }),
    getDownloadLink: () => {
      if (typeof window === 'undefined') return undefined;

      return `https://metamask.app.link/dapp/${window.location.hostname}`;
    },
  },
  {
    title: 'Crypto.com DeFi Wallet',
    name: DeFiWallet.walletName,
    icon: DeFiWallet.walletIcon,
    connector: new DeFiWallet(),
    getDownloadLink: (isMobile: boolean) => {
      if (isMobile) return 'https://crypto.com/defi-wallet';

      return 'https://chrome.google.com/webstore/detail/cryptocom-wallet-extensio/hifafgmccdpekplomjjkcfgodnhcellj';
    },
  },
  {
    title: 'Brave Wallet',
    name: BraveWallet.walletName,
    icon: BraveWallet.walletIcon,
    connector: new BraveWallet(),
    getDownloadLink: () => undefined,
  },
];

// this function should not return undefined
export const getConfigByName = (name: WalletName): WalletConfig => {
   // eslint-disable-next-line
  // @ts-expect-error
  return walletConfigs.find((v) => v.name === name);
};
