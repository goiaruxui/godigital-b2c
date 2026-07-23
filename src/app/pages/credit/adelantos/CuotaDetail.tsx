import { useNavigate, useParams } from "react-router";
import { Check } from "lucide-react";
import { useProducts } from "@/app/store/ProductsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { formatCurrency, formatShortDate } from "@/app/lib/format";
import { ADVANCE_INTEREST_RATE, daysUntil, getLoanInstallments } from "@/app/lib/installments";
import { useRedirect } from "@/app/lib/useRedirect";

export function AdelantoCuotaDetailPage() {
  const navigate = useNavigate();
  const { loanId, number } = useParams();
  const { products, advances } = useProducts();
  const loan = products.find((p) => p.id === loanId && p.kind === "loan");
  const installment = loan ? getLoanInstallments(loan, advances).find((i) => i.number === Number(number)) : undefined;

  useRedirect(!loan || !installment, "/adelantos");
  if (!loan || !installment) return null;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Detalle" onBack={() => navigate(`/adelantos/${loan.id}`)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 overflow-y-auto px-[24px] pb-[24px]">
        <div className="flex items-center gap-[12px] py-[16px]">
          <div className="size-[36px] rounded-[8px] bg-[#FFE7E3] flex items-center justify-center shrink-0">
            <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#DF4730]">$</p>
          </div>
          <p className="font-['Sora:Bold',sans-serif] text-[20px] text-[#191919] flex-1">
            {formatCurrency(installment.amount)}
          </p>
          <span
            className={`px-[10px] py-[4px] rounded-[100px] text-[12px] font-['Sora:Bold',sans-serif] ${
              installment.available > 0 ? "bg-[#EAF3DE] text-[#289B4F]" : "bg-[#EDEFF7] text-[#78838d]"
            }`}
          >
            {installment.available > 0 ? "Vigente" : "Finalizada"}
          </span>
        </div>
        <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] pb-[16px]">
          Cuota {installment.number} de {loan.installments}
        </p>

        <Row label="Disponible" value={formatCurrency(installment.available)} />
        <Row label="Tasa anual" value={`${(ADVANCE_INTEREST_RATE * 100).toFixed(2)}%`} />
        <Row label="Vencimiento" value={formatShortDate(installment.dueDate)} />
        <Row label="Días pendientes" value={`${daysUntil(installment.dueDate)} días`} last />

        {installment.available > 0 && (
          <button
            type="button"
            onClick={() => navigate(`/adelantos/${loan.id}/${installment.number}/simular`)}
            className="w-full py-[16px] font-['Sora:Bold',sans-serif] text-[14px] text-[#DF4730] cursor-pointer text-center"
          >
            Simular adelanto
          </button>
        )}

        {installment.advances.length > 0 && (
          <div className="flex flex-col gap-[16px] mt-[8px]">
            {installment.advances.map((advance) => (
              <div key={advance.id} className="flex items-center gap-[12px] py-[8px] border-t border-[#edeff6]">
                <div className="size-[32px] rounded-full bg-[#EAF3DE] flex items-center justify-center shrink-0">
                  <Check size={16} color="#289B4F" />
                </div>
                <div className="flex-1">
                  <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">
                    {formatCurrency(advance.amount)}
                  </p>
                  <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">
                    Pedido el {formatShortDate(advance.createdAt)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Intereses</p>
                  <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#DF4730]">
                    {formatCurrency(advance.interest)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-[12px] ${last ? "" : "border-b border-[#edeff6]"}`}>
      <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">{label}</p>
      <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{value}</p>
    </div>
  );
}
