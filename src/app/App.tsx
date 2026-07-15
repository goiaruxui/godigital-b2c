import { useState, useEffect } from "react";

/* ── Onboarding ── */
import IosImport from "@/imports/Ios/index";
import SplashImport from "@/imports/Splash2/index";
import Walkthrough1Import from "@/imports/Walkthrough1/index";
import Walkthrough2Import from "@/imports/Walkthrough2/index";
import Walkthrough3Import from "@/imports/Walkthrough3/index";

/* ── Registro multi-step ── */
import CC6Import from "@/imports/CrearCuenta-6/index";
import CC4Import from "@/imports/CrearCuenta-4/index";
import CC5Import from "@/imports/CrearCuenta-5/index";
import CC7Import from "@/imports/CrearCuenta-7/index";
import CC8Import from "@/imports/CrearCuenta-8/index";
import CC1Import from "@/imports/CrearCuenta-1/index";
import CC2Import from "@/imports/CrearCuenta-2/index";
import CC3Import from "@/imports/CrearCuenta-3/index";
import SuccessImport from "@/imports/Success/index";

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

/* ── Login ── */
import LoginEmptyImport from "@/imports/Login-1/index";
import LoginFilledImport from "@/imports/Login/index";
import LoginFaceId1Import from "@/imports/LoginFaceId1/index";
import LoginFaceId2Import from "@/imports/LoginFaceId2/index";

/* ── App principal ── */
import HomeEmpty from "@/imports/Home/index";
import HomeFull from "@/imports/Home-1/index";
import DetalleTarjeta from "@/imports/DetalleTarjeta/index";
import Transferir from "@/imports/Transferir/index";
import BuscarServicio from "@/imports/BuscarServicio1/index";
import BuscarServicioFull from "@/imports/BuscarServicio1-1/index";

/* ── App 2 (nuevos flujos) ── */
import Home2Import from "@/imports/Home-2/index";
import PerfilImport from "@/imports/Perfil/index";
import BottomSheetCashinImport from "@/imports/BottomSheet/index";
import CashinImport from "@/imports/Cashin/index";
import BottomSheetCVUImport from "@/imports/BottomSheet-1/index";
import ShareImport from "@/imports/Share/index";
import NotificationImport from "@/imports/Notification/index";

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

/* ── Actividad ── */
import Home5Import from "@/imports/Home-5/index";
import NotificacionesImport from "@/imports/Notificaciones/index";
import NotificacionesEmptyImport from "@/imports/Notificaciones-1/index";
import HistoryImport from "@/imports/History/index";
import BottomSheet3Import from "@/imports/BottomSheet-3/index";
import BottomSheet4Import from "@/imports/BottomSheet-4/index";
import BottomSheet5Import from "@/imports/BottomSheet-5/index";
import BottomSheet6Import from "@/imports/BottomSheet-6/index";

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
import Home4Import from "@/imports/Home-4/index";

/* ── Pago QR ── */
import Home3Import from "@/imports/Home-3/index";
import QrScan1Import from "@/imports/PagoQrScan1/index";
import QrScan2Import from "@/imports/PagoQrScan2/index";
import QrLoadingImport from "@/imports/Loading-2/index";
import QrSelectCardImport from "@/imports/PagoQrSelectCard/index";
import QrProcessingImport from "@/imports/PagoQrSelectCardProcessing/index";
import QrSuccessImport from "@/imports/PagoQrSuccess/index";

type Screen =
  | "ios" | "splash" | "walkthrough1" | "walkthrough2" | "walkthrough3"
  | "cc-pais" | "cc-datos" | "cc-email" | "cc-otp" | "cc-loading" | "success"
  | "id-start" | "id-doc-inicio" | "id-frente1" | "id-frente2"
  | "id-dorso1" | "id-dorso2"
  | "id-selfie-intro" | "id-selfie1" | "id-selfie2" | "id-selfie3"
  | "id-loading" | "id-loading-2" | "id-success"
  | "login-empty" | "login-filled" | "login-faceid1" | "login-faceid2"
  | "home-empty" | "home-full"
  | "detalle-tarjeta" | "transferir"
  | "buscar-servicio" | "buscar-servicio-full"
  | "home-2" | "perfil" | "cashin-sheet" | "cashin" | "cvu-sheet" | "share" | "notification"
  | "home-3" | "qr-scan1" | "qr-scan2" | "qr-loading" | "qr-select-card" | "qr-processing" | "qr-success"
  | "home-4" | "home-5"
  | "notificaciones" | "notificaciones-empty"
  | "history" | "history-detail-adidas" | "history-detail-transfer" | "history-detail-claro" | "history-detail-ingreso"
  | "transfer" | "transfer-alias-empty" | "transfer-alias-filled" | "transfer-recipient-sheet"
  | "transfer-amount-empty" | "transfer-amount-filled" | "transfer-confirm" | "transfer-processing"
  | "transfer-success"
  /* Tarjetas */
  | "cards" | "cards-paused"
  | "detalle-tarjeta-1" | "detalle-tarjeta-2" | "detalle-tarjeta-3" | "detalle-tarjeta-4" | "detalle-tarjeta-5"
  | "cards-detail-limits" | "cards-detail-data"
  | "cards-confirm-pause" | "cards-confirm-activate"
  /* Wallet / PIN */
  | "tarjeta-apple-wallet" | "apple-pay"
  | "tarjeta-google-wallet" | "google-pay"
  | "cambiar-pin-empty" | "cambiar-pin-active" | "cambiar-pin-filled" | "cambiar-pin-loading" | "cambiar-pin-success"
  /* Pago Servicio */
  | "servicio-datos-empty" | "servicio-datos-filled" | "servicio-loading"
  | "servicio-select-card" | "servicio-processing" | "servicio-success"
  /* Préstamos */
  | "prestamos-vigentes" | "prestamos-finalizados" | "nuevo-prestamos"
  | "prestamos" | "simular-prestamo-2" | "simular-prestamo-3"
  | "resumen-prestamo" | "prestamo-loading" | "prestamo-success" | "prestamo-detalle"
  /* Adelantos */
  | "adelantos-vigentes" | "adelantos-vigentes-2" | "adelantos-cuotas"
  | "adelantos-detalle" | "adelantos-detalle-2"
  | "simular-adelanto-empty" | "simular-adelanto-filled" | "resumen-adelanto"
  | "adelanto-loading" | "adelanto-success"
  /* Intercambio */
  | "intercambio-empty" | "intercambio-filled" | "resumen-intercambio" | "resumen-intercambio-processing" | "intercambio-success"
  /* FAQs */
  | "faqs" | "faqs-detalle";

export default function App() {
  const [screen, setScreen] = useState<Screen>("ios");
  const nav = (to: Screen) => setScreen(to);

  const renderScreen = () => {
    switch (screen) {
      /* Onboarding */
      case "ios":        return <IosScreen onLaunch={() => nav("splash")} />;
      case "splash":     return <SplashScreen onDone={() => nav("walkthrough1")} />;
      case "walkthrough1":
        return <WalkthroughScreen which={1} onRegister={() => nav("cc-pais")} onLogin={() => nav("login-empty")} onNext={() => nav("walkthrough2")} />;
      case "walkthrough2":
        return <WalkthroughScreen which={2} onRegister={() => nav("cc-pais")} onLogin={() => nav("login-empty")} onNext={() => nav("walkthrough3")} />;
      case "walkthrough3":
        return <WalkthroughScreen which={3} onRegister={() => nav("cc-pais")} onLogin={() => nav("login-empty")} onNext={() => nav("cc-pais")} />;

      /* Registro */
      case "cc-pais":    return <CCPaisWrapper onNext={() => nav("cc-datos")} onBack={() => nav("walkthrough3")} />;
      case "cc-datos":   return <CCDatosWrapper onNext={() => nav("cc-email")} onBack={() => nav("cc-pais")} />;
      case "cc-email":   return <CCEmailWrapper onNext={() => nav("cc-otp")} onBack={() => nav("cc-datos")} />;
      case "cc-otp":     return <CCOtpWrapper onNext={() => nav("cc-loading")} onBack={() => nav("cc-email")} />;
      case "cc-loading": return <AutoScreen Comp={CC3Import} onDone={() => nav("success")} />;
      case "success":    return <SuccessScreen onDone={() => nav("id-start")} />;

      /* Identidad */
      case "id-start":
        return <SimpleWrapper Comp={IdStartImport} onBack={() => nav("success")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 80, left: 16, right: 16, height: 45 }} onClick={() => nav("id-doc-inicio")} />} />;
      case "id-doc-inicio":
        return <SimpleWrapper Comp={IdDocInicioImport} onBack={() => nav("id-start")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-frente1")} />} />;
      case "id-frente1":
        return <SimpleWrapper Comp={IdFrente1Import} onBack={() => nav("id-doc-inicio")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-frente2")} />} />;
      case "id-frente2":
        return <SimpleWrapper Comp={IdFrente2Import} onBack={() => nav("id-frente1")}
          extraOverlay={<>
            <div className="absolute cursor-pointer" style={{ bottom: 78, left: 16, right: 16, height: 45 }} onClick={() => nav("id-dorso1")} />
            <div className="absolute cursor-pointer" style={{ bottom: 25, left: 16, right: 16, height: 45 }} onClick={() => nav("id-frente1")} />
          </>} />;
      case "id-dorso1":
        return <SimpleWrapper Comp={IdDorso1Import} onBack={() => nav("id-frente2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-dorso2")} />} />;
      case "id-dorso2":
        return <SimpleWrapper Comp={IdDorso2Import} onBack={() => nav("id-dorso1")}
          extraOverlay={<>
            <div className="absolute cursor-pointer" style={{ bottom: 78, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie-intro")} />
            <div className="absolute cursor-pointer" style={{ bottom: 25, left: 16, right: 16, height: 45 }} onClick={() => nav("id-dorso1")} />
          </>} />;
      case "id-selfie-intro":
        return <SimpleWrapper Comp={IdSelfieIntroImport} onBack={() => nav("id-dorso2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie1")} />} />;
      case "id-selfie1":
        return <SimpleWrapper Comp={IdSelfie1Import} onBack={() => nav("id-selfie-intro")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie2")} />} />;
      case "id-selfie2":
        return <SimpleWrapper Comp={IdSelfie2Import} onBack={() => nav("id-selfie1")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-selfie3")} />} />;
      case "id-selfie3":
        return <SimpleWrapper Comp={IdSelfie3Import} onBack={() => nav("id-selfie2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={() => nav("id-loading-2")} />} />;
      case "id-loading":
        return <AutoScreen Comp={IdLoadingImport} onDone={() => nav("id-loading-2")} />;
      case "id-loading-2":
        return <AutoScreen Comp={IdLoading2Import} onDone={() => nav("id-success")} />;
      case "id-success":
        return <AutoScreen Comp={IdSuccessImport} onDone={() => nav("home-2")} />;

      /* Login */
      case "login-empty":
        return <LoginEmptyWrapper onFill={() => nav("login-filled")} />;
      case "login-filled":
        return <LoginFilledWrapper onLogin={() => nav("login-faceid1")} onBiometric={() => nav("login-faceid1")} />;
      case "login-faceid1":
        return <div className="relative w-full h-full cursor-pointer" onClick={() => nav("login-faceid2")}><LoginFaceId1Import /></div>;
      case "login-faceid2":
        return <AutoScreen Comp={LoginFaceId2Import} onDone={() => nav("home-2")} />;

      /* App */
      case "home-empty":
        return <HomeWrapper variant="empty" onTransfer={() => nav("transferir")} onCard={() => nav("detalle-tarjeta")} onQR={() => nav("buscar-servicio")} />;
      case "home-full":
        return <HomeWrapper variant="full" onTransfer={() => nav("transferir")} onCard={() => nav("detalle-tarjeta")} onQR={() => nav("buscar-servicio")} />;
      case "detalle-tarjeta":
        return <SimpleWrapper Comp={DetalleTarjeta} onBack={() => nav("home-full")} />;
      case "transferir":
        return <SimpleWrapper Comp={Transferir} onBack={() => nav("home-full")} />;
      case "buscar-servicio":
        return <BuscarServicioWrapper onBack={() => nav("home-full")} onSearch={() => nav("buscar-servicio-full")} />;
      case "buscar-servicio-full":
        return <SimpleWrapper Comp={BuscarServicioFull} onBack={() => nav("buscar-servicio")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 170, left: 0, right: 0, height: 64 }} onClick={() => nav("servicio-datos-empty")} />
        } />;

      /* App 2 */
      case "home-2":
        return <Home2Wrapper
          onCashIn={() => nav("cashin-sheet")}
          onTransfer={() => nav("transfer")}
          onProfile={() => nav("perfil")}
          onQR={() => nav("qr-scan1")}
          onCards={() => nav("cards")} />;
      case "home-3":
        return <Home3Wrapper
          onCashIn={() => nav("cashin-sheet")}
          onTransfer={() => nav("transfer")}
          onProfile={() => nav("perfil")}
          onQR={() => nav("qr-scan1")}
          onCards={() => nav("cards")} />;
      case "home-4":
        return <Home4Wrapper
          onCashIn={() => nav("cashin-sheet")}
          onTransfer={() => nav("transfer")}
          onProfile={() => nav("perfil")}
          onQR={() => nav("qr-scan1")}
          onCards={() => nav("cards")} />;
      case "perfil":
        return <PerfilWrapper onBack={() => nav("home-2")} onLogout={() => nav("login-empty")} onPrestamos={() => nav("prestamos-vigentes")} onIntercambio={() => nav("intercambio-empty")} onFaqs={() => nav("faqs")} onAdelantos={() => nav("adelantos-vigentes")} />;
      case "cashin-sheet":
        return <CashinSheetWrapper onClose={() => nav("home-2")} onSelect={() => nav("cashin")} />;
      case "cashin":
        return <SimpleWrapper Comp={CashinImport} onBack={() => nav("home-2")}
          extraOverlay={<div className="absolute cursor-pointer" style={{ bottom: 60, left: 16, right: 16, height: 45 }} onClick={() => nav("cvu-sheet")} />} />;
      case "cvu-sheet":
        return <CVUSheetWrapper onClose={() => nav("cashin")} onShare={() => nav("share")} />;
      case "share":
        return <ShareWrapper onClose={() => nav("notification")} />;
      case "notification":
        return <AutoScreen Comp={NotificationImport} onDone={() => nav("home-3")} />;

      /* Pago QR */
      case "qr-scan1":
        return <QrScanWrapper Comp={QrScan1Import} onBack={() => nav("home-2")} onScan={() => nav("qr-scan2")} />;
      case "qr-scan2":
        return <QrScanWrapper Comp={QrScan2Import} onBack={() => nav("qr-scan1")} onScan={() => nav("qr-loading")} />;
      case "qr-loading":
        return <AutoScreen Comp={QrLoadingImport} onDone={() => nav("qr-select-card")} />;
      case "qr-select-card":
        return <QrSelectCardWrapper onBack={() => nav("qr-scan2")} onConfirm={() => nav("qr-processing")} />;
      case "qr-processing":
        return <QrProcessingWrapper onBack={() => nav("qr-select-card")} onConfirm={() => nav("qr-success")} />;
      case "qr-success":
        return <QrSuccessWrapper onHome={() => nav("home-4")} />;

      /* Transferencia */
      case "transfer":
        return <TransferContactWrapper onBack={() => nav("home-2")} onCBU={() => nav("transfer-alias-empty")} onContact={() => nav("transfer-recipient-sheet")} />;
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
        return <TransferSuccessScreen onHome={() => nav("home-5")} />;

      /* Actividad */
      case "home-5":
        return <Home5Wrapper
          onCashIn={() => nav("cashin-sheet")}
          onTransfer={() => nav("transfer")}
          onProfile={() => nav("perfil")}
          onQR={() => nav("qr-scan1")}
          onCards={() => nav("cards")}
          onActivity={() => nav("history")}
          onNotifications={() => nav("notificaciones")}
          onViewAll={() => nav("history")} />;
      case "notificaciones":
        return <NotificacionesWrapper onBack={() => nav("home-5")} onClear={() => nav("notificaciones-empty")} />;
      case "notificaciones-empty":
        return <SimpleWrapper Comp={NotificacionesEmptyImport} onBack={() => nav("home-5")} />;
      case "history":
        return <HistoryWrapper
          onHome={() => nav("home-5")}
          onQR={() => nav("qr-scan1")}
          onCards={() => nav("cards")}
          onProfile={() => nav("perfil")}
          onDetailClaro={() => nav("history-detail-claro")}
          onDetailTransfer={() => nav("history-detail-transfer")}
          onDetailAdidas={() => nav("history-detail-adidas")}
          onDetailIngreso={() => nav("history-detail-ingreso")} />;
      case "history-detail-adidas":
        return <HistoryDetailSheet Comp={BottomSheet3Import} onClose={() => nav("history")} />;
      case "history-detail-transfer":
        return <HistoryDetailSheet Comp={BottomSheet4Import} onClose={() => nav("history")} />;
      case "history-detail-claro":
        return <HistoryDetailSheet Comp={BottomSheet5Import} onClose={() => nav("history")} />;
      case "history-detail-ingreso":
        return <HistoryDetailSheet Comp={BottomSheet6Import} onClose={() => nav("history")} />;

      /* Tarjetas */
      case "cards":
        return <CardsWrapper
          Comp={CardsImport}
          onCard1={() => nav("detalle-tarjeta-1")}
          onCard2={() => nav("detalle-tarjeta-1")}
          onHome={() => nav("home-5")}
          onActivity={() => nav("history")}
          onQR={() => nav("qr-scan1")}
          onMore={() => nav("perfil")} />;
      case "cards-paused":
        return <CardsWrapper
          Comp={Cards1Import}
          onCard1={() => nav("detalle-tarjeta-3")}
          onCard2={() => nav("detalle-tarjeta-1")}
          onHome={() => nav("home-5")}
          onActivity={() => nav("history")}
          onQR={() => nav("qr-scan1")}
          onMore={() => nav("perfil")} />;
      case "detalle-tarjeta-1":
        return <DetalleTarjeta1Wrapper
          Comp={DetalleTarjeta1Import}
          onBack={() => nav("cards")}
          onVerDatos={() => nav("detalle-tarjeta-2")}
          onPausar={() => nav("cards-confirm-pause")}
          onWallet={() => nav("tarjeta-apple-wallet")}
          onPin={() => nav("cambiar-pin-empty")}
          onLimites={() => nav("cards-detail-limits")} />;
      case "detalle-tarjeta-2":
        return <DetalleTarjeta2Wrapper onConfirm={() => nav("cards-detail-data")} />;
      case "detalle-tarjeta-3":
        return <DetalleTarjeta3Wrapper
          onBack={() => nav("cards-paused")}
          onActivar={() => nav("cards-confirm-activate")} />;
      case "detalle-tarjeta-4":
        return <DetalleTarjeta1Wrapper
          Comp={DetalleTarjeta4Import}
          onBack={() => nav("cards")}
          onVerDatos={() => nav("detalle-tarjeta-2")}
          onPausar={() => nav("cards-confirm-pause")}
          onWallet={() => nav("tarjeta-apple-wallet")}
          onPin={() => nav("cambiar-pin-empty")}
          onLimites={() => nav("cards-detail-limits")} />;
      case "cards-detail-limits":
        return <CardSheetOverlay
          UnderComp={DetalleTarjeta1Import}
          SheetComp={BottomSheet7Import}
          sheetHeight={390}
          onClose={() => nav("detalle-tarjeta-1")}
          onConfirm={() => nav("detalle-tarjeta-1")} />;
      case "cards-detail-data":
        return <CardSheetOverlay
          UnderComp={DetalleTarjeta4Import}
          SheetComp={BottomSheet10Import}
          sheetHeight={368}
          onClose={() => nav("detalle-tarjeta-4")}
          onConfirm={() => nav("detalle-tarjeta-4")} />;
      case "cards-confirm-pause":
        return <CardSheetOverlay
          UnderComp={DetalleTarjeta1Import}
          SheetComp={BottomSheet9Import}
          sheetHeight={328}
          onClose={() => nav("detalle-tarjeta-1")}
          onConfirm={() => nav("cards-paused")} />;
      case "cards-confirm-activate":
        return <CardSheetOverlay
          UnderComp={DetalleTarjeta3Import}
          SheetComp={BottomSheet8Import}
          sheetHeight={328}
          onClose={() => nav("detalle-tarjeta-3")}
          onConfirm={() => nav("detalle-tarjeta-4")} />;

      /* Wallet / PIN */
      case "detalle-tarjeta-5":
        return <DetalleTarjeta1Wrapper
          Comp={DetalleTarjeta5Import}
          onBack={() => nav("cards")}
          onVerDatos={() => nav("detalle-tarjeta-2")}
          onPausar={() => nav("cards-confirm-pause")}
          onWallet={() => nav("tarjeta-google-wallet")}
          onPin={() => nav("cambiar-pin-empty")}
          onLimites={() => nav("cards-detail-limits")} />;
      case "tarjeta-apple-wallet":
        return <SimpleWrapper Comp={TarjetaAppleWalletImport} onBack={() => nav("detalle-tarjeta-1")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 486, left: 16, right: 16, height: 52 }} onClick={() => nav("apple-pay")} />
        } />;
      case "apple-pay":
        return <SimpleWrapper Comp={ApplePayImport} onBack={() => nav("tarjeta-apple-wallet")} />;
      case "tarjeta-google-wallet":
        return <SimpleWrapper Comp={TarjetaGoogleWalletImport} onBack={() => nav("detalle-tarjeta-5")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 486, left: 16, right: 16, height: 52 }} onClick={() => nav("google-pay")} />
        } />;
      case "google-pay":
        return <SimpleWrapper Comp={GooglePayImport} onBack={() => nav("tarjeta-google-wallet")} />;
      case "cambiar-pin-empty":
        return <SimpleWrapper Comp={CambiarPinEmptyImport} onBack={() => nav("detalle-tarjeta-1")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 88, left: 0, right: 0, bottom: 0 }} onClick={() => nav("cambiar-pin-active")} />
        } />;
      case "cambiar-pin-active":
        return <SimpleWrapper Comp={CambiarPinActiveImport} onBack={() => nav("cambiar-pin-empty")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 231, left: 0, right: 0, height: 230 }} onClick={() => nav("cambiar-pin-filled")} />
        } />;
      case "cambiar-pin-filled":
        return <SimpleWrapper Comp={CambiarPinFilledImport} onBack={() => nav("cambiar-pin-active")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 336, left: 16, right: 16, height: 45 }} onClick={() => nav("cambiar-pin-loading")} />
        } />;
      case "cambiar-pin-loading":
        return <CambiarPinLoadingWrapper onDone={() => nav("cambiar-pin-success")} />;
      case "cambiar-pin-success":
        return <SimpleWrapper Comp={Success2Import} onBack={() => nav("detalle-tarjeta-1")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("detalle-tarjeta-1")} />
        } />;

      /* ── Pago Servicio ── */
      case "servicio-datos-empty":
        return <SimpleWrapper Comp={BuscarServicio2Import} onBack={() => nav("buscar-servicio-full")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 238, left: 0, right: 0, height: 231 }} onClick={() => nav("servicio-datos-filled")} />
        } />;
      case "servicio-datos-filled":
        return <SimpleWrapper Comp={BuscarServicio3Import} onBack={() => nav("servicio-datos-empty")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 477, left: 16, right: 16, height: 45 }} onClick={() => nav("servicio-loading")} />
        } />;
      case "servicio-loading":
        return <AutoScreen Comp={Loading3Import} onDone={() => nav("servicio-select-card")} />;
      case "servicio-select-card":
        return <SimpleWrapper Comp={PagoServicioSelectCardImport} onBack={() => nav("buscar-servicio-full")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("servicio-processing")} />
        } />;
      case "servicio-processing":
        return <AutoScreen Comp={PagoServicioSelectCardProcessingImport} onDone={() => nav("servicio-success")} />;
      case "servicio-success":
        return <SimpleWrapper Comp={PagoServicioSuccessImport} onBack={() => nav("buscar-servicio-full")} extraOverlay={
          <>
            <div className="absolute cursor-pointer" style={{ bottom: 111, left: 16, right: 16, height: 45 }} onClick={() => nav("history")} />
            <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("buscar-servicio-full")} />
          </>
        } />;

      /* ── Préstamos ── */
      case "prestamos-vigentes":
        return <SimpleWrapper Comp={PrestamosVigentesImport} onBack={() => nav("perfil")} extraOverlay={
          <>
            {/* "Finalizados" tab */}
            <div className="absolute cursor-pointer" style={{ top: 152, left: 180, right: 0, height: 40 }} onClick={() => nav("prestamos-finalizados")} />
            {/* First loan card */}
            <div className="absolute cursor-pointer" style={{ top: 216, left: 16, right: 16, height: 150 }} onClick={() => nav("prestamo-detalle")} />
            {/* "Nuevo préstamo" button */}
            <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("nuevo-prestamos")} />
          </>
        } />;
      case "prestamos-finalizados":
        return <SimpleWrapper Comp={PrestamosFinalizadosImport} onBack={() => nav("perfil")} extraOverlay={
          <>
            {/* "Vigentes" tab */}
            <div className="absolute cursor-pointer" style={{ top: 152, left: 0, right: 180, height: 40 }} onClick={() => nav("prestamos-vigentes")} />
            {/* "Nuevo préstamo" button */}
            <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("nuevo-prestamos")} />
          </>
        } />;
      case "nuevo-prestamos":
        return <SimpleWrapper Comp={NuevoPrestamosImport} onBack={() => nav("prestamos-vigentes")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 313, left: 16, right: 16, height: 153 }} onClick={() => nav("prestamos")} />
        } />;
      case "prestamos":
        return <SimpleWrapper Comp={PrestamosImport} onBack={() => nav("nuevo-prestamos")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("simular-prestamo-2")} />
        } />;
      case "simular-prestamo-2":
        return <SimpleWrapper Comp={SimularPrestamo2Import} onBack={() => nav("prestamos")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 326, left: 16, right: 16, height: 45 }} onClick={() => nav("simular-prestamo-3")} />
        } />;
      case "simular-prestamo-3":
        return <SimpleWrapper Comp={SimularPrestamo3Import} onBack={() => nav("simular-prestamo-2")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("resumen-prestamo")} />
        } />;
      case "resumen-prestamo":
        return <SimpleWrapper Comp={ResumenPrestamoImport} onBack={() => nav("simular-prestamo-3")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("prestamo-loading")} />
        } />;
      case "prestamo-loading":
        return <AutoScreen Comp={Loading4Import} onDone={() => nav("prestamo-success")} />;
      case "prestamo-success":
        return <SimpleWrapper Comp={PrestamoSuccessImport} onBack={() => nav("prestamos-vigentes")} extraOverlay={
          <>
            <div className="absolute cursor-pointer" style={{ bottom: 111, left: 16, right: 16, height: 45 }} onClick={() => nav("prestamo-detalle")} />
            <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("prestamos-vigentes")} />
          </>
        } />;
      case "prestamo-detalle":
        return <SimpleWrapper Comp={DetallePrestamosImport} onBack={() => nav("prestamos-vigentes")} />;

      /* ── Adelantos ── */
      case "adelantos-vigentes":
        return <SimpleWrapper Comp={AdelantosVigentesImport} onBack={() => nav("perfil")} extraOverlay={
          <>
            <div className="absolute cursor-pointer" style={{ top: 152, left: 180, right: 0, height: 40 }} onClick={() => nav("adelantos-vigentes")} />
            <div className="absolute cursor-pointer" style={{ top: 216, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-cuotas")} />
            <div className="absolute cursor-pointer" style={{ top: 356, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle")} />
          </>
        } />;
      case "adelantos-vigentes-2":
        return <SimpleWrapper Comp={AdelantosVigentes2Import} onBack={() => nav("perfil")} extraOverlay={
          <>
            <div className="absolute cursor-pointer" style={{ top: 216, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-cuotas")} />
            <div className="absolute cursor-pointer" style={{ top: 356, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle")} />
          </>
        } />;
      case "adelantos-cuotas":
        return <SimpleWrapper Comp={AdelantosCuotasImport} onBack={() => nav("adelantos-vigentes")} extraOverlay={
          <>
            <div className="absolute cursor-pointer" style={{ top: 152, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle")} />
            <div className="absolute cursor-pointer" style={{ top: 292, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle-2")} />
            <div className="absolute cursor-pointer" style={{ top: 432, left: 0, right: 0, height: 132 }} onClick={() => nav("adelantos-detalle-2")} />
          </>
        } />;
      case "adelantos-detalle":
        return <SimpleWrapper Comp={AdelantosDetalle1Import} onBack={() => nav("adelantos-vigentes")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 373, left: 0, right: 0, height: 40 }} onClick={() => nav("simular-adelanto-empty")} />
        } />;
      case "adelantos-detalle-2":
        return <SimpleWrapper Comp={AdelantosDetalle2Import} onBack={() => nav("adelantos-vigentes")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 373, left: 0, right: 0, height: 40 }} onClick={() => nav("simular-adelanto-empty")} />
        } />;
      case "simular-adelanto-empty":
        return <SimpleWrapper Comp={SimularAdelantoEmptyImport} onBack={() => nav("adelantos-detalle")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 0, left: 0, right: 0, height: 231 }} onClick={() => nav("simular-adelanto-filled")} />
        } />;
      case "simular-adelanto-filled":
        return <SimpleWrapper Comp={SimularAdelantoFilledImport} onBack={() => nav("simular-adelanto-empty")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 484, left: 16, right: 16, height: 45 }} onClick={() => nav("resumen-adelanto")} />
        } />;
      case "resumen-adelanto":
        return <SimpleWrapper Comp={ResumenAdelantoImport} onBack={() => nav("simular-adelanto-filled")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("adelanto-loading")} />
        } />;
      case "adelanto-loading":
        return <AutoScreen Comp={Loading5Import} onDone={() => nav("adelanto-success")} />;
      case "adelanto-success":
        return <SimpleWrapper Comp={AdelantoSuccessImport} onBack={() => nav("adelantos-vigentes")} extraOverlay={
          <>
            <div className="absolute cursor-pointer" style={{ bottom: 111, left: 16, right: 16, height: 45 }} onClick={() => nav("adelantos-detalle")} />
            <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("adelantos-vigentes-2")} />
          </>
        } />;

      /* ── Intercambio ── */
      case "intercambio-empty":
        return <SimpleWrapper Comp={IntercambiarImport} onBack={() => nav("perfil")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 0, left: 0, right: 0, height: 231 }} onClick={() => nav("intercambio-filled")} />
        } />;
      case "intercambio-filled":
        return <SimpleWrapper Comp={Intercambiar2Import} onBack={() => nav("intercambio-empty")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 484, left: 16, right: 16, height: 45 }} onClick={() => nav("resumen-intercambio")} />
        } />;
      case "resumen-intercambio":
        return <SimpleWrapper Comp={ResumenIntercambioImport} onBack={() => nav("intercambio-filled")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("resumen-intercambio-processing")} />
        } />;
      case "resumen-intercambio-processing":
        return <AutoScreen Comp={ResumenIntercambio1Import} onDone={() => nav("intercambio-success")} />;
      case "intercambio-success":
        return <SimpleWrapper Comp={IntercambioSuccessImport} onBack={() => nav("perfil")} extraOverlay={
          <>
            <div className="absolute cursor-pointer" style={{ bottom: 111, left: 16, right: 16, height: 45 }} onClick={() => nav("history")} />
            <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={() => nav("home-2")} />
          </>
        } />;

      /* ── FAQs ── */
      case "faqs":
        return <SimpleWrapper Comp={FaQs1Import} onBack={() => nav("perfil")} extraOverlay={
          <div className="absolute cursor-pointer" style={{ top: 239, left: 0, right: 0, height: 52 }} onClick={() => nav("faqs-detalle")} />
        } />;
      case "faqs-detalle":
        return <SimpleWrapper Comp={FaQs2Import} onBack={() => nav("faqs")} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
      <div className="relative" style={{ width: 360, height: 800 }}>
        <div className="w-full h-full overflow-hidden rounded-[40px] shadow-2xl ring-1 ring-white/10">
          {renderScreen()}
        </div>
        <ScreenNav screen={screen} navigate={nav} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   ONBOARDING
═══════════════════════════════════ */

function IosScreen({ onLaunch }: { onLaunch: () => void }) {
  return (
    <div className="relative w-full h-full">
      <IosImport />
      <div className="absolute cursor-pointer rounded-[14px]"
        style={{ top: 462, left: "50%", transform: "translateX(-155px)", width: 60, height: 60 }}
        onClick={onLaunch} />
    </div>
  );
}

function SplashScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 2000); return () => clearTimeout(t); }, [onDone]);
  return <div className="relative w-full h-full cursor-pointer" onClick={onDone}><SplashImport /></div>;
}

function WalkthroughScreen({ which, onRegister, onLogin, onNext }: {
  which: 1 | 2 | 3; onRegister: () => void; onLogin: () => void; onNext: () => void;
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
   REGISTRO
═══════════════════════════════════ */

function CCPaisWrapper({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="relative w-full h-full">
      <CC6Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 40 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={onNext} />
    </div>
  );
}

function CCDatosWrapper({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [filled, setFilled] = useState(false);
  return (
    <div className="relative w-full h-full">
      {filled ? <CC5Import /> : <CC4Import />}
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 40 }} onClick={onBack} />
      {!filled && <div className="absolute cursor-pointer" style={{ top: 120, left: 16, right: 16, bottom: 280 }} onClick={() => setFilled(true)} />}
      {filled && <div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={onNext} />}
    </div>
  );
}

function CCEmailWrapper({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [filled, setFilled] = useState(false);
  return (
    <div className="relative w-full h-full">
      {filled ? <CC8Import /> : <CC7Import />}
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 40 }} onClick={onBack} />
      {!filled && <div className="absolute cursor-pointer" style={{ top: 120, left: 16, right: 16, bottom: 280 }} onClick={() => setFilled(true)} />}
      {filled && <div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 45 }} onClick={onNext} />}
    </div>
  );
}

function CCOtpWrapper({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [filled, setFilled] = useState(false);
  return (
    <div className="relative w-full h-full">
      {filled ? <CC2Import /> : <CC1Import />}
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 40 }} onClick={onBack} />
      {!filled && <div className="absolute cursor-pointer" style={{ top: 200, left: 60, right: 60, height: 80 }} onClick={() => setFilled(true)} />}
      {filled && <div className="absolute cursor-pointer" style={{ bottom: 238, left: 16, right: 16, height: 45 }} onClick={onNext} />}
    </div>
  );
}

function SuccessScreen({ onDone }: { onDone: () => void }) {
  return (
    <div className="relative w-full h-full">
      <SuccessImport />
      <div className="absolute cursor-pointer" style={{ bottom: 30, left: 16, right: 16, height: 50 }} onClick={onDone} />
      <div className="absolute cursor-pointer" style={{ top: 100, left: 16, right: 16, height: 300 }} onClick={onDone} />
    </div>
  );
}

/* ═══════════════════════════════════
   SHARED PRIMITIVES
═══════════════════════════════════ */

/* Auto-advances after 2 s or on tap */
function AutoScreen({ Comp, onDone }: { Comp: React.ComponentType; onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 2000); return () => clearTimeout(t); }, [onDone]);
  return <div className="relative w-full h-full cursor-pointer" onClick={onDone}><Comp /></div>;
}

/* Generic wrapper: back button + optional extra overlays */
function SimpleWrapper({ Comp, onBack, extraOverlay }: {
  Comp: React.ComponentType; onBack: () => void; extraOverlay?: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-full">
      <Comp />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 40 }} onClick={onBack} />
      {extraOverlay}
    </div>
  );
}

/* ═══════════════════════════════════
   APP PRINCIPAL
═══════════════════════════════════ */

function HomeWrapper({ variant, onTransfer, onCard, onQR }: {
  variant: "empty" | "full"; onTransfer: () => void; onCard: () => void; onQR: () => void;
}) {
  const HomeComp = variant === "empty" ? HomeEmpty : HomeFull;
  return (
    <div className="relative w-full h-full">
      <HomeComp />
      <div className="absolute cursor-pointer" style={{ bottom: 70, right: 16, width: 80, height: 56 }} onClick={onTransfer} />
      <div className="absolute cursor-pointer" style={{ bottom: 0, right: 72, width: 72, height: 72 }} onClick={onCard} />
      <div className="absolute cursor-pointer" style={{ bottom: 56, left: "50%", transform: "translateX(-50%)", width: 56, height: 56 }} onClick={onQR} />
    </div>
  );
}

function BuscarServicioWrapper({ onBack, onSearch }: { onBack: () => void; onSearch: () => void }) {
  return (
    <div className="relative w-full h-full">
      <BuscarServicio />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 40 }} onClick={onBack} />
      <div className="absolute cursor-pointer" style={{ top: 120, left: 16, right: 16, height: 37 }} onClick={onSearch} />
    </div>
  );
}

/* ═══════════════════════════════════
   APP 2
═══════════════════════════════════ */

function Home2Wrapper({ onCashIn, onTransfer, onProfile, onQR, onCards }: {
  onCashIn: () => void; onTransfer: () => void; onProfile: () => void;
  onQR: () => void; onCards: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <Home2Import />
      {/* Balance card: "Ingresar" action (left third) */}
      <div className="absolute cursor-pointer" style={{ top: 208, left: 16, width: 100, height: 58 }} onClick={onCashIn} />
      {/* Balance card: "Transferir" action (right third) */}
      <div className="absolute cursor-pointer" style={{ top: 208, right: 16, width: 100, height: 58 }} onClick={onTransfer} />
      {/* Bottom nav: QR center (tab 3) */}
      <div className="absolute cursor-pointer" style={{ bottom: 22, left: "50%", transform: "translateX(-50%)", width: 72, height: 56 }} onClick={onQR} />
      {/* Bottom nav: Tarjetas (tab 4) */}
      <div className="absolute cursor-pointer" style={{ bottom: 22, left: 216, width: 72, height: 56 }} onClick={onCards} />
      {/* Bottom nav: Más (tab 5) */}
      <div className="absolute cursor-pointer" style={{ bottom: 22, right: 0, width: 72, height: 56 }} onClick={onProfile} />
    </div>
  );
}

function PerfilWrapper({ onBack, onLogout, onPrestamos, onIntercambio, onFaqs, onAdelantos }: { onBack: () => void; onLogout: () => void; onPrestamos: () => void; onIntercambio: () => void; onFaqs: () => void; onAdelantos: () => void }) {
  return (
    <div className="relative w-full h-full">
      <PerfilImport />
      {/* "Volver" back button */}
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* "Intercambiar" list item */}
      <div className="absolute cursor-pointer" style={{ top: 256, left: 0, right: 0, height: 56 }} onClick={onIntercambio} />
      {/* "Préstamos" list item */}
      <div className="absolute cursor-pointer" style={{ top: 312, left: 0, right: 0, height: 56 }} onClick={onPrestamos} />
      {/* "Adelantos" list item */}
      <div className="absolute cursor-pointer" style={{ top: 368, left: 0, right: 0, height: 56 }} onClick={onAdelantos} />
      {/* "FAQs" list item */}
      <div className="absolute cursor-pointer" style={{ top: 424, left: 0, right: 0, height: 56 }} onClick={onFaqs} />
      {/* "Cerrar sesión" list item */}
      <div className="absolute cursor-pointer" style={{ top: 480, left: 0, right: 0, height: 56 }} onClick={onLogout} />
    </div>
  );
}

function CashinSheetWrapper({ onClose, onSelect }: { onClose: () => void; onSelect: () => void }) {
  const sheetHeight = 330;
  const sheetTop = 800 - sheetHeight;
  return (
    <div className="relative w-full h-full">
      <Home2Import />
      {/* Dimmed backdrop */}
      <div className="absolute inset-0 bg-black/40 cursor-pointer" style={{ bottom: sheetHeight }} onClick={onClose} />
      {/* Bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: sheetHeight }}>
        <BottomSheetCashinImport />
      </div>
      {/* "Cerrar" button */}
      <div className="absolute cursor-pointer" style={{ top: sheetTop + 16, right: 16, width: 60, height: 40 }} onClick={onClose} />
      {/* "Transferencia" item */}
      <div className="absolute cursor-pointer" style={{ top: sheetTop + 80, left: 16, right: 16, height: 64 }} onClick={onSelect} />
      {/* "Débito inmediato" item */}
      <div className="absolute cursor-pointer" style={{ top: sheetTop + 152, left: 16, right: 16, height: 64 }} onClick={onSelect} />
      {/* "Efectivo" item */}
      <div className="absolute cursor-pointer" style={{ top: sheetTop + 224, left: 16, right: 16, height: 64 }} onClick={onSelect} />
    </div>
  );
}

function CVUSheetWrapper({ onClose, onShare }: { onClose: () => void; onShare: () => void }) {
  const sheetHeight = 340;
  const sheetTop = 800 - sheetHeight;
  return (
    <div className="relative w-full h-full">
      <CashinImport />
      {/* Dimmed backdrop */}
      <div className="absolute inset-0 bg-black/40 cursor-pointer" style={{ bottom: sheetHeight }} onClick={onClose} />
      {/* Bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: sheetHeight }}>
        <BottomSheetCVUImport />
      </div>
      {/* "Listo" button */}
      <div className="absolute cursor-pointer" style={{ top: sheetTop + 16, right: 16, width: 60, height: 40 }} onClick={onClose} />
      {/* "Compartir datos" button */}
      <div className="absolute cursor-pointer" style={{ top: sheetTop + 270, left: 16, right: 16, height: 45 }} onClick={onShare} />
    </div>
  );
}

function ShareWrapper({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative w-full h-full">
      <CashinImport />
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: 415 }}>
        <ShareImport />
      </div>
      {/* Close button (top-right of share sheet) */}
      <div className="absolute cursor-pointer" style={{ top: 800 - 415 + 6, left: 314, width: 40, height: 40 }} onClick={onClose} />
      {/* Tap backdrop to close */}
      <div className="absolute cursor-pointer" style={{ top: 0, left: 0, right: 0, bottom: 415 }} onClick={onClose} />
    </div>
  );
}

/* ═══════════════════════════════════
   LOGIN
═══════════════════════════════════ */

function LoginEmptyWrapper({ onFill }: { onFill: () => void }) {
  return (
    <div className="relative w-full h-full">
      <LoginEmptyImport />
      {/* Tap form fields area to simulate typing */}
      <div className="absolute cursor-pointer" style={{ top: 130, left: 16, right: 16, height: 180 }} onClick={onFill} />
    </div>
  );
}

function LoginFilledWrapper({ onLogin, onBiometric }: { onLogin: () => void; onBiometric: () => void }) {
  return (
    <div className="relative w-full h-full">
      <LoginFilledImport />
      {/* "Iniciar sesión" red button */}
      <div className="absolute cursor-pointer" style={{ bottom: 100, left: 16, right: 16, height: 45 }} onClick={onLogin} />
      {/* "Utilizar datos biométricos" link */}
      <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 36 }} onClick={onBiometric} />
    </div>
  );
}

/* ═══════════════════════════════════
   PAGO QR
═══════════════════════════════════ */

function Home3Wrapper({ onCashIn, onTransfer, onProfile, onQR, onCards }: {
  onCashIn: () => void; onTransfer: () => void; onProfile: () => void;
  onQR: () => void; onCards: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <Home3Import />
      {/* Balance card: "Ingresar" */}
      <div className="absolute cursor-pointer" style={{ top: 208, left: 16, width: 80, height: 58 }} onClick={onCashIn} />
      {/* Balance card: "Transferir" */}
      <div className="absolute cursor-pointer" style={{ top: 208, right: 16, width: 80, height: 58 }} onClick={onTransfer} />
      {/* Bottom nav: QR center (tab 3) */}
      <div className="absolute cursor-pointer" style={{ bottom: 22, left: "50%", transform: "translateX(-50%)", width: 72, height: 56 }} onClick={onQR} />
      {/* Bottom nav: Tarjetas (tab 4) */}
      <div className="absolute cursor-pointer" style={{ bottom: 22, left: 216, width: 72, height: 56 }} onClick={onCards} />
      {/* Bottom nav: Más (tab 5) */}
      <div className="absolute cursor-pointer" style={{ bottom: 22, right: 0, width: 72, height: 56 }} onClick={onProfile} />
    </div>
  );
}

function QrScanWrapper({ Comp, onBack, onScan }: {
  Comp: React.ComponentType; onBack: () => void; onScan: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <Comp />
      {/* "Volver" back button */}
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* Tap scan area to advance */}
      <div className="absolute cursor-pointer" style={{ top: 140, left: 60, right: 60, bottom: 100 }} onClick={onScan} />
    </div>
  );
}

function QrSelectCardWrapper({ onBack, onConfirm }: { onBack: () => void; onConfirm: () => void }) {
  const sheetHeight = 384;
  const sheetTop = 800 - sheetHeight; // = 416
  return (
    <div className="relative w-full h-full">
      <QrSelectCardImport />
      {/* "Volver" back button */}
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* "Desliza para confirmar" slide button */}
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
      {/* "Volver" (disabled in processing state but still tappable for nav) */}
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* Slide button → confirmed */}
      <div className="absolute cursor-pointer" style={{ top: sheetTop + sheetHeight - 40 - 45, left: 16, right: 16, height: 45 }} onClick={onConfirm} />
    </div>
  );
}

function QrSuccessWrapper({ onHome }: { onHome: () => void }) {
  return (
    <div className="relative w-full h-full">
      <QrSuccessImport />
      {/* "Ver actividad" outline button */}
      <div className="absolute cursor-pointer" style={{ bottom: 40 + 8 + 45, left: 16, right: 16, height: 45 }} onClick={onHome} />
      {/* "Ir al inicio" solid button */}
      <div className="absolute cursor-pointer" style={{ bottom: 40, left: 16, right: 16, height: 45 }} onClick={onHome} />
    </div>
  );
}

/* ═══════════════════════════════════
   TRANSFERENCIA
═══════════════════════════════════ */

function Home4Wrapper({ onCashIn, onTransfer, onProfile, onQR, onCards }: {
  onCashIn: () => void; onTransfer: () => void; onProfile: () => void;
  onQR: () => void; onCards: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <Home4Import />
      <div className="absolute cursor-pointer" style={{ top: 208, left: 16, width: 80, height: 58 }} onClick={onCashIn} />
      <div className="absolute cursor-pointer" style={{ top: 208, right: 16, width: 80, height: 58 }} onClick={onTransfer} />
      <div className="absolute cursor-pointer" style={{ bottom: 22, left: "50%", transform: "translateX(-50%)", width: 72, height: 56 }} onClick={onQR} />
      <div className="absolute cursor-pointer" style={{ bottom: 22, left: 216, width: 72, height: 56 }} onClick={onCards} />
      <div className="absolute cursor-pointer" style={{ bottom: 22, right: 0, width: 72, height: 56 }} onClick={onProfile} />
    </div>
  );
}

function TransferContactWrapper({ onBack, onCBU, onContact }: {
  onBack: () => void; onCBU: () => void; onContact: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <TransferImport />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* "Mediante CBU, CVU o Alias" first row */}
      <div className="absolute cursor-pointer" style={{ top: 140, left: 16, right: 16, height: 64 }} onClick={onCBU} />
      {/* Contact list (all rows) */}
      <div className="absolute cursor-pointer" style={{ top: 380, left: 16, right: 16, height: 320 }} onClick={onContact} />
    </div>
  );
}

function TransferAliasEmptyWrapper({ onBack, onFill }: { onBack: () => void; onFill: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir5Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* Tap field to simulate typing */}
      <div className="absolute cursor-pointer" style={{ top: 140, left: 16, right: 16, height: 50 }} onClick={onFill} />
    </div>
  );
}

function TransferAliasFilledWrapper({ onBack, onValidate }: { onBack: () => void; onValidate: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir6Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* "Validar" button: body inset bottom 238, pb 40, button h 45 → 800-238-40-45=477 */}
      <div className="absolute cursor-pointer" style={{ top: 477, left: 16, right: 16, height: 45 }} onClick={onValidate} />
    </div>
  );
}

function TransferRecipientWrapper({ onClose, onContinue }: { onClose: () => void; onContinue: () => void }) {
  return (
    <div className="relative w-full h-full">
      <BottomSheet2Import />
      {/* "Cerrar" top-right */}
      <div className="absolute cursor-pointer" style={{ top: 16, right: 16, width: 64, height: 44 }} onClick={onClose} />
      {/* "Continuar" bottom button: pb-40 nav bar height ~18 → 800-40-18-45 = 697 */}
      <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={onContinue} />
    </div>
  );
}

function TransferAmountEmptyWrapper({ onBack, onFill }: { onBack: () => void; onFill: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir1Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* Tap amount area to simulate entering amount */}
      <div className="absolute cursor-pointer" style={{ top: 180, left: 40, right: 40, height: 130 }} onClick={onFill} />
    </div>
  );
}

function TransferAmountFilledWrapper({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir2Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* "Continuar" button: body inset bottom 231, pb 40, h 45 → 800-231-40-45=484 */}
      <div className="absolute cursor-pointer" style={{ top: 484, left: 16, right: 16, height: 45 }} onClick={onContinue} />
    </div>
  );
}

function TransferConfirmWrapper({ onBack, onSlide }: { onBack: () => void; onSlide: () => void }) {
  return (
    <div className="relative w-full h-full">
      <Transferir3Import />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* Slide button pb-40 from bottom → bottom 40, h 45 */}
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
      {/* "Ir al inicio" button: pb-40 → bottom 40, h 45 */}
      <div className="absolute cursor-pointer" style={{ bottom: 40, left: 16, right: 16, height: 45 }} onClick={onHome} />
    </div>
  );
}

/* ═══════════════════════════════════
   ACTIVIDAD
═══════════════════════════════════ */

function Home5Wrapper({ onCashIn, onTransfer, onProfile, onQR, onCards, onActivity, onNotifications, onViewAll }: {
  onCashIn: () => void; onTransfer: () => void; onProfile: () => void;
  onQR: () => void; onCards: () => void; onActivity: () => void;
  onNotifications: () => void; onViewAll: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <Home5Import />
      {/* Notification bell (top-right of header) */}
      <div className="absolute cursor-pointer" style={{ top: 52, right: 16, width: 32, height: 36 }} onClick={onNotifications} />
      {/* "Ingresar" action in balance card */}
      <div className="absolute cursor-pointer" style={{ top: 230, left: 16, width: 90, height: 42 }} onClick={onCashIn} />
      {/* "Transferir" action in balance card */}
      <div className="absolute cursor-pointer" style={{ top: 230, right: 16, width: 90, height: 42 }} onClick={onTransfer} />
      {/* "Ver todas" link */}
      <div className="absolute cursor-pointer" style={{ top: 346, right: 16, width: 80, height: 28 }} onClick={onViewAll} />
      {/* Bottom nav: Actividad (tab 2) */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 72, width: 72, height: 56 }} onClick={onActivity} />
      {/* Bottom nav: QR (tab 3) */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 144, width: 72, height: 56 }} onClick={onQR} />
      {/* Bottom nav: Tarjetas (tab 4) */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 216, width: 72, height: 56 }} onClick={onCards} />
      {/* Bottom nav: Más (tab 5) */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, right: 0, width: 72, height: 56 }} onClick={onProfile} />
    </div>
  );
}

function NotificacionesWrapper({ onBack, onClear }: { onBack: () => void; onClear: () => void }) {
  return (
    <div className="relative w-full h-full">
      <NotificacionesImport />
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 120, height: 44 }} onClick={onBack} />
      {/* "Limpiar" button (right of title row) */}
      <div className="absolute cursor-pointer" style={{ top: 88, right: 16, width: 84, height: 36 }} onClick={onClear} />
    </div>
  );
}

function HistoryWrapper({ onHome, onQR, onCards, onProfile, onDetailClaro, onDetailTransfer, onDetailAdidas, onDetailIngreso }: {
  onHome: () => void; onQR: () => void; onCards: () => void; onProfile: () => void;
  onDetailClaro: () => void; onDetailTransfer: () => void; onDetailAdidas: () => void; onDetailIngreso: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <HistoryImport />
      {/* Bottom nav: Inicio (tab 1) */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 0, width: 72, height: 56 }} onClick={onHome} />
      {/* Bottom nav: QR (tab 3) */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 144, width: 72, height: 56 }} onClick={onQR} />
      {/* Bottom nav: Tarjetas (tab 4) */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 216, width: 72, height: 56 }} onClick={onCards} />
      {/* Bottom nav: Más (tab 5) */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, right: 0, width: 72, height: 56 }} onClick={onProfile} />
      {/* Transaction rows — Hoy */}
      <div className="absolute cursor-pointer" style={{ top: 188, left: 0, right: 0, height: 50 }} onClick={onDetailClaro} />
      <div className="absolute cursor-pointer" style={{ top: 238, left: 0, right: 0, height: 50 }} onClick={onDetailTransfer} />
      <div className="absolute cursor-pointer" style={{ top: 288, left: 0, right: 0, height: 50 }} onClick={onDetailAdidas} />
      {/* Transaction row — Ayer */}
      <div className="absolute cursor-pointer" style={{ top: 400, left: 0, right: 0, height: 50 }} onClick={onDetailIngreso} />
    </div>
  );
}

function HistoryDetailSheet({ Comp, onClose }: { Comp: React.ComponentType; onClose: () => void }) {
  const sheetHeight = 362;
  const sheetTop = 800 - sheetHeight;
  return (
    <div className="relative w-full h-full">
      <HistoryImport />
      <div className="absolute inset-0 bg-black/40 cursor-pointer" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: sheetHeight }}>
        <Comp />
      </div>
      {/* "Listo" button (top-right of sheet title) */}
      <div className="absolute cursor-pointer" style={{ top: sheetTop + 16, right: 16, width: 55, height: 44 }} onClick={onClose} />
    </div>
  );
}

/* ═══════════════════════════════════
   TARJETAS
═══════════════════════════════════ */

function CardsWrapper({ Comp, onCard1, onCard2, onHome, onActivity, onQR, onMore }: {
  Comp: React.ComponentType;
  onCard1: () => void; onCard2: () => void;
  onHome: () => void; onActivity: () => void; onQR: () => void; onMore: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <Comp />
      {/* Card 1 (Gollet PREPAGA) */}
      <div className="absolute cursor-pointer" style={{ top: 116, left: 16, right: 16, height: 210 }} onClick={onCard1} />
      {/* Card 2 (Mastercard crédito) */}
      <div className="absolute cursor-pointer" style={{ top: 338, left: 16, right: 16, height: 210 }} onClick={onCard2} />
      {/* Bottom nav: Inicio | Actividad | QR | Tarjetas(active) | Más */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 0, width: 72, height: 56 }} onClick={onHome} />
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 72, width: 72, height: 56 }} onClick={onActivity} />
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 144, width: 72, height: 56 }} onClick={onQR} />
      {/* Tarjetas tab: already active, no nav */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, right: 0, width: 72, height: 56 }} onClick={onMore} />
    </div>
  );
}

function DetalleTarjeta1Wrapper({ Comp, onBack, onVerDatos, onPausar, onLimites, onWallet, onPin }: {
  Comp: React.ComponentType;
  onBack: () => void; onVerDatos: () => void; onPausar: () => void; onLimites: () => void;
  onWallet?: () => void; onPin?: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      <Comp />
      {/* Back / Volver */}
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 44 }} onClick={onBack} />
      {/* "Ver datos" button (left) */}
      <div className="absolute cursor-pointer" style={{ top: 378, left: 16, width: 154, height: 45 }} onClick={onVerDatos} />
      {/* "Pausar" button (right) */}
      <div className="absolute cursor-pointer" style={{ top: 378, right: 16, width: 154, height: 45 }} onClick={onPausar} />
      {/* List item 1: Apple/Google Wallet */}
      {onWallet && <div className="absolute cursor-pointer" style={{ top: 439, left: 0, right: 0, height: 48 }} onClick={onWallet} />}
      {/* List item 2: Cambiar PIN */}
      {onPin && <div className="absolute cursor-pointer" style={{ top: 487, left: 0, right: 0, height: 48 }} onClick={onPin} />}
      {/* List item 3: Límites */}
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
      {/* Back */}
      <div className="absolute cursor-pointer" style={{ top: 44, left: 0, width: 100, height: 44 }} onClick={onBack} />
      {/* "Activar" button */}
      <div className="absolute cursor-pointer" style={{ top: 378, right: 16, width: 154, height: 45 }} onClick={onActivar} />
    </div>
  );
}

/** Generic bottom sheet overlay on top of an underlying card detail screen */
function CardSheetOverlay({ UnderComp, SheetComp, sheetHeight, onClose, onConfirm }: {
  UnderComp: React.ComponentType;
  SheetComp: React.ComponentType;
  sheetHeight: number;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const sheetTop = 800 - sheetHeight;
  return (
    <div className="relative w-full h-full">
      <UnderComp />
      <div className="absolute inset-0 bg-black/40 cursor-pointer" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: sheetHeight }}>
        <SheetComp />
      </div>
      {/* Primary action button (e.g. "Si, pausar/activar" or "Confirmar" or "Listo") */}
      <div className="absolute cursor-pointer" style={{ bottom: 58, left: 16, right: 16, height: 45 }} onClick={onConfirm} />
      {/* Secondary / close button (e.g. "No, cancelar" or "Cerrar" top-right) */}
      <div className="absolute cursor-pointer" style={{ bottom: 18, left: 16, right: 16, height: 45 }} onClick={onClose} />
    </div>
  );
}

function CambiarPinLoadingWrapper({ onDone }: { onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 2000); return () => clearTimeout(t); }, [onDone]);
  return <div className="relative w-full h-full cursor-pointer" onClick={onDone}><CambiarPinLoadingImport /></div>;
}

/* ═══════════════════════════════════
   NAV PILLS
═══════════════════════════════════ */

const NAV_GROUPS: { label: string; screens: { id: Screen; label: string }[] }[] = [
  {
    label: "Onboarding",
    screens: [
      { id: "ios", label: "iOS" },
      { id: "splash", label: "Splash" },
      { id: "walkthrough1", label: "Intro 1" },
      { id: "walkthrough2", label: "Intro 2" },
      { id: "walkthrough3", label: "Intro 3" },
    ],
  },
  {
    label: "Registro",
    screens: [
      { id: "cc-pais", label: "País" },
      { id: "cc-datos", label: "Datos" },
      { id: "cc-email", label: "Email" },
      { id: "cc-otp", label: "OTP" },
      { id: "cc-loading", label: "Verif." },
      { id: "success", label: "Éxito" },
    ],
  },
  {
    label: "Identidad",
    screens: [
      { id: "id-start", label: "Inicio ID" },
      { id: "id-doc-inicio", label: "Doc. intro" },
      { id: "id-frente1", label: "Frente cam" },
      { id: "id-frente2", label: "Frente ok" },
      { id: "id-dorso1", label: "Dorso cam" },
      { id: "id-dorso2", label: "Dorso ok" },
      { id: "id-selfie-intro", label: "Selfie intro" },
      { id: "id-selfie1", label: "Selfie 1" },
      { id: "id-selfie2", label: "Izquierda" },
      { id: "id-selfie3", label: "Derecha" },
      { id: "id-loading", label: "Análisis doc." },
      { id: "id-loading-2", label: "Verif. ID" },
      { id: "id-success", label: "ID ok" },
    ],
  },
  {
    label: "Login",
    screens: [
      { id: "login-empty", label: "Login vacío" },
      { id: "login-filled", label: "Login lleno" },
      { id: "login-faceid1", label: "Face ID 1" },
      { id: "login-faceid2", label: "Face ID 2" },
    ],
  },
  {
    label: "App",
    screens: [
      { id: "home-empty", label: "Home vacío" },
      { id: "home-full", label: "Home lleno" },
      { id: "detalle-tarjeta", label: "Tarjeta" },
      { id: "transferir", label: "Transferir" },
      { id: "buscar-servicio", label: "Buscar" },
      { id: "buscar-servicio-full", label: "Servicios" },
    ],
  },
  {
    label: "App 2",
    screens: [
      { id: "home-2", label: "Home 2" },
      { id: "home-3", label: "Home 3" },
      { id: "home-4", label: "Home 4" },
      { id: "home-5", label: "Home 5" },
      { id: "perfil", label: "Perfil" },
      { id: "cashin-sheet", label: "Cash in" },
      { id: "cashin", label: "Ingresar" },
      { id: "cvu-sheet", label: "CVU datos" },
      { id: "share", label: "Compartir" },
      { id: "notification", label: "Notif." },
    ],
  },
  {
    label: "Actividad",
    screens: [
      { id: "notificaciones", label: "Notif. ok" },
      { id: "notificaciones-empty", label: "Notif. vacío" },
      { id: "history", label: "Actividad" },
      { id: "history-detail-adidas", label: "Det. Adidas" },
      { id: "history-detail-transfer", label: "Det. Transfer" },
      { id: "history-detail-claro", label: "Det. Claro" },
      { id: "history-detail-ingreso", label: "Det. Ingreso" },
    ],
  },
  {
    label: "Pago QR",
    screens: [
      { id: "qr-scan1", label: "Escaner" },
      { id: "qr-scan2", label: "QR detectado" },
      { id: "qr-loading", label: "Verificando" },
      { id: "qr-select-card", label: "Elegir tarjeta" },
      { id: "qr-processing", label: "Procesando" },
      { id: "qr-success", label: "Pago ok" },
    ],
  },
  {
    label: "Transferencia",
    screens: [
      { id: "transfer", label: "Contactos" },
      { id: "transfer-alias-empty", label: "CBU vacío" },
      { id: "transfer-alias-filled", label: "CBU lleno" },
      { id: "transfer-recipient-sheet", label: "Destinatario" },
      { id: "transfer-amount-empty", label: "Importe vacío" },
      { id: "transfer-amount-filled", label: "Importe lleno" },
      { id: "transfer-confirm", label: "Confirmar" },
      { id: "transfer-processing", label: "Procesando" },
      { id: "transfer-success", label: "Transfer ok" },
    ],
  },
  {
    label: "Tarjetas",
    screens: [
      { id: "cards", label: "Listado" },
      { id: "cards-paused", label: "Con pausa" },
      { id: "detalle-tarjeta-1", label: "Detalle activa" },
      { id: "detalle-tarjeta-2", label: "Face ID" },
      { id: "detalle-tarjeta-3", label: "Detalle pausada" },
      { id: "detalle-tarjeta-4", label: "Post auth" },
      { id: "cards-detail-limits", label: "Límites" },
      { id: "cards-detail-data", label: "Datos tarjeta" },
      { id: "cards-confirm-pause", label: "Confirmar pausa" },
      { id: "cards-confirm-activate", label: "Confirmar activ." },
    ],
  },
  {
    label: "Wallet / PIN",
    screens: [
      { id: "detalle-tarjeta-5", label: "Det. Google" },
      { id: "tarjeta-apple-wallet", label: "Apple Wallet" },
      { id: "apple-pay", label: "Apple Pay" },
      { id: "tarjeta-google-wallet", label: "Google Wallet" },
      { id: "google-pay", label: "Google Pay" },
      { id: "cambiar-pin-empty", label: "PIN inicial" },
      { id: "cambiar-pin-active", label: "PIN teclado" },
      { id: "cambiar-pin-filled", label: "PIN lleno" },
      { id: "cambiar-pin-loading", label: "PIN cargando" },
      { id: "cambiar-pin-success", label: "PIN ok" },
    ],
  },
  {
    label: "Pago Servicio",
    screens: [
      { id: "servicio-datos-empty", label: "Datos vacío" },
      { id: "servicio-datos-filled", label: "Datos llenos" },
      { id: "servicio-loading", label: "Verificando" },
      { id: "servicio-select-card", label: "Elegir tarjeta" },
      { id: "servicio-processing", label: "Procesando" },
      { id: "servicio-success", label: "Pago ok" },
    ],
  },
  {
    label: "Préstamos",
    screens: [
      { id: "prestamos-vigentes", label: "Vigentes" },
      { id: "prestamos-finalizados", label: "Finalizados" },
      { id: "nuevo-prestamos", label: "Nuevo préstamo" },
      { id: "prestamos", label: "Personal intro" },
      { id: "simular-prestamo-2", label: "Simular monto" },
      { id: "simular-prestamo-3", label: "Simular cuotas" },
      { id: "resumen-prestamo", label: "Resumen" },
      { id: "prestamo-loading", label: "Solicitando" },
      { id: "prestamo-success", label: "Préstamo ok" },
      { id: "prestamo-detalle", label: "Detalle" },
    ],
  },
  {
    label: "Adelantos",
    screens: [
      { id: "adelantos-vigentes", label: "Vigentes" },
      { id: "adelantos-vigentes-2", label: "Vigentes 2" },
      { id: "adelantos-cuotas", label: "Cuotas" },
      { id: "adelantos-detalle", label: "Detalle 1" },
      { id: "adelantos-detalle-2", label: "Detalle 2" },
      { id: "simular-adelanto-empty", label: "Simular vacío" },
      { id: "simular-adelanto-filled", label: "Simular lleno" },
      { id: "resumen-adelanto", label: "Resumen" },
      { id: "adelanto-loading", label: "Solicitando" },
      { id: "adelanto-success", label: "Éxito" },
    ],
  },
  {
    label: "Intercambio",
    screens: [
      { id: "intercambio-empty", label: "Vacío" },
      { id: "intercambio-filled", label: "10.000 ARS" },
      { id: "resumen-intercambio", label: "Confirmar" },
      { id: "resumen-intercambio-processing", label: "Procesando" },
      { id: "intercambio-success", label: "Éxito" },
    ],
  },
  {
    label: "FAQs",
    screens: [
      { id: "faqs", label: "Lista" },
      { id: "faqs-detalle", label: "Respuesta" },
    ],
  },
];

function ScreenNav({ screen, navigate }: { screen: Screen; navigate: (s: Screen) => void }) {
  return (
    <div className="absolute -bottom-[288px] left-0 right-0 flex flex-col gap-1">
      {NAV_GROUPS.map((group) => (
        <div key={group.label} className="flex items-center gap-1 flex-wrap justify-center">
          <span className="text-white/40 text-[9px] shrink-0">{group.label}:</span>
          {group.screens.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(s.id)}
              className={`px-2 py-0.5 rounded-full text-[9px] font-medium transition-colors ${
                screen === s.id
                  ? "bg-[#df4730] text-white"
                  : "bg-white/20 text-white/70 hover:bg-white/30"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
