import { useNavigate, useParams } from "react-router";
import { ChevronRight } from "lucide-react";
import { useProducts } from "@/app/store/ProductsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Progress } from "@/app/components/ui/progress";
import { formatCurrency, formatShortDate } from "@/app/lib/format";
import { getLoanInstallments } from "@/app/lib/installments";
import { useRedirect } from "@/app/lib/useRedirect";

export function AdelantosCuotasPage() {
  const navigate = useNavigate();
  const { loanId } = useParams();
  const { products, advances } = useProducts();
  const loan = products.find((p) => p.id === loanId && p.kind === "loan");

  useRedirect(!loan, "/adelantos");
  if (!loan) return null;

  const installments = getLoanInstallments(loan, advances);

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Cuotas" onBack={() => navigate("/adelantos")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 overflow-y-auto px-[16px] pt-[16px] flex flex-col gap-[16px] pb-[24px]">
        {installments.map((installment) => {
          const pct = (installment.advancedSoFar / installment.amount) * 100;
          const lastAdvance = installment.advances[0];

          return (
            <button
              key={installment.number}
              type="button"
              onClick={() => navigate(`/adelantos/${loan.id}/${installment.number}`)}
              className="flex flex-col gap-[12px] p-[16px] rounded-[12px] border border-[#e1e3ed] cursor-pointer text-left"
            >
              <div className="flex items-center gap-[12px]">
                <div className="size-[36px] rounded-[8px] bg-[#FFE7E3] flex items-center justify-center shrink-0">
                  <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#DF4730]">$</p>
                </div>
                <div className="flex-1">
                  <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">
                    {formatCurrency(installment.amount)}
                  </p>
                  <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">
                    Adelantado {formatCurrency(installment.advancedSoFar)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[12px]">
                <Progress
                  value={pct}
                  className="h-[6px] bg-[#EDEFF7]"
                  indicatorClassName={pct >= 100 ? "bg-[#289B4F]" : "bg-[#DF4730]"}
                />
                <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] whitespace-nowrap">
                  Cuota {installment.number} de {loan.installments}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Ult. Solicitado</p>
                  <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#191919]">
                    {lastAdvance ? formatShortDate(lastAdvance.createdAt) : "—"}
                  </p>
                </div>
                <div>
                  <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Vencimiento</p>
                  <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#191919]">
                    {formatShortDate(installment.dueDate)}
                  </p>
                </div>
                <ChevronRight size={18} color="#78838d" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
