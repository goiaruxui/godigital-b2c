import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import { useProducts } from "@/app/store/ProductsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";
import { formatCurrency, formatShortDate } from "@/app/lib/format";
import { getLoanInstallments, isLoanFinalizado } from "@/app/lib/installments";

export function AdelantosListPage() {
  const navigate = useNavigate();
  const { products, advances } = useProducts();
  const [tab, setTab] = useState<"vigentes" | "finalizados">("vigentes");

  const loans = products.filter((p) => p.kind === "loan");
  const filtered = loans.filter((loan) => isLoanFinalizado(loan, advances) === (tab === "finalizados"));

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Adelantos" onBack={() => navigate("/mas")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 flex flex-col">
        <div className="flex px-[24px] border-b border-[#e1e3ed]">
          <TabButton label="Vigentes" active={tab === "vigentes"} onClick={() => setTab("vigentes")} />
          <TabButton label="Finalizados" active={tab === "finalizados"} onClick={() => setTab("finalizados")} />
        </div>

        <div className="flex-1 overflow-y-auto px-[16px] pt-[16px] flex flex-col gap-[16px] pb-[24px]">
          {loans.length === 0 ? (
            <div className="flex flex-col items-center gap-[16px] py-[32px]">
              <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] text-center">
                Todavía no tenés préstamos activos para pedir un adelanto.
              </p>
              <Button
                onClick={() => navigate("/prestamos/simular")}
                className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px] px-[24px]"
              >
                Pedir un préstamo
              </Button>
            </div>
          ) : filtered.length === 0 ? (
            <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] text-center py-[32px]">
              No tenés préstamos {tab === "finalizados" ? "finalizados" : "vigentes"}.
            </p>
          ) : (
            filtered.map((loan) => {
              const installments = getLoanInstallments(loan, advances);
              const advancedTotal = installments.reduce((sum, i) => sum + i.advancedSoFar, 0);
              const pct = (advancedTotal / loan.amount) * 100;
              const nextDue = installments.find((i) => i.available > 0) ?? installments[installments.length - 1];

              return (
                <button
                  key={loan.id}
                  type="button"
                  onClick={() => navigate(`/adelantos/${loan.id}`)}
                  className="flex flex-col gap-[12px] p-[16px] rounded-[12px] border border-[#e1e3ed] cursor-pointer text-left"
                >
                  <div className="flex items-center gap-[12px]">
                    <div className="size-[36px] rounded-[8px] bg-[#FFE7E3] flex items-center justify-center shrink-0">
                      <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#DF4730]">$</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">
                        {formatCurrency(loan.amount)}
                      </p>
                      <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">
                        Adelantado {formatCurrency(advancedTotal)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <Progress value={pct} className="h-[6px] bg-[#EDEFF7]" indicatorClassName="bg-[#DF4730]" />
                    <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] whitespace-nowrap">
                      {loan.installments} cuotas
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Ingreso</p>
                      <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#191919]">
                        {formatShortDate(loan.createdAt)}
                      </p>
                    </div>
                    <div>
                      <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Próximo vto.</p>
                      <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#191919]">
                        {formatShortDate(nextDue.dueDate)}
                      </p>
                    </div>
                    <ChevronRight size={18} color="#78838d" />
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-[12px] font-['Sora:Bold',sans-serif] text-[16px] border-b-2 cursor-pointer ${
        active ? "border-[#DF4730] text-[#DF4730]" : "border-transparent text-[#78838d]"
      }`}
    >
      {label}
    </button>
  );
}
