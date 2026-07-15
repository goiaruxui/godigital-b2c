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

      {/* Todo lo demás (onboarding, identidad, transferencias, QR, tarjetas,
          préstamos, adelantos, intercambio, FAQs, perfil, notificaciones):
          se sirve desde el switch legado hasta que le llegue su fase. */}
      <Route path="/:legacyId" element={<LegacyScreenRoute />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
