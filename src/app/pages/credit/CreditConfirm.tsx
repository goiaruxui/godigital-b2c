import { useNavigate, useLocation } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { useProducts } from "@/app/store/ProductsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { ConfirmScreen } from "@/app/components/shared/ConfirmScreen";
import { formatCurrency } from "@/app/lib/format";
import { computeInstallment } from "@/app/lib/loanMath";
import { useRedirect } from "@/app/lib/useRedirect";
import type { CreditProductKind } from "@/app/store/types";
import { CREDIT_CONFIG } from "./creditConfig";

type State = { amount?: number; installments?: number };

export function CreditConfirmPage({ kind }: { kind: CreditProductKind }) {
  const navigate = useNavigate();
  const location = useLocation();
  const config = CREDIT_CONFIG[kind];
  const { pay } = useWallet();
  const { addProduct } = useProducts();
  const { amount, installments } = (location.state as State | null) ?? {};

  useRedirect(!amount || !installments, config.simulatePath);
  if (!amount || !installments) return null;

  const { totalToPay, monthlyPayment } = computeInstallment(amount, installments, config.rate);

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Confirmar" onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <ConfirmScreen
          onConfirm={() => {
            addProduct({ kind, amount, installments, monthlyRate: config.rate });
            return pay(config.transactionType, amount, config.label, `${config.label} acreditado en ${installments} cuotas`);
          }}
          onSuccess={() =>
            navigate("/payment-success", {
              replace: true,
              state: { title: `${config.label} acreditado`, amount, counterparty: "Vos" },
            })
          }
        >
          <div className="flex flex-col items-center gap-[8px] py-[16px]">
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Vas a solicitar</p>
            <p className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919]">{formatCurrency(amount)}</p>
          </div>
          <div className="rounded-[12px] border border-[#e1e3ed] p-[16px] flex flex-col gap-[8px]">
            <Row label="Cuotas" value={String(installments)} />
            <Row label="Cuota mensual" value={formatCurrency(monthlyPayment)} />
            <Row label="Total a pagar" value={formatCurrency(totalToPay)} />
          </div>
        </ConfirmScreen>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">{label}</p>
      <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#191919]">{value}</p>
    </div>
  );
}
