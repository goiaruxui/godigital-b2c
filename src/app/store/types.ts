export type UserProfile = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  avatarInitials: string;
};

export type RegistrationDraft = {
  country: string;
  firstName: string;
  lastName: string;
  phoneCountryCode: string;
  phoneAreaCode: string;
  phoneNumber: string;
  acceptedTerms: boolean;
  termsVersion: string;
  termsAcceptedAt: string;
  privacyVersion: string;
  privacyAcceptedAt: string;
  email: string;
  password: string;
  otpVerified: boolean;
  kycCompleted: boolean;
};

export type AuthState = {
  status: "guest" | "registering" | "authenticated";
  user: UserProfile | null;
  credentials: { email: string; password: string } | null;
  registration: RegistrationDraft;
};

export type CardKind = "prepaga" | "credito";

export type Card = {
  id: string;
  label: string;
  kind: CardKind;
  cardNumber: string;
  last4: string;
  paused: boolean;
  pin: string;
  monthlyLimit: number;
};

export type AccountState = {
  balance: number;
  cvu: string;
  alias: string;
  cards: Card[];
};

export type TransactionType =
  | "cashin"
  | "transfer_out"
  | "transfer_in"
  | "qr_payment"
  | "service_payment"
  | "loan_disbursement"
  | "advance_disbursement"
  | "exchange";

export type Transaction = {
  id: string;
  type: TransactionType;
  /** Signed: positive credits the account, negative debits it. */
  amount: number;
  counterparty: string;
  description: string;
  createdAt: string;
};

export type Notification = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  read: boolean;
};

export type CreditProductKind = "loan";

export type CreditProduct = {
  id: string;
  kind: CreditProductKind;
  amount: number;
  installments: number;
  monthlyRate: number;
  monthlyPayment: number;
  totalToPay: number;
  createdAt: string;
};

/** Adelanto parcial solicitado contra una cuota puntual de un CreditProduct (kind "loan"). */
export type InstallmentAdvance = {
  id: string;
  loanId: string;
  installmentNumber: number;
  amount: number;
  interest: number;
  netAmount: number;
  createdAt: string;
};
