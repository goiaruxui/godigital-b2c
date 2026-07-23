import type { CreditProduct, InstallmentAdvance } from "@/app/store/types";

/** Tasa flat aplicada a un adelanto sobre una cuota (se descuenta del monto solicitado). */
export const ADVANCE_INTEREST_RATE = 0.05;

export type InstallmentView = {
  number: number;
  amount: number;
  dueDate: string;
  advancedSoFar: number;
  available: number;
  advances: InstallmentAdvance[];
};

function addMonths(iso: string, months: number): string {
  const date = new Date(iso);
  date.setMonth(date.getMonth() + months);
  return date.toISOString();
}

/** Deriva las cuotas de un préstamo (no se persisten como entidad propia) a partir
 * del CreditProduct y el historial de adelantos ya pedidos contra cada una. */
export function getLoanInstallments(loan: CreditProduct, advances: InstallmentAdvance[]): InstallmentView[] {
  const loanAdvances = advances.filter((a) => a.loanId === loan.id);
  return Array.from({ length: loan.installments }, (_, i) => {
    const number = i + 1;
    const installmentAdvances = loanAdvances.filter((a) => a.installmentNumber === number);
    const advancedSoFar = installmentAdvances.reduce((sum, a) => sum + a.amount, 0);
    return {
      number,
      amount: loan.monthlyPayment,
      dueDate: addMonths(loan.createdAt, number),
      advancedSoFar,
      available: Math.max(0, loan.monthlyPayment - advancedSoFar),
      advances: installmentAdvances,
    };
  });
}

export function isLoanFinalizado(loan: CreditProduct, advances: InstallmentAdvance[]): boolean {
  return getLoanInstallments(loan, advances).every((installment) => installment.available <= 0);
}

export function daysUntil(iso: string): number {
  const diffMs = new Date(iso).getTime() - Date.now();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function computeAdvanceInterest(amount: number): number {
  return Math.round(amount * ADVANCE_INTEREST_RATE);
}
