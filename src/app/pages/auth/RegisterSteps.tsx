import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Check } from "lucide-react";
import { useAuth } from "@/app/store/AuthContext";
import { getLegalDoc, TERMS_DOC_ID, PRIVACY_DOC_ID } from "@/app/lib/legalDocs";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/app/components/ui/input-otp";
import { useCancelableTimeout } from "@/app/lib/useCancelableTimeout";

function StepShell({
  title,
  subtitle,
  onBack,
  children,
}: {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  children: ReactNode;
}) {
  return (
    <div className="relative size-full bg-white overflow-y-auto">
      <StatusBar dark background="#ffffff" />
      <TopBar dark onBack={onBack} />
      <div className="absolute top-[44px] right-[24px] h-[52px] flex items-center">
        <p className="font-['Sora:Bold',sans-serif] text-[18px] text-[#DF4730]">Gollet</p>
      </div>
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

const COUNTRIES: { name: string; flag: string }[] = [
  { name: "Argentina", flag: "🇦🇷" },
  { name: "Uruguay", flag: "🇺🇾" },
  { name: "Chile", flag: "🇨🇱" },
  { name: "México", flag: "🇲🇽" },
];

const PHONE_CODES: { code: string; flag: string }[] = [
  { code: "+54", flag: "🇦🇷" },
  { code: "+598", flag: "🇺🇾" },
  { code: "+56", flag: "🇨🇱" },
  { code: "+52", flag: "🇲🇽" },
];

export function RegisterPersonalPage() {
  const navigate = useNavigate();
  const { state, setRegistration } = useAuth();
  const [firstName, setFirstName] = useState(state.registration.firstName);
  const [lastName, setLastName] = useState(state.registration.lastName);
  const [phoneCountryCode, setPhoneCountryCode] = useState(state.registration.phoneCountryCode || "+54");
  const [phoneAreaCode, setPhoneAreaCode] = useState(state.registration.phoneAreaCode);
  const [phoneNumber, setPhoneNumber] = useState(state.registration.phoneNumber);
  const [acceptedTerms, setAcceptedTerms] = useState(state.registration.acceptedTerms);

  const valid = Boolean(firstName && lastName && phoneAreaCode && phoneNumber && acceptedTerms);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    const now = new Date().toISOString();
    setRegistration({
      firstName,
      lastName,
      phoneCountryCode,
      phoneAreaCode,
      phoneNumber,
      acceptedTerms,
      termsVersion: getLegalDoc(TERMS_DOC_ID)?.version ?? "",
      termsAcceptedAt: now,
      privacyVersion: getLegalDoc(PRIVACY_DOC_ID)?.version ?? "",
      privacyAcceptedAt: now,
    });
    navigate("/register-pais");
  }

  return (
    <StepShell title="Crea una cuenta" subtitle="Solo te llevará algunos minutos" onBack={() => navigate("/walkthrough3")}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] flex-1">
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="firstName">Nombres</Label>
          <Input id="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Laura" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="lastName">Apellidos</Label>
          <Input id="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="ej. Ramirez" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label>Teléfono móvil</Label>
          <div className="flex gap-[8px]">
            <Select value={phoneCountryCode} onValueChange={setPhoneCountryCode}>
              <SelectTrigger className="w-[92px] shrink-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PHONE_CODES.map((p) => (
                  <SelectItem key={p.code} value={p.code}>
                    {p.flag} {p.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              inputMode="numeric"
              required
              value={phoneAreaCode}
              onChange={(e) => setPhoneAreaCode(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="11"
              className="w-[56px] shrink-0"
            />
            <Input
              inputMode="numeric"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="XXXX XXXX"
              className="flex-1"
            />
          </div>
        </div>
        <label className="flex items-start gap-[8px] cursor-pointer">
          <Checkbox
            checked={acceptedTerms}
            onCheckedChange={(v) => setAcceptedTerms(v === true)}
            className="mt-[2px]"
          />
          <span className="font-['Sora:Regular',sans-serif] text-[13px] text-[#191919]">
            Acepto{" "}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/legal/${TERMS_DOC_ID}`);
              }}
              className="text-[#DF4730] font-['Sora:Bold',sans-serif] cursor-pointer"
            >
              términos y condiciones
            </button>{" "}
            y la{" "}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/legal/${PRIVACY_DOC_ID}`);
              }}
              className="text-[#DF4730] font-['Sora:Bold',sans-serif] cursor-pointer"
            >
              política de privacidad
            </button>
          </span>
        </label>
        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px]">
          Siguiente
        </Button>
      </form>
    </StepShell>
  );
}

export function RegisterCountryPage() {
  const navigate = useNavigate();
  const { state, setRegistration } = useAuth();
  const [country, setCountry] = useState(state.registration.country);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!country) return;
    setRegistration({ country });
    navigate("/register-email");
  }

  return (
    <StepShell title="Crea una cuenta" subtitle="Solo te llevará algunos minutos" onBack={() => navigate("/register-personal")}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[8px] flex-1">
        <Label htmlFor="country">País de residencia</Label>
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger id="country" className="w-full">
            <SelectValue placeholder="Seleccioná un país" />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((c) => (
              <SelectItem key={c.name} value={c.name}>
                {c.flag} {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">
          Debe ser igual que el de tu documento de identidad
        </p>
        <div className="flex-1" />
        <Button type="submit" disabled={!country} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px]">
          Siguiente
        </Button>
      </form>
    </StepShell>
  );
}

const PASSWORD_RULES: { label: string; test: (v: string) => boolean }[] = [
  { label: "6 caracteres", test: (v) => v.length >= 6 },
  { label: "Una mayúscula", test: (v) => /[A-Z]/.test(v) },
  { label: "Un número", test: (v) => /[0-9]/.test(v) },
  { label: "Un carácter especial", test: (v) => /[^A-Za-z0-9]/.test(v) },
];

function PasswordField({
  id,
  label,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col gap-[8px]">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={visible ? "text" : "password"}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pr-[40px]"
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-[12px] top-1/2 -translate-y-1/2 cursor-pointer"
          aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
        >
          {visible ? <EyeOff size={18} color="#78838d" /> : <Eye size={18} color="#78838d" />}
        </button>
      </div>
    </div>
  );
}

export function RegisterEmailPage() {
  const navigate = useNavigate();
  const { state, setRegistration } = useAuth();
  const [email, setEmail] = useState(state.registration.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const rulesPassed = PASSWORD_RULES.every((r) => r.test(password));
  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const valid = Boolean(email && rulesPassed && passwordsMatch);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setRegistration({ email, password });
    navigate("/register-otp");
  }

  return (
    <StepShell title="Crea una cuenta" subtitle="Solo te llevará algunos minutos" onBack={() => navigate("/register-pais")}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] flex-1">
        <div className="flex flex-col gap-[8px]">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="laura@email.com" />
        </div>
        <PasswordField id="password" label="Contraseña" placeholder="Ingresa una contraseña" value={password} onChange={setPassword} />
        <PasswordField
          id="confirmPassword"
          label="Repetir contraseña"
          placeholder="Repite la contraseña"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
        <div className="flex flex-col gap-[6px]">
          <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">La contraseña debe contener como mínimo:</p>
          {PASSWORD_RULES.map((rule) => {
            const passed = rule.test(password);
            return (
              <div key={rule.label} className="flex items-center gap-[8px]">
                <div
                  className={`size-[16px] rounded-full border flex items-center justify-center shrink-0 ${
                    passed ? "bg-[#289B4F] border-[#289B4F]" : "border-[#BAC2C7]"
                  }`}
                >
                  {passed && <Check size={11} color="#ffffff" strokeWidth={3} />}
                </div>
                <p className={`font-['Sora:Regular',sans-serif] text-[13px] ${passed ? "text-[#289B4F]" : "text-[#78838d]"}`}>
                  {rule.label}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex-1" />
        <Button type="submit" disabled={!valid} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px]">
          Siguiente
        </Button>
      </form>
    </StepShell>
  );
}

const RESEND_SECONDS = 30;

export function RegisterOtpPage() {
  const navigate = useNavigate();
  const { state, verifyOtp, completeRegistration } = useAuth();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const schedule = useCancelableTimeout();

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  function handleResend() {
    if (secondsLeft > 0) return;
    setSecondsLeft(RESEND_SECONDS);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!verifyOtp(code)) {
      setError("Ingresá el código de 6 dígitos que te enviamos");
      return;
    }
    setError("");
    setVerifying(true);
    schedule(() => {
      completeRegistration();
      navigate("/register-success");
    }, 600);
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <StepShell
      title="Verificá tu email"
      subtitle={`Enviamos un código al correo electrónico ${state.registration.email}`}
      onBack={() => navigate("/register-email")}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] flex-1 items-center">
        <div className="flex flex-col items-center gap-[8px] w-full">
          <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">Ingresa el código</p>
          <InputOTP maxLength={6} value={code} onChange={setCode}>
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        {error && <p className="text-[13px] text-[#DF4730]">{error}</p>}
        <button
          type="button"
          onClick={handleResend}
          disabled={secondsLeft > 0}
          className={`font-['Sora:Bold',sans-serif] text-[14px] ${
            secondsLeft > 0 ? "text-[#78838d]" : "text-[#DF4730] cursor-pointer"
          }`}
        >
          Reenviar código {secondsLeft > 0 ? `${mm}:${ss}` : ""}
        </button>
        <div className="flex-1" />
        <Button
          type="submit"
          disabled={code.length !== 6 || verifying}
          className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px] w-full"
        >
          {verifying ? <span className="size-[18px] rounded-full border-[2.5px] border-white/40 border-t-white animate-spin" /> : "Verificar código"}
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
        <Check size={32} color="#df4730" />
      </div>
      <h1 className="font-['Sora:Bold',sans-serif] text-[20px] text-[#191919]">¡Tu cuenta está lista!</h1>
      <p className="font-['Sora:Regular',sans-serif] text-[14px] text-[#78838d]">
        Accede a tu cuenta o valida tu identidad para comenzar a operar.
      </p>
      <div className="flex flex-col gap-[12px] w-full mt-[16px]">
        <Button onClick={() => navigate("/id-start")} className="bg-[#FF583F] hover:bg-[#DF4730] text-white h-[45px] rounded-[4px]">
          Validar mi identidad
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate("/home")}
          className="h-[45px] rounded-[4px] border-[#DF4730] text-[#DF4730]"
        >
          Ir a mi billetera
        </Button>
      </div>
    </div>
  );
}
