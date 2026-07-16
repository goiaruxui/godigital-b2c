import type { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { AccountProvider } from "./AccountContext";
import { TransactionsProvider } from "./TransactionsContext";
import { ProductsProvider } from "./ProductsContext";
import { NotificationsProvider } from "./NotificationsContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AccountProvider>
        <TransactionsProvider>
          <NotificationsProvider>
            <ProductsProvider>{children}</ProductsProvider>
          </NotificationsProvider>
        </TransactionsProvider>
      </AccountProvider>
    </AuthProvider>
  );
}
