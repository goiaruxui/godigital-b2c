import { useNavigate } from "react-router";
import {
  ChevronRight,
  FileText,
  DollarSign,
  Zap,
  RefreshCw,
  Send,
  ShieldCheck,
  Trophy,
  BarChart2,
  Lock,
  HelpCircle,
  MessageCircle,
  Scale,
  LogOut,
} from "lucide-react";
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
      <div className="absolute top-[96px] left-0 right-0 bottom-[64px] overflow-y-auto px-[16px] pb-[24px]">
        <button
          type="button"
          onClick={() => navigate("/perfil")}
          className="w-full flex items-center gap-[12px] py-[12px] px-[16px] mb-[16px] border border-[#EDEFF7] rounded-[8px] cursor-pointer text-left"
        >
          <div className="size-[48px] rounded-full bg-[#ffe7e3] flex items-center justify-center shrink-0">
            <p className="font-['Sora:Regular',sans-serif] text-[18px] text-[#df4730]">{state.user?.avatarInitials ?? "?"}</p>
          </div>
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919] flex-1">
            {state.user ? `${state.user.firstName} ${state.user.lastName}` : ""}
          </p>
          <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#DF4730]">Mi perfil</p>
          <ChevronRight size={16} color="#DF4730" />
        </button>

        <MenuRow icon={FileText} label="Pagar servicios" onClick={() => navigate("/servicios")} />
        <MenuRow icon={DollarSign} label="Préstamos" onClick={() => navigate("/prestamos")} />
        <MenuRow icon={Zap} label="Adelantos" onClick={() => navigate("/adelantos")} />
        <MenuRow icon={RefreshCw} label="Intercambiar" onClick={() => navigate("/intercambio")} />
        <MenuRow icon={Send} label="Giros y remesas" onClick={() => navigate("/giros-remesas")} />
        <MenuRow icon={ShieldCheck} label="Seguros y asistencias" onClick={() => navigate("/seguros-asistencias")} />
        <MenuRow icon={Trophy} label="Beneficios" onClick={() => navigate("/beneficios")} />
        <MenuRow icon={BarChart2} label="Reportes" onClick={() => navigate("/reportes")} />
        <MenuRow icon={Lock} label="Seguridad" onClick={() => navigate("/seguridad")} />

        <div className="mt-[16px]">
          <MenuRow icon={HelpCircle} label="Preguntas frecuentes" onClick={() => navigate("/faqs")} />
          <MenuRow icon={MessageCircle} label="Asistente virtual" onClick={() => navigate("/asistente-virtual")} />
          <MenuRow icon={Scale} label="Legal" onClick={() => navigate("/legal")} />
        </div>

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
