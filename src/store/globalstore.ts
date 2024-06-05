import { create } from "zustand";
import { persist } from "zustand/middleware";
type Store = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useGlobalStore = create<Store>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
