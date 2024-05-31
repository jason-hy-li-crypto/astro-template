import type { BaseContract, InterfaceAbi } from 'ethers';

import { ERC20 as ERC20Abi, WCRO as WCROAbi } from './abis';
import type { ContractAddressMap, ContractName } from './config';
import { getContractAddress } from './config';
import type { ERC20, SignerOrProvider, WCRO } from './types';
import type { ProviderOptions } from './utils';
import { getContract, getProvider } from './utils';

export type SDKOptions = {
  contractAddressMap?: ContractAddressMap;
  providerOptions: ProviderOptions;
};

export class SDK {
  private providerOptions: SDKOptions['providerOptions'];
  private contractAddressMap?: ContractAddressMap;

  constructor(options: SDKOptions) {
    const { providerOptions, contractAddressMap } = options;
    this.providerOptions = providerOptions;
    this.contractAddressMap = contractAddressMap;
  }

  private getContract = <T extends BaseContract = BaseContract>(
    address: string,
    abi: InterfaceAbi,
    signerOrProvider?: SignerOrProvider,
  ): T => {
    if (!signerOrProvider) {
      signerOrProvider = getProvider(this.providerOptions);
    }

    return getContract<T>(address, abi, signerOrProvider);
  };

  public getContractAddress = (contractName: ContractName) => {
    if (this.contractAddressMap) {
      return this.contractAddressMap[contractName];
    }

    return getContractAddress(this.providerOptions.chainId, contractName);
  };

  public getERC20 = (
    address: string,
    signerOrProvider?: SignerOrProvider,
  ): ERC20 => this.getContract<ERC20>(address, ERC20Abi, signerOrProvider);

  public getWCRO = (signerOrProvider?: SignerOrProvider) =>
    this.getContract<WCRO>(
      this.getContractAddress('WCRO'),
      WCROAbi,
      signerOrProvider,
    );
}
