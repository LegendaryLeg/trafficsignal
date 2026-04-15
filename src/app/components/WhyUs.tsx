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
      className="bg-[#0F0F0F] py-20 lg:py-32 scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-headline text-[clamp(2.5rem,5vw,4rem)] text-center tracking-[0.02em]">
          <span className="text-[#F0EDE6]">ПОЧЕМУ </span>
          <span className="text-[#D62B2B]">МЫ</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, idx) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-transparent hover:border-[#D62B2B]/50 transition-colors"
            >
              <div className="w-16 h-16 border-2 border-[#D62B2B] flex items-center justify-center">
                <f.Icon size={28} color="#D62B2B" />
              </div>

              <h3 className="mt-6 font-headline text-[1.75rem] text-[#F0EDE6]">
                {f.title}
              </h3>
              <p className="mt-3 font-body font-light text-[#888888] leading-relaxed">
                {f.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

