import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: string;
  label?: string;
};

const stats: StatItem[] = [
  { value: "ВСЕ ВИДЫ ЗНАКОВ" },
  { value: "ЦЕНА БЕЗ ПОСРЕДНИКОВ" },
  { value: "БЫСТРЫЙ СРОК ИЗГОТОВЛЕНИЯ" },
  { value: "100% СООТВЕТСТВИЕ СТАНДАРТАМ"}
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
    <section ref={sectionRef} className="bg-[#0F0F0F] py-16 lg:py-20">
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
                  idx > 0 ? "lg:border-l lg:border-[#888888]/20" : ""
                ].join(" ")}
              >
                <div className="font-headline text-[clamp(1.3rem,2.9vw,2rem)] leading-tight tracking-[0.02em]">
                  <span className="block text-[#F5C518]">{firstWord}</span>
                  {restText ? (
                    <span className="block text-[#F0EDE6]">{restText}</span>
                  ) : null}
                </div>
                <div className="mt-4 font-mono uppercase text-[#888888] text-xs tracking-[0.05em]">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
