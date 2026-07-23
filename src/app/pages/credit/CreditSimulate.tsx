import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAccount } from "@/app/store/AccountContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";
import { computeInstallment } from "@/app/lib/loanMath";
import type { CreditProductKind } from "@/app/store/types";
import { CREDIT_CONFIG } from "./creditConfig";

export function CreditSimulatePage({ kind }: { kind: CreditProductKind }) {
  const navigate = useNavigate();
  const config = CREDIT_CONFIG[kind];
  const { state: account } = useAccount();
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState(config.installmentOptions[0]);
  const [error, setError] = useState("");

  const numeric = Number(amount.replace(",", "."));
  const valid = numeric > 0 && numeric <= config.maxAmount;
  const preview = valid ? computeInstallment(numeric, installments, config.rate) : null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!numeric) return;
    if (numeric > config.maxAmount) {
      setError(`El máximo disponible es ${formatCurrency(config.maxAmount)}`);
      return;
    }
    navigate(config.confirmPath, { state: { amount: numeric, installments } });
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={`Simular ${config.label.toLowerCase()}`} onBack={() => navigate(config.listPath)} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px] overflow-y-auto pb-[24px]">
        <div className="flex flex-col items-center gap-[8px] py-[16px]">
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">¿Cuánto necesitás?</p>
          <div className="flex items-center gap-[4px]">
            <p className="font-['Sora:Regular',sans-serif] text-[24px] text-[#191919]">$</p>
            <input
              autoFocus
              inputMode="decimal"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value.replace(/[^0-9,]/g, ""));
                setError("");
              }}
              placeholder="0,00"
              className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919] outline-none w-[220px] text-center bg-transparent"
            />
          </div>
          <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">
            Máximo disponible: {formatCurrency(config.maxAmount)}
          </p>
          {error && <p className="text-[13px] text-[#DF4730]">{error}</p>}
        </div>

        <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">Cuotas</p>
        <div className="flex flex-wrap gap-[8px]">
          {config.installmentOptions.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setInstallments(n)}
              className={`px-[16px] py-[8px] rounded-[8px] border cursor-pointer font-['Sora:Bold',sans-serif] text-[14px] ${
                installments === n ? "bg-[#df4730] border-[#df4730] text-white" : "border-[#e1e3ed] text-[#191919]"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        {preview && (
          <div className="rounded-[12px] border border-[#e1e3ed] p-[16px] flex flex-col gap-[8px] mt-[8px]">
            <Row label="Cuota mensual" value={formatCurrency(preview.monthlyPayment)} />
            <Row label="Total a pagar" value={formatCurrency(preview.totalToPay)} />
            <Row label="Tasa mensual (TNA simplificada)" value={`${(config.rate * 100).toFixed(0)}%`} />
          </div>
        )}

        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px]">
          Continuar
        </Button>
      </form>
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
