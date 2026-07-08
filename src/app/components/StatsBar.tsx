import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: string;
  label?: string;
};

const stats: StatItem[] = [
  { value: "Все виды знаков" },
  { value: "Цена без посредников" },
  { value: "Быстрый срок изготовления" },
  { value: "100% соответствие стандартам" }
];

const splitFirstWord = (text: string) => {
  const [firstWord, ...restWords] = text.trim().split(/\s+/);
  return {
    firstWord,
    restText: restWords.join(" ")
  };
};

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
    <section ref={sectionRef} className="bg-white py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-3">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 gap-x-0">
          {stats.map((s, idx) => {
            const { firstWord, restText } = splitFirstWord(s.value);

            return (
              <motion.div
                key={`${s.value}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={[
                  "py-2",
                  "px-4 lg:px-10",
                  idx > 0 ? "lg:border-l lg:border-[#E5E7EB]" : ""
                ].join(" ")}
              >
                <div className="font-headline text-[clamp(1.15rem,2.4vw,1.65rem)] leading-snug tracking-tight">
                  <span className="block text-[#C1121F]">{firstWord}</span>
                  {restText ? (
                    <span className="block text-[#1F2937]">{restText}</span>
                  ) : null}
                </div>
                {s.label ? (
                  <div className="mt-4 font-body text-[#6B7280] text-xs tracking-wide">
                    {s.label}
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
