import { ChevronRight, type LucideIcon } from "lucide-react";

export function MenuRow({
  icon: Icon,
  label,
  danger = false,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  danger?: boolean;
  onClick: () => void;
}) {
  const iconColor = danger ? "#DF4730" : "#78838D";
  const iconBg = danger ? "#FFE7E3" : "#f7f8fe";
  const textColor = danger ? "#DF4730" : "#191919";

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-[12px] py-[12px] border-b border-[#edeff6] cursor-pointer text-left"
    >
      <div className="size-[36px] rounded-[8px] flex items-center justify-center shrink-0" style={{ background: iconBg }}>
        <Icon size={18} color={iconColor} />
      </div>
      <p className="font-['Sora:Bold',sans-serif] text-[12px] flex-1" style={{ color: textColor }}>
        {label}
      </p>
      {!danger && <ChevronRight size={16} color="#78838D" />}
    </button>
  );
}
