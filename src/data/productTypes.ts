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
  pdfUrl?: string;
  specifications?: { label: string; value: string }[];
};

export type CategoryFilter = {
  id: ProductCategoryId | "all";
  label: string;
  group?: ProductGroupId;
};
