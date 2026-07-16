import { useNavigate } from "react-router";
import { Landmark, ChevronRight } from "lucide-react";
import { useProducts } from "@/app/store/ProductsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { formatCurrency } from "@/app/lib/format";
import type { CreditProductKind } from "@/app/store/types";
import { CREDIT_CONFIG } from "./creditConfig";

export function CreditListPage({ kind }: { kind: CreditProductKind }) {
  const navigate = useNavigate();
  const config = CREDIT_CONFIG[kind];
  const { products } = useProducts();
  const items = products.filter((p) => p.kind === kind);

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={config.labelPlural} onBack={() => navigate("/perfil")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[16px] overflow-y-auto flex flex-col gap-[16px] pb-[24px]">
        {items.length === 0 ? (
          <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] text-center py-[32px]">
            Todavía no tenés {config.labelPlural.toLowerCase()}.
          </p>
        ) : (
          items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(config.detailPath(item.id))}
              className="flex items-center gap-[12px] p-[16px] rounded-[12px] border border-[#e1e3ed] cursor-pointer text-left"
            >
              <div className="size-[40px] rounded-full bg-[#ffe7e3] flex items-center justify-center shrink-0">
                <Landmark size={18} color="#df4730" />
              </div>
              <div className="flex-1">
                <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{formatCurrency(item.amount)}</p>
                <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">
                  {item.installments} cuotas de {formatCurrency(item.monthlyPayment)}
                </p>
              </div>
              <ChevronRight size={18} color="#78838d" />
            </button>
          ))
        )}
        <div className="flex-1" />
        <Button
          onClick={() => navigate(config.simulatePath)}
          className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px]"
        >
          {config.newLabel}
        </Button>
      </div>
    </div>
  );
}
