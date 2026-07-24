import { useLocation, useNavigate } from "react-router";

// Navega a una ruta tipo modal/sheet (/cashin, /activity/:id) dejando
// registrada la pantalla actual como fondo, para que AppRoutes la monte
// como overlay en vez de reemplazarla. Ver AppRoutes.tsx (SHEET_ROUTES).
export function useOpenSheet() {
  const navigate = useNavigate();
  const location = useLocation();
  return (to: string) => navigate(to, { state: { backgroundLocation: location } });
}
