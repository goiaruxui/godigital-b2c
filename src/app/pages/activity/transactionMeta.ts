import type { TransactionType } from "@/app/store/types";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowLeftRight,
  QrCode,
  Receipt,
  Landmark,
  ArrowRightLeft,
} from "lucide-react";

export const TRANSACTION_META: Record<TransactionType, { label: string; icon: typeof ArrowDownToLine }> = {
  cashin: { label: "Ingreso de dinero", icon: ArrowDownToLine },
  transfer_out: { label: "Transferencia enviada", icon: ArrowUpFromLine },
  transfer_in: { label: "Transferencia recibida", icon: ArrowLeftRight },
  qr_payment: { label: "Pago con QR", icon: QrCode },
  service_payment: { label: "Pago de servicio", icon: Receipt },
  loan_disbursement: { label: "Préstamo acreditado", icon: Landmark },
  advance_disbursement: { label: "Adelanto acreditado", icon: Landmark },
  exchange: { label: "Intercambio", icon: ArrowRightLeft },
};
