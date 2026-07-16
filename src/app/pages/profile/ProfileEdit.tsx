import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useAuth } from "@/app/store/AuthContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export function ProfileEditPage() {
  const navigate = useNavigate();
  const { state, updateProfile } = useAuth();
  const [firstName, setFirstName] = useState(state.user?.firstName ?? "");
  const [lastName, setLastName] = useState(state.user?.lastName ?? "");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) return;
    updateProfile(firstName.trim(), lastName.trim());
    toast.success("Perfil actualizado");
    navigate("/perfil");
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Editar perfil" onBack={() => navigate("/perfil")} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="firstName">Nombre</Label>
          <Input id="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="lastName">Apellido</Label>
          <Input id="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="flex-1" />
        <Button
          type="submit"
          disabled={!firstName.trim() || !lastName.trim()}
          className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] mb-[32px]"
        >
          Guardar
        </Button>
      </form>
    </div>
  );
}
