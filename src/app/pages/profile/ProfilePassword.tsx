import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useAuth } from "@/app/store/AuthContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export function ProfilePasswordPage() {
  const navigate = useNavigate();
  const { state, changePassword } = useAuth();
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (current !== state.credentials?.password) {
      setError("La contraseña actual no es correcta");
      return;
    }
    if (next.length < 6) {
      setError("La nueva contraseña debe tener al menos 6 caracteres");
      return;
    }
    changePassword(next);
    toast.success("Contraseña actualizada");
    navigate("/perfil");
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Cambiar contraseña" onBack={() => navigate("/perfil")} />
      <form onSubmit={handleSubmit} className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="current">Contraseña actual</Label>
          <Input
            id="current"
            type="password"
            required
            value={current}
            onChange={(e) => {
              setCurrent(e.target.value);
              setError("");
            }}
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="next">Nueva contraseña</Label>
          <Input
            id="next"
            type="password"
            required
            minLength={6}
            value={next}
            onChange={(e) => {
              setNext(e.target.value);
              setError("");
            }}
          />
        </div>
        {error && <p className="text-[13px] text-[#DF4730]">{error}</p>}
        <div className="flex-1" />
        <Button
          type="submit"
          disabled={!current || next.length < 6}
          className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px] mb-[32px]"
        >
          Guardar
        </Button>
      </form>
    </div>
  );
}
