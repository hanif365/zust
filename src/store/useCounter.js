import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { produce } from "immer";

const initialState = {
  count: 0,
  age: 100,
};

const useCounter = create(
  devtools((set) => ({
    ...initialState,
    increment: (data) =>
      set(
        produce((state) => {
          state.count += data;
          state.age += data;
        })
      ),
    decrement: (data) =>
      set(
        produce((state) => {
          state.count -= data;
          state.age -= data;
        })
      ),
    reset: () => set(initialState),
  }))
);

export default useCounter;
