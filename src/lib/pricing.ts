import type { PriceOption, Product } from "../data/productTypes";

/** Format a KZT amount with the tenge symbol, e.g. 9500 → "9 500 ₸" */
export function formatPriceKzt(amount: number): string {
  return `${amount.toLocaleString("ru-RU")} ₸`;
}

/** Unified selectable options from `priceOptions` or legacy `pricesBySize`. */
export function getPriceOptions(product: Product): PriceOption[] {
  if (product.priceOptions?.length) return product.priceOptions;

  if (product.pricesBySize) {
    return product.sizes
      .filter((size) => product.pricesBySize?.[size] != null)
      .map((size) => ({
        id: size,
        label: size,
        price: product.pricesBySize![size]
      }));
  }

  return [];
}

export function hasSelectablePricing(product: Product): boolean {
  return getPriceOptions(product).length > 0;
}

/** @deprecated Use hasSelectablePricing */
export function hasSizePricing(product: Product): boolean {
  return hasSelectablePricing(product);
}

export function getPricedSizes(product: Product): string[] {
  return getPriceOptions(product).map((o) => o.id);
}

export function getPriceForOption(
  product: Product,
  optionId: string
): number | undefined {
  return getPriceOptions(product).find((o) => o.id === optionId)?.price;
}

export function getPriceForSize(
  product: Product,
  size: string
): number | undefined {
  return getPriceForOption(product, size);
}

export function getOptionImage(
  product: Product,
  optionId: string
): string | undefined {
  return getPriceOptions(product).find((o) => o.id === optionId)?.image;
}

export function getStartingPrice(product: Product): number | undefined {
  const options = getPriceOptions(product);
  if (options.length) {
    return Math.min(...options.map((o) => o.price));
  }
  return product.price;
}

export function getOptionsLabel(product: Product): string {
  if (product.priceOptionsLabel) return product.priceOptionsLabel;
  if (product.priceOptions?.length) return "Вариант";
  return "Размер";
}
