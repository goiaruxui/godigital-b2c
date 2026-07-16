import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { useAccount } from "@/app/store/AccountContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { PinKeypad } from "@/app/components/cards/PinKeypad";
import { useRedirect } from "@/app/lib/useRedirect";
import { useCancelableTimeout } from "@/app/lib/useCancelableTimeout";

const PIN_LENGTH = 4;

function applyKey(prev: string, key: string) {
  if (key === "back") return prev.slice(0, -1);
  if (prev.length >= PIN_LENGTH) return prev;
  return prev + key;
}

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

  function handleKey(key: string) {
    setError("");
    if (stage === "new") {
      setNewPin((prev) => {
        const next = applyKey(prev, key);
        newPinRef.current = next;
        if (next.length === PIN_LENGTH) schedule(() => setStage("confirm"), 150);
        return next;
      });
      return;
    }
    setConfirmPin((prev) => {
      const next = applyKey(prev, key);
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
      return next;
    });
  }

  const current = stage === "new" ? newPin : confirmPin;

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Cambiar PIN" onBack={() => navigate(`/cards/${card.id}`)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col items-center gap-[32px] pt-[24px]">
        <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d] text-center">
          {stage === "new" ? "Ingresá tu nuevo PIN de 4 dígitos" : "Confirmá el nuevo PIN"}
        </p>
        <div className="flex items-center gap-[12px]">
          {Array.from({ length: PIN_LENGTH }).map((_, i) => (
            <div
              key={i}
              className="size-[16px] rounded-full border border-[#df4730]"
              style={{ background: i < current.length ? "#df4730" : "transparent" }}
            />
          ))}
        </div>
        {error && <p className="text-[13px] text-[#d4183d]">{error}</p>}
        <div className="flex-1" />
        <PinKeypad onKey={handleKey} />
      </div>
    </div>
  );
}
