import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function TopBar({
  title,
  onBack,
  dark = false,
  transparent = false,
}: {
  title?: string;
  onBack?: () => void;
  dark?: boolean;
  transparent?: boolean;
}) {
  const navigate = useNavigate();
  const color = dark ? "#191919" : "#ffffff";
  return (
    <div
      className="absolute top-[44px] left-0 right-0 h-[52px] flex items-center px-[8px] z-10"
      style={{ background: transparent ? "transparent" : undefined }}
    >
      <button
        type="button"
        aria-label="Volver"
        className={`flex items-center justify-center size-[40px] cursor-pointer rounded-full transition-all duration-150 active:scale-90 ${
          dark ? "hover:bg-black/5 active:bg-black/10" : "hover:bg-white/10 active:bg-white/20"
        }`}
        onClick={() => (onBack ? onBack() : navigate(-1))}
      >
        <ChevronLeft size={24} color={color} />
      </button>
      {title && (
        <p className="font-['Sora:Bold',sans-serif] text-[16px]" style={{ color }}>
          {title}
        </p>
      )}
    </div>
  );
}
