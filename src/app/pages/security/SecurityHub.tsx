import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  ScanFace,
  KeyRound,
  ShieldCheck,
  Clock,
  Smartphone,
  Wallet,
  EyeOff,
  Flag,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Switch } from "@/app/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { useSecurity } from "@/app/store/SecurityContext";

function Row({
  icon: Icon,
  label,
  subtitle,
  right,
  onClick,
}: {
  icon: typeof ScanFace;
  label: string;
  subtitle?: string;
  right?: React.ReactNode;
  onClick?: () => void;
}) {
  const content = (
    <>
      <div className="size-[36px] rounded-[8px] bg-[#F7F8FE] flex items-center justify-center shrink-0">
        <Icon size={18} color="#191919" />
      </div>
      <div className="flex-1">
        <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{label}</p>
        {subtitle && <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">{subtitle}</p>}
      </div>
      {right ?? (onClick && <ChevronRight size={18} color="#78838d" />)}
    </>
  );

  if (!onClick) {
    return <div className="w-full flex items-center gap-[12px] py-[12px]">{content}</div>;
  }
  return (
    <button type="button" onClick={onClick} className="w-full flex items-center gap-[12px] py-[12px] cursor-pointer text-left">
      {content}
    </button>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#78838d] uppercase tracking-wide">{children}</p>;
}

export function SecurityHubPage() {
  const navigate = useNavigate();
  const { state, toggleFaceId, toggleTwoFactor, setAutoLockMinutes, toggleHideAmounts } = useSecurity();

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Seguridad" onBack={() => navigate("/mas")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[24px] pb-[24px]">
        <div className="flex flex-col gap-[4px]">
          <SectionTitle>Acceso a la cuenta</SectionTitle>
          <Row
            icon={ScanFace}
            label="Face ID"
            subtitle={state.faceIdEnabled ? "Activado" : "Desactivado"}
            right={<Switch checked={state.faceIdEnabled} onCheckedChange={toggleFaceId} />}
          />
          <Row icon={KeyRound} label="Cambiar contraseña" onClick={() => navigate("/perfil/contrasena")} />
          <Row
            icon={ShieldCheck}
            label="Autenticación en dos pasos"
            subtitle={state.twoFactorEnabled ? "Activada" : "No configurada"}
            right={<Switch checked={state.twoFactorEnabled} onCheckedChange={toggleTwoFactor} />}
          />
          <Row
            icon={Clock}
            label="Solicitar clave"
            right={
              <Select value={String(state.autoLockMinutes)} onValueChange={(v) => setAutoLockMinutes(Number(v))}>
                <SelectTrigger className="w-[160px] text-[13px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Después de 1 min</SelectItem>
                  <SelectItem value="5">Después de 5 min</SelectItem>
                  <SelectItem value="0">Nunca</SelectItem>
                </SelectContent>
              </Select>
            }
          />
        </div>

        <div className="flex flex-col gap-[4px]">
          <SectionTitle>Sesión y dispositivos</SectionTitle>
          <Row icon={Smartphone} label="Dispositivos vinculados" onClick={() => navigate("/seguridad/dispositivos")} />
        </div>

        <div className="flex flex-col gap-[4px]">
          <SectionTitle>Tarjetas y pagos</SectionTitle>
          <Row icon={Wallet} label="Seguridad de la tarjeta" onClick={() => navigate("/cards")} />
        </div>

        <div className="flex flex-col gap-[4px]">
          <SectionTitle>Privacidad</SectionTitle>
          <Row
            icon={EyeOff}
            label="Ocultar montos en capturas"
            subtitle="Oculta tu saldo en capturas y grabaciones de pantalla"
            right={<Switch checked={state.hideAmountsInScreenshots} onCheckedChange={toggleHideAmounts} />}
          />
        </div>

        <div className="flex flex-col gap-[4px]">
          <button
            type="button"
            onClick={() => toast("Disponible próximamente")}
            className="w-full flex items-center gap-[8px] py-[12px] cursor-pointer text-left"
          >
            <Flag size={18} color="#DF4730" />
            <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#DF4730]">Tengo un problema de seguridad</p>
          </button>
          <Row icon={Lightbulb} label="Aprende sobre seguridad" onClick={() => navigate("/faqs")} />
        </div>
      </div>
    </div>
  );
}
