import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { useProducts } from "@/app/store/ProductsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { ProcessingSpinner } from "@/app/pages/shared/ProcessingSpinner";
import { formatCurrency } from "@/app/lib/format";
import { computeInstallment } from "@/app/lib/loanMath";
import { useRedirect } from "@/app/lib/useRedirect";
import { useCancelableTimeout } from "@/app/lib/useCancelableTimeout";
import type { CreditProductKind } from "@/app/store/types";
import { CREDIT_CONFIG } from "./creditConfig";

type State = { amount?: number; installments?: number };

export function CreditConfirmPage({ kind }: { kind: CreditProductKind }) {
  const navigate = useNavigate();
  const location = useLocation();
  const config = CREDIT_CONFIG[kind];
  const { pay } = useWallet();
  const { addProduct } = useProducts();
  const [processing, setProcessing] = useState(false);
  const { amount, installments } = (location.state as State | null) ?? {};
  const schedule = useCancelableTimeout();

  useRedirect(!amount || !installments, config.simulatePath);
  if (!amount || !installments) return null;

  const { totalToPay, monthlyPayment } = computeInstallment(amount, installments, config.rate);

  function handleConfirm() {
    setProcessing(true);
    schedule(() => {
      addProduct({ kind, amount: amount!, installments: installments!, monthlyRate: config.rate });
      pay(config.transactionType, amount!, config.label, `${config.label} acreditado en ${installments} cuotas`);
      navigate("/payment-success", {
        replace: true,
        state: { title: `${config.label} acreditado`, amount, counterparty: "Vos" },
      });
    }, 1400);
  }

  if (processing) return <ProcessingSpinner label={`Procesando tu ${config.label.toLowerCase()}...`} />;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Confirmar" onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <div className="flex flex-col items-center gap-[8px] py-[16px]">
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Vas a solicitar</p>
          <p className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919]">{formatCurrency(amount)}</p>
        </div>
        <div className="rounded-[12px] border border-[#e1e3ed] p-[16px] flex flex-col gap-[8px]">
          <Row label="Cuotas" value={String(installments)} />
          <Row label="Cuota mensual" value={formatCurrency(monthlyPayment)} />
          <Row label="Total a pagar" value={formatCurrency(totalToPay)} />
        </div>
        <div className="flex-1" />
        <Button onClick={handleConfirm} className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] mb-[32px]">
          Confirmar {config.label.toLowerCase()}
        </Button>
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
