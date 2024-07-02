import { ReactNode, useRef } from "react";
import { ToggleStoreApi, ToggleStoreContext } from "./toggleStoreProviders";
import { createToggleStore } from "../stores";

/**
 * @author Lusaib Latheef
 * Provides a context for the toggle store.
 *
 * @param children - The children components to be wrapped by the provider.
 * @returns The provider component.
 */
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const toggleRef = useRef<ToggleStoreApi>();
  if (!toggleRef.current) {
    toggleRef.current = createToggleStore();
  }

  return (
    <ToggleStoreContext.Provider value={toggleRef.current}>
      {children}
    </ToggleStoreContext.Provider>
  );
};
