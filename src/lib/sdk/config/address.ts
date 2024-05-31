import { ChainId } from '../types';

export type ContractAddressMap = {
  WCRO: string;
  CronosId: string;
};

export type ContractName = keyof ContractAddressMap;

const ADDRESS_BY_CHAIN: {
  [key in ChainId]: ContractAddressMap;
} = {
  [ChainId.CRONOS_MAINNET]: {
    WCRO: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    CronosId: '0x7F4C61116729d5b27E5f180062Fdfbf32E9283E5',
  },
  [ChainId.CRONOS_TESTNET]: {
    WCRO: '0x6a3173618859C7cd40fAF6921b5E9eB6A76f1fD4',
    CronosId: '0x16a23bFBcE9c53998c90201629E4cDB40B81B127',
  },
};

export const getContractAddress = (
  chainId: ChainId,
  contractName: ContractName,
): string => {
  return ADDRESS_BY_CHAIN[chainId][contractName];
};

export const getEnsAddress = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.CRONOS_MAINNET:
    case ChainId.CRONOS_TESTNET:
      return getContractAddress(chainId, 'CronosId');
    default:
      throw new Error('unreachable');
  }
};
