import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { User } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const CONTACTS = [
  { name: "Juan Pérez", alias: "juan.perez.gd" },
  { name: "Sofía Gómez", alias: "sofia.gomez.gd" },
  { name: "Martín Ruiz", alias: "martin.ruiz.gd" },
];

const ALIAS_OR_CBU_PATTERN = /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+){2}|\d{22})$/;

export function TransferRecipientPage() {
  const navigate = useNavigate();
  const [cbu, setCbu] = useState("");
  const [error, setError] = useState("");

  function goToAmount(recipient: string) {
    navigate("/transfer-amount", { state: { recipient } });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!ALIAS_OR_CBU_PATTERN.test(cbu.trim())) {
      setError("Ingresá un alias válido (palabra.palabra.palabra) o un CBU/CVU de 22 dígitos");
      return;
    }
    goToAmount(cbu.trim());
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Transferir" onBack={() => navigate("/home")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[24px] pb-[24px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[8px]">
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">CBU, CVU o alias</p>
          <div className="flex gap-[8px]">
            <Input
              value={cbu}
              onChange={(e) => setCbu(e.target.value)}
              placeholder="nombre.apellido.banco"
              className="flex-1"
            />
            <Button type="submit" className="bg-[#FF583F] hover:bg-[#DF4730] text-white">
              Continuar
            </Button>
          </div>
          {error && <p className="text-[13px] text-[#DF4730]">{error}</p>}
        </form>

        <div className="flex flex-col gap-[8px]">
          <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">Contactos</p>
          {CONTACTS.map((c) => (
            <button
              key={c.alias}
              type="button"
              onClick={() => goToAmount(c.name)}
              className="w-full flex items-center gap-[12px] py-[8px] cursor-pointer text-left"
            >
              <div className="size-[36px] rounded-[8px] bg-[#F7F8FE] flex items-center justify-center shrink-0">
                <User size={18} color="#191919" />
              </div>
              <div>
                <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{c.name}</p>
                <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">{c.alias}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
