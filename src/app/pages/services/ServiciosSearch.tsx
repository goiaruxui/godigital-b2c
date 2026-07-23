import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { Search, ChevronRight } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Input } from "@/app/components/ui/input";
import { BillerAvatar } from "@/app/components/shared/BillerAvatar";
import {
  BILLER_CATEGORIES,
  BILLERS,
  POPULAR_BILLER_IDS,
  getBillersByCategory,
  searchBillers,
  type Biller,
} from "@/app/lib/billers";

const PREVIEW_COUNT = 3;

export function ServiciosSearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => searchBillers(query), [query]);

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Buscar un servicio" onBack={() => navigate("/home")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[24px] pb-[24px]">
        <div className="relative">
          <Search size={18} color="#78838d" className="absolute left-[12px] top-1/2 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca entre más de 4.000 empresas"
            className="pl-[40px] text-[14px]"
          />
        </div>

        {query.trim() ? (
          <BillerSection
            title={`Resultados (${searchResults.length})`}
            billers={searchResults}
            onSelect={(id) => navigate(`/servicios/${id}`)}
          />
        ) : (
          <>
            <BillerSection
              title="Más populares"
              billers={POPULAR_BILLER_IDS.map((id) => BILLERS.find((b) => b.id === id)).filter(
                (b): b is Biller => Boolean(b),
              )}
              onSelect={(id) => navigate(`/servicios/${id}`)}
            />
            {BILLER_CATEGORIES.map((category) => {
              const billers = getBillersByCategory(category.id);
              return (
                <BillerSection
                  key={category.id}
                  title={category.label}
                  billers={billers.slice(0, PREVIEW_COUNT)}
                  onSelect={(id) => navigate(`/servicios/${id}`)}
                  action={
                    billers.length > PREVIEW_COUNT
                      ? { label: `Ver todas (${billers.length})`, onClick: () => navigate(`/servicios/categoria/${category.id}`) }
                      : undefined
                  }
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

function BillerSection({
  title,
  billers,
  onSelect,
  action,
}: {
  title: string;
  billers: Biller[];
  onSelect: (id: string) => void;
  action?: { label: string; onClick: () => void };
}) {
  if (billers.length === 0) return null;
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex items-center justify-between">
        <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">{title}</p>
        {action && (
          <button
            type="button"
            onClick={action.onClick}
            className="font-['Sora:Bold',sans-serif] text-[13px] text-[#DF4730] cursor-pointer"
          >
            {action.label}
          </button>
        )}
      </div>
      {billers.map((biller) => (
        <button
          key={biller.id}
          type="button"
          onClick={() => onSelect(biller.id)}
          className="w-full flex items-center gap-[12px] py-[8px] cursor-pointer text-left"
        >
          <BillerAvatar name={biller.name} />
          <p className="flex-1 font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{biller.name}</p>
          <ChevronRight size={18} color="#78838d" />
        </button>
      ))}
    </div>
  );
}
