import { ChainId } from "@cronos-app/sdk";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const DEFAULT_CHAIN_OF_ENV = ChainId.CRONOS_TESTNET;
//  const DEFAULT_CHAIN_OF_ENV =
//   process.env.APP_ENV === 'uat' || process.env.APP_ENV === 'prod'
//     ? ChainId.CRONOS_MAINNET
//     : ChainId.CRONOS_TESTNET;

/**
 * prevent from using this store directly, use wrapped hooks instead
 */
export const useGlobalContextStore = create(
  persist<{
    chainId: ChainId;
    account?: string;
  }>(
    () => ({
      chainId: DEFAULT_CHAIN_OF_ENV,
    }),
    {
      name: "__GLOBAL_CONTEXT__",
      version: 2,
    }
  )
);

export const useDesiredChain = () => useGlobalContextStore((s) => s.chainId);
