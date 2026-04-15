import { Fuel, Info, Navigation, Signpost, AlertTriangle, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    num: 1,
    title: "Предупреждающие",
    desc: "Устанавливаем знаки для предупреждения участников движения. Соответствуют требованиям ГОСТ и обеспечивают видимость в любую погоду.",
    Icon: AlertTriangle,
    iconColor: "#F5C518"
  },
  {
    num: 2,
    title: "Запрещающие",
    desc: "Производим знаки, ограничивающие движение и поведение на дороге. Нанесение стойких светоотражающих материалов гарантирует читаемость.",
    Icon: XCircle,
    iconColor: "#D62B2B"
  },
  {
    num: 3,
    title: "Предписывающие",
    desc: "Знаки для направления и соблюдения правил. Изготавливаются точно по размерам и комплектации.",
    Icon: Navigation,
    iconColor: "#25D366"
  },
  {
    num: 4,
    title: "Знаки приоритета",
    desc: "Обозначаем приоритеты проезда на перекрестках и участках. Помогаем согласовать решения с требованиями проекта.",
    Icon: Signpost,
    iconColor: "#F0EDE6"
  },
  {
    num: 5,
    title: "Информационные",
    desc: "Информируем водителей о правилах, сервисах и маршрутах. Делаем комплекты под нужды организаций и заказчиков.",
    Icon: Info,
    iconColor: "#25D366"
  },
  {
    num: 6,
    title: "Знаки сервиса",
    desc: "Знаки сервиса для инфраструктуры и обслуживания. Подбираем типы табличек и обеспечиваем долговечность.",
    Icon: Fuel,
    iconColor: "#F5C518"
  }
] as const;

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
      className="bg-[#0F0F0F] py-20 lg:py-32 scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-headline text-[clamp(2.5rem,5vw,4rem)] text-center tracking-[0.02em]">
          <span className="text-[#F0EDE6]">КАТЕГОРИИ </span>
          <span className="text-[#D62B2B]">ЗНАКОВ</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, idx) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#1A1A1A] p-8 rounded-lg border-b-4 border-transparent hover:border-b-[#D62B2B] transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="inline-flex items-center justify-center w-9 h-9 bg-[#D62B2B] text-white font-mono text-sm rounded-sm">
                  {c.num}
                </div>
                <div className="mt-0.5">
                  <c.Icon size={48} color={c.iconColor} />
                </div>
              </div>

              <h3 className="mt-6 font-headline text-[1.75rem] text-[#F0EDE6] leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 font-body font-light text-[#888888] leading-relaxed text-base">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

