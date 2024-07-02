"use client";

import { type ReactNode, createContext, useContext } from "react";
import { useStore } from "zustand";
import { ToggleStore, createToggleStore } from "../stores";

/**
 * @author Lusaib latheef
 * @description Provider to provide the toggle store to the application.
 */
export type ToggleStoreApi = ReturnType<typeof createToggleStore>;

/**
 * Context to provide the toggle store to the application.
 */
export const ToggleStoreContext = createContext<ToggleStoreApi | undefined>(
  undefined
);

/**
 * Custom hook to access the toggle store and retrieve selected data.
 * @param selector - A function that selects the desired data from the toggle store.
 * @returns The selected data from the toggle store.
 * @throws Error if used outside of the ToggleStoreProvider.
 */
export const useToggleStore = <T,>(selector: (store: ToggleStore) => T): T => {
  const toggleStoreContext = useContext(ToggleStoreContext);

  if (!toggleStoreContext) {
    throw new Error(`useToggleStore must be used within ToggleStoreProvider`);
  }

  return useStore(toggleStoreContext, selector);
};
