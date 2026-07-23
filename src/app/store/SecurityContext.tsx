import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import { loadState, saveState } from "./storage";

const STORAGE_KEY = "security";

export type SecuritySettings = {
  faceIdEnabled: boolean;
  twoFactorEnabled: boolean;
  autoLockMinutes: number; // 0 = nunca
  hideAmountsInScreenshots: boolean;
};

const initialState: SecuritySettings = {
  faceIdEnabled: true,
  twoFactorEnabled: false,
  autoLockMinutes: 1,
  hideAmountsInScreenshots: false,
};

type Action =
  | { type: "TOGGLE_FACE_ID" }
  | { type: "TOGGLE_TWO_FACTOR" }
  | { type: "SET_AUTO_LOCK"; minutes: number }
  | { type: "TOGGLE_HIDE_AMOUNTS" }
  | { type: "RESTORE"; payload: SecuritySettings };

function reducer(state: SecuritySettings, action: Action): SecuritySettings {
  switch (action.type) {
    case "TOGGLE_FACE_ID":
      return { ...state, faceIdEnabled: !state.faceIdEnabled };
    case "TOGGLE_TWO_FACTOR":
      return { ...state, twoFactorEnabled: !state.twoFactorEnabled };
    case "SET_AUTO_LOCK":
      return { ...state, autoLockMinutes: action.minutes };
    case "TOGGLE_HIDE_AMOUNTS":
      return { ...state, hideAmountsInScreenshots: !state.hideAmountsInScreenshots };
    case "RESTORE":
      return action.payload;
    default:
      return state;
  }
}

type SecurityContextValue = {
  state: SecuritySettings;
  toggleFaceId: () => void;
  toggleTwoFactor: () => void;
  setAutoLockMinutes: (minutes: number) => void;
  toggleHideAmounts: () => void;
};

const SecurityContext = createContext<SecurityContextValue | null>(null);

export function SecurityProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => loadState(STORAGE_KEY, init));

  useEffect(() => {
    saveState(STORAGE_KEY, state);
  }, [state]);

  const value = useMemo<SecurityContextValue>(
    () => ({
      state,
      toggleFaceId: () => dispatch({ type: "TOGGLE_FACE_ID" }),
      toggleTwoFactor: () => dispatch({ type: "TOGGLE_TWO_FACTOR" }),
      setAutoLockMinutes: (minutes) => dispatch({ type: "SET_AUTO_LOCK", minutes }),
      toggleHideAmounts: () => dispatch({ type: "TOGGLE_HIDE_AMOUNTS" }),
    }),
    [state],
  );

  return <SecurityContext.Provider value={value}>{children}</SecurityContext.Provider>;
}

export function useSecurity() {
  const ctx = useContext(SecurityContext);
  if (!ctx) throw new Error("useSecurity must be used within SecurityProvider");
  return ctx;
}
