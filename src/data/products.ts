import type { Product } from "./productTypes";
import { STOCK_IN, STOCK_OUT } from "./productTypes";

/**
 * Catalog data source.
 * Add a new product by appending an object — cards and detail pages generate automatically.
 */
export const products: Product[] = [
  {
    id: "1.1",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "1.2",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "1.5",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "1.8",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "1.18.2",
    code: "1.18.2",
    name: "Сужение дороги справа",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Предупреждает о сужении проезжей части с правой стороны.",
    description:
      "Дорожный знак «Сужение дороги справа» устанавливают перед участками, где проезжая часть сужается справа. Изготавливается по ГОСТ из оцинкованной стали со световозвращающей плёнкой.",
    image: "/2/1-18-2.jpg",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    pricesBySize: {
      "700 мм": 9500,
      "900 мм": 12000,
      "1200 мм": 22000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "1.18.3",
    code: "1.18.3",
    name: "Сужение дороги слева",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Предупреждает о сужении проезжей части с левой стороны.",
    description:
      "Дорожный знак «Сужение дороги слева» устанавливают перед участками, где проезжая часть сужается слева. Изготавливается по ГОСТ из оцинкованной стали со световозвращающей плёнкой.",
    image: "/2/1-18-3.jpg",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    pricesBySize: {
      "700 мм": 9500,
      "900 мм": 12000,
      "1200 мм": 22000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "1.22",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "1.23",
    code: "1.23",
    name: "Дорожные работы",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Предупреждает о проведении дорожных работ на участке.",
    description:
      "Дорожный знак «Дорожные работы» применяется для обозначения участков ремонта и строительных работ. Изготавливается по ГОСТ со световозвращающим покрытием для видимости днём и ночью.",
    image: "/2/1-23.jpg",
    sizes: ["700 мм", "900 мм", "1200 мм"],
    pricesBySize: {
      "700 мм": 9500,
      "900 мм": 12000,
      "1200 мм": 22000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "1.31.1",
    code: "1.31.1",
    name: "Направление поворота направо",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Указывает направление опасного поворота направо.",
    description:
      "Дорожный знак «Направление поворота» направо применяется для обозначения направления опасного поворота. Изготавливается по ГОСТ из оцинкованной стали со световозвращающей плёнкой.",
    image: "/2/1.31.1.webp",
    sizes: ["500×1160 мм", "500×2250 мм"],
    pricesBySize: {
      "500×1160 мм": 17000,
      "500×2250 мм": 32000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "1.31.2",
    code: "1.31.2",
    name: "Направление поворота налево",
    category: "warning",
    group: "road-signs",
    shortDescription:
      "Указывает направление опасного поворота налево.",
    description:
      "Дорожный знак «Направление поворота» налево применяется для обозначения направления опасного поворота. Изготавливается по ГОСТ из оцинкованной стали со световозвращающей плёнкой.",
    image: "/2/1.31.2.webp",
    sizes: ["500×1160 мм", "500×2250 мм"],
    pricesBySize: {
      "500×1160 мм": 17000,
      "500×2250 мм": 32000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "2.1",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "2.4",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "2.5",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "3.1",
    code: "3.1",
    name: "Въезд запрещён",
    category: "prohibition",
    group: "road-signs",
    shortDescription:
      "Запрещает въезд всех транспортных средств.",
    description:
      "Знак «Въезд запрещён» (кирпич) — один из ключевых запрещающих знаков. Производится с точной геометрией круга и насыщенным цветом покрытия.",
    image: "/2/3-1.png",
    sizes: ["600 мм", "700 мм", "900 мм"],
    pricesBySize: {
      "600 мм": 10000,
      "700 мм": 13600,
      "900 мм": 20000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "3.18.1",
    code: "3.18.1",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "3.24",
    code: "3.24",
    name: "Ограничение максимальной скорости",
    category: "prohibition",
    group: "road-signs",
    shortDescription:
      "Вводит ограничение скорости на участке дороги.",
    description:
      "Знак ограничения скорости изготавливается с любым числовым значением по проекту. Высокая читаемость и долговечность покрытия.",
    image: "/2/3-24.png",
    sizes: ["600 мм", "700 мм", "900 мм"],
    pricesBySize: {
      "600 мм": 10000,
      "700 мм": 13600,
      "900 мм": 20000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "4.1.1",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "4.2.1",
    code: "4.2.1",
    name: "Объезд препятствия справа",
    category: "mandatory",
    group: "road-signs",
    shortDescription:
      "Указывает направление объезда препятствия справа.",
    description:
      "Предписывающий знак для организации безопасного объезда. Изготавливается по ГОСТ в нужном типоразмере.",
    image: "/2/4-2-1.jpg",
    sizes: ["600 мм", "700 мм", "900 мм"],
    pricesBySize: {
      "600 мм": 10000,
      "700 мм": 13600,
      "900 мм": 20000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "4.2.2",
    code: "4.2.2",
    name: "Объезд препятствия слева",
    category: "mandatory",
    group: "road-signs",
    shortDescription:
      "Указывает направление объезда препятствия слева.",
    description:
      "Предписывающий знак «Объезд препятствия слева» применяется для безопасного объезда. Изготавливается по ГОСТ в нужном типоразмере.",
    image: "/2/4-2-2.jpg",
    sizes: ["600 мм", "700 мм", "900 мм"],
    pricesBySize: {
      "600 мм": 10000,
      "700 мм": 13600,
      "900 мм": 20000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "5.19.1",
    code: "5.19.1",
    name: "Тупик",
    category: "information",
    group: "road-signs",
    shortDescription:
      "Обозначает дорогу, не имеющую сквозного проезда.",
    description:
      "Информационный знак «Тупик» указывает, что дорога не имеет сквозного проезда. Изготавливается по ГОСТ со световозвращающей плёнкой.",
    image: "/2/5-19-1.jpg",
    sizes: ["600 мм", "700 мм", "900 мм"],
    pricesBySize: {
      "600 мм": 10000,
      "700 мм": 13600,
      "900 мм": 20000
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "5.32.2",
    code: "5.32.2",
    name: "Направление объезда",
    category: "information",
    group: "road-signs",
    shortDescription:
      "Указывает направление объезда препятствия направо.",
    description:
      "Информационный знак «Направление объезда» (направо) применяется при организации временного или постоянного объезда. Изготавливается по ГОСТ.",
    image: "/2/info.webp",
    sizes: ["350×1050 мм", "350×1350 мм"],
    pricesBySize: {
      "350×1050 мм": 11000,
      "350×1350 мм": 16500
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "5.32.3",
    code: "5.32.3",
    name: "Направление объезда",
    category: "information",
    group: "road-signs",
    shortDescription:
      "Указывает направление объезда препятствия налево.",
    description:
      "Информационный знак «Направление объезда» (налево) применяется при организации временного или постоянного объезда. Изготавливается по ГОСТ.",
    image: "/2/info.webp",
    sizes: ["350×1050 мм", "350×1350 мм"],
    pricesBySize: {
      "350×1050 мм": 11000,
      "350×1350 мм": 16500
    },
    reflectiveFilms: ["Инженерная", "Высокоинтенсивная", "Алмазная"],
    material: "Оцинкованная сталь",
    thickness: "1 мм",
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_IN
  },
  {
    id: "5.16",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "6.1",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "6.3",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "8.1.1",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "8.2.1",
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
    gost: "ГОСТ 32945-2014",
    stockStatus: STOCK_OUT
  },
  {
    id: "mirror-spherical",
    code: "ЗР-СФ",
    name: "Дорожное сферическое зеркало",
    category: "traffic-mirrors",
    group: "traffic-mirrors",
    shortDescription:
      "Обзорное сферическое зеркало для перекрёстков и выездов с ограниченной видимостью.",
    description:
      "Дорожное сферическое зеркало повышает безопасность на участках с ограниченной видимостью. Доступно в диаметрах 80 см и 100 см. Комплектуется кронштейном для монтажа на опору.",
    image: "/2/зеркало.webp",
    sizes: ["80 см", "100 см"],
    pricesBySize: {
      "80 см": 34000,
      "100 см": 42000
    },
    reflectiveFilms: [],
    material: "ABS / акриловое зеркало",
    gost: "ТУ производителя",
    stockStatus: STOCK_IN
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
    gost: "ТУ производителя",
    stockStatus: STOCK_OUT
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
    gost: "ТУ производителя",
    stockStatus: STOCK_OUT
  },
  {
    id: "cone-70",
    code: "КН-70",
    name: "Дорожный конус 70 см",
    category: "traffic-cones",
    group: "traffic-cones",
    shortDescription:
      "Сигнальный конус высотой 70 см для временной организации движения.",
    description:
      "Пластиковый дорожный конус высотой 70 см со световозвращающими элементами. Подходит для дорожных работ, парковок и временного ограждения зон.",
    image: "/2/cone 70cm.webp",
    sizes: ["70 см"],
    price: 8000,
    reflectiveFilms: ["Световозвращающие полосы"],
    material: "Полиэтилен / ПВХ",
    gost: "ТУ производителя",
    stockStatus: STOCK_IN
  },
  {
    id: "cone-90",
    code: "КН-90",
    name: "Дорожный конус 90 см",
    category: "traffic-cones",
    group: "traffic-cones",
    shortDescription:
      "Сигнальный конус высотой 90 см для дорожных работ и ограждений.",
    description:
      "Усиленный дорожный конус высотой 90 см. Используется для временной разметки и ограждения проезжей части.",
    image: "/2/cone 90cm.webp",
    sizes: ["90 см"],
    price: 9500,
    reflectiveFilms: ["Световозвращающие полосы"],
    material: "Полиэтилен / ПВХ",
    gost: "ТУ производителя",
    stockStatus: STOCK_IN
  },
  {
    id: "bump-modular",
    code: "ИН-М",
    name: "Лежачий полицейский",
    category: "speed-bumps",
    group: "speed-bumps",
    shortDescription:
      "Модульная искусственная неровность: основной и боковой элементы.",
    description:
      "Модульный лежачий полицейский из износостойкого материала. Собирается из основных и боковых элементов под нужную ширину проезда. Подходит для дворовых территорий, складов и внутриплощадочных дорог.",
    image: "/2/bump1.webp",
    sizes: [],
    priceOptionsLabel: "Элемент",
    priceOptions: [
      {
        id: "main",
        label: "Основной элемент",
        price: 15500,
        image: "/2/bump1.webp"
      },
      {
        id: "side",
        label: "Боковой элемент",
        price: 5600,
        image: "/2/bump2.webp"
      }
    ],
    reflectiveFilms: ["Световозвращающие элементы"],
    material: "Резина / композит",
    gost: "ТУ производителя",
    stockStatus: STOCK_IN
  },
  {
    id: "strobe-kit",
    code: "СТР-1",
    name: "Стробоскоп с ножкой",
    category: "traffic-delineators",
    group: "traffic-delineators",
    shortDescription:
      "Сигнальный стробоскоп: комплект, стробоскоп отдельно или ножка.",
    description:
      "Сигнальный стробоскоп с ножкой для обозначения опасных участков и временных работ. Доступен комплект целиком либо отдельные части.",
    image: "/2/стробоскоп.webp",
    sizes: [],
    priceOptionsLabel: "Комплектация",
    priceOptions: [
      {
        id: "kit",
        label: "Комплект",
        price: 76500
      },
      {
        id: "strobe",
        label: "Стробоскоп",
        price: 65000
      },
      {
        id: "stand",
        label: "Ножка",
        price: 11500
      }
    ],
    reflectiveFilms: [],
    material: "Металл / пластик",
    gost: "ТУ производителя",
    stockStatus: STOCK_IN
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
    gost: "ТУ производителя",
    stockStatus: STOCK_OUT
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
    gost: "ТУ производителя",
    stockStatus: STOCK_OUT
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
    gost: "ТУ производителя",
    stockStatus: STOCK_OUT
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
    gost: "ТУ производителя",
    stockStatus: STOCK_OUT
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
    gost: "ТУ производителя",
    stockStatus: STOCK_OUT
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
    gost: "ГОСТ / ТУ",
    stockStatus: STOCK_OUT
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
    gost: "ТУ производителя",
    stockStatus: STOCK_OUT
  }
];

export function getProductById(id: string): Product | undefined {
  const exact = products.find((p) => p.id === id);
  if (exact) return exact;

  // Legacy hyphenated IDs (e.g. "1-1" -> "1.1", "4-1-1" -> "4.1.1")
  const dotted = id.replace(/-/g, ".");
  if (dotted !== id) {
    return products.find((p) => p.id === dotted || p.code === dotted);
  }
  return undefined;
}

export function isInStock(product: Product): boolean {
  return product.stockStatus === STOCK_IN;
}

/** Products currently available at the retail store (shown on /products). */
export function getInStockProducts(): Product[] {
  return products.filter(isInStock);
}

export function getRelatedProducts(product: Product, limit = 6): Product[] {
  const pool = getInStockProducts().filter((p) => p.id !== product.id);
  const sameCategory = pool.filter((p) => p.category === product.category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const sameGroup = pool.filter(
    (p) =>
      p.group === product.group &&
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
  if (product.sizes.length) {
    rows.push({ label: "Размеры", value: product.sizes.join(" / ") });
  }

  if (product.price != null) {
    rows.push({
      label: "Цена",
      value: `${product.price.toLocaleString("ru-RU")} ₸`
    });
  }

  if (product.priceOptions?.length) {
    for (const option of product.priceOptions) {
      rows.push({
        label: `Цена (${option.label})`,
        value: `${option.price.toLocaleString("ru-RU")} ₸`
      });
    }
  } else if (product.pricesBySize) {
    for (const size of product.sizes) {
      const price = product.pricesBySize[size];
      if (price != null) {
        rows.push({
          label: `Цена (${size})`,
          value: `${price.toLocaleString("ru-RU")} ₸`
        });
      }
    }
  }

  return rows;
}
