import { useNavigate } from "react-router";
import { Landmark, CreditCard, Banknote } from "lucide-react";
import { SheetShell } from "@/app/components/layout/SheetShell";

const METHODS = [
  { id: "transferencia", label: "Transferencia", description: "Compartí tu CVU o alias", icon: Landmark, to: "/cashin/cvu" },
  { id: "debito", label: "Débito inmediato", description: "Acreditación al instante", icon: CreditCard, to: "/cashin/amount" },
  { id: "efectivo", label: "Efectivo", description: "En puntos de pago adheridos", icon: Banknote, to: "/cashin/amount" },
];

// Se monta como overlay ARRIBA de la pantalla real desde la que se abrió
// (Home, u otra) — ver AppRoutes.tsx (SHEET_ROUTES) y useOpenSheet. No debe
// renderizar ningún fondo propio: eso lo provee la pantalla de atrás.
export function CashInMethodSheet() {
  const navigate = useNavigate();

  return (
    <SheetShell>
      <div className="bg-white rounded-t-[24px] p-[24px] flex flex-col gap-[16px]">
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
    </SheetShell>
  );
}
