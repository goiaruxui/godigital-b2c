import { useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { useAccount } from "@/app/store/AccountContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import { useRedirect } from "@/app/lib/useRedirect";

export function CardLimitPage() {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const { state, setCardLimit } = useAccount();
  const card = state.cards.find((c) => c.id === cardId);

  useRedirect(!card, "/cards");

  const [amount, setAmount] = useState(card ? String(card.monthlyLimit) : "");
  if (!card) return null;

  const numeric = Number(amount.replace(/[^0-9]/g, ""));
  const valid = numeric > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setCardLimit(card!.id, numeric);
    toast.success("Límite actualizado");
    navigate(`/cards/${card!.id}`);
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Límite mensual" onBack={() => navigate(`/cards/${card.id}`)} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <Label htmlFor="limit">Límite de compras por mes</Label>
        <div className="flex items-center gap-[4px]">
          <span className="font-['Sora:Regular',sans-serif] text-[16px] text-[#191919]">$</span>
          <input
            id="limit"
            inputMode="numeric"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
            className="font-['Sora:Bold',sans-serif] text-[28px] text-[#191919] outline-none bg-transparent flex-1"
          />
        </div>
        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] mb-[32px]">
          Guardar
        </Button>
      </form>
    </div>
  );
}
