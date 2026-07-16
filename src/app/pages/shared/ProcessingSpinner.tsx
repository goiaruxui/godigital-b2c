export function ProcessingSpinner({ label }: { label: string }) {
  return (
    <div className="relative size-full bg-white flex flex-col items-center justify-center gap-[16px]">
      <div className="size-[40px] rounded-full border-4 border-[#ffe7e3] border-t-[#df4730] animate-spin" />
      <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">{label}</p>
    </div>
  );
}
