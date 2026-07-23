export type BillerCategory = { id: string; label: string };

export type Biller = { id: string; name: string; categoryId: string; shortLabel: string };

export const BILLER_CATEGORIES: BillerCategory[] = [
  { id: "tarjetas", label: "Tarjetas" },
  { id: "telefonia", label: "Telefonía / TV / Internet" },
  { id: "luz", label: "Luz" },
  { id: "gas", label: "Gas" },
];

export const BILLERS: Biller[] = [
  { id: "visa", name: "Visa", categoryId: "tarjetas", shortLabel: "Tarjeta de crédito" },
  { id: "mastercard", name: "MasterCard", categoryId: "tarjetas", shortLabel: "Tarjeta de crédito" },
  { id: "amex", name: "American Express", categoryId: "tarjetas", shortLabel: "Tarjeta de crédito" },
  { id: "att", name: "AT&T", categoryId: "telefonia", shortLabel: "Celular" },
  { id: "claro", name: "Claro", categoryId: "telefonia", shortLabel: "Celular" },
  { id: "directv", name: "Direct TV", categoryId: "telefonia", shortLabel: "TV" },
  { id: "movistar", name: "Movistar", categoryId: "telefonia", shortLabel: "Celular" },
  { id: "oredoo", name: "Oredoo", categoryId: "telefonia", shortLabel: "Celular" },
  { id: "personal", name: "Personal", categoryId: "telefonia", shortLabel: "Celular" },
  { id: "starlink", name: "Starlink", categoryId: "telefonia", shortLabel: "Internet" },
  { id: "supercanal", name: "Supercanal", categoryId: "telefonia", shortLabel: "TV" },
  { id: "telecentro", name: "Telecentro", categoryId: "telefonia", shortLabel: "Internet" },
  { id: "tigo", name: "Tigo", categoryId: "telefonia", shortLabel: "Celular" },
  { id: "vtr", name: "VTR", categoryId: "telefonia", shortLabel: "Internet" },
  { id: "edenor", name: "Edenor", categoryId: "luz", shortLabel: "Luz" },
  { id: "metrogas", name: "Metrogas", categoryId: "gas", shortLabel: "Gas" },
];

export const POPULAR_BILLER_IDS = ["visa", "directv", "movistar", "edenor", "metrogas"];

export function getBiller(id: string): Biller | undefined {
  return BILLERS.find((b) => b.id === id);
}

export function getBillersByCategory(categoryId: string): Biller[] {
  return BILLERS.filter((b) => b.categoryId === categoryId);
}

export function searchBillers(query: string): Biller[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return BILLERS.filter((b) => b.name.toLowerCase().includes(q));
}
