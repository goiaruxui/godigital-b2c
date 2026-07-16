import type { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { AccountProvider } from "./AccountContext";
import { TransactionsProvider } from "./TransactionsContext";
import { ProductsProvider } from "./ProductsContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AccountProvider>
        <TransactionsProvider>
          <ProductsProvider>{children}</ProductsProvider>
        </TransactionsProvider>
      </AccountProvider>
    </AuthProvider>
  );
}
