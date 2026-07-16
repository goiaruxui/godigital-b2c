import { useEffect } from "react";
import { useNavigate } from "react-router";

/** Redirects to `to` when `condition` is true. Never call navigate() during render. */
export function useRedirect(condition: boolean, to: string) {
  const navigate = useNavigate();
  useEffect(() => {
    if (condition) navigate(to, { replace: true });
  }, [condition, to, navigate]);
}
