import type { CategoryFilter, ProductCategoryId, ProductGroupId } from "./productTypes";

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

/** Filter chips shown on the Products page. Add new categories here as the catalog grows. */
export const productFilters: CategoryFilter[] = [
  { id: "all", label: "Все товары" },
  { id: "warning", label: "Предупреждающие", group: "road-signs" },
  { id: "priority", label: "Приоритета", group: "road-signs" },
  { id: "prohibition", label: "Запрещающие", group: "road-signs" },
  { id: "mandatory", label: "Предписывающие", group: "road-signs" },
  { id: "information", label: "Информационные", group: "road-signs" },
  { id: "service", label: "Сервиса", group: "road-signs" },
  { id: "additional-plates", label: "Таблички", group: "additional-plates" },
  { id: "traffic-mirrors", label: "Зеркала", group: "traffic-mirrors" },
  { id: "traffic-delineators", label: "Демпферы", group: "traffic-delineators" },
  { id: "speed-bumps", label: "Искусств. неровности", group: "speed-bumps" },
  { id: "traffic-cones", label: "Конусы", group: "traffic-cones" },
  { id: "barriers-fencing", label: "Барьеры", group: "barriers-fencing" },
  { id: "parking-equipment", label: "Парковка", group: "parking-equipment" },
  { id: "mounting-hardware", label: "Крепления", group: "mounting-hardware" }
];
