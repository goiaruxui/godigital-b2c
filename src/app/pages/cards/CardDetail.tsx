import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { Eye, EyeOff, Pause, Play, KeyRound, Gauge, Wallet } from "lucide-react";
import { useAccount } from "@/app/store/AccountContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { CardVisual } from "@/app/components/cards/CardVisual";
import { formatCurrency } from "@/app/lib/format";
import { useRedirect } from "@/app/lib/useRedirect";

export function CardDetailPage() {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const { state, toggleCardPause } = useAccount();
  const [revealing, setRevealing] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const card = state.cards.find((c) => c.id === cardId);

  useRedirect(!card, "/cards");
  if (!card) return null;

  function handleReveal() {
    if (revealed) {
      setRevealed(false);
      return;
    }
    setRevealing(true);
    setTimeout(() => {
      setRevealing(false);
      setRevealed(true);
    }, 1000);
  }

  function handleTogglePause() {
    toggleCardPause(card!.id);
    toast.success(card!.paused ? "Tarjeta activada" : "Tarjeta pausada");
  }

  function handleWallet(platform: "Apple" | "Google") {
    toast.success(`Agregada a ${platform} Wallet`);
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={card.label} onBack={() => navigate("/cards")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[16px] overflow-y-auto flex flex-col gap-[16px] pb-[24px]">
        <CardVisual card={card} revealed={revealed} />

        {revealing ? (
          <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] text-center">Verificando identidad...</p>
        ) : (
          <button
            type="button"
            onClick={handleReveal}
            className="flex items-center justify-center gap-[8px] py-[10px] rounded-[4px] border border-[#e1e3ed] cursor-pointer"
          >
            {revealed ? <EyeOff size={16} color="#df4730" /> : <Eye size={16} color="#df4730" />}
            <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#df4730]">{revealed ? "Ocultar datos" : "Ver datos"}</p>
          </button>
        )}

        <button
          type="button"
          onClick={handleTogglePause}
          className="flex items-center justify-center gap-[8px] py-[10px] rounded-[4px] border border-[#e1e3ed] cursor-pointer"
        >
          {card.paused ? <Play size={16} color="#191919" /> : <Pause size={16} color="#191919" />}
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{card.paused ? "Activar tarjeta" : "Pausar tarjeta"}</p>
        </button>

        <div className="flex flex-col">
          <Row icon={KeyRound} label="Cambiar PIN" onClick={() => navigate(`/cards/${card.id}/pin`)} />
          <Row
            icon={Gauge}
            label="Límites"
            value={formatCurrency(card.monthlyLimit) + " / mes"}
            onClick={() => navigate(`/cards/${card.id}/limit`)}
          />
          <Row icon={Wallet} label="Agregar a Apple Wallet" onClick={() => handleWallet("Apple")} />
          <Row icon={Wallet} label="Agregar a Google Wallet" onClick={() => handleWallet("Google")} />
        </div>
      </div>
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  value,
  onClick,
}: {
  icon: typeof KeyRound;
  label: string;
  value?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-[12px] py-[14px] border-b border-[#e1e3ed] cursor-pointer text-left"
    >
      <Icon size={18} color="#78838d" />
      <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919] flex-1">{label}</p>
      {value && <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">{value}</p>}
    </button>
  );
}
