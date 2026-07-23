import { Construction } from "lucide-react";
import { useNavigate } from "react-router";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";

export function ComingSoonPage({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={title} onBack={() => navigate("/mas")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-[16px] px-[32px]">
        <div className="size-[64px] rounded-full bg-[#F7F8FE] flex items-center justify-center">
          <Construction size={28} color="#78838d" />
        </div>
        <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919] text-center">{title}</p>
        <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] text-center">
          Esta función va a estar disponible próximamente.
        </p>
      </div>
    </div>
  );
}
