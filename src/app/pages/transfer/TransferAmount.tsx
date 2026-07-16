import { useNavigate, useLocation } from "react-router";
import { useAccount } from "@/app/store/AccountContext";
import { AmountEntryPage } from "@/app/pages/shared/AmountEntryPage";
import { useRedirect } from "@/app/lib/useRedirect";

export function TransferAmountPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: account } = useAccount();
  const recipient = (location.state as { recipient?: string } | null)?.recipient;

  useRedirect(!recipient, "/transfer");
  if (!recipient) return null;

  return (
    <AmountEntryPage
      title="Transferir"
      subtitle={`¿Cuánto le querés transferir a ${recipient}?`}
      onBack={() => navigate("/transfer")}
      maxAmount={account.balance}
      onSubmit={(amount) => navigate("/transfer-confirm", { state: { recipient, amount } })}
    />
  );
}
