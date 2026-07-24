import { useNavigate } from "react-router";
import { ChevronRight, Landmark, FileSpreadsheet } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";

const CERTIFICATES = [
  { id: "cvu", label: "Certificado de CVU/CBU", icon: Landmark },
  { id: "movimientos", label: "Constancia de movimientos", icon: FileSpreadsheet },
];

export function ReportsCertificatesPage() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Constancias" onBack={() => navigate("/reportes")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col pb-[24px]">
        {CERTIFICATES.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => navigate(`/reportes/constancias/${cert.id}`)}
            className="w-full flex items-center gap-[12px] py-[12px] cursor-pointer text-left"
          >
            <div className="size-[36px] rounded-[8px] bg-[#F7F8FE] flex items-center justify-center shrink-0">
              <cert.icon size={18} color="#191919" />
            </div>
            <p className="flex-1 font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{cert.label}</p>
            <ChevronRight size={18} color="#78838d" />
          </button>
        ))}
      </div>
    </div>
  );
}
