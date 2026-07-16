import { useEffect, useRef } from "react";

/** Returns `schedule(fn, delay)`; any pending timeout is cleared on unmount so a
 * user navigating away mid-"processing" can't trigger a debit/credit + navigate later. */
export function useCancelableTimeout() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function schedule(fn: () => void, delay: number) {
    timeoutRef.current = setTimeout(fn, delay);
  }

  return schedule;
}
