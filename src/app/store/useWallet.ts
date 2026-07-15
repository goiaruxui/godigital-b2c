import { useAccount } from "./AccountContext";
import { useTransactions } from "./TransactionsContext";
import type { TransactionType } from "./types";

const DEBIT_TYPES: TransactionType[] = ["transfer_out", "qr_payment", "service_payment"];

export function useWallet() {
  const { state: account, credit, debit, canAfford, toggleCardPause } = useAccount();
  const { transactions, addTransaction } = useTransactions();

  function cashIn(amount: number, description: string) {
    credit(amount);
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
    return { ok: true };
  }

  return { account, transactions, cashIn, pay, canAfford, toggleCardPause };
}
