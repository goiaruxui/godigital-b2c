import type { Card } from "@/app/store/types";

function formatMasked(cardNumber: string) {
  const last4 = cardNumber.slice(-4);
  return `•••• •••• •••• ${last4}`;
}

function formatFull(cardNumber: string) {
  return cardNumber.match(/.{1,4}/g)?.join(" ") ?? cardNumber;
}

export function CardVisual({ card, revealed = false }: { card: Card; revealed?: boolean }) {
  const isCredito = card.kind === "credito";
  return (
    <div
      className="relative w-full rounded-[16px] p-[16px] flex flex-col justify-between h-[180px] text-white overflow-hidden"
      style={{
        background: isCredito
          ? "linear-gradient(135deg, #2b2b2b, #191919)"
          : "linear-gradient(135deg, #df4730, #841a0a)",
      }}
    >
      {card.paused && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-white bg-black/60 px-[12px] py-[4px] rounded-[8px]">
            Pausada
          </p>
        </div>
      )}
      <div className="flex items-center justify-between">
        <p className="font-['Sora:Bold',sans-serif] text-[16px]">{card.label}</p>
        <p className="font-['Sora:Regular',sans-serif] text-[12px] uppercase">{card.kind}</p>
      </div>
      <p className="font-['Sora:Bold',sans-serif] text-[18px] tracking-[2px]">
        {revealed ? formatFull(card.cardNumber) : formatMasked(card.cardNumber)}
      </p>
    </div>
  );
}
