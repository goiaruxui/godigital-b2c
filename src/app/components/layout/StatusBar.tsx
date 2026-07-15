import { Signal, Wifi, BatteryFull } from "lucide-react";

export function StatusBar({ background = "#ff583f", dark = false }: { background?: string; dark?: boolean }) {
  const color = dark ? "#191919" : "#ffffff";
  return (
    <div
      className="absolute top-0 left-0 right-0 h-[44px] flex items-center justify-between px-[20px] pt-[8px]"
      style={{ background }}
    >
      <p className="font-['Sora:Semibold',sans-serif] text-[15px] tracking-[-0.3px]" style={{ color }}>
        9:41
      </p>
      <div className="flex items-center gap-[6px]" style={{ color }}>
        <Signal size={15} strokeWidth={2.5} />
        <Wifi size={15} strokeWidth={2.5} />
        <BatteryFull size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
}
