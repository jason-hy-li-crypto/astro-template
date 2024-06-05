import { create } from "zustand";
import { persist } from "zustand/middleware";
type Store = {
  chainId: number;
  setChainId: (chainId: number) => void;
};

export const useChainId = create<Store>()(
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
