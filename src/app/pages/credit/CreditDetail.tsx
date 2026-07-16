import { useNavigate, useParams } from "react-router";
import { useProducts } from "@/app/store/ProductsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { formatCurrency, formatDateTime } from "@/app/lib/format";
import { useRedirect } from "@/app/lib/useRedirect";
import type { CreditProductKind } from "@/app/store/types";
import { CREDIT_CONFIG } from "./creditConfig";

export function CreditDetailPage({ kind }: { kind: CreditProductKind }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const config = CREDIT_CONFIG[kind];
  const { products } = useProducts();
  const product = products.find((p) => p.id === id);

  useRedirect(!product, config.listPath);
  if (!product) return null;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={config.label} onBack={() => navigate(config.listPath)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px] pb-[24px]">
        <div className="flex flex-col items-center gap-[8px] py-[16px]">
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Monto solicitado</p>
          <p className="font-['Sora:Bold',sans-serif] text-[32px] text-[#191919]">{formatCurrency(product.amount)}</p>
        </div>
        <div className="rounded-[12px] border border-[#e1e3ed] p-[16px] flex flex-col gap-[8px]">
          <Row label="Cuotas" value={String(product.installments)} />
          <Row label="Cuota mensual" value={formatCurrency(product.monthlyPayment)} />
          <Row label="Total a pagar" value={formatCurrency(product.totalToPay)} />
          <Row label="Tasa mensual" value={`${(product.monthlyRate * 100).toFixed(0)}%`} />
          <Row label="Fecha de acreditación" value={formatDateTime(product.createdAt)} />
          <Row label="Estado" value="Vigente" />
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
