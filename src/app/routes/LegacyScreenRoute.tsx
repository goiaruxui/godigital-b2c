import { useEffect } from "react";
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
import IdLoadingImport from "@/imports/Loading/index";
import IdLoading2Import from "@/imports/Loading-1/index";
import IdSuccessImport from "@/imports/Success-1/index";

/* ── Login (biometría) ── */
import LoginFaceId1Import from "@/imports/LoginFaceId1/index";
import LoginFaceId2Import from "@/imports/LoginFaceId2/index";

/* ── Buscar / directorio de servicios (entrada a Pago Servicio) ── */
import BuscarServicioFull from "@/imports/BuscarServicio1-1/index";

/* ── Perfil ── */
import PerfilImport from "@/imports/Perfil/index";

/* ── Tarjetas ── */
import CardsImport from "@/imports/Cards/index";
import Cards1Import from "@/imports/Cards-1/index";
import DetalleTarjeta1Import from "@/imports/DetalleTarjeta-1/index";
import DetalleTarjeta2Import from "@/imports/DetalleTarjeta-2/index";
import DetalleTarjeta3Import from "@/imports/DetalleTarjeta-3/index";
import DetalleTarjeta4Import from "@/imports/DetalleTarjeta-4/index";
import BottomSheet7Import from "@/imports/BottomSheet-7/index";
import BottomSheet8Import from "@/imports/BottomSheet-8/index";
import BottomSheet9Import from "@/imports/BottomSheet-9/index";
import BottomSheet10Import from "@/imports/BottomSheet-10/index";

/* ── Wallet / PIN ── */
import DetalleTarjeta5Import from "@/imports/DetalleTarjeta-5/index";
import TarjetaAppleWalletImport from "@/imports/TarjetaAppleWallet/index";
import TarjetaGoogleWalletImport from "@/imports/TarjetaGoogleWallet/index";
import ApplePayImport from "@/imports/ApplePay/index";
import GooglePayImport from "@/imports/GooglePay/index";
import CambiarPinEmptyImport from "@/imports/CambiarPinEmpty-1/index";
import CambiarPinActiveImport from "@/imports/CambiarPinEmpty/index";
import CambiarPinFilledImport from "@/imports/CambiarPinCompleted/index";
import CambiarPinLoadingImport from "@/imports/CambiarPinCompleted-1/index";
import Success2Import from "@/imports/Success-2/index";

/* ── Adelantos ── */
import AdelantosVigentesImport from "@/imports/AdelantosVigentes-1/index";
import AdelantosVigentes2Import from "@/imports/AdelantosVigentes-2/index";
import AdelantosCuotasImport from "@/imports/AdelantosVigentes/index";
import AdelantosDetalle1Import from "@/imports/Prestamos-1/index";
import AdelantosDetalle2Import from "@/imports/Prestamos-2/index";
import SimularAdelantoEmptyImport from "@/imports/SimularPrestamo1/index";
import SimularAdelantoFilledImport from "@/imports/SimularPrestamo2-1/index";
import ResumenAdelantoImport from "@/imports/ResumenPrestamo-1/index";
import Loading5Import from "@/imports/Loading-5/index";
import AdelantoSuccessImport from "@/imports/PrestamoSuccess-1/index";

/* ── Intercambio ── */
import IntercambiarImport from "@/imports/Intercambiar/index";
import Intercambiar2Import from "@/imports/Intercambiar2/index";
import ResumenIntercambioImport from "@/imports/ResumenIntercambio/index";
import ResumenIntercambio1Import from "@/imports/ResumenIntercambio-1/index";
import IntercambioSuccessImport from "@/imports/IntercambioSuccess/index";

/* ── FAQs ── */
import FaQs1Import from "@/imports/FaQs1/index";
import FaQs2Import from "@/imports/FaQs2/index";

/* ── Préstamos ── */
import Loading4Import from "@/imports/Loading-4/index";
import PrestamoSuccessImport from "@/imports/PrestamoSuccess/index";
import DetallePrestamosImport from "@/imports/DetallePrestamos/index";
import PrestamosImport from "@/imports/Prestamos/index";
import SimularPrestamo2Import from "@/imports/SimularPrestamo2/index";
import SimularPrestamo3Import from "@/imports/SimularPrestamo3/index";
import ResumenPrestamoImport from "@/imports/ResumenPrestamo/index";
import PrestamosVigentesImport from "@/imports/PrestamosVigentes/index";
import NuevoPrestamosImport from "@/imports/NuevoPrestamos/index";
import PrestamosFinalizadosImport from "@/imports/PrestamosFinalizados/index";

/* ── Pago Servicio ── */
import BuscarServicio2Import from "@/imports/BuscarServicio2/index";
import BuscarServicio3Import from "@/imports/BuscarServicio3/index";
import Loading3Import from "@/imports/Loading-3/index";
import PagoServicioSelectCardImport from "@/imports/PagoServicioSelectCard/index";
import PagoServicioSelectCardProcessingImport from "@/imports/PagoServicioSelectCardProcessing/index";
import PagoServicioSuccessImport from "@/imports/PagoServicioSuccess/index";

/* ── Notificaciones (push) ── */
import NotificacionesImport from "@/imports/Notificaciones/index";
import NotificacionesEmptyImport from "@/imports/Notificaciones-1/index";

/* ── Transferencia ── */
import TransferImport from "@/imports/Transfer/index";
import Transferir5Import from "@/imports/Transferir-5/index";
import Transferir6Import from "@/imports/Transferir-6/index";
import BottomSheet2Import from "@/imports/BottomSheet-2/index";
import Transferir1Import from "@/imports/Transferir-1/index";
import Transferir2Import from "@/imports/Transferir-2/index";
import Transferir3Import from "@/imports/Transferir-3/index";
import Transferir4Import from "@/imports/Transferir-4/index";
import TransferSuccessImport from "@/imports/TransferSuccess/index";

/* ── Pago QR ── */
import QrScan1Import from "@/imports/PagoQrScan1/index";
import QrScan2Import from "@/imports/PagoQrScan2/index";
import QrLoadingImport from "@/imports/Loading-2/index";
import QrSelectCardImport from "@/imports/PagoQrSelectCard/index";
import QrProcessingImport from "@/imports/PagoQrSelectCardProcessing/index";
import QrSuccessImport from "@/imports/PagoQrSuccess/index";

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

function CardSheetOverlay({
  UnderComp,
  SheetComp,
  sheetHeight,
  onClose,
  onConfirm,
}: {
  UnderComp: React.ComponentType;
  SheetComp: React.ComponentType;
  sheetHeight: number;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <UnderComp />
      <div className="absolute inset-0 bg-black/40 cursor-pointer" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: sheetHeight }}>
        <SheetComp />
      </div>
      <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={onConfirm} />
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 16, right: 16, height: 45 }} onClick={onClose} />
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

function PerfilWrapper({
  onBack,
  onLogout,
  onPrestamos,
  onIntercambio,
  onFaqs,
  onAdelantos,
}: {
  onBack: () => void;
  onLogout: () => void;
  onPrestamos: () => void;
  onIntercambio: () => void;
  onFaqs: () => void;
  onAdelantos: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <PerfilImport />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 256, left: 0, right: 0, height: 56 }} onClick={onIntercambio} />
      <div className="absolute cursor-pointer" style={{ top: 312, left: 0, right: 0, height: 56 }} onClick={onPrestamos} />
      <div className="absolute cursor-pointer" style={{ top: 368, left: 0, right: 0, height: 56 }} onClick={onAdelantos} />
      <div className="absolute cursor-pointer" style={{ top: 424, left: 0, right: 0, height: 56 }} onClick={onFaqs} />
      <div className="absolute cursor-pointer" style={{ top: 480, left: 0, right: 0, height: 56 }} onClick={onLogout} />
    </div>
  );
}

function QrScanWrapper({ Comp, onBack, onScan }: { Comp: React.ComponentType; onBack: () => void; onScan: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Comp />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 140, left: 60, right: 60, bottom: 100 }} onClick={onScan} />
    </div>
  );
}

function QrSelectCardWrapper({ onBack, onConfirm }: { onBack: () => void; onConfirm: () => void }) {
  const sheetHeight = 384;
  const sheetTop = 800 - sheetHeight;
  return (
    <div className="relative w-full h-full">
      <QrSelectCardImport />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: sheetTop + sheetHeight - 40 - 45, left: 16, right: 16, height: 45 }} onClick={onConfirm} />
    </div>
  );
}

function QrProcessingWrapper({ onBack, onConfirm }: { onBack: () => void; onConfirm: () => void }) {
  const sheetHeight = 384;
  const sheetTop = 800 - sheetHeight;
  return (
    <div className="relative w-full h-full">
      <QrProcessingImport />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: sheetTop + sheetHeight - 40 - 45, left: 16, right: 16, height: 45 }} onClick={onConfirm} />
    </div>
  );
}

function QrSuccessWrapper({ onHome }: { onHome: () => void }) {
  return (
    <div className="relative w-full h-full">
      <QrSuccessImport />
      <div className="absolute cursor-pointer" style={{ bottom: 40 + 8 + 45, left: 16, right: 16, height: 45 }} onClick={onHome} />
      <div className="absolute cursor-pointer" style={{ bottom: 40, left: 16, right: 16, height: 45 }} onClick={onHome} />
    </div>
  );
}

function TransferContactWrapper({ onBack, onCBU, onContact }: { onBack: () => void; onCBU: () => void; onContact: () => void }) {
  return (
    <div className="relative w-full h-full">
      <TransferImport />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 140, left: 16, right: 16, height: 64 }} onClick={onCBU} />
      <div className="absolute cursor-pointer" style={{ top: 380, left: 16, right: 16, height: 320 }} onClick={onContact} />
    </div>
  );
}

function TransferAliasEmptyWrapper({ onBack, onFill }: { onBack: () => void; onFill: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir5Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 140, left: 16, right: 16, height: 50 }} onClick={onFill} />
    </div>
  );
}

function TransferAliasFilledWrapper({ onBack, onValidate }: { onBack: () => void; onValidate: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir6Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 477, left: 16, right: 16, height: 45 }} onClick={onValidate} />
    </div>
  );
}

function TransferRecipientWrapper({ onClose, onContinue }: { onClose: () => void; onContinue: () => void }) {
  return (
    <div className="relative w-full h-full">
      <BottomSheet2Import />
      <div className="absolute cursor-pointer" style={{ top: 16, right: 16, width: 64, height: 44 }} onClick={onClose} />
      <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={onContinue} />
    </div>
  );
}

function TransferAmountEmptyWrapper({ onBack, onFill }: { onBack: () => void; onFill: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir1Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 180, left: 40, right: 40, height: 130 }} onClick={onFill} />
    </div>
  );
}

function TransferAmountFilledWrapper({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir2Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 484, left: 16, right: 16, height: 45 }} onClick={onContinue} />
    </div>
  );
}

function TransferConfirmWrapper({ onBack, onSlide }: { onBack: () => void; onSlide: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir3Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ bottom: 40, left: 16, right: 16, height: 45 }} onClick={onSlide} />
    </div>
  );
}

function TransferProcessingWrapper({ onBack, onSlide }: { onBack: () => void; onSlide: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir4Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ bottom: 40, left: 16, right: 16, height: 45 }} onClick={onSlide} />
    </div>
  );
}

function TransferSuccessScreen({ onHome }: { onHome: () => void }) {
  return (
    <div className="relative w-full h-full">
      <TransferSuccessImport />
      <div className="absolute cursor-pointer" style={{ bottom: 40, left: 16, right: 16, height: 45 }} onClick={onHome} />
    </div>
  );
}

function NotificacionesWrapper({ onBack, onClear }: { onBack: () => void; onClear: () => void }) {
  return (
    <div className="relative w-full h-full">
      <NotificacionesImport />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 88, right: 16, width: 84, height: 36 }} onClick={onClear} />
    </div>
  );
}

function CardsWrapper({
  Comp,
  onCard1,
  onCard2,
  onHome,
  onActivity,
  onQR,
  onMore,
}: {
  Comp: React.ComponentType;
  onCard1: () => void;
  onCard2: () => void;
  onHome: () => void;
  onActivity: () => void;
  onQR: () => void;
  onMore: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <Comp />
      <div className="absolute cursor-pointer" style={{ top: 116, left: 16, right: 16, height: 210 }} onClick={onCard1} />
      <div className="absolute cursor-pointer" style={{ top: 338, left: 16, right: 16, height: 210 }} onClick={onCard2} />
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 0, width: 72, height: 56 }} onClick={onHome} />
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 72, width: 72, height: 56 }} onClick={onActivity} />
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 144, width: 72, height: 56 }} onClick={onQR} />
      <div className="absolute cursor-pointer" style={{ bottom: 18, right: 0, width: 72, height: 56 }} onClick={onMore} />
    </div>
  );
}

function DetalleTarjeta1Wrapper({
  Comp,
  onBack,
  onVerDatos,
  onPausar,
  onLimites,
  onWallet,
  onPin,
}: {
  Comp: React.ComponentType;
  onBack: () => void;
  onVerDatos: () => void;
  onPausar: () => void;
  onLimites: () => void;
  onWallet?: () => void;
  onPin?: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <Comp />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 378, left: 16, width: 154, height: 45 }} onClick={onVerDatos} />
      <div className="absolute cursor-pointer" style={{ top: 378, right: 16, width: 154, height: 45 }} onClick={onPausar} />
      {onWallet && <div className="absolute cursor-pointer" style={{ top: 439, left: 0, right: 0, height: 48 }} onClick={onWallet} />}
      {onPin && <div className="absolute cursor-pointer" style={{ top: 487, left: 0, right: 0, height: 48 }} onClick={onPin} />}
      <div className="absolute cursor-pointer" style={{ top: 535, left: 0, right: 0, height: 48 }} onClick={onLimites} />
    </div>
  );
}

function DetalleTarjeta2Wrapper({ onConfirm }: { onConfirm: () => void }) {
  return (
    <div className="relative w-full h-full cursor-pointer" onClick={onConfirm}>
      <DetalleTarjeta2Import />
    </div>
  );
}

function DetalleTarjeta3Wrapper({ onBack, onActivar }: { onBack: () => void; onActivar: () => void }) {
  return (
    <div className="relative w-full h-full">
      <DetalleTarjeta3Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 44 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 378, right: 16, width: 154, height: 45 }} onClick={onActivar} />
    </div>
  );
}

function CambiarPinLoadingWrapper({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="relative w-full h-full cursor-pointer" onClick={onDone}>
      <CambiarPinLoadingImport />
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
        <SimpleWrapper
          Comp={IdStartImport}
          onBack={() => nav("register-success")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 80, left: 16, right: 16, height: 45 }} onClick={() => nav("id-doc-inicio")} />}
        />
      );
    case "id-doc-inicio":
      return (
        <SimpleWrapper
          Comp={IdDocInicioImport}
          onBack={() => nav("id-start")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-frente1")} />}
        />
      );
    case "id-frente1":
      return (
        <SimpleWrapper
          Comp={IdFrente1Import}
          onBack={() => nav("id-doc-inicio")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-frente2")} />}
        />
      );
    case "id-frente2":
      return (
        <SimpleWrapper
          Comp={IdFrente2Import}
          onBack={() => nav("id-frente1")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ bottom: 78, left: 16, right: 16, height: 45 }} onClick={() => nav("id-dorso1")} />
              <div className="absolute cursor-pointer" style={{ bottom: 25, left: 16, right: 16, height: 45 }} onClick={() => nav("id-frente1")} />
            </>
          }
        />
      );
    case "id-dorso1":
      return (
        <SimpleWrapper
          Comp={IdDorso1Import}
          onBack={() => nav("id-frente2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-dorso2")} />}
        />
      );
    case "id-dorso2":
      return (
        <SimpleWrapper
          Comp={IdDorso2Import}
          onBack={() => nav("id-dorso1")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ bottom: 78, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie-intro")} />
              <div className="absolute cursor-pointer" style={{ bottom: 25, left: 16, right: 16, height: 45 }} onClick={() => nav("id-dorso1")} />
            </>
          }
        />
      );
    case "id-selfie-intro":
      return (
        <SimpleWrapper
          Comp={IdSelfieIntroImport}
          onBack={() => nav("id-dorso2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie1")} />}
        />
      );
    case "id-selfie1":
      return (
        <SimpleWrapper
          Comp={IdSelfie1Import}
          onBack={() => nav("id-selfie-intro")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie2")} />}
        />
      );
    case "id-selfie2":
      return (
        <SimpleWrapper
          Comp={IdSelfie2Import}
          onBack={() => nav("id-selfie1")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie3")} />}
        />
      );
    case "id-selfie3":
      return (
        <SimpleWrapper
          Comp={IdSelfie3Import}
          onBack={() => nav("id-selfie2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-loading-2")} />}
        />
      );
    case "id-loading":
      return <AutoScreen Comp={IdLoadingImport} onDone={() => nav("id-loading-2")} />;
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

    /* Directorio de servicios → entrada real a Pago de Servicio */
    case "buscar-servicio-full":
      return (
        <SimpleWrapper
          Comp={BuscarServicioFull}
          onBack={() => navigate("/home")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 170, left: 0, right: 0, height: 64 }} onClick={() => nav("servicio-datos-empty")} />}
        />
      );

    /* Perfil */
    case "perfil":
      return (
        <PerfilWrapper
          onBack={() => navigate("/home")}
          onLogout={() => {
            auth.logout();
            navigate("/login");
          }}
          onPrestamos={() => nav("prestamos-vigentes")}
          onIntercambio={() => nav("intercambio-empty")}
          onFaqs={() => nav("faqs")}
          onAdelantos={() => nav("adelantos-vigentes")}
        />
      );

    /* Pago QR */
    case "qr-scan1":
      return <QrScanWrapper Comp={QrScan1Import} onBack={() => navigate("/home")} onScan={() => nav("qr-scan2")} />;
    case "qr-scan2":
      return <QrScanWrapper Comp={QrScan2Import} onBack={() => nav("qr-scan1")} onScan={() => nav("qr-loading")} />;
    case "qr-loading":
      return <AutoScreen Comp={QrLoadingImport} onDone={() => nav("qr-select-card")} />;
    case "qr-select-card":
      return <QrSelectCardWrapper onBack={() => nav("qr-scan2")} onConfirm={() => nav("qr-processing")} />;
    case "qr-processing":
      return <QrProcessingWrapper onBack={() => nav("qr-select-card")} onConfirm={() => nav("qr-success")} />;
    case "qr-success":
      return <QrSuccessWrapper onHome={() => navigate("/home")} />;

    /* Transferencia */
    case "transfer":
      return <TransferContactWrapper onBack={() => navigate("/home")} onCBU={() => nav("transfer-alias-empty")} onContact={() => nav("transfer-recipient-sheet")} />;
    case "transfer-alias-empty":
      return <TransferAliasEmptyWrapper onBack={() => nav("transfer")} onFill={() => nav("transfer-alias-filled")} />;
    case "transfer-alias-filled":
      return <TransferAliasFilledWrapper onBack={() => nav("transfer-alias-empty")} onValidate={() => nav("transfer-recipient-sheet")} />;
    case "transfer-recipient-sheet":
      return <TransferRecipientWrapper onClose={() => nav("transfer")} onContinue={() => nav("transfer-amount-empty")} />;
    case "transfer-amount-empty":
      return <TransferAmountEmptyWrapper onBack={() => nav("transfer-recipient-sheet")} onFill={() => nav("transfer-amount-filled")} />;
    case "transfer-amount-filled":
      return <TransferAmountFilledWrapper onBack={() => nav("transfer-amount-empty")} onContinue={() => nav("transfer-confirm")} />;
    case "transfer-confirm":
      return <TransferConfirmWrapper onBack={() => nav("transfer-amount-filled")} onSlide={() => nav("transfer-processing")} />;
    case "transfer-processing":
      return <TransferProcessingWrapper onBack={() => nav("transfer-confirm")} onSlide={() => nav("transfer-success")} />;
    case "transfer-success":
      return <TransferSuccessScreen onHome={() => navigate("/home")} />;

    /* Notificaciones (push) */
    case "notificaciones":
      return <NotificacionesWrapper onBack={() => navigate("/home")} onClear={() => nav("notificaciones-empty")} />;
    case "notificaciones-empty":
      return <SimpleWrapper Comp={NotificacionesEmptyImport} onBack={() => navigate("/home")} />;

    /* Tarjetas */
    case "cards":
      return (
        <CardsWrapper
          Comp={CardsImport}
          onCard1={() => nav("detalle-tarjeta-1")}
          onCard2={() => nav("detalle-tarjeta-1")}
          onHome={() => navigate("/home")}
          onActivity={() => navigate("/activity")}
          onQR={() => nav("qr-scan1")}
          onMore={() => nav("perfil")}
        />
      );
    case "cards-paused":
      return (
        <CardsWrapper
          Comp={Cards1Import}
          onCard1={() => nav("detalle-tarjeta-3")}
          onCard2={() => nav("detalle-tarjeta-1")}
          onHome={() => navigate("/home")}
          onActivity={() => navigate("/activity")}
          onQR={() => nav("qr-scan1")}
          onMore={() => nav("perfil")}
        />
      );
    case "detalle-tarjeta-1":
      return (
        <DetalleTarjeta1Wrapper
          Comp={DetalleTarjeta1Import}
          onBack={() => nav("cards")}
          onVerDatos={() => nav("detalle-tarjeta-2")}
          onPausar={() => nav("cards-confirm-pause")}
          onWallet={() => nav("tarjeta-apple-wallet")}
          onPin={() => nav("cambiar-pin-empty")}
          onLimites={() => nav("cards-detail-limits")}
        />
      );
    case "detalle-tarjeta-2":
      return <DetalleTarjeta2Wrapper onConfirm={() => nav("cards-detail-data")} />;
    case "detalle-tarjeta-3":
      return <DetalleTarjeta3Wrapper onBack={() => nav("cards-paused")} onActivar={() => nav("cards-confirm-activate")} />;
    case "detalle-tarjeta-4":
      return (
        <DetalleTarjeta1Wrapper
          Comp={DetalleTarjeta4Import}
          onBack={() => nav("cards")}
          onVerDatos={() => nav("detalle-tarjeta-2")}
          onPausar={() => nav("cards-confirm-pause")}
          onWallet={() => nav("tarjeta-apple-wallet")}
          onPin={() => nav("cambiar-pin-empty")}
          onLimites={() => nav("cards-detail-limits")}
        />
      );
    case "cards-detail-limits":
      return (
        <CardSheetOverlay
          UnderComp={DetalleTarjeta1Import}
          SheetComp={BottomSheet7Import}
          sheetHeight={390}
          onClose={() => nav("detalle-tarjeta-1")}
          onConfirm={() => nav("detalle-tarjeta-1")}
        />
      );
    case "cards-detail-data":
      return (
        <CardSheetOverlay
          UnderComp={DetalleTarjeta4Import}
          SheetComp={BottomSheet10Import}
          sheetHeight={368}
          onClose={() => nav("detalle-tarjeta-4")}
          onConfirm={() => nav("detalle-tarjeta-4")}
        />
      );
    case "cards-confirm-pause":
      return (
        <CardSheetOverlay
          UnderComp={DetalleTarjeta1Import}
          SheetComp={BottomSheet9Import}
          sheetHeight={328}
          onClose={() => nav("detalle-tarjeta-1")}
          onConfirm={() => nav("cards-paused")}
        />
      );
    case "cards-confirm-activate":
      return (
        <CardSheetOverlay
          UnderComp={DetalleTarjeta3Import}
          SheetComp={BottomSheet8Import}
          sheetHeight={328}
          onClose={() => nav("detalle-tarjeta-3")}
          onConfirm={() => nav("detalle-tarjeta-4")}
        />
      );

    /* Wallet / PIN */
    case "detalle-tarjeta-5":
      return (
        <DetalleTarjeta1Wrapper
          Comp={DetalleTarjeta5Import}
          onBack={() => nav("cards")}
          onVerDatos={() => nav("detalle-tarjeta-2")}
          onPausar={() => nav("cards-confirm-pause")}
          onWallet={() => nav("tarjeta-google-wallet")}
          onPin={() => nav("cambiar-pin-empty")}
          onLimites={() => nav("cards-detail-limits")}
        />
      );
    case "tarjeta-apple-wallet":
      return (
        <SimpleWrapper
          Comp={TarjetaAppleWalletImport}
          onBack={() => nav("detalle-tarjeta-1")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 486, left: 16, right: 16, height: 52 }} onClick={() => nav("apple-pay")} />}
        />
      );
    case "apple-pay":
      return <SimpleWrapper Comp={ApplePayImport} onBack={() => nav("tarjeta-apple-wallet")} />;
    case "tarjeta-google-wallet":
      return (
        <SimpleWrapper
          Comp={TarjetaGoogleWalletImport}
          onBack={() => nav("detalle-tarjeta-5")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 486, left: 16, right: 16, height: 52 }} onClick={() => nav("google-pay")} />}
        />
      );
    case "google-pay":
      return <SimpleWrapper Comp={GooglePayImport} onBack={() => nav("tarjeta-google-wallet")} />;
    case "cambiar-pin-empty":
      return (
        <SimpleWrapper
          Comp={CambiarPinEmptyImport}
          onBack={() => nav("detalle-tarjeta-1")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 88, left: 0, right: 0, bottom: 0 }} onClick={() => nav("cambiar-pin-active")} />}
        />
      );
    case "cambiar-pin-active":
      return (
        <SimpleWrapper
          Comp={CambiarPinActiveImport}
          onBack={() => nav("cambiar-pin-empty")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 231, left: 0, right: 0, height: 230 }} onClick={() => nav("cambiar-pin-filled")} />}
        />
      );
    case "cambiar-pin-filled":
      return (
        <SimpleWrapper
          Comp={CambiarPinFilledImport}
          onBack={() => nav("cambiar-pin-active")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 336, left: 16, right: 16, height: 45 }} onClick={() => nav("cambiar-pin-loading")} />}
        />
      );
    case "cambiar-pin-loading":
      return <CambiarPinLoadingWrapper onDone={() => nav("cambiar-pin-success")} />;
    case "cambiar-pin-success":
      return (
        <SimpleWrapper
          Comp={Success2Import}
          onBack={() => nav("detalle-tarjeta-1")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("detalle-tarjeta-1")} />}
        />
      );

    /* Pago Servicio */
    case "servicio-datos-empty":
      return (
        <SimpleWrapper
          Comp={BuscarServicio2Import}
          onBack={() => nav("buscar-servicio-full")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 238, left: 0, right: 0, height: 231 }} onClick={() => nav("servicio-datos-filled")} />}
        />
      );
    case "servicio-datos-filled":
      return (
        <SimpleWrapper
          Comp={BuscarServicio3Import}
          onBack={() => nav("servicio-datos-empty")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 477, left: 16, right: 16, height: 45 }} onClick={() => nav("servicio-loading")} />}
        />
      );
    case "servicio-loading":
      return <AutoScreen Comp={Loading3Import} onDone={() => nav("servicio-select-card")} />;
    case "servicio-select-card":
      return (
        <SimpleWrapper
          Comp={PagoServicioSelectCardImport}
          onBack={() => nav("buscar-servicio-full")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("servicio-processing")} />}
        />
      );
    case "servicio-processing":
      return <AutoScreen Comp={PagoServicioSelectCardProcessingImport} onDone={() => nav("servicio-success")} />;
    case "servicio-success":
      return (
        <SimpleWrapper
          Comp={PagoServicioSuccessImport}
          onBack={() => nav("buscar-servicio-full")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ bottom: 111, left: 16, right: 16, height: 45 }} onClick={() => navigate("/activity")} />
              <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("buscar-servicio-full")} />
            </>
          }
        />
      );

    /* Préstamos */
    case "prestamos-vigentes":
      return (
        <SimpleWrapper
          Comp={PrestamosVigentesImport}
          onBack={() => nav("perfil")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ top: 152, left: 180, right: 0, height: 40 }} onClick={() => nav("prestamos-finalizados")} />
              <div className="absolute cursor-pointer" style={{ top: 216, left: 16, right: 16, height: 150 }} onClick={() => nav("prestamo-detalle")} />
              <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("nuevo-prestamos")} />
            </>
          }
        />
      );
    case "prestamos-finalizados":
      return (
        <SimpleWrapper
          Comp={PrestamosFinalizadosImport}
          onBack={() => nav("perfil")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ top: 152, left: 0, right: 180, height: 40 }} onClick={() => nav("prestamos-vigentes")} />
              <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("nuevo-prestamos")} />
            </>
          }
        />
      );
    case "nuevo-prestamos":
      return (
        <SimpleWrapper
          Comp={NuevoPrestamosImport}
          onBack={() => nav("prestamos-vigentes")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 313, left: 16, right: 16, height: 153 }} onClick={() => nav("prestamos")} />}
        />
      );
    case "prestamos":
      return (
        <SimpleWrapper
          Comp={PrestamosImport}
          onBack={() => nav("nuevo-prestamos")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("simular-prestamo-2")} />}
        />
      );
    case "simular-prestamo-2":
      return (
        <SimpleWrapper
          Comp={SimularPrestamo2Import}
          onBack={() => nav("prestamos")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 326, left: 16, right: 16, height: 45 }} onClick={() => nav("simular-prestamo-3")} />}
        />
      );
    case "simular-prestamo-3":
      return (
        <SimpleWrapper
          Comp={SimularPrestamo3Import}
          onBack={() => nav("simular-prestamo-2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("resumen-prestamo")} />}
        />
      );
    case "resumen-prestamo":
      return (
        <SimpleWrapper
          Comp={ResumenPrestamoImport}
          onBack={() => nav("simular-prestamo-3")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("prestamo-loading")} />}
        />
      );
    case "prestamo-loading":
      return <AutoScreen Comp={Loading4Import} onDone={() => nav("prestamo-success")} />;
    case "prestamo-success":
      return (
        <SimpleWrapper
          Comp={PrestamoSuccessImport}
          onBack={() => nav("prestamos-vigentes")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ bottom: 111, left: 16, right: 16, height: 45 }} onClick={() => nav("prestamo-detalle")} />
              <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("prestamos-vigentes")} />
            </>
          }
        />
      );
    case "prestamo-detalle":
      return <SimpleWrapper Comp={DetallePrestamosImport} onBack={() => nav("prestamos-vigentes")} />;

    /* Adelantos */
    case "adelantos-vigentes":
      return (
        <SimpleWrapper
          Comp={AdelantosVigentesImport}
          onBack={() => nav("perfil")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ top: 152, left: 180, right: 0, height: 40 }} onClick={() => nav("adelantos-vigentes")} />
              <div className="absolute cursor-pointer" style={{ top: 216, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-cuotas")} />
              <div className="absolute cursor-pointer" style={{ top: 356, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle")} />
            </>
          }
        />
      );
    case "adelantos-vigentes-2":
      return (
        <SimpleWrapper
          Comp={AdelantosVigentes2Import}
          onBack={() => nav("perfil")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ top: 216, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-cuotas")} />
              <div className="absolute cursor-pointer" style={{ top: 356, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle")} />
            </>
          }
        />
      );
    case "adelantos-cuotas":
      return (
        <SimpleWrapper
          Comp={AdelantosCuotasImport}
          onBack={() => nav("adelantos-vigentes")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ top: 152, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle")} />
              <div className="absolute cursor-pointer" style={{ top: 292, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle-2")} />
              <div className="absolute cursor-pointer" style={{ top: 432, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle-2")} />
            </>
          }
        />
      );
    case "adelantos-detalle":
      return (
        <SimpleWrapper
          Comp={AdelantosDetalle1Import}
          onBack={() => nav("adelantos-vigentes")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 373, left: 0, right: 0, height: 40 }} onClick={() => nav("simular-adelanto-empty")} />}
        />
      );
    case "adelantos-detalle-2":
      return (
        <SimpleWrapper
          Comp={AdelantosDetalle2Import}
          onBack={() => nav("adelantos-vigentes")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 373, left: 0, right: 0, height: 40 }} onClick={() => nav("simular-adelanto-empty")} />}
        />
      );
    case "simular-adelanto-empty":
      return (
        <SimpleWrapper
          Comp={SimularAdelantoEmptyImport}
          onBack={() => nav("adelantos-detalle")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 0, left: 0, right: 0, height: 231 }} onClick={() => nav("simular-adelanto-filled")} />}
        />
      );
    case "simular-adelanto-filled":
      return (
        <SimpleWrapper
          Comp={SimularAdelantoFilledImport}
          onBack={() => nav("simular-adelanto-empty")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 484, left: 16, right: 16, height: 45 }} onClick={() => nav("resumen-adelanto")} />}
        />
      );
    case "resumen-adelanto":
      return (
        <SimpleWrapper
          Comp={ResumenAdelantoImport}
          onBack={() => nav("simular-adelanto-filled")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("adelanto-loading")} />}
        />
      );
    case "adelanto-loading":
      return <AutoScreen Comp={Loading5Import} onDone={() => nav("adelanto-success")} />;
    case "adelanto-success":
      return (
        <SimpleWrapper
          Comp={AdelantoSuccessImport}
          onBack={() => nav("adelantos-vigentes")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ bottom: 111, left: 16, right: 16, height: 45 }} onClick={() => nav("adelantos-detalle")} />
              <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("adelantos-vigentes-2")} />
            </>
          }
        />
      );

    /* Intercambio */
    case "intercambio-empty":
      return (
        <SimpleWrapper
          Comp={IntercambiarImport}
          onBack={() => nav("perfil")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 0, left: 0, right: 0, height: 231 }} onClick={() => nav("intercambio-filled")} />}
        />
      );
    case "intercambio-filled":
      return (
        <SimpleWrapper
          Comp={Intercambiar2Import}
          onBack={() => nav("intercambio-empty")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 484, left: 16, right: 16, height: 45 }} onClick={() => nav("resumen-intercambio")} />}
        />
      );
    case "resumen-intercambio":
      return (
        <SimpleWrapper
          Comp={ResumenIntercambioImport}
          onBack={() => nav("intercambio-filled")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("resumen-intercambio-processing")} />}
        />
      );
    case "resumen-intercambio-processing":
      return <AutoScreen Comp={ResumenIntercambio1Import} onDone={() => nav("intercambio-success")} />;
    case "intercambio-success":
      return (
        <SimpleWrapper
          Comp={IntercambioSuccessImport}
          onBack={() => nav("perfil")}
          extraOverlay={
            <>
              <div className="absolute cursor-pointer" style={{ bottom: 111, left: 16, right: 16, height: 45 }} onClick={() => navigate("/activity")} />
              <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => navigate("/home")} />
            </>
          }
        />
      );

    /* FAQs */
    case "faqs":
      return (
        <SimpleWrapper
          Comp={FaQs1Import}
          onBack={() => nav("perfil")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ top: 239, left: 0, right: 0, height: 52 }} onClick={() => nav("faqs-detalle")} />}
        />
      );
    case "faqs-detalle":
      return <SimpleWrapper Comp={FaQs2Import} onBack={() => nav("faqs")} />;

    default:
      return <Navigate to="/home" replace />;
  }
}
