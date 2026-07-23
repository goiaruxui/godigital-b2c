import { useNavigate } from "react-router";
import { ChevronRight, History } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { LEGAL_CATEGORIES, getLegalDocsByCategory } from "@/app/lib/legalDocs";

export function LegalHubPage() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Legal" onBack={() => navigate("/mas")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[24px] pb-[24px]">
        <button
          type="button"
          onClick={() => navigate("/legal/consentimientos")}
          className="w-full flex items-center gap-[12px] py-[12px] px-[16px] border border-[#EDEFF7] rounded-[8px] cursor-pointer text-left"
        >
          <div className="size-[36px] rounded-[8px] bg-[#F7F8FE] flex items-center justify-center shrink-0">
            <History size={18} color="#191919" />
          </div>
          <p className="flex-1 font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">Mis consentimientos</p>
          <ChevronRight size={18} color="#78838d" />
        </button>

        {LEGAL_CATEGORIES.map((category) => {
          const docs = getLegalDocsByCategory(category.id);
          if (docs.length === 0) return null;
          return (
            <div key={category.id} className="flex flex-col gap-[8px]">
              <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">{category.label}</p>
              {docs.map((doc) => (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => navigate(`/legal/${doc.id}`)}
                  className="w-full flex items-center gap-[12px] py-[8px] cursor-pointer text-left"
                >
                  <p className="flex-1 font-['Sora:Regular',sans-serif] text-[14px] text-[#191919]">{doc.title}</p>
                  <ChevronRight size={18} color="#78838d" />
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
