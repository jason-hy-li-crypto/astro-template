import { create } from "zustand";
import { persist } from "zustand/middleware";
import { persistentAtom } from "@nanostores/persistent";
type Store = {
  chainId: number;
  setChainId: (chainId: number) => void;
};

export const useChainIdZustandPersist = create<Store>()(
  persist(
    (set) => ({
      chainId: 25,
      setChainId(chainId) {
        set({ chainId });
      },
    }),
    {
      name: "chainId",
      version: 1,
    }
  )
);

export const useChainIdNanoPersist = persistentAtom<{ chainId: number }>(
  "nano-chainId",
  {
    chainId: 25,
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
