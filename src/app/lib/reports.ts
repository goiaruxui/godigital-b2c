import type { Transaction, TransactionType } from "@/app/store/types";
import { DEBIT_TYPES } from "@/app/store/useWallet";

export type ReportPeriod = "this-month" | "last-month" | "last-3-months";

export const REPORT_PERIODS: { id: ReportPeriod; label: string }[] = [
  { id: "this-month", label: "Este mes" },
  { id: "last-month", label: "Mes pasado" },
  { id: "last-3-months", label: "Últimos 3 meses" },
];

export function getPeriodRange(period: ReportPeriod, now: Date = new Date()): { start: Date; end: Date } {
  const end = new Date(now);
  if (period === "this-month") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    return { start, end };
  }
  if (period === "last-month") {
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastDayPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
    return { start, end: lastDayPrevMonth };
  }
  const start = new Date(now.getFullYear(), now.getMonth() - 2, 1);
  return { start, end };
}

export function filterByPeriod(transactions: Transaction[], period: ReportPeriod, now: Date = new Date()): Transaction[] {
  const { start, end } = getPeriodRange(period, now);
  return transactions.filter((t) => {
    const d = new Date(t.createdAt);
    return d >= start && d <= end;
  });
}

export function summarizeIncomeExpense(transactions: Transaction[]): { income: number; expense: number } {
  let income = 0;
  let expense = 0;
  for (const t of transactions) {
    if (t.amount >= 0) income += t.amount;
    else expense += Math.abs(t.amount);
  }
  return { income, expense };
}

/** Paleta categórica validada (orden fijo, primeros 4 slots — seguro incluso comparando todos los pares). */
export const CATEGORY_COLORS: Record<string, string> = {
  transfer_out: "#2a78d6",
  service_payment: "#eb6834",
  qr_payment: "#1baf7a",
  exchange: "#eda100",
};

export type CategoryBreakdown = { type: TransactionType; total: number; percentage: number };

export function getCategoryBreakdown(transactions: Transaction[]): CategoryBreakdown[] {
  const totals = new Map<TransactionType, number>();
  for (const t of transactions) {
    if (!DEBIT_TYPES.includes(t.type)) continue;
    totals.set(t.type, (totals.get(t.type) ?? 0) + Math.abs(t.amount));
  }
  const grandTotal = Array.from(totals.values()).reduce((a, b) => a + b, 0);
  return Array.from(totals.entries())
    .map(([type, total]) => ({ type, total, percentage: grandTotal > 0 ? Math.round((total / grandTotal) * 100) : 0 }))
    .sort((a, b) => b.total - a.total);
}
