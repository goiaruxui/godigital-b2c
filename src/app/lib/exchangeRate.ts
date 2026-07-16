/** Simulated fixed rate — no real market data source in this prototype. */
export const ARS_PER_USD = 1250;

export function arsToUsd(ars: number) {
  return ars / ARS_PER_USD;
}

const usdFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function formatUsd(usd: number) {
  return usdFormatter.format(usd);
}
