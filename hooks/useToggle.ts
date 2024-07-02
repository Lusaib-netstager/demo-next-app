"use client";

import { useToggleStore } from "@/zustand";
import { useCallback } from "react";

/**
 * @author Lusaib latheef
 * @since 19-09-2023
 * Toggle hook to return the toggle state for a component.
 * This hook can handle even if there is multiple toggle state in the function
 */
const useToggle = () => {
  const { toggle, toggles } = useToggleStore((state) => state);

  const toggleToggle = useCallback(
    (toggleId: string, checkIfTrue = false) => {
      if ((checkIfTrue && toggles[toggleId]) || !checkIfTrue) {
        toggle(toggleId);
      }
    },
    [toggles]
  );

  const isOpen = useCallback(
    (toggleId: string) => {
      return toggles[toggleId] || false;
    },
    [toggles]
  );

  return {
    isOpen,
    toggle: toggleToggle,
  };
};

export default useToggle;
