import { useMemo, useRef, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { useAccount } from "@/app/store/AccountContext";
import { useTransactions } from "@/app/store/TransactionsContext";
import { useNotifications } from "@/app/store/NotificationsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { ConfirmScreen } from "@/app/components/shared/ConfirmScreen";
import { CardVisual } from "@/app/components/cards/CardVisual";
import { BillerAvatar } from "@/app/components/shared/BillerAvatar";
import { formatCurrency } from "@/app/lib/format";
import { TRANSACTION_META } from "@/app/lib/transactionMeta";
import { getBiller } from "@/app/lib/billers";
import { useRedirect } from "@/app/lib/useRedirect";

type State = { account?: string; amount?: number };

const TILE_GAP = 12;

export function ServiciosPayPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { billerId } = useParams();
  const biller = billerId ? getBiller(billerId) : undefined;
  const { account, amount } = (location.state as State | null) ?? {};
  const { state: accountState, debit, canAfford } = useAccount();
  const { addTransaction } = useTransactions();
  const { addNotification } = useNotifications();
  const lastTxId = useRef("");
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const methods = useMemo(
    () => [{ kind: "balance" as const, label: "Dinero en cuenta" }, ...accountState.cards.map((c) => ({ kind: "card" as const, label: c.label, card: c }))],
    [accountState.cards],
  );

  const fallbackPath = biller ? `/servicios/${billerId}/monto` : "/servicios";
  useRedirect(!biller || !account || !amount, fallbackPath);
  if (!biller || !account || !amount) return null;

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const tileWidth = track.firstElementChild instanceof HTMLElement ? track.firstElementChild.offsetWidth + TILE_GAP : 1;
    const index = Math.round(track.scrollLeft / tileWidth);
    setSelectedIndex(Math.max(0, Math.min(methods.length - 1, index)));
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Pagar servicio" onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px] overflow-y-auto pb-[24px]">
        <ConfirmScreen
          onConfirm={() => {
            if (!canAfford(amount)) return { ok: false, error: "Saldo insuficiente" };
            const selected = methods[selectedIndex];
            debit(amount);
            const tx = addTransaction({
              type: "service_payment",
              amount: -amount,
              counterparty: biller.name,
              description: `Pago de servicio · Cliente ${account} · ${selected.label}`,
            });
            addNotification(TRANSACTION_META.service_payment.label, `-${formatCurrency(amount)} · ${biller.name}`);
            lastTxId.current = tx.id;
            return { ok: true };
          }}
          onSuccess={() =>
            navigate("/servicios/exito", {
              replace: true,
              state: { billerName: biller.name, account, amount, transactionId: lastTxId.current },
            })
          }
        >
          <div className="flex flex-col items-center gap-[8px] py-[16px]">
            <BillerAvatar name={biller.name} size={48} />
            <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">{biller.name}</p>
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Pagar importe</p>
            <p className="font-['Sora:Bold',sans-serif] text-[36px] text-[#191919]">{formatCurrency(amount)}</p>
          </div>

          <div className="flex flex-col gap-[12px]">
            <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">Elige el medio de pago</p>
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory"
              style={{ gap: TILE_GAP }}
            >
              <div className="snap-center shrink-0 w-[calc(100%-40px)] rounded-[16px] p-[20px] flex flex-col justify-between text-white overflow-hidden relative bg-[#6B2419]" style={{ aspectRatio: "328 / 210" }}>
                <div className="absolute -right-[20px] -top-[20px] size-[120px] rounded-full border border-white/10" />
                <div className="absolute right-[10px] top-[60px] size-[80px] rounded-full border border-white/10" />
                <div className="flex items-start justify-between relative">
                  <p className="font-['Sora:Bold',sans-serif] text-[19px]">Gollet</p>
                  <p className="font-['Sora:Regular',sans-serif] text-[13px]">Dinero en cuenta</p>
                </div>
                <div className="relative">
                  <p className="font-['Sora:Regular',sans-serif] text-[13px] opacity-80">Disponible</p>
                  <p className="font-['Sora:Bold',sans-serif] text-[24px]">{formatCurrency(accountState.balance)}</p>
                </div>
              </div>
              {accountState.cards.map((card) => (
                <div key={card.id} className="snap-center shrink-0 w-[calc(100%-40px)]">
                  <CardVisual card={card} />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-[6px]">
              {methods.map((m, i) => (
                <span
                  key={i}
                  className={`size-[6px] rounded-full ${i === selectedIndex ? "bg-[#DF4730]" : "bg-[#e1e3ed]"}`}
                />
              ))}
            </div>
          </div>
        </ConfirmScreen>
      </div>
    </div>
  );
}
