import type { Card } from "@/app/store/types";
import cardPrepaga from "@/assets/cards/card-prepaga.svg";
import cardCredito from "@/assets/cards/card-credito.svg";

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
      className="relative w-full rounded-[16px] overflow-hidden text-white transition-transform duration-200 ease-out hover:scale-[1.015] active:scale-[0.98]"
      style={{ aspectRatio: "328 / 210" }}
    >
      <img src={isCredito ? cardCredito : cardPrepaga} alt="" className="absolute inset-0 w-full h-full" />
      {isCredito && (
        <p className="absolute left-[16px] top-[17px] font-['Sora:Bold',sans-serif] text-[19px]">Gollet</p>
      )}
      {card.paused && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-white bg-black/60 px-[12px] py-[4px] rounded-[8px]">
            Pausada
          </p>
        </div>
      )}
      <p className="absolute left-[16px] bottom-[16px] font-['Sora:Bold',sans-serif] text-[18px] tracking-[2px] drop-shadow-md">
        {revealed ? formatFull(card.cardNumber) : formatMasked(card.cardNumber)}
      </p>
    </div>
  );
}
