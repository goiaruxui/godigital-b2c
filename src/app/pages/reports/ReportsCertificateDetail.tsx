import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { Download } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { useAuth } from "@/app/store/AuthContext";
import { useWallet } from "@/app/store/useWallet";
import { formatCurrency, formatShortDate } from "@/app/lib/format";
import { filterByPeriod, summarizeIncomeExpense } from "@/app/lib/reports";
import { useRedirect } from "@/app/lib/useRedirect";

const TITLES: Record<string, string> = {
  cvu: "Certificado de CVU/CBU",
  movimientos: "Constancia de movimientos",
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[#edeff6] py-[12px]">
      <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">{label}</p>
      <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#191919] text-right">{value}</p>
    </div>
  );
}

export function ReportsCertificateDetailPage() {
  const navigate = useNavigate();
  const { certId } = useParams();
  const { state } = useAuth();
  const { account, transactions } = useWallet();

  const title = certId ? TITLES[certId] : undefined;
  useRedirect(!title, "/reportes/constancias");
  if (!title) return null;

  const period = filterByPeriod(transactions, "this-month");
  const { income, expense } = summarizeIncomeExpense(period);
  const today = formatShortDate(new Date().toISOString());

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={title} onBack={() => navigate("/reportes/constancias")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[16px] pb-[24px]">
        <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Generado el {today}</p>

        {certId === "cvu" ? (
          <div className="flex flex-col">
            <Row label="Titular" value={state.user ? `${state.user.firstName} ${state.user.lastName}` : ""} />
            <Row label="CVU" value={account.cvu} />
            <Row label="Alias" value={account.alias} />
            <Row label="Entidad" value="Gonnectia (Goiar Fintech)" />
          </div>
        ) : (
          <div className="flex flex-col">
            <Row label="Período" value="Este mes" />
            <Row label="Ingresos" value={formatCurrency(income)} />
            <Row label="Egresos" value={formatCurrency(expense)} />
            <Row label="Cantidad de movimientos" value={String(period.length)} />
          </div>
        )}

        <div className="flex-1" />
        <Button
          onClick={() => toast("Disponible próximamente")}
          className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px] flex items-center gap-[8px]"
        >
          <Download size={18} />
          Descargar PDF
        </Button>
      </div>
    </div>
  );
}
