import { useMemo } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { useWallet } from "@/app/store/useWallet";
import { TRANSACTION_META } from "@/app/lib/transactionMeta";
import { TransactionRow } from "@/app/pages/activity/TransactionRow";
import { filterByPeriod, type ReportPeriod } from "@/app/lib/reports";
import { useRedirect } from "@/app/lib/useRedirect";
import type { TransactionType } from "@/app/store/types";

export function ReportsCategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = useParams();
  const { transactions } = useWallet();
  const period = ((location.state as { period?: ReportPeriod } | null)?.period) ?? "this-month";

  const meta = type ? TRANSACTION_META[type as TransactionType] : undefined;
  useRedirect(!meta, "/reportes");

  const items = useMemo(
    () => filterByPeriod(transactions, period).filter((t) => t.type === type),
    [transactions, period, type],
  );

  if (!meta) return null;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={meta.label} onBack={() => navigate("/reportes")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[16px] overflow-y-auto flex flex-col pb-[24px]">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-[6px] py-[64px]">
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d] text-center w-[200px]">
              No hay movimientos de este tipo en el período seleccionado.
            </p>
          </div>
        ) : (
          items.map((t) => <TransactionRow key={t.id} transaction={t} onClick={() => navigate(`/activity/${t.id}`)} />)
        )}
      </div>
    </div>
  );
}
