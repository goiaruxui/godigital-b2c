import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { Transaction, TransactionType } from "./types";
import { loadState, saveState } from "./storage";

const STORAGE_KEY = "transactions";

const initialState: Transaction[] = [];

type NewTransaction = {
  type: TransactionType;
  amount: number;
  counterparty: string;
  description: string;
};

type Action = { type: "ADD"; transaction: Transaction } | { type: "RESTORE"; payload: Transaction[] };

function reducer(state: Transaction[], action: Action): Transaction[] {
  switch (action.type) {
    case "ADD":
      return [action.transaction, ...state];
    case "RESTORE":
      return action.payload;
    default:
      return state;
  }
}

type TransactionsContextValue = {
  transactions: Transaction[];
  addTransaction: (input: NewTransaction) => Transaction;
};

const TransactionsContext = createContext<TransactionsContextValue | null>(null);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => loadState(STORAGE_KEY, init));

  useEffect(() => {
    saveState(STORAGE_KEY, state);
  }, [state]);

  const value = useMemo<TransactionsContextValue>(
    () => ({
      transactions: state,
      addTransaction: (input) => {
        const transaction: Transaction = {
          ...input,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        };
        dispatch({ type: "ADD", transaction });
        return transaction;
      },
    }),
    [state],
  );

  return <TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>;
}

export function useTransactions() {
  const ctx = useContext(TransactionsContext);
  if (!ctx) throw new Error("useTransactions must be used within TransactionsProvider");
  return ctx;
}
