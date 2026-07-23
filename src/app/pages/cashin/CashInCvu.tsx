import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import { useAccount } from "@/app/store/AccountContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";

function copy(value: string) {
  navigator.clipboard?.writeText(value).then(() => toast.success("Copiado al portapapeles"));
}

export function CashInCvuPage() {
  const navigate = useNavigate();
  const { state } = useAccount();

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Tu CVU" onBack={() => navigate("/home")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px] overflow-y-auto pb-[24px]">
        <Row label="CVU" value={state.cvu} />
        <Row label="Alias" value={state.alias} />
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
