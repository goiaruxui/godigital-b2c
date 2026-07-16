import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { CreditProduct, CreditProductKind } from "./types";
import { loadState, saveState } from "./storage";
import { computeInstallment } from "@/app/lib/loanMath";

const STORAGE_KEY = "products";

const initialState: CreditProduct[] = [];

type NewProduct = { kind: CreditProductKind; amount: number; installments: number; monthlyRate: number };

type Action = { type: "ADD"; product: CreditProduct } | { type: "RESTORE"; payload: CreditProduct[] };

function reducer(state: CreditProduct[], action: Action): CreditProduct[] {
  switch (action.type) {
    case "ADD":
      return [action.product, ...state];
    case "RESTORE":
      return action.payload;
    default:
      return state;
  }
}

type ProductsContextValue = {
  products: CreditProduct[];
  addProduct: (input: NewProduct) => CreditProduct;
};

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => loadState(STORAGE_KEY, init));

  useEffect(() => {
    saveState(STORAGE_KEY, state);
  }, [state]);

  const value = useMemo<ProductsContextValue>(
    () => ({
      products: state,
      addProduct: ({ kind, amount, installments, monthlyRate }) => {
        const { totalToPay, monthlyPayment } = computeInstallment(amount, installments, monthlyRate);
        const product: CreditProduct = {
          id: crypto.randomUUID(),
          kind,
          amount,
          installments,
          monthlyRate,
          monthlyPayment,
          totalToPay,
          createdAt: new Date().toISOString(),
        };
        dispatch({ type: "ADD", product });
        return product;
      },
    }),
    [state],
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
}
