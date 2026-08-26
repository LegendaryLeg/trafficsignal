export type ProductCategoryId =
  | "warning"
  | "priority"
  | "prohibition"
  | "mandatory"
  | "information"
  | "service"
  | "additional-plates"
  | "traffic-mirrors"
  | "traffic-delineators"
  | "speed-bumps"
  | "traffic-cones"
  | "barriers-fencing"
  | "parking-equipment"
  | "mounting-hardware";

export type ProductGroupId =
  | "road-signs"
  | "additional-plates"
  | "traffic-mirrors"
  | "traffic-delineators"
  | "speed-bumps"
  | "traffic-cones"
  | "barriers-fencing"
  | "parking-equipment"
  | "mounting-hardware";

/** Store stock status. Toggle to control what appears on the Products page. */
export type StockStatus = "В наличии" | "Нет в наличии";

export const STOCK_IN: StockStatus = "В наличии";
export const STOCK_OUT: StockStatus = "Нет в наличии";

/** Selectable retail option (size, element, kit part, etc.). */
export type PriceOption = {
  id: string;
  label: string;
  price: number;
  /** Optional image shown when this option is selected. */
  image?: string;
};

export type Product = {
  id: string;
  code: string;
  name: string;
  category: ProductCategoryId;
  group: ProductGroupId;
  description: string;
  shortDescription: string;
  image: string;
  sizes: string[];
  /**
   * Optional retail prices by size label (must match values in `sizes`).
   * Amounts are in KZT (tenge).
   */
  pricesBySize?: Record<string, number>;
  /**
   * Named price options (elements, kits, etc.).
   * Prefer this over `pricesBySize` when options are not literal sizes.
   */
  priceOptions?: PriceOption[];
  /** Label above option buttons, e.g. "Размер", "Элемент", "Комплектация". */
  priceOptionsLabel?: string;
  /** Fixed price when there is only one SKU (no option switcher). */
  price?: number;
  reflectiveFilms: string[];
  material: string;
  thickness?: string;
  gost: string;
  /** Whether the product is currently available at the retail store. */
  stockStatus: StockStatus;
  pdfUrl?: string;
  specifications?: { label: string; value: string }[];
};

/** High-level shop filters shown on the Products page. */
export type ShopFilterId = "all" | "road-signs" | "equipment";

export type CategoryFilter = {
  id: ShopFilterId;
  label: string;
};
