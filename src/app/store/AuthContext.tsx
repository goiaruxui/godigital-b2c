import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { AuthState, RegistrationDraft } from "./types";
import { loadState, saveState } from "./storage";

const STORAGE_KEY = "auth";

const DEMO_EMAIL = "info@gmail.com";
const DEMO_PASSWORD = "123456";

const emptyRegistration: RegistrationDraft = {
  country: "",
  firstName: "",
  lastName: "",
  phoneCountryCode: "+54",
  phoneAreaCode: "",
  phoneNumber: "",
  acceptedTerms: false,
  termsVersion: "",
  termsAcceptedAt: "",
  privacyVersion: "",
  privacyAcceptedAt: "",
  email: "",
  password: "",
  otpVerified: false,
  kycCompleted: false,
};

const initialState: AuthState = {
  status: "guest",
  user: null,
  credentials: null,
  registration: emptyRegistration,
};

type Action =
  | { type: "SET_REGISTRATION"; payload: Partial<RegistrationDraft> }
  | { type: "VERIFY_OTP" }
  | { type: "COMPLETE_KYC" }
  | { type: "COMPLETE_REGISTRATION" }
  | { type: "LOGIN" }
  | { type: "LOGIN_DEMO" }
  | { type: "LOGOUT" }
  | { type: "UPDATE_PROFILE"; firstName: string; lastName: string }
  | { type: "CHANGE_PASSWORD"; password: string }
  | { type: "RESTORE"; payload: AuthState };

function reducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case "SET_REGISTRATION":
      return { ...state, registration: { ...state.registration, ...action.payload } };
    case "VERIFY_OTP":
      return { ...state, registration: { ...state.registration, otpVerified: true } };
    case "COMPLETE_KYC":
      return { ...state, registration: { ...state.registration, kycCompleted: true } };
    case "COMPLETE_REGISTRATION": {
      const { country, firstName, lastName, email, password } = state.registration;
      const user = {
        id: crypto.randomUUID(),
        firstName,
        lastName,
        email,
        country,
        avatarInitials: `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase(),
      };
      return {
        ...state,
        status: "authenticated",
        user,
        credentials: { email, password },
      };
    }
    case "LOGIN":
      return { ...state, status: "authenticated" };
    case "LOGIN_DEMO": {
      if (state.user) return { ...state, status: "authenticated" };
      const user = {
        id: crypto.randomUUID(),
        firstName: "Info",
        lastName: "Demo",
        email: DEMO_EMAIL,
        country: "Argentina",
        avatarInitials: "ID",
      };
      return {
        ...state,
        status: "authenticated",
        user,
        credentials: { email: DEMO_EMAIL, password: DEMO_PASSWORD },
      };
    }
    case "LOGOUT":
      return { ...state, status: "guest" };
    case "UPDATE_PROFILE": {
      if (!state.user) return state;
      const { firstName, lastName } = action;
      return {
        ...state,
        user: { ...state.user, firstName, lastName, avatarInitials: `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase() },
      };
    }
    case "CHANGE_PASSWORD":
      return state.credentials ? { ...state, credentials: { ...state.credentials, password: action.password } } : state;
    case "RESTORE":
      return action.payload;
    default:
      return state;
  }
}

type AuthContextValue = {
  state: AuthState;
  setRegistration: (payload: Partial<RegistrationDraft>) => void;
  verifyOtp: (code: string) => boolean;
  completeKyc: () => void;
  completeRegistration: () => void;
  login: (email: string, password: string) => boolean;
  loginWithBiometrics: () => boolean;
  logout: () => void;
  updateProfile: (firstName: string, lastName: string) => void;
  changePassword: (password: string) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => loadState(STORAGE_KEY, init));

  useEffect(() => {
    saveState(STORAGE_KEY, state);
  }, [state]);

  const value = useMemo<AuthContextValue>(
    () => ({
      state,
      setRegistration: (payload) => dispatch({ type: "SET_REGISTRATION", payload }),
      verifyOtp: (code) => {
        const valid = /^\d{6}$/.test(code);
        if (valid) dispatch({ type: "VERIFY_OTP" });
        return valid;
      },
      completeKyc: () => dispatch({ type: "COMPLETE_KYC" }),
      completeRegistration: () => dispatch({ type: "COMPLETE_REGISTRATION" }),
      login: (email, password) => {
        const normalizedEmail = email.trim().toLowerCase();
        if (normalizedEmail === DEMO_EMAIL && password === DEMO_PASSWORD) {
          dispatch({ type: "LOGIN_DEMO" });
          return true;
        }
        const stored = state.credentials;
        const ok = !!stored && stored.email.toLowerCase() === normalizedEmail && stored.password === password;
        if (ok) dispatch({ type: "LOGIN" });
        return ok;
      },
      loginWithBiometrics: () => {
        const ok = !!state.credentials;
        if (ok) dispatch({ type: "LOGIN" });
        return ok;
      },
      logout: () => dispatch({ type: "LOGOUT" }),
      updateProfile: (firstName, lastName) => dispatch({ type: "UPDATE_PROFILE", firstName, lastName }),
      changePassword: (password) => dispatch({ type: "CHANGE_PASSWORD", password }),
    }),
    [state],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
