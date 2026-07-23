import { useNavigate, useLocation } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { ConfirmScreen } from "@/app/components/shared/ConfirmScreen";
import { formatCurrency } from "@/app/lib/format";
import { arsToUsd, formatUsd } from "@/app/lib/exchangeRate";
import { useRedirect } from "@/app/lib/useRedirect";

type State = { amount?: number };

export function ExchangeConfirmPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pay } = useWallet();
  const { amount } = (location.state as State | null) ?? {};

  useRedirect(!amount, "/intercambio");
  if (!amount) return null;

  const usd = arsToUsd(amount);
  const usdt = `${formatUsd(usd)} USDT`;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Confirmar cambio" onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <ConfirmScreen
          onConfirm={() => pay("exchange", amount, "Compra de USDT", `Cambio a ${usdt}`)}
          onSuccess={() =>
            navigate("/payment-success", {
              replace: true,
              state: { title: `Compraste ${usdt}`, amount, counterparty: "Compra de USDT" },
            })
          }
        >
          <div className="flex flex-col items-center gap-[8px] py-[24px]">
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Vas a convertir</p>
            <p className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919]">{formatCurrency(amount)}</p>
            <p className="font-['Sora:Bold',sans-serif] text-[18px] text-[#DF4730]">≈ {usdt}</p>
          </div>
        </ConfirmScreen>
      </div>
    </div>
  );
}
