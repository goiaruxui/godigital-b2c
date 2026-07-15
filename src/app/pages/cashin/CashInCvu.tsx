import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import { useAccount } from "@/app/store/AccountContext";
import { useWallet } from "@/app/store/useWallet";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";

function copy(value: string) {
  navigator.clipboard?.writeText(value).then(() => toast.success("Copiado al portapapeles"));
}

export function CashInCvuPage() {
  const navigate = useNavigate();
  const { state } = useAccount();
  const { cashIn } = useWallet();
  const [amount, setAmount] = useState("");
  const [processing, setProcessing] = useState(false);
  const numeric = Number(amount.replace(",", "."));
  const valid = numeric > 0;

  function simulateIncomingTransfer() {
    if (!valid) return;
    setProcessing(true);
    setTimeout(() => {
      cashIn(numeric, "Transferencia recibida");
      toast.success(`Recibiste ${formatCurrency(numeric)}`);
      navigate("/home");
    }, 1800);
  }

  if (processing) {
    return (
      <div className="relative size-full bg-white flex flex-col items-center justify-center gap-[16px]">
        <div className="size-[40px] rounded-full border-4 border-[#ffe7e3] border-t-[#df4730] animate-spin" />
        <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Esperando la transferencia...</p>
      </div>
    );
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Tu CVU" onBack={() => navigate("/home")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px] overflow-y-auto pb-[24px]">
        <Row label="CVU" value={state.cvu} />
        <Row label="Alias" value={state.alias} />

        <div className="border-t border-[#e1e3ed] pt-[16px] mt-[8px] flex flex-col gap-[8px]">
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">Simular transferencia recibida</p>
          <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">
            Como es un prototipo sin banco real, simulá acá el monto que "te transfirieron" a este CVU/alias.
          </p>
          <div className="flex items-center gap-[4px] py-[16px] justify-center">
            <p className="font-['Sora:Regular',sans-serif] text-[20px] text-[#191919]">$</p>
            <input
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9,]/g, ""))}
              placeholder="0,00"
              className="font-['Sora:Bold',sans-serif] text-[28px] text-[#191919] outline-none w-[160px] text-center bg-transparent"
            />
          </div>
        </div>

        <div className="flex-1" />
        <Button
          onClick={simulateIncomingTransfer}
          disabled={!valid}
          className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px]"
        >
          Simular transferencia
        </Button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border border-[#e1e3ed] rounded-[8px] px-[16px] py-[12px]">
      <div>
        <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">{label}</p>
        <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{value}</p>
      </div>
      <button type="button" onClick={() => copy(value)} className="cursor-pointer" aria-label={`Copiar ${label}`}>
        <Copy size={18} color="#df4730" />
      </button>
    </div>
  );
}
