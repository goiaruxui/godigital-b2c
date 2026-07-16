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
import { ServiceFormPage } from "@/app/pages/services/ServiceForm";
import { ServiceConfirmPage } from "@/app/pages/services/ServiceConfirm";
import { PaymentSuccessPage } from "@/app/pages/shared/PaymentSuccess";
import { CardsListPage } from "@/app/pages/cards/CardsList";
import { CardDetailPage } from "@/app/pages/cards/CardDetail";
import { CardPinPage } from "@/app/pages/cards/CardPin";
import { CardLimitPage } from "@/app/pages/cards/CardLimit";
import { PrestamosListPage, PrestamosSimulatePage, PrestamosConfirmPage, PrestamoDetailPage } from "@/app/pages/credit/Prestamos";
import { AdelantosListPage, AdelantosSimulatePage, AdelantosConfirmPage, AdelantoDetailPage } from "@/app/pages/credit/Adelantos";
import { ExchangeAmountPage } from "@/app/pages/exchange/ExchangeAmount";
import { ExchangeConfirmPage } from "@/app/pages/exchange/ExchangeConfirm";

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
      <Route path="/servicio-datos" element={<RequireAuth><ServiceFormPage /></RequireAuth>} />
      <Route path="/servicio-confirm" element={<RequireAuth><ServiceConfirmPage /></RequireAuth>} />

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

      {/* Adelantos */}
      <Route path="/adelantos" element={<RequireAuth><AdelantosListPage /></RequireAuth>} />
      <Route path="/adelantos/simular" element={<RequireAuth><AdelantosSimulatePage /></RequireAuth>} />
      <Route path="/adelantos/confirmar" element={<RequireAuth><AdelantosConfirmPage /></RequireAuth>} />
      <Route path="/adelantos/:id" element={<RequireAuth><AdelantoDetailPage /></RequireAuth>} />

      {/* Intercambio */}
      <Route path="/intercambio" element={<RequireAuth><ExchangeAmountPage /></RequireAuth>} />
      <Route path="/intercambio/confirmar" element={<RequireAuth><ExchangeConfirmPage /></RequireAuth>} />

      {/* Todo lo demás (onboarding, identidad, FAQs, perfil, notificaciones):
          se sirve desde el switch legado hasta que le llegue su fase. */}
      <Route path="/:legacyId" element={<LegacyScreenRoute />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
