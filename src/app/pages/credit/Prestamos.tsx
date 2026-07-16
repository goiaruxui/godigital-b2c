import { CreditListPage } from "./CreditList";
import { CreditSimulatePage } from "./CreditSimulate";
import { CreditConfirmPage } from "./CreditConfirm";
import { CreditDetailPage } from "./CreditDetail";

export const PrestamosListPage = () => <CreditListPage kind="loan" />;
export const PrestamosSimulatePage = () => <CreditSimulatePage kind="loan" />;
export const PrestamosConfirmPage = () => <CreditConfirmPage kind="loan" />;
export const PrestamoDetailPage = () => <CreditDetailPage kind="loan" />;
