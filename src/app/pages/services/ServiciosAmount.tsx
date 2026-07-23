import { useNavigate, useLocation, useParams } from "react-router";
import { AmountEntryPage } from "@/app/pages/shared/AmountEntryPage";
import { BillerAvatar } from "@/app/components/shared/BillerAvatar";
import { getBiller } from "@/app/lib/billers";
import { useRedirect } from "@/app/lib/useRedirect";

type State = { account?: string };

export function ServiciosAmountPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { billerId } = useParams();
  const biller = billerId ? getBiller(billerId) : undefined;
  const { account } = (location.state as State | null) ?? {};

  useRedirect(!biller || !account, biller ? `/servicios/${billerId}` : "/servicios");
  if (!biller || !account) return null;

  return (
    <AmountEntryPage
      title="Ingresa el monto"
      header={
        <div className="flex flex-col items-center gap-[8px] mb-[8px]">
          <BillerAvatar name={biller.name} size={48} />
          <div className="text-center">
            <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">{biller.name}</p>
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">{biller.shortLabel}</p>
          </div>
        </div>
      }
      subtitle="Ingresar importe"
      onBack={() => navigate(`/servicios/${biller.id}`)}
      onSubmit={(amount) => navigate(`/servicios/${biller.id}/pagar`, { state: { account, amount } })}
    />
  );
}
