// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type SidebarState = {
  open: boolean;
};

export type SidebarActions = {
  openSidebar: () => void;
  closeSidebar: () => void;
};

export type SidebarStore = SidebarState & SidebarActions;

export const defaultInitState: SidebarState = {
  open: false,
};

export const createSidebarStore = (
  initState: SidebarState = defaultInitState
) => {
  return createStore<SidebarStore>()((set) => ({
    ...initState,
    openSidebar: () => set(() => ({ open: true })),
    closeSidebar: () => set(() => ({ open: false })),
  }));
};
