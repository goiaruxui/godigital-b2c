import { useAccount } from "./AccountContext";
import { useTransactions } from "./TransactionsContext";
import { useNotifications } from "./NotificationsContext";
import { formatCurrency } from "@/app/lib/format";
import { TRANSACTION_META } from "@/app/lib/transactionMeta";
import type { TransactionType } from "./types";

const DEBIT_TYPES: TransactionType[] = ["transfer_out", "qr_payment", "service_payment", "exchange"];

export function useWallet() {
  const { state: account, credit, debit, canAfford, toggleCardPause } = useAccount();
  const { transactions, addTransaction } = useTransactions();
  const { addNotification } = useNotifications();

  function notify(type: TransactionType, amount: number, counterparty: string) {
    const isDebit = DEBIT_TYPES.includes(type);
    const title = TRANSACTION_META[type].label;
    const body = `${isDebit ? "-" : "+"}${formatCurrency(amount)} · ${counterparty}`;
    addNotification(title, body);
  }

  function cashIn(amount: number, description: string) {
    credit(amount);
    notify("cashin", amount, "Vos");
    return addTransaction({ type: "cashin", amount, counterparty: "Vos", description });
  }

  function pay(
    type: Exclude<TransactionType, "cashin">,
    amount: number,
    counterparty: string,
    description: string,
  ): { ok: true } | { ok: false; error: string } {
    const isDebit = DEBIT_TYPES.includes(type);
    if (isDebit && !canAfford(amount)) {
      return { ok: false, error: "Saldo insuficiente" };
    }
    if (isDebit) {
      debit(amount);
      addTransaction({ type, amount: -amount, counterparty, description });
    } else {
      credit(amount);
      addTransaction({ type, amount, counterparty, description });
    }
    notify(type, amount, counterparty);
    return { ok: true };
  }

  return { account, transactions, cashIn, pay, canAfford, toggleCardPause };
}
