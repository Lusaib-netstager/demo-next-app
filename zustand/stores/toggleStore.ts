// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

interface TogglesState {
  toggles: {
    [toggleId: string]: boolean;
  };
}

export type ToggleActions = {
  toggle: (toggleId: string) => void;
  clearToggle: () => void;
};

export type ToggleStore = TogglesState & ToggleActions;

export const defaultInitState: TogglesState = {
  toggles: {},
};

export const createToggleStore = (
  initState: TogglesState = defaultInitState
) => {
  return createStore<ToggleStore>()((set) => ({
    ...initState,
    toggle: (toggleId) =>
      set((state) => {
        state.toggles[toggleId] = !state.toggles["toggleId"];
        return state;
      }),
    clearToggle: () => set(() => ({})),
  }));
};
