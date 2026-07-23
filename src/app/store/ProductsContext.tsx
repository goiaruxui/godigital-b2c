import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { CreditProduct, CreditProductKind, InstallmentAdvance } from "./types";
import { loadState, saveState } from "./storage";
import { computeInstallment } from "@/app/lib/loanMath";
import { computeAdvanceInterest } from "@/app/lib/installments";

const STORAGE_KEY = "products";
const ADVANCES_STORAGE_KEY = "advances";

const initialState: CreditProduct[] = [];
const initialAdvances: InstallmentAdvance[] = [];

type NewProduct = { kind: CreditProductKind; amount: number; installments: number; monthlyRate: number };
type NewAdvance = { loanId: string; installmentNumber: number; amount: number };

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

type AdvanceAction = { type: "ADD"; advance: InstallmentAdvance } | { type: "RESTORE"; payload: InstallmentAdvance[] };

function advancesReducer(state: InstallmentAdvance[], action: AdvanceAction): InstallmentAdvance[] {
  switch (action.type) {
    case "ADD":
      return [action.advance, ...state];
    case "RESTORE":
      return action.payload;
    default:
      return state;
  }
}

type ProductsContextValue = {
  products: CreditProduct[];
  addProduct: (input: NewProduct) => CreditProduct;
  advances: InstallmentAdvance[];
  addAdvance: (input: NewAdvance) => InstallmentAdvance;
};

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => loadState(STORAGE_KEY, init));
  const [advancesState, dispatchAdvance] = useReducer(advancesReducer, initialAdvances, (init) =>
    loadState(ADVANCES_STORAGE_KEY, init),
  );

  useEffect(() => {
    saveState(STORAGE_KEY, state);
  }, [state]);

  useEffect(() => {
    saveState(ADVANCES_STORAGE_KEY, advancesState);
  }, [advancesState]);

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
      advances: advancesState,
      addAdvance: ({ loanId, installmentNumber, amount }) => {
        const interest = computeAdvanceInterest(amount);
        const advance: InstallmentAdvance = {
          id: crypto.randomUUID(),
          loanId,
          installmentNumber,
          amount,
          interest,
          netAmount: amount - interest,
          createdAt: new Date().toISOString(),
        };
        dispatchAdvance({ type: "ADD", advance });
        return advance;
      },
    }),
    [state, advancesState],
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
}
