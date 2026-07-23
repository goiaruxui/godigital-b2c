import { useNavigate } from "react-router";
import { Bell, ArrowDownToLine, ArrowUpFromLine, ArrowLeftRight, Receipt, ChevronRight } from "lucide-react";
import { useAuth } from "@/app/store/AuthContext";
import { useWallet } from "@/app/store/useWallet";
import { useNotifications } from "@/app/store/NotificationsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { BottomNav } from "@/app/components/layout/BottomNav";
import { formatCurrencyParts } from "@/app/lib/format";
import { TransactionRow } from "@/app/pages/activity/TransactionRow";
import creditBanner from "@/assets/banners/home-credit-banner.svg";

export function HomePage() {
  const navigate = useNavigate();
  const { state } = useAuth();
  const { account, transactions } = useWallet();
  const { unreadCount } = useNotifications();
  const recent = transactions.slice(0, 3);
  const balance = formatCurrencyParts(account.balance);
  const initials = state.user?.avatarInitials ?? "?";
  const firstName = state.user?.firstName ?? "";

  return (
    <div className="relative size-full bg-white overflow-hidden">
      <StatusBar />
      <div className="absolute top-[44px] left-0 right-0 bg-[#ff583f] flex flex-col gap-[16px] items-center pt-[8px] pb-[16px] px-[16px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[8px]">
            <div className="size-[48px] rounded-full bg-[#ffe7e3] flex items-center justify-center">
              <p className="font-['Sora:Regular',sans-serif] text-[18px] text-[#df4730]">{initials}</p>
            </div>
            <p className="font-['Sora:Bold',sans-serif] text-[14px] text-white">¡Hola, {firstName}!</p>
          </div>
          <button type="button" aria-label="Notificaciones" onClick={() => navigate("/notificaciones")} className="relative cursor-pointer">
            <Bell size={24} color="#ffffff" />
            {unreadCount > 0 && (
              <span className="absolute -top-[2px] -right-[2px] min-w-[16px] h-[16px] px-[3px] rounded-full bg-[#6F45E9] text-white text-[10px] font-['Sora:Bold',sans-serif] flex items-center justify-center">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>
        </div>

        <div className="bg-[#df4730] rounded-[16px] w-full p-[16px] flex flex-col gap-[12px]">
          <div className="flex items-start justify-between w-full">
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#ffe7e3]">Saldo disponible</p>
            <button
              type="button"
              onClick={() => navigate("/cashin/cvu")}
              className="bg-[#841a0a] rounded-[4px] px-[8px] py-[3px] cursor-pointer"
            >
              <p className="font-['Sora:Bold',sans-serif] text-[12px] text-white">Tu CVU</p>
            </button>
          </div>
          <p className="font-['Sora:Bold',sans-serif] text-[36px] text-white">
            {balance.whole}
            <sup className="text-[15px]">{balance.cents}</sup>
          </p>
          <div className="flex items-center justify-between w-full pt-[4px]">
            <button type="button" onClick={() => navigate("/cashin")} className="flex flex-col items-center gap-[8px] cursor-pointer">
              <ArrowDownToLine size={16} color="#ffffff" />
              <p className="font-['Sora:Regular',sans-serif] text-[12px] text-white">Ingresar</p>
            </button>
            <button type="button" onClick={() => navigate("/qr")} className="flex flex-col items-center gap-[8px] cursor-pointer">
              <ArrowUpFromLine size={16} color="#ffffff" />
              <p className="font-['Sora:Regular',sans-serif] text-[12px] text-white">Retirar</p>
            </button>
            <button type="button" onClick={() => navigate("/transfer")} className="flex flex-col items-center gap-[8px] cursor-pointer">
              <ArrowLeftRight size={16} color="#ffffff" />
              <p className="font-['Sora:Regular',sans-serif] text-[12px] text-white">Transferir</p>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-[304px] left-0 right-0 bottom-[64px] overflow-y-auto px-[16px] py-[24px] flex flex-col gap-[16px]">
        <button type="button" onClick={() => navigate("/prestamos")} className="w-full cursor-pointer">
          <img src={creditBanner} alt="Financiá tus compras en cuotas" className="w-full h-auto" />
        </button>

        <button
          type="button"
          onClick={() => navigate("/buscar-servicio-full")}
          className="w-full flex items-center gap-[12px] py-[8px] cursor-pointer text-left"
        >
          <div className="size-[36px] rounded-[8px] bg-[#F7F8FE] flex items-center justify-center shrink-0">
            <Receipt size={18} color="#191919" />
          </div>
          <div className="flex-1">
            <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">Pagar un servicio</p>
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">Luz, gas, celular y más</p>
          </div>
          <ChevronRight size={18} color="#78838d" />
        </button>

        <div className="flex items-center justify-between">
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">Últimas transacciones</p>
          {transactions.length > 0 && (
            <button type="button" onClick={() => navigate("/activity")} className="font-['Sora:Bold',sans-serif] text-[14px] text-[#df4730] cursor-pointer">
              Ver todas
            </button>
          )}
        </div>
        {recent.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-[6px] py-[32px]">
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d] text-center w-[170px]">
              Aún no hay movimientos para mostrar aquí.
            </p>
          </div>
        ) : (
          recent.map((t) => <TransactionRow key={t.id} transaction={t} onClick={() => navigate(`/activity/${t.id}`)} />)
        )}
      </div>

      <BottomNav />
    </div>
  );
}
