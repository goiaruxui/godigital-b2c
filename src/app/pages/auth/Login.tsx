import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/app/store/AuthContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export function LoginPage() {
  const navigate = useNavigate();
  const { state, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/home");
    } else {
      setError("Email o contraseña incorrectos");
    }
  }

  function handleBiometric() {
    if (!state.credentials) {
      setError("Todavía no tenés una cuenta creada en este dispositivo");
      return;
    }
    navigate("/login-faceid1");
  }

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <div className="absolute top-[100px] left-0 right-0 bottom-0 px-[24px] flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="font-['Sora:Bold',sans-serif] text-[22px] text-[#191919]">Iniciar sesión</h1>
          <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">Ingresá tu email y contraseña</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="login-email">Email</Label>
            <Input id="login-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="laura@email.com" />
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="login-password">Contraseña</Label>
            <Input
              id="login-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
            />
          </div>
          {error && <p className="text-[13px] text-[#DF4730]">{error}</p>}
          <Button type="submit" className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px] mt-[8px]">
            Iniciar sesión
          </Button>
        </form>
        <button
          type="button"
          onClick={handleBiometric}
          className="font-['Sora:Bold',sans-serif] text-[14px] text-[#df4730] text-center cursor-pointer"
        >
          Utilizar datos biométricos
        </button>
        <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] text-center">
          ¿No tenés cuenta?{" "}
          <button type="button" className="text-[#df4730] font-['Sora:Bold',sans-serif] cursor-pointer" onClick={() => navigate("/register-personal")}>
            Registrate
          </button>
        </p>
      </div>
    </div>
  );
}
