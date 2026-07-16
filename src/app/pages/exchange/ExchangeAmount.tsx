import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAccount } from "@/app/store/AccountContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";
import { ARS_PER_USD, arsToUsd, formatUsd } from "@/app/lib/exchangeRate";

export function ExchangeAmountPage() {
  const navigate = useNavigate();
  const { state: account } = useAccount();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const numeric = Number(amount.replace(",", "."));
  const valid = numeric > 0;
  const usd = valid ? arsToUsd(numeric) : 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    if (numeric > account.balance) {
      setError("Saldo insuficiente");
      return;
    }
    navigate("/intercambio/confirmar", { state: { amount: numeric } });
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Intercambiar" onBack={() => navigate("/mas")} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <div className="flex flex-col items-center gap-[8px] py-[24px]">
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">¿Cuántos pesos querés convertir a dólares?</p>
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
            Disponible: {formatCurrency(account.balance)} · Cotización: {formatCurrency(ARS_PER_USD)} por USD
          </p>
          {valid && <p className="font-['Sora:Bold',sans-serif] text-[18px] text-[#df4730]">≈ {formatUsd(usd)}</p>}
          {error && <p className="text-[13px] text-[#d4183d]">{error}</p>}
        </div>
        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] mb-[32px]">
          Continuar
        </Button>
      </form>
    </div>
  );
}
