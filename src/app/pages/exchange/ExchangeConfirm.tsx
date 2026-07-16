import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { ProcessingSpinner } from "@/app/pages/shared/ProcessingSpinner";
import { formatCurrency } from "@/app/lib/format";
import { arsToUsd, formatUsd } from "@/app/lib/exchangeRate";
import { useRedirect } from "@/app/lib/useRedirect";
import { useCancelableTimeout } from "@/app/lib/useCancelableTimeout";

type State = { amount?: number };

export function ExchangeConfirmPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pay } = useWallet();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const { amount } = (location.state as State | null) ?? {};
  const schedule = useCancelableTimeout();

  useRedirect(!amount, "/intercambio");
  if (!amount) return null;

  const usd = arsToUsd(amount);

  function handleConfirm() {
    setProcessing(true);
    schedule(() => {
      const result = pay("exchange", amount!, "Compra de USD", `Cambio a ${formatUsd(usd)}`);
      if (!result.ok) {
        setProcessing(false);
        setError(result.error);
        return;
      }
      navigate("/payment-success", {
        replace: true,
        state: { title: `Compraste ${formatUsd(usd)}`, amount, counterparty: "Compra de USD" },
      });
    }, 1400);
  }

  if (processing) return <ProcessingSpinner label="Procesando cambio..." />;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Confirmar cambio" onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <div className="flex flex-col items-center gap-[8px] py-[24px]">
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Vas a convertir</p>
          <p className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919]">{formatCurrency(amount)}</p>
          <p className="font-['Sora:Bold',sans-serif] text-[18px] text-[#df4730]">≈ {formatUsd(usd)}</p>
        </div>
        {error && <p className="text-[13px] text-[#d4183d] text-center">{error}</p>}
        <div className="flex-1" />
        <Button onClick={handleConfirm} className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] mb-[32px]">
          Confirmar cambio
        </Button>
      </div>
    </div>
  );
}
