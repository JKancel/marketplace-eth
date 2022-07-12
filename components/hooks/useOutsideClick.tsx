import { RefObject, useCallback, useEffect, useState } from "react";

/**
 * Hooks that handles click outside of the given element (ref).
 * @param ref 
 * @returns 
 */
export const useOutsideClick = (ref: RefObject<Element>) => {
  const [isOutside, setIsOutside] = useState(false);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOutside(true);
    }
  }, [ref]);
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, isOutside, ref]);
  return {
    isOutside
  }
}