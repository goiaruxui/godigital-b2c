import { CreditListPage } from "./CreditList";
import { CreditSimulatePage } from "./CreditSimulate";
import { CreditConfirmPage } from "./CreditConfirm";
import { CreditDetailPage } from "./CreditDetail";

export const AdelantosListPage = () => <CreditListPage kind="advance" />;
export const AdelantosSimulatePage = () => <CreditSimulatePage kind="advance" />;
export const AdelantosConfirmPage = () => <CreditConfirmPage kind="advance" />;
export const AdelantoDetailPage = () => <CreditDetailPage kind="advance" />;
