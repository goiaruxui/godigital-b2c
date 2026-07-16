import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export function ServiceFormPage() {
  const navigate = useNavigate();
  const [company, setCompany] = useState("");
  const [account, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const numeric = Number(amount.replace(",", "."));
  const valid = company.trim() && account.trim() && numeric > 0;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    navigate("/servicio-confirm", { state: { company: company.trim(), account: account.trim(), amount: numeric } });
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Pagar servicio" onBack={() => navigate("/buscar-servicio-full")} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="company">Empresa o servicio</Label>
          <Input id="company" required value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Edesur, Metrogas, Movistar..." />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="account">Número de cliente / cuenta</Label>
          <Input id="account" required value={account} onChange={(e) => setAccountNumber(e.target.value)} placeholder="0000000000" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="amount">Monto a pagar</Label>
          <div className="flex items-center gap-[4px]">
            <span className="font-['Sora:Regular',sans-serif] text-[16px] text-[#191919]">$</span>
            <Input
              id="amount"
              inputMode="decimal"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9,]/g, ""))}
              placeholder="0,00"
            />
          </div>
        </div>
        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] mb-[32px]">
          Continuar
        </Button>
      </form>
    </div>
  );
}
