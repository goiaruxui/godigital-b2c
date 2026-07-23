import { useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { BillerAvatar } from "@/app/components/shared/BillerAvatar";
import { getBiller } from "@/app/lib/billers";
import { useRedirect } from "@/app/lib/useRedirect";

function validateAccount(value: string): string {
  if (!value) return "";
  if (value[0] === "0") return "El primer dígito no puede ser cero";
  if (value.length < 2 || value.length > 8) return "Entre 2 y 8 dígitos";
  return "";
}

export function ServiciosAccountPage() {
  const navigate = useNavigate();
  const { billerId } = useParams();
  const biller = billerId ? getBiller(billerId) : undefined;
  const [account, setAccount] = useState("");
  const [touched, setTouched] = useState(false);

  useRedirect(!biller, "/servicios");
  if (!biller) return null;

  const error = touched ? validateAccount(account) : "";
  const valid = account.length >= 2 && account.length <= 8 && account[0] !== "0";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    navigate(`/servicios/${biller!.id}/monto`, { state: { account } });
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Ingresa los datos" onBack={() => navigate("/servicios")} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <div className="flex items-center gap-[12px] py-[8px]">
          <BillerAvatar name={biller.name} size={48} />
          <div>
            <p className="font-['Sora:Bold',sans-serif] text-[16px] text-[#191919]">{biller.name}</p>
            <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">{biller.shortLabel}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="account">Número de cliente</Label>
          <Input
            id="account"
            inputMode="numeric"
            autoFocus
            value={account}
            onChange={(e) => setAccount(e.target.value.replace(/[^0-9]/g, "").slice(0, 8))}
            onBlur={() => setTouched(true)}
            placeholder="Entre 2 y 8 dígitos"
            aria-invalid={Boolean(error)}
          />
          {error && <p className="text-[13px] text-[#DF4730]">{error}</p>}
        </div>
        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px] mb-[32px]">
          Continuar
        </Button>
      </form>
    </div>
  );
}
