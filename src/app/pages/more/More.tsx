import { useNavigate } from "react-router";
import { User, CreditCard, Landmark, ArrowRightLeft, HelpCircle, LogOut } from "lucide-react";
import { useAuth } from "@/app/store/AuthContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { BottomNav } from "@/app/components/layout/BottomNav";
import { MenuRow } from "@/app/components/layout/MenuRow";

export function MorePage() {
  const navigate = useNavigate();
  const { state, logout } = useAuth();

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <div className="absolute top-[44px] left-0 right-0 h-[52px] flex items-center px-[16px]">
        <p className="font-['Sora:Bold',sans-serif] text-[18px] text-[#191919]">Más</p>
      </div>
      <div className="absolute top-[96px] left-0 right-0 bottom-[64px] overflow-y-auto px-[16px]">
        <div className="flex items-center gap-[12px] py-[16px]">
          <div className="size-[48px] rounded-full bg-[#ffe7e3] flex items-center justify-center">
            <p className="font-['Sora:Regular',sans-serif] text-[18px] text-[#df4730]">{state.user?.avatarInitials ?? "?"}</p>
          </div>
          <div>
            <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">
              {state.user ? `${state.user.firstName} ${state.user.lastName}` : ""}
            </p>
            <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">{state.user?.email}</p>
          </div>
        </div>

        <MenuRow icon={User} label="Mi perfil" onClick={() => navigate("/perfil")} />
        <MenuRow icon={CreditCard} label="Tarjetas" onClick={() => navigate("/cards")} />
        <MenuRow icon={Landmark} label="Préstamos" onClick={() => navigate("/prestamos")} />
        <MenuRow icon={Landmark} label="Adelantos" onClick={() => navigate("/adelantos")} />
        <MenuRow icon={ArrowRightLeft} label="Intercambio" onClick={() => navigate("/intercambio")} />
        <MenuRow icon={HelpCircle} label="Preguntas frecuentes" onClick={() => navigate("/faqs")} />
        <div className="mt-[16px]">
          <MenuRow
            icon={LogOut}
            label="Cerrar sesión"
            danger
            onClick={() => {
              logout();
              navigate("/login");
            }}
          />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
