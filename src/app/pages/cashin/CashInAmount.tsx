import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useWallet } from "@/app/store/useWallet";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";
import { useOpenSheet } from "@/app/routes/useOpenSheet";

export function CashInAmountPage() {
  const navigate = useNavigate();
  const openSheet = useOpenSheet();
  const { cashIn } = useWallet();
  const [amount, setAmount] = useState("");
  const numeric = Number(amount.replace(",", "."));
  const valid = numeric > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    cashIn(numeric, "Ingreso de dinero");
    toast.success(`Ingresaste ${formatCurrency(numeric)}`);
    navigate("/home");
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Ingresar dinero" onBack={() => openSheet("/cashin")} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[24px]">
        <div className="flex flex-col items-center gap-[8px] py-[24px]">
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">¿Cuánto querés ingresar?</p>
          <div className="flex items-center gap-[4px]">
            <p className="font-['Sora:Regular',sans-serif] text-[24px] text-[#191919]">$</p>
            <input
              autoFocus
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9,]/g, ""))}
              placeholder="0,00"
              className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919] outline-none w-[200px] text-center bg-transparent"
            />
          </div>
        </div>
        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px] mb-[32px]">
          Confirmar
        </Button>
      </form>
    </div>
  );
}
