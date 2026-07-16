import { useNavigate } from "react-router";
import { UserCog, KeyRound, Bell, LogOut } from "lucide-react";
import { useAuth } from "@/app/store/AuthContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { MenuRow } from "@/app/components/layout/MenuRow";

export function ProfilePage() {
  const navigate = useNavigate();
  const { state, logout } = useAuth();

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark onBack={() => navigate("/mas")} />
      <div className="absolute top-[88px] left-0 right-0 bottom-0 overflow-y-auto px-[16px]">
        <div className="flex flex-col items-center gap-[8px] pb-[24px]">
          <div className="size-[64px] rounded-full bg-[#ffe7e3] flex items-center justify-center">
            <p className="font-['Sora:Regular',sans-serif] text-[24px] text-[#df4730]">{state.user?.avatarInitials ?? "?"}</p>
          </div>
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">
            {state.user ? `${state.user.firstName} ${state.user.lastName}` : ""}
          </p>
          <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">{state.user?.email}</p>
        </div>

        <MenuRow icon={UserCog} label="Editar perfil" onClick={() => navigate("/perfil/editar")} />
        <MenuRow icon={KeyRound} label="Cambiar contraseña" onClick={() => navigate("/perfil/contrasena")} />
        <MenuRow icon={Bell} label="Configurar notificaciones" onClick={() => navigate("/notificaciones")} />
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
    </div>
  );
}
