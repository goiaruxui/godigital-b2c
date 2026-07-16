import { Delete } from "lucide-react";

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "back"];

export function PinKeypad({ onKey }: { onKey: (key: string) => void }) {
  return (
    <div className="grid grid-cols-3 gap-[16px] w-full max-w-[280px]">
      {KEYS.map((key, i) =>
        key === "" ? (
          <div key={i} />
        ) : (
          <button
            key={i}
            type="button"
            onClick={() => onKey(key)}
            className="h-[64px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f7f8fe]"
          >
            {key === "back" ? (
              <Delete size={22} color="#191919" />
            ) : (
              <p className="font-['Sora:Bold',sans-serif] text-[24px] text-[#191919]">{key}</p>
            )}
          </button>
        ),
      )}
    </div>
  );
}
