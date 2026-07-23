import { useNavigate, useLocation } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { ConfirmScreen } from "@/app/components/shared/ConfirmScreen";
import { formatCurrency } from "@/app/lib/format";
import { useRedirect } from "@/app/lib/useRedirect";

type State = { recipient?: string; amount?: number };

export function TransferConfirmPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pay } = useWallet();
  const { recipient, amount } = (location.state as State | null) ?? {};

  useRedirect(!recipient || !amount, "/transfer");
  if (!recipient || !amount) return null;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Confirmar" onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <ConfirmScreen
          onConfirm={() => pay("transfer_out", amount, recipient, "Transferencia enviada")}
          onSuccess={() =>
            navigate("/payment-success", {
              replace: true,
              state: { title: "Transferencia enviada", amount, counterparty: recipient },
            })
          }
        >
          <div className="flex flex-col items-center gap-[8px] py-[24px]">
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Vas a transferir</p>
            <p className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919]">{formatCurrency(amount)}</p>
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">a {recipient}</p>
          </div>
        </ConfirmScreen>
      </div>
    </div>
  );
}
