import { Home as HomeIcon, Receipt, QrCode, CreditCard, Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const TABS = [
  { path: "/home", label: "Inicio", icon: HomeIcon },
  { path: "/activity", label: "Actividad", icon: Receipt },
  { path: "/qr", label: "QR", icon: QrCode, center: true },
  { path: "/cards", label: "Tarjetas", icon: CreditCard },
  { path: "/mas", label: "Más", icon: Menu },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white">
      <div className="h-[56px] flex items-center border-t border-[#e1e3ed]">
        {TABS.map(({ path, label, icon: Icon, center }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              type="button"
              onClick={() => navigate(path)}
              className="flex-1 h-full flex flex-col items-center justify-center gap-[2px] cursor-pointer relative"
            >
              {center ? (
                <div
                  className="absolute -top-[16px] size-[52px] rounded-full flex items-center justify-center transition-transform duration-150 active:scale-90"
                  style={{ background: "#ff583f", boxShadow: "0 0 0 3px #fff2f0" }}
                >
                  <Icon size={22} color="#ffffff" />
                </div>
              ) : (
                <>
                  <Icon size={20} color={active ? "#ff583f" : "#78838d"} className="transition-colors duration-200" />
                  <p
                    className="font-['Sora:Bold',sans-serif] text-[11px] transition-colors duration-200"
                    style={{ color: active ? "#ff583f" : "#78838d" }}
                  >
                    {label}
                  </p>
                </>
              )}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-center pt-[4px] pb-[9px]">
        <div className="bg-[#535d66] h-[5px] w-[134px] rounded-[5px]" />
      </div>
    </div>
  );
}
