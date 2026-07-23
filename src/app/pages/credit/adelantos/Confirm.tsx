import { useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { useAccount } from "@/app/store/AccountContext";
import { useTransactions } from "@/app/store/TransactionsContext";
import { useNotifications } from "@/app/store/NotificationsContext";
import { useProducts } from "@/app/store/ProductsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { ConfirmScreen } from "@/app/components/shared/ConfirmScreen";
import { formatCurrency } from "@/app/lib/format";
import { ADVANCE_INTEREST_RATE, computeAdvanceInterest, getLoanInstallments } from "@/app/lib/installments";
import { TRANSACTION_META } from "@/app/lib/transactionMeta";
import { useRedirect } from "@/app/lib/useRedirect";

type State = { amount?: number };

export function AdelantoConfirmPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loanId, number } = useParams();
  const { products, advances, addAdvance } = useProducts();
  const { credit } = useAccount();
  const { addTransaction } = useTransactions();
  const { addNotification } = useNotifications();
  const lastTxId = useRef("");

  const loan = products.find((p) => p.id === loanId && p.kind === "loan");
  const installment = loan ? getLoanInstallments(loan, advances).find((i) => i.number === Number(number)) : undefined;
  const { amount } = (location.state as State | null) ?? {};

  const fallbackPath = loan && installment ? `/adelantos/${loan.id}/${installment.number}/simular` : "/adelantos";
  useRedirect(!loan || !installment || !amount, fallbackPath);
  if (!loan || !installment || !amount) return null;

  const interest = computeAdvanceInterest(amount);
  const netAmount = amount - interest;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Adelantos" onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <ConfirmScreen
          idleLabel="Solicitar adelanto"
          onConfirm={() => {
            credit(netAmount);
            const tx = addTransaction({
              type: "advance_disbursement",
              amount: netAmount,
              counterparty: "Vos",
              description: `Adelanto sobre cuota ${installment.number} de ${loan.installments}`,
            });
            addNotification(TRANSACTION_META.advance_disbursement.label, `+${formatCurrency(netAmount)} · Vos`);
            addAdvance({ loanId: loan.id, installmentNumber: installment.number, amount });
            lastTxId.current = tx.id;
            return { ok: true };
          }}
          onSuccess={() =>
            navigate("/adelantos/exito", {
              replace: true,
              state: {
                loanId: loan.id,
                number: installment.number,
                netAmount,
                transactionId: lastTxId.current,
              },
            })
          }
        >
          <div className="flex flex-col gap-[8px] py-[16px]">
            <Row label="Adelanto" value={formatCurrency(amount)} />
            <Row label="Intereses" value={`-${formatCurrency(interest)}`} negative />
            <Row label="Recibes" value={formatCurrency(netAmount)} strong />
            <Row label="Tasa anual" value={`${(ADVANCE_INTEREST_RATE * 100).toFixed(2)}%`} />
          </div>
          <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">
            Al confirmar aceptas los <span className="text-[#DF4730]">términos generales</span> y las{" "}
            <span className="text-[#DF4730]">condiciones específicas</span> de este préstamo.
          </p>
        </ConfirmScreen>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  negative = false,
  strong = false,
}: {
  label: string;
  value: string;
  negative?: boolean;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-[8px] border-b border-[#edeff6]">
      <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">{label}</p>
      <p
        className={`font-['Sora:Bold',sans-serif] ${strong ? "text-[16px]" : "text-[14px]"} ${
          negative ? "text-[#DF4730]" : "text-[#191919]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
