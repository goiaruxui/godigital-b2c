import type { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { AccountProvider } from "./AccountContext";
import { TransactionsProvider } from "./TransactionsContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AccountProvider>
        <TransactionsProvider>{children}</TransactionsProvider>
      </AccountProvider>
    </AuthProvider>
  );
}
