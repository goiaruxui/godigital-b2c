import { useNavigate, useLocation } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { ConfirmScreen } from "@/app/components/shared/ConfirmScreen";
import { formatCurrency } from "@/app/lib/format";
import { useRedirect } from "@/app/lib/useRedirect";

type State = { merchant?: string; amount?: number };

export function QrConfirmPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pay } = useWallet();
  const { merchant, amount } = (location.state as State | null) ?? {};

  useRedirect(!merchant || !amount, "/qr");
  if (!merchant || !amount) return null;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Confirmar pago" onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <ConfirmScreen
          onConfirm={() => pay("qr_payment", amount, merchant, "Pago con QR")}
          onSuccess={() =>
            navigate("/payment-success", {
              replace: true,
              state: { title: "Pago realizado", amount, counterparty: merchant },
            })
          }
        >
          <div className="flex flex-col items-center gap-[8px] py-[24px]">
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Vas a pagar</p>
            <p className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919]">{formatCurrency(amount)}</p>
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">a {merchant}</p>
          </div>
        </ConfirmScreen>
      </div>
    </div>
  );
}
