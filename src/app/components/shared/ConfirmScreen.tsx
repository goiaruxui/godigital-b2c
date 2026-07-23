import { useLayoutEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { ChevronRight, Check } from "lucide-react";
import { useCancelableTimeout } from "@/app/lib/useCancelableTimeout";

export type ConfirmResult = { ok: true } | { ok: false; error: string };

const THUMB_PADDING = 8;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function ConfirmScreen({
  children,
  onConfirm,
  onSuccess,
  idleLabel = "Desliza para confirmar",
  doneLabel = "Confirmado",
}: {
  children: ReactNode;
  onConfirm: () => ConfirmResult;
  onSuccess: () => void;
  idleLabel?: string;
  doneLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "dragging" | "loading" | "done">("idle");
  const [x, setX] = useState(0);
  const [error, setError] = useState("");
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const maxRef = useRef(0);
  const schedule = useCancelableTimeout();

  useLayoutEffect(() => {
    const recalc = () => {
      if (trackRef.current && thumbRef.current) {
        maxRef.current = trackRef.current.clientWidth - thumbRef.current.clientWidth - THUMB_PADDING;
      }
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
    if (status === "loading" || status === "done") return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setError("");
    startXRef.current = e.clientX - x;
    setStatus("dragging");
  }

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (status !== "dragging") return;
    setX(clamp(e.clientX - startXRef.current, 0, maxRef.current));
  }

  function handlePointerUp() {
    if (status !== "dragging") return;
    if (x >= maxRef.current - 6) {
      complete();
    } else {
      setX(0);
      setStatus("idle");
    }
  }

  function complete() {
    setStatus("loading");
    setX(maxRef.current);
    schedule(() => {
      const result = onConfirm();
      if (!result.ok) {
        setError(result.error);
        setStatus("idle");
        setX(0);
        return;
      }
      setStatus("done");
      schedule(onSuccess, 500);
    }, 900);
  }

  const trackBg = status === "done" ? "bg-[#289B4F]" : status === "loading" ? "bg-[#DF4730]" : "bg-[#FF583F]";
  const labelOpacity = status === "loading" || status === "done" ? 1 : Math.max(0, 1 - (x / (maxRef.current || 1)) * 1.4);
  const labelText = status === "done" ? doneLabel : status === "loading" ? "" : idleLabel;

  return (
    <>
      {children}
      <div className="flex-1" />
      {error && <p className="text-[13px] text-[#DF4730] text-center mb-[8px]">{error}</p>}
      <div
        ref={trackRef}
        className={`relative w-full h-[52px] rounded-[8px] overflow-hidden flex items-center justify-center mb-[32px] transition-colors ${trackBg}`}
      >
        <span
          className="font-['Sora:Bold',sans-serif] text-[14px] text-white transition-opacity"
          style={{ opacity: labelOpacity }}
        >
          {labelText}
        </span>
        <div
          ref={thumbRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`absolute top-[4px] w-[54px] h-[44px] rounded-[6px] flex items-center justify-center touch-none ${
            status === "done" ? "bg-white/35 cursor-default" : "bg-white/20 cursor-grab active:cursor-grabbing"
          }`}
          style={{ left: 4 + x, transition: status === "dragging" ? "none" : "left .25s ease" }}
        >
          {status === "loading" ? (
            <span className="size-[20px] rounded-full border-[2.5px] border-white/40 border-t-white animate-spin" />
          ) : status === "done" ? (
            <Check size={22} color="#ffffff" strokeWidth={2.6} />
          ) : (
            <ChevronRight size={22} color="#ffffff" strokeWidth={2.4} />
          )}
        </div>
      </div>
    </>
  );
}
