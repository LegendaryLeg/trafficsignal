import type {
  CategoryFilter,
  Product,
  ProductCategoryId,
  ProductGroupId,
  ShopFilterId
} from "./productTypes";

export const categoryLabels: Record<ProductCategoryId, string> = {
  warning: "Предупреждающие знаки",
  priority: "Знаки приоритета",
  prohibition: "Запрещающие знаки",
  mandatory: "Предписывающие знаки",
  information: "Информационные знаки",
  service: "Знаки сервиса",
  "additional-plates": "Дополнительные таблички",
  "traffic-mirrors": "Дорожные зеркала",
  "traffic-delineators": "Демпферы и направляющие",
  "speed-bumps": "Лежачие полицейские",
  "traffic-cones": "Дорожные конусы",
  "barriers-fencing": "Барьеры и ограждения",
  "parking-equipment": "Парковочное оборудование",
  "mounting-hardware": "Крепления и опоры"
};

export const groupLabels: Record<ProductGroupId, string> = {
  "road-signs": "Дорожные знаки",
  "additional-plates": "Дополнительные таблички",
  "traffic-mirrors": "Дорожные зеркала",
  "traffic-delineators": "Демпферы и направляющие",
  "speed-bumps": "Лежачие полицейские",
  "traffic-cones": "Дорожные конусы",
  "barriers-fencing": "Барьеры и ограждения",
  "parking-equipment": "Парковочное оборудование",
  "mounting-hardware": "Крепления и опоры"
};

/** Filter chips shown on the Products page. */
export const productFilters: CategoryFilter[] = [
  { id: "all", label: "Все товары" },
  { id: "road-signs", label: "Дорожные знаки в наличии" },
  { id: "equipment", label: "Дорожное оборудование" }
];

export function matchesShopFilter(
  product: Product,
  filter: ShopFilterId
): boolean {
  if (filter === "all") return true;
  if (filter === "road-signs") return product.group === "road-signs";
  return product.group !== "road-signs";
}
