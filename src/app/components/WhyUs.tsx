import { Award, Package, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "ГОСТ соответствие",
    desc: "Производим дорожные знаки в строгом соответствии с ГОСТ. Контролируем качество на каждом этапе производства.",
    Icon: Award
  },
  {
    title: "Быстрое производство",
    desc: "Собственные мощности позволяют изготавливать заказ в срок 3–5 дней. Мы быстро согласуем макеты и приступаем к выпуску.",
    Icon: Zap
  },
  {
    title: "Качественные материалы",
    desc: "Используем стойкие материалы и надежные комплектующие. Это обеспечивает долговечность и стабильную светоотражающую поверхность.",
    Icon: Shield
  },
  {
    title: "Любые объёмы",
    desc: "Работаем с частными заказчиками и организациями любого масштаба. Подберем оптимальную партию и сроки под ваш проект.",
    Icon: Package
  }
] as const;

export default function WhyUs() {
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
      ref={sectionRef}
      id="why-us"
      className="bg-[#F6F7F9] py-20 lg:py-28 scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-headline text-[clamp(1.75rem,3.5vw,2.75rem)] text-center tracking-tight text-[#1F2937]">
          Почему <span className="text-[#C1121F]">мы</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, idx) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card-industrial card-industrial-hover p-8 rounded-lg"
            >
              <div className="w-14 h-14 border border-[#C1121F] rounded-md flex items-center justify-center bg-white">
                <f.Icon size={26} color="#C1121F" />
              </div>

              <h3 className="mt-6 font-headline text-[1.375rem] text-[#1F2937]">
                {f.title}
              </h3>
              <p className="mt-3 font-body font-normal text-[#6B7280] leading-relaxed">
                {f.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
