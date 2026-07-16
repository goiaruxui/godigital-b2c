import type { CreditProductKind, TransactionType } from "@/app/store/types";

export type CreditConfig = {
  label: string;
  labelPlural: string;
  newLabel: string;
  rate: number;
  installmentOptions: number[];
  maxAmount: number;
  transactionType: TransactionType;
  listPath: string;
  simulatePath: string;
  confirmPath: string;
  detailPath: (id: string) => string;
};

export const CREDIT_CONFIG: Record<CreditProductKind, CreditConfig> = {
  loan: {
    label: "Préstamo",
    labelPlural: "Préstamos",
    newLabel: "Nuevo préstamo",
    rate: 0.08,
    installmentOptions: [3, 6, 12, 18, 24],
    maxAmount: 2_000_000,
    transactionType: "loan_disbursement",
    listPath: "/prestamos",
    simulatePath: "/prestamos/simular",
    confirmPath: "/prestamos/confirmar",
    detailPath: (id) => `/prestamos/${id}`,
  },
  advance: {
    label: "Adelanto",
    labelPlural: "Adelantos",
    newLabel: "Nuevo adelanto",
    rate: 0.05,
    installmentOptions: [1, 2, 3],
    maxAmount: 300_000,
    transactionType: "advance_disbursement",
    listPath: "/adelantos",
    simulatePath: "/adelantos/simular",
    confirmPath: "/adelantos/confirmar",
    detailPath: (id) => `/adelantos/${id}`,
  },
};
