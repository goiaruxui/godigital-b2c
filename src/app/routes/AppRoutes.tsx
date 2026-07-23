import type { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "@/app/store/AuthContext";
import { LegacyScreenRoute } from "./LegacyScreenRoute";
import {
  RegisterCountryPage,
  RegisterPersonalPage,
  RegisterEmailPage,
  RegisterOtpPage,
  RegisterSuccessPage,
} from "@/app/pages/auth/RegisterSteps";
import { LoginPage } from "@/app/pages/auth/Login";
import { HomePage } from "@/app/pages/home/Home";
import { ActivityPage } from "@/app/pages/activity/Activity";
import { TransactionDetailSheet } from "@/app/pages/activity/TransactionDetail";
import { CashInMethodSheet } from "@/app/pages/cashin/CashInMethod";
import { CashInAmountPage } from "@/app/pages/cashin/CashInAmount";
import { CashInCvuPage } from "@/app/pages/cashin/CashInCvu";
import { TransferRecipientPage } from "@/app/pages/transfer/TransferRecipient";
import { TransferAmountPage } from "@/app/pages/transfer/TransferAmount";
import { TransferConfirmPage } from "@/app/pages/transfer/TransferConfirm";
import { QrScanPage } from "@/app/pages/qr/QrScan";
import { QrAmountPage } from "@/app/pages/qr/QrAmount";
import { QrConfirmPage } from "@/app/pages/qr/QrConfirm";
import { ServiciosSearchPage } from "@/app/pages/services/ServiciosSearch";
import { ServiciosCategoryPage } from "@/app/pages/services/ServiciosCategory";
import { ServiciosAccountPage } from "@/app/pages/services/ServiciosAccount";
import { ServiciosAmountPage } from "@/app/pages/services/ServiciosAmount";
import { ServiciosPayPage } from "@/app/pages/services/ServiciosPay";
import { ServiciosSuccessPage } from "@/app/pages/services/ServiciosSuccess";
import { PaymentSuccessPage } from "@/app/pages/shared/PaymentSuccess";
import { CardsListPage } from "@/app/pages/cards/CardsList";
import { CardDetailPage } from "@/app/pages/cards/CardDetail";
import { CardPinPage } from "@/app/pages/cards/CardPin";
import { CardLimitPage } from "@/app/pages/cards/CardLimit";
import { PrestamosListPage, PrestamosSimulatePage, PrestamosConfirmPage, PrestamoDetailPage } from "@/app/pages/credit/Prestamos";
import { AdelantosListPage } from "@/app/pages/credit/adelantos/AdelantosList";
import { AdelantosCuotasPage } from "@/app/pages/credit/adelantos/Cuotas";
import { AdelantoCuotaDetailPage } from "@/app/pages/credit/adelantos/CuotaDetail";
import { AdelantoSimulatePage } from "@/app/pages/credit/adelantos/Simulate";
import { AdelantoConfirmPage } from "@/app/pages/credit/adelantos/Confirm";
import { AdelantoSuccessPage } from "@/app/pages/credit/adelantos/Success";
import { ExchangeAmountPage } from "@/app/pages/exchange/ExchangeAmount";
import { ExchangeConfirmPage } from "@/app/pages/exchange/ExchangeConfirm";
import { MorePage } from "@/app/pages/more/More";
import { ProfilePage } from "@/app/pages/profile/Profile";
import { ProfileEditPage } from "@/app/pages/profile/ProfileEdit";
import { ProfilePasswordPage } from "@/app/pages/profile/ProfilePassword";
import { NotificationsPage } from "@/app/pages/notifications/Notifications";
import { ComingSoonPage } from "@/app/pages/shared/ComingSoon";
import { LegalHubPage } from "@/app/pages/legal/LegalHub";
import { LegalDocumentPage } from "@/app/pages/legal/LegalDocument";
import { LegalConsentsPage } from "@/app/pages/legal/LegalConsents";
import { SecurityHubPage } from "@/app/pages/security/SecurityHub";
import { SecurityDevicesPage } from "@/app/pages/security/SecurityDevices";

function RequireAuth({ children }: { children: ReactNode }) {
  const { state } = useAuth();
  if (state.status !== "authenticated") return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function RootRedirect() {
  const { state } = useAuth();
  return <Navigate to={state.status === "authenticated" ? "/home" : "/ios"} replace />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />

      {/* Registro */}
      <Route path="/register-pais" element={<RegisterCountryPage />} />
      <Route path="/register-personal" element={<RegisterPersonalPage />} />
      <Route path="/register-email" element={<RegisterEmailPage />} />
      <Route path="/register-otp" element={<RegisterOtpPage />} />
      <Route path="/register-success" element={<RegisterSuccessPage />} />

      {/* Login */}
      <Route path="/login" element={<LoginPage />} />

      {/* App principal */}
      <Route
        path="/home"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path="/activity"
        element={
          <RequireAuth>
            <ActivityPage />
          </RequireAuth>
        }
      />
      <Route
        path="/activity/:id"
        element={
          <RequireAuth>
            <TransactionDetailSheet />
          </RequireAuth>
        }
      />

      {/* Cash-in */}
      <Route
        path="/cashin"
        element={
          <RequireAuth>
            <CashInMethodSheet />
          </RequireAuth>
        }
      />
      <Route
        path="/cashin/amount"
        element={
          <RequireAuth>
            <CashInAmountPage />
          </RequireAuth>
        }
      />
      <Route
        path="/cashin/cvu"
        element={
          <RequireAuth>
            <CashInCvuPage />
          </RequireAuth>
        }
      />

      {/* Transferencias */}
      <Route path="/transfer" element={<RequireAuth><TransferRecipientPage /></RequireAuth>} />
      <Route path="/transfer-amount" element={<RequireAuth><TransferAmountPage /></RequireAuth>} />
      <Route path="/transfer-confirm" element={<RequireAuth><TransferConfirmPage /></RequireAuth>} />

      {/* Pago QR */}
      <Route path="/qr" element={<RequireAuth><QrScanPage /></RequireAuth>} />
      <Route path="/qr-amount" element={<RequireAuth><QrAmountPage /></RequireAuth>} />
      <Route path="/qr-confirm" element={<RequireAuth><QrConfirmPage /></RequireAuth>} />

      {/* Pago de servicios */}
      <Route path="/servicios" element={<RequireAuth><ServiciosSearchPage /></RequireAuth>} />
      <Route path="/servicios/categoria/:categoryId" element={<RequireAuth><ServiciosCategoryPage /></RequireAuth>} />
      <Route path="/servicios/:billerId" element={<RequireAuth><ServiciosAccountPage /></RequireAuth>} />
      <Route path="/servicios/:billerId/monto" element={<RequireAuth><ServiciosAmountPage /></RequireAuth>} />
      <Route path="/servicios/:billerId/pagar" element={<RequireAuth><ServiciosPayPage /></RequireAuth>} />
      <Route path="/servicios/exito" element={<RequireAuth><ServiciosSuccessPage /></RequireAuth>} />

      {/* Resultado genérico de un movimiento de dinero */}
      <Route path="/payment-success" element={<RequireAuth><PaymentSuccessPage /></RequireAuth>} />

      {/* Tarjetas */}
      <Route path="/cards" element={<RequireAuth><CardsListPage /></RequireAuth>} />
      <Route path="/cards/:cardId" element={<RequireAuth><CardDetailPage /></RequireAuth>} />
      <Route path="/cards/:cardId/pin" element={<RequireAuth><CardPinPage /></RequireAuth>} />
      <Route path="/cards/:cardId/limit" element={<RequireAuth><CardLimitPage /></RequireAuth>} />

      {/* Préstamos */}
      <Route path="/prestamos" element={<RequireAuth><PrestamosListPage /></RequireAuth>} />
      <Route path="/prestamos/simular" element={<RequireAuth><PrestamosSimulatePage /></RequireAuth>} />
      <Route path="/prestamos/confirmar" element={<RequireAuth><PrestamosConfirmPage /></RequireAuth>} />
      <Route path="/prestamos/:id" element={<RequireAuth><PrestamoDetailPage /></RequireAuth>} />

      {/* Adelantos (adelanto parcial contra una cuota de un préstamo existente) */}
      <Route path="/adelantos" element={<RequireAuth><AdelantosListPage /></RequireAuth>} />
      <Route path="/adelantos/exito" element={<RequireAuth><AdelantoSuccessPage /></RequireAuth>} />
      <Route path="/adelantos/:loanId" element={<RequireAuth><AdelantosCuotasPage /></RequireAuth>} />
      <Route path="/adelantos/:loanId/:number" element={<RequireAuth><AdelantoCuotaDetailPage /></RequireAuth>} />
      <Route path="/adelantos/:loanId/:number/simular" element={<RequireAuth><AdelantoSimulatePage /></RequireAuth>} />
      <Route path="/adelantos/:loanId/:number/confirmar" element={<RequireAuth><AdelantoConfirmPage /></RequireAuth>} />

      {/* Intercambio */}
      <Route path="/intercambio" element={<RequireAuth><ExchangeAmountPage /></RequireAuth>} />
      <Route path="/intercambio/confirmar" element={<RequireAuth><ExchangeConfirmPage /></RequireAuth>} />

      {/* Más / Perfil / Notificaciones */}
      <Route path="/mas" element={<RequireAuth><MorePage /></RequireAuth>} />
      <Route path="/perfil" element={<RequireAuth><ProfilePage /></RequireAuth>} />
      <Route path="/perfil/editar" element={<RequireAuth><ProfileEditPage /></RequireAuth>} />
      <Route path="/perfil/contrasena" element={<RequireAuth><ProfilePasswordPage /></RequireAuth>} />
      <Route path="/notificaciones" element={<RequireAuth><NotificationsPage /></RequireAuth>} />

      {/* Opciones de Más sin funcionalidad propia todavía */}
      <Route path="/giros-remesas" element={<RequireAuth><ComingSoonPage title="Giros y remesas" /></RequireAuth>} />
      <Route path="/seguros-asistencias" element={<RequireAuth><ComingSoonPage title="Seguros y asistencias" /></RequireAuth>} />
      <Route path="/beneficios" element={<RequireAuth><ComingSoonPage title="Beneficios" /></RequireAuth>} />
      <Route path="/reportes" element={<RequireAuth><ComingSoonPage title="Reportes" /></RequireAuth>} />
      <Route path="/seguridad" element={<RequireAuth><SecurityHubPage /></RequireAuth>} />
      <Route path="/seguridad/dispositivos" element={<RequireAuth><SecurityDevicesPage /></RequireAuth>} />
      <Route path="/asistente-virtual" element={<RequireAuth><ComingSoonPage title="Asistente virtual" /></RequireAuth>} />
      <Route path="/legal" element={<RequireAuth><LegalHubPage /></RequireAuth>} />
      <Route path="/legal/consentimientos" element={<RequireAuth><LegalConsentsPage /></RequireAuth>} />
      <Route path="/legal/:docId" element={<LegalDocumentPage />} />

      {/* Todo lo demás (onboarding, identidad, FAQs): se sirve desde el
          switch legado hasta que le llegue su fase. */}
      <Route path="/:legacyId" element={<LegacyScreenRoute />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
