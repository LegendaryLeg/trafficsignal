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
  reflectiveFilms: string[];
  material: string;
  thickness?: string;
  gost: string;
  /** Whether the product is currently available at the retail store. */
  stockStatus: StockStatus;
  pdfUrl?: string;
  specifications?: { label: string; value: string }[];
};

export type CategoryFilter = {
  id: ProductCategoryId | "all";
  label: string;
  group?: ProductGroupId;
};
