import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/app/store/AuthContext";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/app/components/ui/input-otp";

function StepShell({
  title,
  subtitle,
  onBack,
  children,
}: {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative size-full bg-white overflow-y-auto">
      <StatusBar dark background="#ffffff" />
      <TopBar dark onBack={onBack} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] pb-[32px] overflow-y-auto flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="font-['Sora:Bold',sans-serif] text-[22px] text-[#191919]">{title}</h1>
          {subtitle && <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}

const COUNTRIES = ["Argentina", "Uruguay", "Chile", "México"];

export function RegisterCountryPage() {
  const navigate = useNavigate();
  const { state, setRegistration } = useAuth();
  const [country, setCountry] = useState(state.registration.country);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setRegistration({ country });
    navigate("/register-personal");
  }

  return (
    <StepShell title="¿Desde qué país te registrás?" onBack={() => navigate("/walkthrough3")}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] flex-1">
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="country">País</Label>
          <select
            id="country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-input-background px-3 text-[14px] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <option value="" disabled>
              Seleccioná un país
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1" />
        <Button type="submit" disabled={!country} className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px]">
          Continuar
        </Button>
      </form>
    </StepShell>
  );
}

export function RegisterPersonalPage() {
  const navigate = useNavigate();
  const { state, setRegistration } = useAuth();
  const [firstName, setFirstName] = useState(state.registration.firstName);
  const [lastName, setLastName] = useState(state.registration.lastName);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setRegistration({ firstName, lastName });
    navigate("/register-email");
  }

  return (
    <StepShell title="Contanos tus datos" onBack={() => navigate("/register-pais")}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] flex-1">
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="firstName">Nombre</Label>
          <Input id="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Laura" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="lastName">Apellido</Label>
          <Input id="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Martínez" />
        </div>
        <div className="flex-1" />
        <Button
          type="submit"
          disabled={!firstName || !lastName}
          className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px]"
        >
          Continuar
        </Button>
      </form>
    </StepShell>
  );
}

export function RegisterEmailPage() {
  const navigate = useNavigate();
  const { state, setRegistration } = useAuth();
  const [email, setEmail] = useState(state.registration.email);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    setRegistration({ email, password });
    navigate("/register-otp");
  }

  return (
    <StepShell title="Creá tu acceso" onBack={() => navigate("/register-personal")}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] flex-1">
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="laura@email.com" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
        </div>
        {error && <p className="text-[13px] text-[#d4183d]">{error}</p>}
        <div className="flex-1" />
        <Button
          type="submit"
          disabled={!email || !password}
          className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px]"
        >
          Continuar
        </Button>
      </form>
    </StepShell>
  );
}

export function RegisterOtpPage() {
  const navigate = useNavigate();
  const { verifyOtp } = useAuth();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (verifyOtp(code)) {
      navigate("/register-success");
    } else {
      setError("Ingresá el código de 6 dígitos que te enviamos");
    }
  }

  return (
    <StepShell title="Verificá tu email" subtitle="Ingresá el código de 6 dígitos que enviamos a tu email" onBack={() => navigate("/register-email")}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] flex-1 items-center">
        <InputOTP maxLength={6} value={code} onChange={setCode}>
          <InputOTPGroup>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
        </InputOTP>
        {error && <p className="text-[13px] text-[#d4183d]">{error}</p>}
        <div className="flex-1" />
        <Button
          type="submit"
          disabled={code.length !== 6}
          className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] w-full"
        >
          Verificar
        </Button>
      </form>
    </StepShell>
  );
}

export function RegisterSuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="relative size-full bg-white flex flex-col items-center justify-center gap-[16px] px-[24px] text-center">
      <div className="size-[72px] rounded-full bg-[#ffe7e3] flex items-center justify-center">
        <p className="text-[32px]">✓</p>
      </div>
      <h1 className="font-['Sora:Bold',sans-serif] text-[20px] text-[#191919]">¡Cuenta creada!</h1>
      <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">
        Ahora vamos a verificar tu identidad para activar tu cuenta.
      </p>
      <Button
        onClick={() => navigate("/id-start")}
        className="bg-[#df4730] hover:bg-[#df4730]/90 text-white h-[45px] rounded-[8px] w-full mt-[16px]"
      >
        Continuar
      </Button>
    </div>
  );
}
