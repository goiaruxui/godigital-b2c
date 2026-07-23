import { useNavigate } from "react-router";
import { Landmark, CreditCard, Banknote } from "lucide-react";
import { HomePage } from "@/app/pages/home/Home";

const METHODS = [
  { id: "transferencia", label: "Transferencia", description: "Compartí tu CVU o alias", icon: Landmark, to: "/cashin/cvu" },
  { id: "debito", label: "Débito inmediato", description: "Acreditación al instante", icon: CreditCard, to: "/cashin/amount" },
  { id: "efectivo", label: "Efectivo", description: "En puntos de pago adheridos", icon: Banknote, to: "/cashin/amount" },
];

export function CashInMethodSheet() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full">
      <HomePage />
      <div className="absolute inset-0 bg-black/40 cursor-pointer" onClick={() => navigate(-1)} />
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] p-[24px] flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">Ingresar dinero</p>
          <button type="button" onClick={() => navigate(-1)} className="font-['Sora:Bold',sans-serif] text-[14px] text-[#df4730] cursor-pointer">
            Cerrar
          </button>
        </div>
        {METHODS.map(({ id, label, description, icon: Icon, to }) => (
          <button
            key={id}
            type="button"
            onClick={() => navigate(to)}
            className="w-full flex items-center gap-[12px] py-[8px] cursor-pointer text-left"
          >
            <div className="size-[36px] rounded-[8px] bg-[#F7F8FE] flex items-center justify-center shrink-0">
              <Icon size={18} color="#191919" />
            </div>
            <div>
              <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{label}</p>
              <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
