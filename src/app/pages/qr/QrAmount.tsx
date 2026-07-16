import { useNavigate, useLocation } from "react-router";
import { useAccount } from "@/app/store/AccountContext";
import { AmountEntryPage } from "@/app/pages/shared/AmountEntryPage";
import { useRedirect } from "@/app/lib/useRedirect";

export function QrAmountPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: account } = useAccount();
  const merchant = (location.state as { merchant?: string } | null)?.merchant;

  useRedirect(!merchant, "/qr");
  if (!merchant) return null;

  return (
    <AmountEntryPage
      title={merchant}
      subtitle="¿Cuánto vas a pagar?"
      onBack={() => navigate("/qr")}
      maxAmount={account.balance}
      onSubmit={(amount) => navigate("/qr-confirm", { state: { merchant, amount } })}
    />
  );
}
