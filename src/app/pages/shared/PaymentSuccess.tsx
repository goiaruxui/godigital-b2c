import { useNavigate, useLocation } from "react-router";
import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";
import { useRedirect } from "@/app/lib/useRedirect";

type PaymentSuccessState = {
  title: string;
  amount: number;
  counterparty: string;
};

export function PaymentSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as PaymentSuccessState | null;

  useRedirect(!state, "/home");
  if (!state) return null;

  return (
    <div className="relative size-full bg-white flex flex-col items-center justify-center gap-[12px] px-[24px] text-center">
      <div className="size-[72px] rounded-full bg-[#ffe7e3] flex items-center justify-center">
        <Check size={32} color="#df4730" />
      </div>
      <h1 className="font-['Sora:Bold',sans-serif] text-[20px] text-[#191919]">{state.title}</h1>
      <p className="font-['Sora:Bold',sans-serif] text-[32px] text-[#191919]">{formatCurrency(state.amount)}</p>
      <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">a {state.counterparty}</p>
      <div className="flex flex-col gap-[12px] w-full mt-[24px]">
        <Button
          variant="outline"
          onClick={() => navigate("/activity")}
          className="h-[45px] rounded-[4px] border-[#DF4730] text-[#DF4730]"
        >
          Ver actividad
        </Button>
        <Button onClick={() => navigate("/home")} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px]">
          Ir al inicio
        </Button>
      </div>
    </div>
  );
}
