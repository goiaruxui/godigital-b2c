import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { AccountState, Card } from "./types";
import { loadState, saveState } from "./storage";

const STORAGE_KEY = "account";

function randomDigits(length: number) {
  let out = "";
  for (let i = 0; i < length; i++) out += Math.floor(Math.random() * 10);
  return out;
}

function makeCard(id: string, label: string, kind: Card["kind"], bin: string, monthlyLimit: number): Card {
  const cardNumber = bin + randomDigits(16 - bin.length);
  return {
    id,
    label,
    kind,
    cardNumber,
    last4: cardNumber.slice(-4),
    paused: false,
    pin: "1234",
    monthlyLimit,
  };
}

const defaultCards: Card[] = [
  makeCard("card-prepaga", "Gollet PREPAGA", "prepaga", "4517", 150000),
  makeCard("card-credito", "Mastercard crédito", "credito", "5299", 300000),
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
  | { type: "SET_CARD_PIN"; cardId: string; pin: string }
  | { type: "SET_CARD_LIMIT"; cardId: string; monthlyLimit: number }
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
    case "SET_CARD_PIN":
      return {
        ...state,
        cards: state.cards.map((c) => (c.id === action.cardId ? { ...c, pin: action.pin } : c)),
      };
    case "SET_CARD_LIMIT":
      return {
        ...state,
        cards: state.cards.map((c) => (c.id === action.cardId ? { ...c, monthlyLimit: action.monthlyLimit } : c)),
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
  setCardPin: (cardId: string, pin: string) => void;
  setCardLimit: (cardId: string, monthlyLimit: number) => void;
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
      setCardPin: (cardId, pin) => dispatch({ type: "SET_CARD_PIN", cardId, pin }),
      setCardLimit: (cardId, monthlyLimit) => dispatch({ type: "SET_CARD_LIMIT", cardId, monthlyLimit }),
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
