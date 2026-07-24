import type { NavigationType } from "react-router";

// Clasifica cada ruta para elegir el tipo de animación de pantalla:
// - "tab": destinos del bottom nav → crossfade simple, sin slide.
// - "sheet": pantallas que se presentan como modal/bottom sheet CON fondo
//   real detrás (CashIn, detalle de transacción) → la anima SheetShell,
//   este wrapper no hace nada (ver getEnterVariant).
// - "modal": pantallas que ocupan toda la pantalla pero se sienten como una
//   presentación modal (ej. el escáner de QR) → slide-up completo, sin
//   fondo visible detrás.
// - "push": todo lo demás → slide lateral tipo navegación de iOS (push/pop).
export type RouteKind = "tab" | "sheet" | "modal" | "push";
export type Direction = "forward" | "back";

const TAB_PATHS = new Set(["/home", "/activity", "/cards", "/mas"]);
const MODAL_PATHS = new Set(["/qr"]);
const SHEET_PATTERNS = [/^\/activity\/[^/]+$/, /^\/cashin$/];

export function getRouteKind(pathname: string): RouteKind {
  if (TAB_PATHS.has(pathname)) return "tab";
  if (MODAL_PATHS.has(pathname)) return "modal";
  if (SHEET_PATTERNS.some((re) => re.test(pathname))) return "sheet";
  return "push";
}

export function navTypeToDirection(navType: NavigationType): Direction {
  return navType === "POP" ? "back" : "forward";
}

export const EASE = [0.4, 0, 0.2, 1] as const;

export function getTransition(kind: RouteKind) {
  if (kind === "tab") return { duration: 0.12, ease: "easeOut" as const };
  if (kind === "sheet") return { duration: 0 };
  if (kind === "modal") return { duration: 0.28, ease: EASE };
  return { duration: 0.22, ease: EASE };
}

// Para "sheet" el wrapper de ruta NO anima nada — el scrim (fade) y la
// tarjeta (slide-up) se animan por separado dentro de SheetShell, así el
// fondo oscuro no se desplaza junto con la tarjeta. Ver SheetShell.tsx.
// Para "modal" (ej. QR) sí anima directamente el wrapper completo: sube
// desde abajo cubriendo toda la pantalla, sin fondo real detrás.
export function getEnterVariant(kind: RouteKind, direction: Direction) {
  if (kind === "tab") return { opacity: 0 };
  if (kind === "sheet") return {};
  if (kind === "modal") return { opacity: 0, y: "100%" };
  return { opacity: 0, x: direction === "back" ? -32 : 32 };
}

export function getCenterVariant(kind: RouteKind) {
  if (kind === "tab") return { opacity: 1 };
  if (kind === "sheet") return {};
  return { opacity: 1, x: 0, y: 0 };
}

// IMPORTANTE: esto se evalúa como función (no como objeto estático) para que
// lea la dirección VIGENTE al momento de cerrarse la pantalla, no la que
// tenía cuando esa pantalla se abrió. Ver AppRoutes.tsx (directionRef).
export function getExitVariant(kind: RouteKind, direction: Direction) {
  if (kind === "tab") return { opacity: 0 };
  if (kind === "sheet") return {};
  // El modal siempre baja para cerrarse (presentación/dismiss), sin
  // importar la dirección de navegación.
  if (kind === "modal") return { opacity: 0, y: "100%" };
  // Si en este momento se está volviendo hacia atrás, esta pantalla sale
  // hacia la derecha (aunque haya entrado empujando hacia adelante), como
  // levantar una carta para revelar la de abajo.
  return { opacity: 0, x: direction === "back" ? 32 : -32 };
}
