import { BrowserRouter } from "react-router";
import { Toaster } from "@/app/components/ui/sonner";
import { AppProviders } from "@/app/store/AppProviders";
import { AppRoutes } from "@/app/routes/AppRoutes";

function DeviceShell() {
  return (
    <div className="relative" style={{ width: 360, height: 800 }}>
      <div className="w-full h-full overflow-hidden rounded-[40px] shadow-2xl ring-1 ring-white/10">
        <AppRoutes />
      </div>
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
