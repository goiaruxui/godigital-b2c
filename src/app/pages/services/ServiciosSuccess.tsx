import { useNavigate, useLocation } from "react-router";
import { toast } from "sonner";
import { Check, Copy, Flag } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";
import { useRedirect } from "@/app/lib/useRedirect";

type State = {
  billerName?: string;
  account?: string;
  amount?: number;
  transactionId?: string;
};

function copy(value: string) {
  navigator.clipboard?.writeText(value).then(() => toast.success("Copiado al portapapeles"));
}

export function ServiciosSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state as State | null) ?? {};
  const { billerName, amount, transactionId } = state;

  useRedirect(!billerName || !amount || !transactionId, "/servicios");
  if (!billerName || !amount || !transactionId) return null;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <div className="absolute top-[44px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[16px] pb-[24px]">
        <div className="flex flex-col items-center gap-[8px] py-[40px]">
          <div className="size-[72px] rounded-full bg-[#EAF3DE] flex items-center justify-center">
            <Check size={32} color="#289B4F" />
          </div>
          <h1 className="font-['Sora:Bold',sans-serif] text-[20px] text-[#191919] text-center">¡Pago exitoso!</h1>
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d] text-center">
            El pago se ha realizado correctamente.
          </p>
        </div>

        <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">Detalle del pago</p>

        <div className="border border-[#e1e3ed] rounded-[8px] px-[16px] py-[12px]">
          <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Empresa</p>
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{billerName}</p>
        </div>

        <div className="border border-[#e1e3ed] rounded-[8px] px-[16px] py-[12px]">
          <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Importe</p>
          <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">{formatCurrency(amount)}</p>
        </div>

        <div className="flex items-center justify-between border border-[#e1e3ed] rounded-[8px] px-[16px] py-[12px]">
          <div>
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">N° transacción</p>
            <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{transactionId}</p>
          </div>
          <button type="button" onClick={() => copy(transactionId)} className="cursor-pointer" aria-label="Copiar número de transacción">
            <Copy size={18} color="#df4730" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => toast("Disponible próximamente")}
          className="flex items-center justify-center gap-[8px] py-[8px] font-['Sora:Bold',sans-serif] text-[14px] text-[#DF4730] cursor-pointer"
        >
          <Flag size={16} color="#DF4730" />
          Reportar un problema
        </button>

        <div className="flex-1" />

        <Button
          variant="outline"
          onClick={() => navigate("/activity")}
          className="h-[45px] rounded-[4px] border-[#DF4730] text-[#DF4730]"
        >
          Ver actividad
        </Button>
        <Button onClick={() => navigate("/servicios")} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px]">
          Volver a servicios
        </Button>
      </div>
    </div>
  );
}
