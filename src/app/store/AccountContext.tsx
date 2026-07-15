import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { AccountState, Card } from "./types";
import { loadState, saveState } from "./storage";

const STORAGE_KEY = "account";

function randomDigits(length: number) {
  let out = "";
  for (let i = 0; i < length; i++) out += Math.floor(Math.random() * 10);
  return out;
}

const defaultCards: Card[] = [
  { id: "card-prepaga", label: "Gollet PREPAGA", kind: "prepaga", last4: randomDigits(4), paused: false },
  { id: "card-credito", label: "Mastercard crédito", kind: "credito", last4: randomDigits(4), paused: false },
];

const initialState: AccountState = {
  balance: 0,
  cvu: randomDigits(22),
  alias: "gdi.wallet." + randomDigits(3),
  cards: defaultCards,
};

type Action =
  | { type: "CREDIT"; amount: number }
  | { type: "DEBIT"; amount: number }
  | { type: "TOGGLE_CARD_PAUSE"; cardId: string }
  | { type: "RESTORE"; payload: AccountState };

function reducer(state: AccountState, action: Action): AccountState {
  switch (action.type) {
    case "CREDIT":
      return { ...state, balance: state.balance + action.amount };
    case "DEBIT":
      return { ...state, balance: state.balance - action.amount };
    case "TOGGLE_CARD_PAUSE":
      return {
        ...state,
        cards: state.cards.map((c) => (c.id === action.cardId ? { ...c, paused: !c.paused } : c)),
      };
    case "RESTORE":
      return action.payload;
    default:
      return state;
  }
}

type AccountContextValue = {
  state: AccountState;
  credit: (amount: number) => void;
  debit: (amount: number) => void;
  canAfford: (amount: number) => boolean;
  toggleCardPause: (cardId: string) => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => loadState(STORAGE_KEY, init));

  useEffect(() => {
    saveState(STORAGE_KEY, state);
  }, [state]);

  const value = useMemo<AccountContextValue>(
    () => ({
      state,
      credit: (amount) => dispatch({ type: "CREDIT", amount }),
      debit: (amount) => dispatch({ type: "DEBIT", amount }),
      canAfford: (amount) => amount <= state.balance,
      toggleCardPause: (cardId) => dispatch({ type: "TOGGLE_CARD_PAUSE", cardId }),
    }),
    [state],
  );

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

export function useAccount() {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within AccountProvider");
  return ctx;
}
