import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Smartphone, Laptop } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";

type Device = { id: string; name: string; location: string; current: boolean; kind: "mobile" | "desktop" };

const INITIAL_DEVICES: Device[] = [
  { id: "current", name: "Este dispositivo", location: "Buenos Aires, Argentina", current: true, kind: "mobile" },
  { id: "d2", name: "iPhone 13", location: "Buenos Aires, Argentina · hace 3 días", current: false, kind: "mobile" },
  { id: "d3", name: "Chrome en Windows", location: "Córdoba, Argentina · hace 2 semanas", current: false, kind: "desktop" },
];

export function SecurityDevicesPage() {
  const navigate = useNavigate();
  const [devices, setDevices] = useState(INITIAL_DEVICES);

  function disconnect(id: string) {
    setDevices((prev) => prev.filter((d) => d.id !== id));
    toast.success("Dispositivo desconectado");
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Dispositivos vinculados" onBack={() => navigate("/seguridad")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[12px] pb-[24px]">
        {devices.map((device) => {
          const Icon = device.kind === "mobile" ? Smartphone : Laptop;
          return (
            <div key={device.id} className="flex items-center gap-[12px] py-[12px] border-b border-[#edeff6]">
              <div className="size-[36px] rounded-[8px] bg-[#F7F8FE] flex items-center justify-center shrink-0">
                <Icon size={18} color="#191919" />
              </div>
              <div className="flex-1">
                <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">
                  {device.name}
                  {device.current && <span className="text-[#289B4F]"> · Activo</span>}
                </p>
                <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">{device.location}</p>
              </div>
              {!device.current && (
                <Button
                  variant="outline"
                  onClick={() => disconnect(device.id)}
                  className="h-[32px] px-[12px] rounded-[4px] border-[#DF4730] text-[#DF4730] text-[12px]"
                >
                  Desconectar
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
