import { useNavigate, useParams } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { formatCurrency, formatDateTime } from "@/app/lib/format";
import { TRANSACTION_META } from "./transactionMeta";
import { ActivityPage } from "./Activity";

export function TransactionDetailSheet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { transactions } = useWallet();
  const transaction = transactions.find((t) => t.id === id);

  if (!transaction) {
    navigate("/activity", { replace: true });
    return null;
  }

  const meta = TRANSACTION_META[transaction.type];
  const Icon = meta.icon;
  const isCredit = transaction.amount >= 0;

  return (
    <div className="relative size-full">
      <ActivityPage />
      <div className="absolute inset-0 bg-black/40 cursor-pointer" onClick={() => navigate(-1)} />
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] p-[24px] flex flex-col items-center gap-[16px]">
        <div className="flex items-center justify-between w-full">
          <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">Detalle</p>
          <button type="button" onClick={() => navigate(-1)} className="font-['Sora:Bold',sans-serif] text-[14px] text-[#df4730] cursor-pointer">
            Listo
          </button>
        </div>
        <div className="size-[56px] rounded-full bg-[#ffe7e3] flex items-center justify-center">
          <Icon size={24} color="#df4730" />
        </div>
        <p className={`font-['Sora:Bold',sans-serif] text-[28px] ${isCredit ? "text-[#1f9254]" : "text-[#191919]"}`}>
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
    </div>
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
