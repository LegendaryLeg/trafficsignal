import { motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent
} from "react";

type Category = {
  num: number;
  title: string;
  desc: string;
  tickerImage: string;
  tickerAlt: string;
  /** >1 = faster scroll (shorter loop). Used for categories 2, 4, 6. */
  railSpeedMultiplier?: number;
};

const categories: Category[] = [
  {
    num: 1,
    title: "Предупреждающие",
    desc: "Устанавливаем знаки для предупреждения участников движения. Соответствуют требованиям ГОСТ и обеспечивают видимость в любую погоду.",
    tickerImage: "/2/preduprezh.webp",
    tickerAlt: "Предупреждающие дорожные знаки"
  },
  {
    num: 2,
    title: "Знаки приоритета",
    desc: "Обозначаем приоритеты проезда на перекрестках и участках. Помогаем согласовать решения с требованиями проекта.",
    tickerImage: "/2/priority.webp",
    tickerAlt: "Знаки приоритета",
    railSpeedMultiplier: 1.7
  },
  {
    num: 3,
    title: "Запрещающие",
    desc: "Производим знаки, ограничивающие движение и поведение на дороге. Нанесение стойких светоотражающих материалов гарантирует читаемость.",
    tickerImage: "/2/zapret.webp",
    tickerAlt: "Запрещающие дорожные знаки"
  },
  {
    num: 4,
    title: "Предписывающие",
    desc: "Знаки для направления и соблюдения правил. Изготавливаются точно по размерам и комплектации.",
    tickerImage: "/2/predpisi.webp",
    tickerAlt: "Предписывающие дорожные знаки",
    railSpeedMultiplier: 1.7
  },
  {
    num: 5,
    title: "Информационные",
    desc: "Информируем водителей о правилах, сервисах и маршрутах. Делаем комплекты под нужды организаций и заказчиков.",
    tickerImage: "/2/info.webp",
    tickerAlt: "Информационные дорожные знаки"
  },
  {
    num: 6,
    title: "Знаки сервиса",
    desc: "Знаки сервиса для инфраструктуры и обслуживания. Подбираем типы табличек и обеспечиваем долговечность.",
    tickerImage: "/2/servis.webp",
    tickerAlt: "Знаки сервиса",
    railSpeedMultiplier: 1.7
  }
];

/** Same apparent linear speed for any strip width: duration scales with image segment width. */
const RAIL_SCROLL_PX_PER_SEC = 10;
const RAIL_PR_GAP_PX = 32;

function CategorySignRail({
  src,
  alt,
  speedMultiplier = 1
}: {
  src: string;
  alt: string;
  speedMultiplier?: number;
}) {
  const [durationSec, setDurationSec] = useState(52);

  const onFirstImageLoad = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      requestAnimationFrame(() => {
        const img = e.currentTarget;
        const segmentPx = img.getBoundingClientRect().width + RAIL_PR_GAP_PX;
        const pxPerSec = RAIL_SCROLL_PX_PER_SEC * speedMultiplier;
        const next = Math.max(
          28,
          Math.min(100, segmentPx / pxPerSec)
        );
        setDurationSec(next);
      });
    },
    [speedMultiplier]
  );

  return (
    <div
      className="relative flex-1 min-w-0 min-h-[6.25rem] overflow-hidden rounded-md bg-[#F6F7F9] border border-[#E5E7EB]"
      role="img"
      aria-label={alt}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F6F7F9] via-[#F6F7F9]/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F6F7F9] via-[#F6F7F9]/80 to-transparent"
        aria-hidden
      />
      <motion.div
        className="flex w-max min-h-[6.25rem] items-center py-1.5"
        animate={{ x: [0, "-33.333%"] }}
        transition={{
          duration: durationSec,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {Array.from({ length: 3 }).map((_, idx) => (
          <img
            key={idx}
            src={src}
            alt={idx === 0 ? alt : ""}
            className="h-[5rem] sm:h-[5.5rem] w-auto max-w-none shrink-0 object-contain object-center pr-8 select-none"
            draggable={false}
            onLoad={idx === 0 ? onFirstImageLoad : undefined}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function SignCategories() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="signs"
      ref={sectionRef}
      className="bg-[#F6F7F9] py-20 lg:py-28 scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-headline text-[clamp(1.75rem,3.5vw,2.75rem)] text-center tracking-tight text-[#1F2937]">
          Категории <span className="text-[#C1121F]">знаков</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, idx) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-industrial card-industrial-hover p-8 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex shrink-0 items-center justify-center w-9 h-9 bg-[#C1121F] text-white font-body text-sm font-semibold rounded-sm">
                  {c.num}
                </div>
                <CategorySignRail
                  src={c.tickerImage}
                  alt={c.tickerAlt}
                  speedMultiplier={c.railSpeedMultiplier ?? 1}
                />
              </div>

              <h3 className="mt-6 font-headline text-[1.375rem] text-[#1F2937] leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 font-body font-normal text-[#6B7280] leading-relaxed text-base">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
