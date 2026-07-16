/** Flat-rate interest simulation: total = amount + amount * monthlyRate * installments. */
export function computeInstallment(amount: number, installments: number, monthlyRate: number) {
  const totalToPay = amount + amount * monthlyRate * installments;
  const monthlyPayment = totalToPay / installments;
  return { totalToPay, monthlyPayment };
}
