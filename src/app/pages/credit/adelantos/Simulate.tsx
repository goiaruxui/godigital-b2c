import { useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router";
import { useProducts } from "@/app/store/ProductsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";
import { getLoanInstallments } from "@/app/lib/installments";
import { useRedirect } from "@/app/lib/useRedirect";

export function AdelantoSimulatePage() {
  const navigate = useNavigate();
  const { loanId, number } = useParams();
  const { products, advances } = useProducts();
  const loan = products.find((p) => p.id === loanId && p.kind === "loan");
  const installment = loan ? getLoanInstallments(loan, advances).find((i) => i.number === Number(number)) : undefined;

  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useRedirect(!loan || !installment, "/adelantos");

  if (!loan || !installment) return null;

  const numeric = Number(amount.replace(",", "."));
  const valid = numeric > 0 && numeric <= installment.available;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!numeric) return;
    if (numeric > installment!.available) {
      setError(`El máximo disponible es ${formatCurrency(installment!.available)}`);
      return;
    }
    navigate(`/adelantos/${loan!.id}/${installment!.number}/confirmar`, { state: { amount: numeric } });
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Adelantos" onBack={() => navigate(`/adelantos/${loan.id}/${installment.number}`)} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px] overflow-y-auto pb-[24px]">
        <div className="flex flex-col items-center gap-[8px] py-[16px]">
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Ingresar importe</p>
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
            {formatCurrency(installment.available)} disponibles
          </p>
          {error && <p className="text-[13px] text-[#DF4730]">{error}</p>}
        </div>

        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px]">
          Simular adelanto
        </Button>
      </form>
    </div>
  );
}
