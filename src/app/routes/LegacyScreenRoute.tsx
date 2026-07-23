import { useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router";
import { useAuth } from "@/app/store/AuthContext";

/* ── Onboarding ── */
import IosImport from "@/imports/Ios/index";
import SplashImport from "@/imports/Splash2/index";
import Walkthrough1Import from "@/imports/Walkthrough1/index";
import Walkthrough2Import from "@/imports/Walkthrough2/index";
import Walkthrough3Import from "@/imports/Walkthrough3/index";

/* ── Identidad ── */
import IdStartImport from "@/imports/GoIdentityStart/index";
import IdDocInicioImport from "@/imports/GoIdentityInicioDocumento/index";
import IdFrente1Import from "@/imports/GoIdentityFrenteDocumento1/index";
import IdFrente2Import from "@/imports/GoIdentityFrenteDocumento2/index";
import IdDorso1Import from "@/imports/GoIdentityDorsoDocumento1/index";
import IdDorso2Import from "@/imports/GoIdentityDorsoDocumento2/index";
import IdSelfieIntroImport from "@/imports/1/index";
import IdSelfie1Import from "@/imports/2/index";
import IdSelfie2Import from "@/imports/8/index";
import IdSelfie3Import from "@/imports/9/index";
import IdLoading2Import from "@/imports/Loading-1/index";
import IdSuccessImport from "@/imports/Success-1/index";

/* ── Login (biometría) ── */
import LoginFaceId1Import from "@/imports/LoginFaceId1/index";
import LoginFaceId2Import from "@/imports/LoginFaceId2/index";

/* ── FAQs ── */
import FaQs1Import from "@/imports/FaQs1/index";
import FaQs2Import from "@/imports/FaQs2/index";

/* ═══════════════════════════════════
   SHARED PRIMITIVES
   (sin cambios de comportamiento respecto al prototipo original,
   solo `nav` ahora navega con react-router en vez de un useState local)
═══════════════════════════════════ */

function AutoScreen({ Comp, onDone }: { Comp: React.ComponentType; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="relative w-full h-full cursor-pointer" onClick={onDone}>
      <Comp />
    </div>
  );
}

function SimpleWrapper({
  Comp,
  onBack,
  extraOverlay,
}: {
  Comp: React.ComponentType;
  onBack: () => void;
  extraOverlay?: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-full">
      <Comp />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 40 }} onClick={onBack} />
      {extraOverlay}
    </div>
  );
}

function WalkthroughScreen({
  which,
  onRegister,
  onLogin,
  onNext,
}: {
  which: 1 | 2 | 3;
  onRegister: () => void;
  onLogin: () => void;
  onNext: () => void;
}) {
  const Comp = which === 1 ? Walkthrough1Import : which === 2 ? Walkthrough2Import : Walkthrough3Import;
  return (
    <div className="relative w-full h-full">
      <Comp />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, right: 0, bottom: 180 }} onClick={onNext} />
      <div className="absolute cursor-pointer" style={{ bottom: 75, left: 16, right: 16, height: 45 }} onClick={onRegister} />
      <div className="absolute cursor-pointer" style={{ bottom: 22, left: 16, right: 16, height: 45 }} onClick={onLogin} />
    </div>
  );
}

/* ═══════════════════════════════════
   CATCH-ALL ROUTE
═══════════════════════════════════ */

export function LegacyScreenRoute() {
  const { legacyId } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();
  const nav = (id: string) => navigate("/" + id);
  const [idStartAccepted, setIdStartAccepted] = useState(false);

  switch (legacyId) {
    /* Onboarding */
    case "ios":
      return (
        <div className="relative w-full h-full">
          <IosImport />
          <div
            className="absolute cursor-pointer rounded-[14px]"
            style={{ top: 462, left: "50%", transform: "translateX(-155px)", width: 60, height: 60 }}
            onClick={() => nav("splash")}
          />
        </div>
      );
    case "splash":
      return <AutoScreen Comp={SplashImport} onDone={() => nav("walkthrough1")} />;
    case "walkthrough1":
      return (
        <WalkthroughScreen
          which={1}
          onRegister={() => nav("register-pais")}
          onLogin={() => nav("login")}
          onNext={() => nav("walkthrough2")}
        />
      );
    case "walkthrough2":
      return (
        <WalkthroughScreen
          which={2}
          onRegister={() => nav("register-pais")}
          onLogin={() => nav("login")}
          onNext={() => nav("walkthrough3")}
        />
      );
    case "walkthrough3":
      return (
        <WalkthroughScreen
          which={3}
          onRegister={() => nav("register-pais")}
          onLogin={() => nav("login")}
          onNext={() => nav("register-pais")}
        />
      );

    /* Identidad (KYC simulado) */
    case "id-start":
      return (
        <div className="relative w-full h-full">
          <IdStartImport accepted={idStartAccepted} onToggle={() => setIdStartAccepted((v) => !v)} />
          <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 40 }} onClick={() => nav("register-success")} />
          {idStartAccepted && (
            <div className="absolute cursor-pointer" style={{ top: 715, left: 16, right: 16, height: 45 }} onClick={() => nav("id-doc-inicio")} />
          )}
        </div>
      );
    case "id-doc-inicio":
      return (
        <SimpleWrapper
          Comp={IdDocInicioImport}
          onBack={() => nav("id-start")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 715, left: 16, right: 16, height: 45 }} onClick={() => nav("id-frente1")} />}
        />
      );
    case "id-frente1":
      return (
        <SimpleWrapper
          Comp={IdFrente1Import}
          onBack={() => nav("id-doc-inicio")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 597, left: 16, right: 16, height: 45 }} onClick={() => nav("id-frente2")} />}
        />
      );
    case "id-frente2":
      return (
        <SimpleWrapper
          Comp={IdFrente2Import}
          onBack={() => nav("id-frente1")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ top: 597, left: 16, right: 16, height: 45 }} onClick={() => nav("id-dorso1")} />
              <div className="absolute cursor-pointer" style={{ top: 650, left: 16, right: 16, height: 45 }} onClick={() => nav("id-frente1")} />
            </>
          }
        />
      );
    case "id-dorso1":
      return (
        <SimpleWrapper
          Comp={IdDorso1Import}
          onBack={() => nav("id-frente2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 597, left: 16, right: 16, height: 45 }} onClick={() => nav("id-dorso2")} />}
        />
      );
    case "id-dorso2":
      return (
        <SimpleWrapper
          Comp={IdDorso2Import}
          onBack={() => nav("id-dorso1")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ top: 597, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie-intro")} />
              <div className="absolute cursor-pointer" style={{ top: 650, left: 16, right: 16, height: 45 }} onClick={() => nav("id-dorso1")} />
            </>
          }
        />
      );
    case "id-selfie-intro":
      return (
        <SimpleWrapper
          Comp={IdSelfieIntroImport}
          onBack={() => nav("id-dorso2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 715, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie1")} />}
        />
      );
    case "id-selfie1":
      return (
        <SimpleWrapper
          Comp={IdSelfie1Import}
          onBack={() => nav("id-selfie-intro")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 627, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie2")} />}
        />
      );
    case "id-selfie2":
      return (
        <SimpleWrapper
          Comp={IdSelfie2Import}
          onBack={() => nav("id-selfie1")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 627, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie3")} />}
        />
      );
    case "id-selfie3":
      return (
        <SimpleWrapper
          Comp={IdSelfie3Import}
          onBack={() => nav("id-selfie2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 627, left: 16, right: 16, height: 45 }} onClick={() => nav("id-loading-2")} />}
        />
      );
    case "id-loading-2":
      return <AutoScreen Comp={IdLoading2Import} onDone={() => nav("id-success")} />;
    case "id-success":
      return (
        <AutoScreen
          Comp={IdSuccessImport}
          onDone={() => {
            auth.completeKyc();
            auth.completeRegistration();
            navigate("/home");
          }}
        />
      );

    /* Login biométrico */
    case "login-faceid1":
      return (
        <div className="relative w-full h-full cursor-pointer" onClick={() => nav("login-faceid2")}>
          <LoginFaceId1Import />
        </div>
      );
    case "login-faceid2":
      return (
        <AutoScreen
          Comp={LoginFaceId2Import}
          onDone={() => {
            auth.loginWithBiometrics();
            navigate("/home");
          }}
        />
      );

    /* FAQs */
    case "faqs":
      return (
        <SimpleWrapper
          Comp={FaQs1Import}
          onBack={() => navigate("/mas")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 239, left: 0, right: 0, height: 52 }} onClick={() => nav("faqs-detalle")} />}
        />
      );
    case "faqs-detalle":
      return <SimpleWrapper Comp={FaQs2Import} onBack={() => nav("faqs")} />;

    default:
      return <Navigate to="/home" replace />;
  }
}
