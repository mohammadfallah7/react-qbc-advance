import { create } from "zustand";

type CounterStoreType = {
  value: number;
  increment: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterStoreType>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  reset: () => set(() => ({ value: 0 })),
}));

export default useCounterStore;
