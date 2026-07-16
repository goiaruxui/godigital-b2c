import { BrowserRouter, useNavigate, useLocation } from "react-router";
import { Toaster } from "@/app/components/ui/sonner";
import { AppProviders } from "@/app/store/AppProviders";
import { AppRoutes } from "@/app/routes/AppRoutes";

const NAV_GROUPS: { label: string; paths: { path: string; label: string }[] }[] = [
  { label: "Onboarding", paths: [
    { path: "/ios", label: "iOS" },
    { path: "/splash", label: "Splash" },
    { path: "/walkthrough1", label: "Intro 1" },
  ] },
  { label: "Registro", paths: [
    { path: "/register-pais", label: "País" },
    { path: "/register-personal", label: "Datos" },
    { path: "/register-email", label: "Email" },
    { path: "/register-otp", label: "OTP" },
    { path: "/id-start", label: "KYC" },
  ] },
  { label: "Login", paths: [
    { path: "/login", label: "Login" },
    { path: "/login-faceid1", label: "Face ID" },
  ] },
  { label: "App", paths: [
    { path: "/home", label: "Home" },
    { path: "/activity", label: "Actividad" },
    { path: "/cashin", label: "Ingresar" },
    { path: "/transfer", label: "Transferir" },
    { path: "/qr", label: "QR" },
    { path: "/cards", label: "Tarjetas" },
    { path: "/perfil", label: "Perfil" },
  ] },
  { label: "Servicios / Crédito", paths: [
    { path: "/buscar-servicio-full", label: "Pagar servicio" },
    { path: "/prestamos", label: "Préstamos" },
    { path: "/adelantos", label: "Adelantos" },
    { path: "/intercambio", label: "Intercambio" },
    { path: "/faqs", label: "FAQs" },
  ] },
];

function ScreenNav() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="absolute -bottom-[168px] left-0 right-0 flex flex-col gap-1">
      {NAV_GROUPS.map((group) => (
        <div key={group.label} className="flex items-center gap-1 flex-wrap justify-center">
          <span className="text-white/40 text-[9px] shrink-0">{group.label}:</span>
          {group.paths.map((p) => (
            <button
              key={p.path}
              onClick={() => navigate(p.path)}
              className={`px-2 py-0.5 rounded-full text-[9px] font-medium transition-colors ${
                location.pathname === p.path ? "bg-[#df4730] text-white" : "bg-white/20 text-white/70 hover:bg-white/30"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

function DeviceShell() {
  return (
    <div className="relative" style={{ width: 360, height: 800 }}>
      <div className="w-full h-full overflow-hidden rounded-[40px] shadow-2xl ring-1 ring-white/10">
        <AppRoutes />
      </div>
      <ScreenNav />
    </div>
  );
}

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
          <DeviceShell />
        </div>
        <Toaster position="top-center" />
      </BrowserRouter>
    </AppProviders>
  );
}
