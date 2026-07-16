import { useNavigate } from "react-router";
import { useAccount } from "@/app/store/AccountContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { BottomNav } from "@/app/components/layout/BottomNav";
import { CardVisual } from "@/app/components/cards/CardVisual";

export function CardsListPage() {
  const navigate = useNavigate();
  const { state } = useAccount();

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <div className="absolute top-[44px] left-0 right-0 h-[52px] flex items-center px-[16px]">
        <p className="font-['Sora:Bold',sans-serif] text-[18px] text-[#191919]">Tarjetas</p>
      </div>
      <div className="absolute top-[96px] left-0 right-0 bottom-[64px] overflow-y-auto px-[16px] flex flex-col gap-[16px]">
        {state.cards.map((card) => (
          <button key={card.id} type="button" onClick={() => navigate(`/cards/${card.id}`)} className="cursor-pointer text-left">
            <CardVisual card={card} />
          </button>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}
