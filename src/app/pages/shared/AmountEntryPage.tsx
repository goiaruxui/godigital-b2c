import { useState, type FormEvent, type ReactNode } from "react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";

export function AmountEntryPage({
  title,
  header,
  subtitle,
  onBack,
  onSubmit,
  maxAmount,
}: {
  title: string;
  header?: ReactNode;
  subtitle?: string;
  onBack: () => void;
  onSubmit: (amount: number) => void;
  maxAmount?: number;
}) {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const numeric = Number(amount.replace(",", "."));
  const valid = numeric > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    if (maxAmount !== undefined && numeric > maxAmount) {
      setError("Saldo insuficiente");
      return;
    }
    onSubmit(numeric);
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={title} onBack={onBack} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[24px]">
        <div className="flex flex-col items-center gap-[8px] py-[24px]">
          {header}
          {subtitle && <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">{subtitle}</p>}
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
              className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919] outline-none w-[200px] text-center bg-transparent"
            />
          </div>
          {maxAmount !== undefined && (
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">
              Disponible: {formatCurrency(maxAmount)}
            </p>
          )}
          {error && <p className="text-[13px] text-[#DF4730]">{error}</p>}
        </div>
        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px] mb-[32px]">
          Continuar
        </Button>
      </form>
    </div>
  );
}
