import type { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { AccountProvider } from "./AccountContext";
import { TransactionsProvider } from "./TransactionsContext";
import { ProductsProvider } from "./ProductsContext";
import { NotificationsProvider } from "./NotificationsContext";
import { SecurityProvider } from "./SecurityContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AccountProvider>
        <TransactionsProvider>
          <NotificationsProvider>
            <ProductsProvider>
              <SecurityProvider>{children}</SecurityProvider>
            </ProductsProvider>
          </NotificationsProvider>
        </TransactionsProvider>
      </AccountProvider>
    </AuthProvider>
  );
}
