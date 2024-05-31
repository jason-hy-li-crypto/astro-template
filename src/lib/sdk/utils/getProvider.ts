import { JsonRpcProvider } from 'ethers';

import { getEnsAddress } from '../config';
import type { ChainId } from '../types';

export interface ProviderOptions {
  chainName: string;
  chainId: ChainId;
  rpcUrl: string;
  ensAddress?: string;
  wsUrl?: string;
}

export function createProvider(
  providerOptions: ProviderOptions,
): JsonRpcProvider {
  const { chainName, chainId, rpcUrl, ensAddress } = providerOptions;

  return new JsonRpcProvider(rpcUrl, {
    name: chainName,
    chainId,
    ensAddress: ensAddress ?? getEnsAddress(chainId),
  });
}

export function createWsProvider(
  providerOptions: ProviderOptions,
): JsonRpcProvider {
  const { chainName, chainId, wsUrl, ensAddress } = providerOptions;

  if (!wsUrl) throw new Error(`must wsUrl wsUrl`);

  return new JsonRpcProvider(wsUrl, {
    name: chainName,
    chainId,
    ensAddress: ensAddress ?? getEnsAddress(chainId),
  });
}

/**
 * providers are created and cached in a record with the
 *  chainId as the access key
 */
type ProviderMap = Map<ChainId, JsonRpcProvider>;
const providerMap: ProviderMap = new Map<ChainId, JsonRpcProvider>();

export function getProvider(
  providerOptions: ProviderOptions,
): JsonRpcProvider {
  const chainId = providerOptions.chainId;

  if (!providerMap.get(chainId)) {
    const provider = createProvider(providerOptions);
    providerMap.set(chainId, provider);
  }
  // eslint-disable-next-line
  // @ts-expect-error
  return providerMap.get(chainId);
}
