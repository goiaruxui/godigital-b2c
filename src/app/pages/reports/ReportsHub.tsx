import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { ChevronRight, FileText } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { useWallet } from "@/app/store/useWallet";
import { TRANSACTION_META } from "@/app/lib/transactionMeta";
import { formatCurrency } from "@/app/lib/format";
import {
  REPORT_PERIODS,
  CATEGORY_COLORS,
  filterByPeriod,
  summarizeIncomeExpense,
  getCategoryBreakdown,
  type ReportPeriod,
} from "@/app/lib/reports";

function CustomTooltip({ active, payload }: { active?: boolean; payload?: { payload: { type: string; total: number; percentage: number } }[] }) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="bg-white border border-[#e1e3ed] rounded-[8px] px-[12px] py-[8px] shadow-md">
      <p className="font-['Sora:Bold',sans-serif] text-[12px] text-[#191919]">{TRANSACTION_META[item.type as keyof typeof TRANSACTION_META].label}</p>
      <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">
        {formatCurrency(item.total)} · {item.percentage}%
      </p>
    </div>
  );
}

export function ReportsHubPage() {
  const navigate = useNavigate();
  const { transactions } = useWallet();
  const [period, setPeriod] = useState<ReportPeriod>("this-month");

  const filtered = useMemo(() => filterByPeriod(transactions, period), [transactions, period]);
  const { income, expense } = useMemo(() => summarizeIncomeExpense(filtered), [filtered]);
  const breakdown = useMemo(() => getCategoryBreakdown(filtered), [filtered]);

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Reportes" onBack={() => navigate("/mas")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[24px] pb-[24px]">
        <div className="flex gap-[8px]">
          {REPORT_PERIODS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPeriod(p.id)}
              className={`px-[12px] py-[6px] rounded-[999px] text-[12px] font-['Sora:Bold',sans-serif] cursor-pointer ${
                period === p.id ? "bg-[#DF4730] text-white" : "bg-[#F7F8FE] text-[#78838d]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="flex gap-[12px]">
          <div className="flex-1 border border-[#e1e3ed] rounded-[8px] px-[16px] py-[12px]">
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Ingresos</p>
            <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#289B4F]">{formatCurrency(income)}</p>
          </div>
          <div className="flex-1 border border-[#e1e3ed] rounded-[8px] px-[16px] py-[12px]">
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Egresos</p>
            <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">{formatCurrency(expense)}</p>
          </div>
        </div>

        {breakdown.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-[6px] py-[32px]">
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d] text-center w-[220px]">
              No hay egresos para mostrar en este período.
            </p>
          </div>
        ) : (
          <>
            <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">Gastos por categoría</p>
            <div className="flex flex-col items-center gap-[16px]">
              <PieChart width={180} height={180}>
                <Pie
                  data={breakdown}
                  dataKey="total"
                  nameKey="type"
                  innerRadius={48}
                  outerRadius={80}
                  paddingAngle={3}
                  stroke="none"
                  isAnimationActive={false}
                >
                  {breakdown.map((entry) => (
                    <Cell key={entry.type} fill={CATEGORY_COLORS[entry.type]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>

              <div className="w-full flex flex-col gap-[8px]">
                {breakdown.map((entry) => {
                  const meta = TRANSACTION_META[entry.type];
                  return (
                    <button
                      key={entry.type}
                      type="button"
                      onClick={() => navigate(`/reportes/categoria/${entry.type}`, { state: { period } })}
                      className="w-full flex items-center gap-[12px] py-[4px] cursor-pointer text-left"
                    >
                      <span className="size-[10px] rounded-full shrink-0" style={{ background: CATEGORY_COLORS[entry.type] }} />
                      <p className="flex-1 font-['Sora:Regular',sans-serif] text-[13px] text-[#191919]">{meta.label}</p>
                      <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#191919]">{formatCurrency(entry.total)}</p>
                      <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d] w-[36px] text-right">{entry.percentage}%</p>
                      <ChevronRight size={16} color="#78838d" />
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        <button
          type="button"
          onClick={() => navigate("/reportes/constancias")}
          className="w-full flex items-center gap-[12px] py-[12px] px-[16px] border border-[#EDEFF7] rounded-[8px] cursor-pointer text-left"
        >
          <div className="size-[36px] rounded-[8px] bg-[#F7F8FE] flex items-center justify-center shrink-0">
            <FileText size={18} color="#191919" />
          </div>
          <p className="flex-1 font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">Constancias</p>
          <ChevronRight size={18} color="#78838d" />
        </button>
      </div>
    </div>
  );
}
