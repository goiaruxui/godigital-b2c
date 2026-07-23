import { useNavigate, useParams } from "react-router";
import { ChevronRight } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { BillerAvatar } from "@/app/components/shared/BillerAvatar";
import { BILLER_CATEGORIES, getBillersByCategory } from "@/app/lib/billers";
import { useRedirect } from "@/app/lib/useRedirect";

export function ServiciosCategoryPage() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const category = BILLER_CATEGORIES.find((c) => c.id === categoryId);
  const billers = categoryId ? getBillersByCategory(categoryId) : [];

  useRedirect(!category, "/servicios");
  if (!category) return null;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={category.label} onBack={() => navigate("/servicios")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col pb-[24px]">
        {billers.map((biller) => (
          <button
            key={biller.id}
            type="button"
            onClick={() => navigate(`/servicios/${biller.id}`)}
            className="w-full flex items-center gap-[12px] py-[8px] cursor-pointer text-left"
          >
            <BillerAvatar name={biller.name} />
            <p className="flex-1 font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{biller.name}</p>
            <ChevronRight size={18} color="#78838d" />
          </button>
        ))}
      </div>
    </div>
  );
}
