import { useNavigate } from "react-router";
import { QrCode } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";

const MERCHANTS = ["Café Martínez", "Farmacity", "Kiosco 24hs", "Supermercado Día"];

export function QrScanPage() {
  const navigate = useNavigate();

  function simulateScan() {
    const merchant = MERCHANTS[Math.floor(Math.random() * MERCHANTS.length)];
    navigate("/qr-amount", { state: { merchant } });
  }

  return (
    <div className="relative size-full bg-[#191919]">
      <StatusBar background="#191919" />
      <TopBar onBack={() => navigate("/home")} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[24px] px-[24px]">
        <div className="size-[220px] rounded-[24px] border-2 border-dashed border-white/40 flex items-center justify-center">
          <QrCode size={96} color="#ffffff" strokeWidth={1} />
        </div>
        <p className="font-['Sora:Regular',sans-serif] text-[14px] text-white/70 text-center">
          Apuntá al código QR del comercio para pagar
        </p>
        <Button onClick={simulateScan} className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] px-[24px]">
          Simular escaneo
        </Button>
      </div>
    </div>
  );
}
