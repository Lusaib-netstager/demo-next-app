import { localStorageUtil } from "@/utils";
import { useCallback } from "react";

/**
 * @author Lusaib latheef
 * @since 19-09-2023
 * Toggle hook to return the toggle state for a component.
 * This hook can handle even if there is multiple toggle state in the function
 */
const useToggle = () => {
  const toggle = useCallback((toggleId: string, checkIfTrue = false) => {
    const storedValue = localStorageUtil(toggleId);
    const currentValue = storedValue === "true";

    if ((checkIfTrue && currentValue) || !checkIfTrue) {
      localStorageUtil(toggleId, (!currentValue).toString());
    }
  }, []);

  const isOpen = useCallback((toggleId: string) => {
    const storedValue = localStorageUtil(toggleId);
    return storedValue === "true";
  }, []);

  return {
    isOpen,
    toggle,
  };
};

export default useToggle;
