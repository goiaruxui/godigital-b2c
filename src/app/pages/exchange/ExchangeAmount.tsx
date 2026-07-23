import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronDown, ArrowUpDown } from "lucide-react";
import { useAccount } from "@/app/store/AccountContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";
import { arsToUsd } from "@/app/lib/exchangeRate";

function ArsFlagIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className="shrink-0">
      <circle cx="16" cy="16" r="16" fill="white" />
      <rect width="32" height="9.5" fill="#75AADB" />
      <rect y="22.5" width="32" height="9.5" fill="#75AADB" />
      <circle cx="16" cy="16" r="3.5" fill="#F4B32E" stroke="#DB7A2C" strokeWidth="0.6" />
    </svg>
  );
}

function UsdtIcon() {
  return (
    <div className="size-[32px] rounded-full bg-[#F7F8FE] flex items-center justify-center shrink-0">
      <span className="font-['Sora:Bold',sans-serif] text-[16px] text-[#78838d]">₮</span>
    </div>
  );
}

export function ExchangeAmountPage() {
  const navigate = useNavigate();
  const { state: account } = useAccount();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const numeric = Number(amount.replace(",", ".")) || 0;
  const valid = numeric > 0;
  const usd = valid ? arsToUsd(numeric) : 0;

  function handleUseAll() {
    setError("");
    setAmount(String(Math.floor(account.balance)));
  }

  function handleContinue() {
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
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[16px] flex flex-col">
        <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] mt-[8px]">Quiero intercambiar</p>
        <div className="flex items-center justify-between py-[8px] border-b-2 border-[#DF4730]">
          <div className="flex items-center gap-[12px] flex-1 min-w-0">
            <ArsFlagIcon />
            <input
              autoFocus
              inputMode="decimal"
              value={amount}
              onChange={(e) => {
                setError("");
                setAmount(e.target.value.replace(/[^0-9,]/g, ""));
              }}
              placeholder="0"
              className="font-['Sora:Regular',sans-serif] text-[28px] text-[#191919] outline-none bg-transparent w-full min-w-0"
            />
          </div>
          <div className="flex items-center gap-[4px] shrink-0">
            <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#DF4730]">ARS</p>
            <ChevronDown size={18} color="#DF4730" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-[8px]">
          <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">
            Disponible: {formatCurrency(account.balance)}
          </p>
          <button type="button" onClick={handleUseAll} className="font-['Sora:Bold',sans-serif] text-[14px] text-[#DF4730] cursor-pointer">
            Usar todo
          </button>
        </div>

        <div className="flex justify-center py-[12px]">
          <button type="button" className="cursor-pointer">
            <ArrowUpDown size={22} color="#DF4730" />
          </button>
        </div>

        <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">Quiero recibir</p>
        <div className="flex items-center justify-between py-[8px] border-b-2 border-[#BAC2C7]">
          <div className="flex items-center gap-[12px] flex-1 min-w-0">
            <UsdtIcon />
            <p className="font-['Sora:Regular',sans-serif] text-[28px] text-[#BAC2C7]">{valid ? usd.toFixed(2) : "0"}</p>
          </div>
          <div className="flex items-center gap-[4px] shrink-0">
            <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#DF4730]">USDT</p>
            <ChevronDown size={18} color="#DF4730" />
          </div>
        </div>

        {error && <p className="text-[13px] text-[#DF4730] text-center mt-[8px]">{error}</p>}

        <div className="flex-1" />

        <Button
          type="button"
          onClick={handleContinue}
          disabled={!valid}
          className={`h-[45px] rounded-[4px] mb-[32px] ${
            valid ? "bg-[#FF583F] hover:bg-[#DF4730] text-white" : "bg-[#EDEFF7] text-[#78838d]"
          }`}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
