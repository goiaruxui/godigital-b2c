import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { ProcessingSpinner } from "@/app/pages/shared/ProcessingSpinner";
import { formatCurrency } from "@/app/lib/format";
import { useRedirect } from "@/app/lib/useRedirect";

type State = { recipient?: string; amount?: number };

export function TransferConfirmPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pay } = useWallet();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const { recipient, amount } = (location.state as State | null) ?? {};

  useRedirect(!recipient || !amount, "/transfer");
  if (!recipient || !amount) return null;

  function handleConfirm() {
    setProcessing(true);
    setTimeout(() => {
      const result = pay("transfer_out", amount!, recipient!, "Transferencia enviada");
      if (!result.ok) {
        setProcessing(false);
        setError(result.error);
        return;
      }
      navigate("/payment-success", {
        replace: true,
        state: { title: "Transferencia enviada", amount, counterparty: recipient },
      });
    }, 1200);
  }

  if (processing) return <ProcessingSpinner label="Enviando transferencia..." />;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Confirmar" onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <div className="flex flex-col items-center gap-[8px] py-[24px]">
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Vas a transferir</p>
          <p className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919]">{formatCurrency(amount)}</p>
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">a {recipient}</p>
        </div>
        {error && <p className="text-[13px] text-[#d4183d] text-center">{error}</p>}
        <div className="flex-1" />
        <Button onClick={handleConfirm} className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] mb-[32px]">
          Confirmar transferencia
        </Button>
      </div>
    </div>
  );
}
