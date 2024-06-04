import { create } from "zustand";
import { persist } from "zustand/middleware";
type Store = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

const useGlobalStore = create<Store>()(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "bears",
      version: 1,
    }
  )
);
const { getState, setState, subscribe, destroy } = useGlobalStore;

export { getState, setState, subscribe, destroy, useGlobalStore };
