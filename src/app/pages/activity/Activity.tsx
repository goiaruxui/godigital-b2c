import { useNavigate } from "react-router";
import { useWallet } from "@/app/store/useWallet";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { BottomNav } from "@/app/components/layout/BottomNav";
import { TransactionRow } from "./TransactionRow";

function groupByDay(transactions: ReturnType<typeof useWallet>["transactions"]) {
  const groups = new Map<string, typeof transactions>();
  for (const t of transactions) {
    const day = new Date(t.createdAt).toLocaleDateString("es-AR", { day: "2-digit", month: "long", year: "numeric" });
    const list = groups.get(day) ?? [];
    list.push(t);
    groups.set(day, list);
  }
  return groups;
}

export function ActivityPage() {
  const navigate = useNavigate();
  const { transactions } = useWallet();
  const groups = groupByDay(transactions);

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <div className="absolute top-[44px] left-0 right-0 h-[52px] flex items-center px-[16px]">
        <p className="font-['Sora:Bold',sans-serif] text-[18px] text-[#191919]">Actividad</p>
      </div>
      <div className="absolute top-[96px] left-0 right-0 bottom-[64px] overflow-y-auto px-[16px]">
        {transactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-[6px] py-[64px]">
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d] text-center w-[200px]">
              Aún no hay movimientos para mostrar aquí.
            </p>
          </div>
        ) : (
          Array.from(groups.entries()).map(([day, items]) => (
            <div key={day} className="flex flex-col gap-[4px] mb-[16px]">
              <p className="font-['Sora:Bold',sans-serif] text-[12px] text-[#78838d] uppercase pt-[8px]">{day}</p>
              {items.map((t) => (
                <TransactionRow key={t.id} transaction={t} onClick={() => navigate(`/activity/${t.id}`)} />
              ))}
            </div>
          ))
        )}
      </div>
      <BottomNav />
    </div>
  );
}
