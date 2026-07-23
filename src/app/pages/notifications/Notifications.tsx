import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Bell, ChevronLeft } from "lucide-react";
import { useNotifications } from "@/app/store/NotificationsContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { formatDateTime } from "@/app/lib/format";

export function NotificationsPage() {
  const navigate = useNavigate();
  const { notifications, markAllRead, clear } = useNotifications();

  useEffect(() => {
    markAllRead();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <div className="absolute top-[44px] left-0 right-0 h-[52px] flex items-center justify-between px-[8px]">
        <button type="button" onClick={() => navigate(-1)} className="flex items-center justify-center size-[40px] cursor-pointer" aria-label="Volver">
          <ChevronLeft size={24} color="#191919" />
        </button>
        <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919] absolute left-1/2 -translate-x-1/2">Notificaciones</p>
        {notifications.length > 0 && (
          <button type="button" onClick={clear} className="font-['Sora:Bold',sans-serif] text-[14px] text-[#df4730] cursor-pointer pr-[8px]">
            Limpiar
          </button>
        )}
      </div>
      <div className="absolute top-[96px] left-0 right-0 bottom-0 overflow-y-auto px-[16px]">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-[12px] py-[96px]">
            <Bell size={40} color="#78838d" />
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d] text-center w-[200px]">
              No tenés notificaciones por el momento.
            </p>
          </div>
        ) : (
          notifications.map((n) => (
            <div key={n.id} className="flex flex-col gap-[2px] py-[12px] border-b border-[#edeff6]">
              <div className="flex items-center justify-between">
                <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{n.title}</p>
                <p className="font-['Sora:Regular',sans-serif] text-[11px] text-[#78838d]">{formatDateTime(n.createdAt)}</p>
              </div>
              <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">{n.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
