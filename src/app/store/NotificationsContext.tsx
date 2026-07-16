import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { Notification } from "./types";
import { loadState, saveState } from "./storage";

const STORAGE_KEY = "notifications";

const initialState: Notification[] = [];

type Action =
  | { type: "ADD"; notification: Notification }
  | { type: "MARK_ALL_READ" }
  | { type: "CLEAR" }
  | { type: "RESTORE"; payload: Notification[] };

function reducer(state: Notification[], action: Action): Notification[] {
  switch (action.type) {
    case "ADD":
      return [action.notification, ...state];
    case "MARK_ALL_READ":
      return state.map((n) => ({ ...n, read: true }));
    case "CLEAR":
      return [];
    case "RESTORE":
      return action.payload;
    default:
      return state;
  }
}

type NotificationsContextValue = {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (title: string, body: string) => void;
  markAllRead: () => void;
  clear: () => void;
};

const NotificationsContext = createContext<NotificationsContextValue | null>(null);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => loadState(STORAGE_KEY, init));

  useEffect(() => {
    saveState(STORAGE_KEY, state);
  }, [state]);

  const value = useMemo<NotificationsContextValue>(
    () => ({
      notifications: state,
      unreadCount: state.filter((n) => !n.read).length,
      addNotification: (title, body) =>
        dispatch({
          type: "ADD",
          notification: { id: crypto.randomUUID(), title, body, createdAt: new Date().toISOString(), read: false },
        }),
      markAllRead: () => dispatch({ type: "MARK_ALL_READ" }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [state],
  );

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext);
  if (!ctx) throw new Error("useNotifications must be used within NotificationsProvider");
  return ctx;
}
