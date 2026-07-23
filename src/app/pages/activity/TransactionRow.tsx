import type { Transaction } from "@/app/store/types";
import { formatCurrency, formatDateTime } from "@/app/lib/format";
import { TRANSACTION_META } from "@/app/lib/transactionMeta";

export function TransactionRow({ transaction, onClick }: { transaction: Transaction; onClick?: () => void }) {
  const meta = TRANSACTION_META[transaction.type];
  const Icon = meta.icon;
  const isCredit = transaction.amount >= 0;

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-[12px] py-[8px] cursor-pointer text-left"
    >
      <div
        className={`size-[36px] rounded-[8px] flex items-center justify-center shrink-0 ${
          isCredit ? "bg-[#E8F6EE]" : "bg-[#F7F8FE]"
        }`}
      >
        <Icon size={18} color={isCredit ? "#289B4F" : "#191919"} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919] truncate">{transaction.counterparty}</p>
        <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d] truncate">{transaction.description}</p>
      </div>
      <div className="flex flex-col items-end shrink-0">
        <p className={`font-['Sora:Bold',sans-serif] text-[14px] ${isCredit ? "text-[#289B4F]" : "text-[#191919]"}`}>
          {isCredit ? "+" : "-"}
          {formatCurrency(Math.abs(transaction.amount))}
        </p>
        <p className="font-['Sora:Regular',sans-serif] text-[11px] text-[#78838d]">{formatDateTime(transaction.createdAt)}</p>
      </div>
    </button>
  );
}
