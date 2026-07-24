// Bump this whenever a stored shape changes incompatibly — old keys are
// simply orphaned (not migrated), which is fine before there are real users.
const PREFIX = "gdi:v2:";

// sessionStorage (no localStorage): la simulación debe sobrevivir a un
// reload de la pestaña, pero arrancar limpia (estado "guest", sin datos de
// registros anteriores) en cada pestaña/sesión nueva del navegador.
export function loadState<T>(key: string, fallback: T): T {
  try {
    const raw = sessionStorage.getItem(PREFIX + key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveState<T>(key: string, value: T) {
  try {
    sessionStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // sessionStorage lleno/no disponible — el estado no sobrevive a un refresh.
  }
}

export function clearAllState() {
  Object.keys(sessionStorage)
    .filter((k) => k.startsWith(PREFIX))
    .forEach((k) => sessionStorage.removeItem(k));
}
