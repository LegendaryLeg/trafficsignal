import type { Product } from "./productTypes";

/**
 * Catalog data source.
 * Add a new product by appending an object — cards and detail pages generate automatically.
 */
export const products: Product[] = [
  {
    id: "1-1",
    code: "1.1",
    name: "Опасный поворот",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Предупреждает о крутом повороте. Соответствует требованиям ГОСТ.",
    description:
      "Дорожный знак «Опасный поворот» устанавливается перед участками дороги с резким изменением направления движения. Изготавливается из оцинкованной стали с двойной отбортовкой и световозвращающей плёнкой выбранного класса.",
    image: "/main-file/1.1.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "1-2",
    code: "1.2",
    name: "Опасные повороты",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Предупреждает о нескольких опасных поворотах подряд.",
    description:
      "Знак устанавливается перед участками с серией опасных поворотов. Производится по ГОСТ с контролем геометрии и качества световозвращающего покрытия.",
    image: "/main-file/1.2.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "1-5",
    code: "1.5",
    name: "Пересечение с трамвайной линией",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Предупреждает о пересечении с трамвайными путями.",
    description:
      "Знак информирует водителей о приближении к пересечению с трамвайной линией. Изготавливается с точным нанесением символов и устойчивой цветопередачей.",
    image: "/main-file/1.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "1-8",
    code: "1.8",
    name: "Светофорное регулирование",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Предупреждает о регулируемом светофором перекрёстке.",
    description:
      "Знак устанавливается перед участками с светофорным регулированием. Подходит для городских и загородных дорог.",
    image: "/main-file/3.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "1-22",
    code: "1.22",
    name: "Пешеходный переход",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Предупреждает о приближении к пешеходному переходу.",
    description:
      "Знак «Пешеходный переход» применяется для повышения безопасности пешеходов. Изготавливается с высококачественной световозвращающей плёнкой для видимости днём и ночью.",
    image: "/main-file/4.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "2-1",
    code: "2.1",
    name: "Главная дорога",
    category: "priority",
    group: "road-signs",
    shortDescription:
      "Обозначает дорогу с преимуществом проезда.",
    description:
      "Знак «Главная дорога» определяет приоритет движения на перекрёстках. Производится строго по ГОСТ с контролем размеров и оттенков.",
    image: "/main-file/5.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "2-4",
    code: "2.4",
    name: "Уступите дорогу",
    category: "priority",
    group: "road-signs",
    shortDescription:
      "Требует уступить дорогу транспортным средствам на главной дороге.",
    description:
      "Классический знак приоритета треугольной формы. Изготавливается с двойной отбортовкой и световозвращающими материалами.",
    image: "/2/priority.webp",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "2-5",
    code: "2.5",
    name: "Движение без остановки запрещено",
    category: "priority",
    group: "road-signs",
    shortDescription:
      "Знак STOP — обязательная остановка перед пересечением.",
    description:
      "Знак STOP изготавливается по стандарту с чёткой типографикой и стойким покрытием. Доступен в нескольких типоразмерах и классах плёнки.",
    image: "/main-file/2.png",
    sizes: ["700 мм", "900 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "3-1",
    code: "3.1",
    name: "Въезд запрещён",
    category: "prohibition",
    group: "road-signs",
    shortDescription:
      "Запрещает въезд всех транспортных средств.",
    description:
      "Знак «Въезд запрещён» (кирпич) — один из ключевых запрещающих знаков. Производится с точной геометрией круга и насыщенным цветом покрытия.",
    image: "/2/zapret.webp",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "3-18",
    code: "3.18",
    name: "Поворот направо запрещён",
    category: "prohibition",
    group: "road-signs",
    shortDescription:
      "Запрещает поворот направо на перекрёстке.",
    description:
      "Запрещающий знак для регулирования направлений движения. Подходит для проектов городской инфраструктуры и частных территорий.",
    image: "/main-file/6.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "3-24",
    code: "3.24",
    name: "Ограничение максимальной скорости",
    category: "prohibition",
    group: "road-signs",
    shortDescription:
      "Вводит ограничение скорости на участке дороги.",
    description:
      "Знак ограничения скорости изготавливается с любым числовым значением по проекту. Высокая читаемость и долговечность покрытия.",
    image: "/main-file/7.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "4-1-1",
    code: "4.1.1",
    name: "Движение прямо",
    category: "mandatory",
    group: "road-signs",
    shortDescription:
      "Предписывает движение только прямо.",
    description:
      "Предписывающий знак синего круга. Используется для организации потоков на перекрёстках и выездах.",
    image: "/2/predpisi.webp",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "4-2-1",
    code: "4.2.1",
    name: "Объезд препятствия справа",
    category: "mandatory",
    group: "road-signs",
    shortDescription:
      "Указывает направление объезда препятствия справа.",
    description:
      "Предписывающий знак для организации безопасного объезда. Изготавливается по ГОСТ в нужном типоразмере.",
    image: "/main-file/8.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "5-19-1",
    code: "5.19.1",
    name: "Пешеходный переход",
    category: "information",
    group: "road-signs",
    shortDescription:
      "Обозначает место пешеходного перехода.",
    description:
      "Информационный знак пешеходного перехода. Рекомендуется комплектовать с предупреждающими знаками и разметкой.",
    image: "/2/info.webp",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "5-16",
    code: "5.16",
    name: "Место остановки автобуса",
    category: "information",
    group: "road-signs",
    shortDescription:
      "Обозначает остановочный пункт общественного транспорта.",
    description:
      "Информационный знак для остановок. Подходит для муниципальных и инфраструктурных проектов.",
    image: "/2/info.png",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "6-1",
    code: "6.1",
    name: "Пункт медицинской помощи",
    category: "service",
    group: "road-signs",
    shortDescription:
      "Указывает расположение пункта медицинской помощи.",
    description:
      "Знак сервиса для обозначения инфраструктуры обслуживания. Изготавливается с устойчивыми пигментами и световозвращающей плёнкой.",
    image: "/2/servis.webp",
    sizes: ["700 мм", "900 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "6-3",
    code: "6.3",
    name: "Автозаправочная станция",
    category: "service",
    group: "road-signs",
    shortDescription:
      "Указывает расположение АЗС.",
    description:
      "Сервисный знак для обозначения автозаправочных станций и сопутствующей инфраструктуры.",
    image: "/2/servis.png",
    sizes: ["700 мм", "900 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "8-1-1",
    code: "8.1.1",
    name: "Расстояние до объекта",
    category: "additional-plates",
    group: "additional-plates",
    shortDescription:
      "Табличка указывает расстояние до опасного участка или объекта.",
    description:
      "Дополнительная табличка к основным дорожным знакам. Изготавливается комплектно со знаком или отдельно по проекту.",
    image: "/2/preduprezh.webp",
    sizes: ["350×700 мм", "450×900 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "8-2-1",
    code: "8.2.1",
    name: "Зона действия",
    category: "additional-plates",
    group: "additional-plates",
    shortDescription:
      "Указывает протяжённость зоны действия основного знака.",
    description:
      "Табличка «Зона действия» применяется совместно с запрещающими и информационными знаками.",
    image: "/2/preduprezh.png",
    sizes: ["350×700 мм", "450×900 мм"],
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014"
  },
  {
    id: "mirror-600",
    code: "ЗР-600",
    name: "Дорожное зеркало Ø600",
    category: "traffic-mirrors",
    group: "traffic-mirrors",
    shortDescription:
      "Обзорное зеркало для перекрёстков и выездов.",
    description:
      "Сферическое дорожное зеркало повышает безопасность на участках с ограниченной видимостью. Комплектуется кронштейном для монтажа на опору.",
    image: "/main-file/1.webp",
    sizes: ["Ø600 мм"],
    reflectiveFilms: [],
    material: "ABS / акриловое зеркало",
    thickness: undefined,
    gost: "ТУ производителя"
  },
  {
    id: "mirror-800",
    code: "ЗР-800",
    name: "Дорожное зеркало Ø800",
    category: "traffic-mirrors",
    group: "traffic-mirrors",
    shortDescription:
      "Увеличенное обзорное зеркало для промышленных зон и стоянок.",
    description:
      "Крупноформатное дорожное зеркало для сложных участков. Устойчиво к погодным условиям Казахстана.",
    image: "/main-file/1.webp",
    sizes: ["Ø800 мм"],
    reflectiveFilms: [],
    material: "ABS / акриловое зеркало",
    gost: "ТУ производителя"
  },
  {
    id: "cone-500",
    code: "КН-500",
    name: "Дорожный конус 500 мм",
    category: "traffic-cones",
    group: "traffic-cones",
    shortDescription:
      "Сигнальный конус для временной организации движения.",
    description:
      "Пластиковый дорожный конус с световозвращающими полосами. Используется при ремонтных работах и ограждении зон.",
    image: "/main-file/2.png",
    sizes: ["500 мм"],
    reflectiveFilms: ["Световозвращающие полосы"],
    material: "Полиэтилен / ПВХ",
    gost: "ТУ производителя"
  },
  {
    id: "cone-750",
    code: "КН-750",
    name: "Дорожный конус 750 мм",
    category: "traffic-cones",
    group: "traffic-cones",
    shortDescription:
      "Высокий сигнальный конус для дорожных работ.",
    description:
      "Усиленный конус увеличенной высоты для временной разметки и ограждения проезжей части.",
    image: "/main-file/2.png",
    sizes: ["750 мм"],
    reflectiveFilms: ["Световозвращающие полосы"],
    material: "Полиэтилен / ПВХ",
    gost: "ТУ производителя"
  },
  {
    id: "bump-900",
    code: "ИН-900",
    name: "Лежачий полицейский 900 мм",
    category: "speed-bumps",
    group: "speed-bumps",
    shortDescription:
      "Искусственная неровность для снижения скорости.",
    description:
      "Модульная искусственная неровность из износостойкого материала. Подходит для дворовых территорий, складов и внутриплощадочных дорог.",
    image: "/main-file/3.png",
    sizes: ["900 мм (модуль)"],
    reflectiveFilms: ["Световозвращающие элементы"],
    material: "Резина / композит",
    gost: "ТУ производителя"
  },
  {
    id: "barrier-1",
    code: "БР-1",
    name: "Временный барьер",
    category: "barriers-fencing",
    group: "barriers-fencing",
    shortDescription:
      "Переносное ограждение для зон дорожных работ.",
    description:
      "Пластиковый или металлический временный барьер для организации безопасных зон на дороге и стройплощадке.",
    image: "/main-file/6.png",
    sizes: ["по проекту"],
    reflectiveFilms: ["Световозвращающие элементы"],
    material: "Пластик / сталь",
    gost: "ТУ производителя"
  },
  {
    id: "parking-block",
    code: "ПР-1",
    name: "Парковочный блокиратор",
    category: "parking-equipment",
    group: "parking-equipment",
    shortDescription:
      "Ограничитель для организации парковочных мест.",
    description:
      "Парковочное оборудование для частных и коммерческих территорий. Поставляется комплектно с крепежом.",
    image: "/main-file/7.png",
    sizes: ["по проекту"],
    reflectiveFilms: [],
    material: "Сталь / порошковая окраска",
    gost: "ТУ производителя"
  },
  {
    id: "pole-76",
    code: "ОП-76",
    name: "Опора под знак Ø76 мм",
    category: "mounting-hardware",
    group: "mounting-hardware",
    shortDescription:
      "Стойка для монтажа дорожных знаков.",
    description:
      "Металлическая опора для установки дорожных знаков. Оцинковка обеспечивает стойкость к коррозии.",
    image: "/main-file/8.png",
    sizes: ["Ø76 мм", "высота по проекту"],
    reflectiveFilms: [],
    material: "Оцинкованная сталь",
    thickness: "3 мм",
    gost: "ГОСТ / ТУ"
  },
  {
    id: "delineator-1",
    code: "ДМ-1",
    name: "Дорожный демпфер",
    category: "traffic-delineators",
    group: "traffic-delineators",
    shortDescription:
      "Направляющий элемент для разделения потоков.",
    description:
      "Гибкий дорожный демпфер с световозвращающими элементами. Применяется для канализирования движения.",
    image: "/main-file/5.png",
    sizes: ["по проекту"],
    reflectiveFilms: ["Световозвращающие элементы"],
    material: "Полиуретан / ПВХ",
    gost: "ТУ производителя"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 6): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const sameGroup = products.filter(
    (p) =>
      p.group === product.group &&
      p.id !== product.id &&
      !sameCategory.some((s) => s.id === p.id)
  );
  return [...sameCategory, ...sameGroup].slice(0, limit);
}

export function getProductSpecRows(product: Product): { label: string; value: string }[] {
  if (product.specifications?.length) return product.specifications;

  const rows: { label: string; value: string }[] = [
    { label: "Стандарт", value: product.gost },
    { label: "Материал", value: product.material }
  ];
  if (product.thickness) {
    rows.push({ label: "Толщина", value: product.thickness });
  }
  if (product.reflectiveFilms.length) {
    rows.push({
      label: "Световозвращающая плёнка",
      value: product.reflectiveFilms.join(" / ")
    });
  }
  rows.push({ label: "Размеры", value: product.sizes.join(" / ") });
  return rows;
}
