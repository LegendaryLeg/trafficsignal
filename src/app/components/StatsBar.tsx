import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "200+", label: "Видов знаков в наличии" },
  { value: "7", label: "Категорий по ГОСТ" },
  { value: "3–5", label: "Дней срок изготовления" },
  { value: "100%", label: "Соответствие стандартам" }
];

export default function StatsBar() {
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
    <section ref={sectionRef} className="bg-[#0F0F0F] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 gap-x-0">
          {stats.map((s, idx) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={[
                "py-2",
                "px-4 lg:px-10",
                idx > 0 ? "lg:border-l lg:border-[#888888]/20" : ""
              ].join(" ")}
            >
              <div className="font-headline text-[#F5C518] text-[clamp(2.5rem,5vw,4rem)] leading-none">
                {s.value}
              </div>
              <div className="mt-4 font-mono uppercase text-[#888888] text-xs tracking-[0.05em]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

