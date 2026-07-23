import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { useAccount } from "@/app/store/AccountContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { useRedirect } from "@/app/lib/useRedirect";
import { useCancelableTimeout } from "@/app/lib/useCancelableTimeout";

const PIN_LENGTH = 4;

export function CardPinPage() {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const { state, setCardPin } = useAccount();
  const card = state.cards.find((c) => c.id === cardId);

  const [stage, setStage] = useState<"new" | "confirm">("new");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");
  // Mirrors newPin synchronously so the confirm step never compares against a stale closure.
  const newPinRef = useRef("");
  const schedule = useCancelableTimeout();

  useRedirect(!card, "/cards");
  if (!card) return null;

  function handleChange(raw: string) {
    const next = raw.replace(/[^0-9]/g, "").slice(0, PIN_LENGTH);
    setError("");
    if (stage === "new") {
      setNewPin(next);
      newPinRef.current = next;
      if (next.length === PIN_LENGTH) schedule(() => setStage("confirm"), 150);
      return;
    }
    setConfirmPin(next);
    if (next.length === PIN_LENGTH) {
      schedule(() => {
        if (next === newPinRef.current) {
          setCardPin(card!.id, next);
          toast.success("PIN actualizado");
          navigate(`/cards/${card!.id}`);
        } else {
          setError("Los PIN no coinciden, intentá de nuevo");
          schedule(() => {
            newPinRef.current = "";
            setNewPin("");
            setConfirmPin("");
            setStage("new");
          }, 900);
        }
      }, 0);
    }
  }

  const current = stage === "new" ? newPin : confirmPin;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Cambiar PIN" onBack={() => navigate(`/cards/${card.id}`)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col items-center gap-[32px] pt-[24px]">
        <div className="bg-[#EDEFF7] rounded-[4px] px-[16px] py-[12px] w-full">
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d] text-center">
            {stage === "new" ? "Ingresá tu nuevo PIN de 4 dígitos" : "Confirmá el nuevo PIN"}
          </p>
        </div>
        <div className="relative flex items-center gap-[12px]">
          {Array.from({ length: PIN_LENGTH }).map((_, i) => (
            <div
              key={i}
              className="size-[16px] rounded-full border border-[#df4730]"
              style={{ background: i < current.length ? "#df4730" : "transparent" }}
            />
          ))}
          <input
            key={stage}
            autoFocus
            inputMode="numeric"
            type="password"
            maxLength={PIN_LENGTH}
            value={current}
            onChange={(e) => handleChange(e.target.value)}
            className="absolute inset-0 opacity-0"
            aria-label={stage === "new" ? "Nuevo PIN" : "Confirmar PIN"}
          />
        </div>
        {error && <p className="text-[13px] text-[#DF4730]">{error}</p>}
      </div>
    </div>
  );
}
