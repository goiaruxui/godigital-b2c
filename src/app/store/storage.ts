// Bump this whenever a stored shape changes incompatibly — old keys are
// simply orphaned (not migrated), which is fine before there are real users.
const PREFIX = "gdi:v2:";

export function loadState<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveState<T>(key: string, value: T) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // localStorage full/unavailable — state just won't survive a refresh.
  }
}

export function clearAllState() {
  Object.keys(localStorage)
    .filter((k) => k.startsWith(PREFIX))
    .forEach((k) => localStorage.removeItem(k));
}
