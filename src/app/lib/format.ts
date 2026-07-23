const currencyFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  minimumFractionDigits: 2,
});

export function formatCurrency(amount: number) {
  return currencyFormatter.format(amount);
}

export function formatCurrencyParts(amount: number) {
  const [whole, cents] = formatCurrency(amount).split(",");
  return { whole, cents: cents ?? "00" };
}

const dateFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatDateTime(iso: string) {
  return dateFormatter.format(new Date(iso));
}

const shortDateFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export function formatShortDate(iso: string) {
  return shortDateFormatter.format(new Date(iso));
}
