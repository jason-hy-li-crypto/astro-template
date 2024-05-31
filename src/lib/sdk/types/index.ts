import type { Provider,Signer  } from 'ethers';

export * from './contracts';

export enum ChainId {
  CRONOS_MAINNET = 25,
  CRONOS_TESTNET = 338,
}

export type SignerOrProvider = Signer | Provider;
