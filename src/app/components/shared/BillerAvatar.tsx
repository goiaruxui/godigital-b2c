export function BillerAvatar({ name, size = 36 }: { name: string; size?: number }) {
  return (
    <div
      className="rounded-[8px] bg-[#F7F8FE] flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      <span className="font-['Sora:Bold',sans-serif] text-[#191919]" style={{ fontSize: size * 0.4 }}>
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}
