import { useNavigate, useParams } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { formatCurrency, formatDateTime } from "@/app/lib/format";
import { TRANSACTION_META } from "@/app/lib/transactionMeta";
import { useRedirect } from "@/app/lib/useRedirect";
import { SheetShell } from "@/app/components/layout/SheetShell";

// Se monta como overlay ARRIBA de la pantalla real desde la que se abrió
// (Home o Actividad) — ver AppRoutes.tsx (SHEET_ROUTES) y useOpenSheet. No
// debe renderizar ningún fondo propio: eso lo provee la pantalla de atrás.
export function TransactionDetailSheet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { transactions } = useWallet();
  const transaction = transactions.find((t) => t.id === id);

  useRedirect(!transaction, "/activity");
  if (!transaction) return null;

  const meta = TRANSACTION_META[transaction.type];
  const Icon = meta.icon;
  const isCredit = transaction.amount >= 0;

  return (
    <SheetShell>
      <div className="bg-white rounded-t-[24px] p-[24px] flex flex-col items-center gap-[16px]">
        <div className="flex items-center justify-between w-full">
          <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">Detalle</p>
          <button type="button" onClick={() => navigate(-1)} className="font-['Sora:Bold',sans-serif] text-[14px] text-[#df4730] cursor-pointer">
            Listo
          </button>
        </div>
        <div className={`size-[56px] rounded-full flex items-center justify-center ${isCredit ? "bg-[#E8F6EE]" : "bg-[#F7F8FE]"}`}>
          <Icon size={24} color={isCredit ? "#289B4F" : "#191919"} />
        </div>
        <p className={`font-['Sora:Bold',sans-serif] text-[28px] ${isCredit ? "text-[#289B4F]" : "text-[#191919]"}`}>
          {isCredit ? "+" : "-"}
          {formatCurrency(Math.abs(transaction.amount))}
        </p>
        <div className="w-full flex flex-col gap-[12px] pt-[8px]">
          <Row label="Tipo" value={meta.label} />
          <Row label="Contraparte" value={transaction.counterparty} />
          <Row label="Descripción" value={transaction.description} />
          <Row label="Fecha" value={formatDateTime(transaction.createdAt)} />
        </div>
      </div>
    </SheetShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">{label}</p>
      <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#191919]">{value}</p>
    </div>
  );
}
