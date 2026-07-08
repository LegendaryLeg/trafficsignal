import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const tickerText =
  "Предупреждающие знаки · Запрещающие знаки · Информационные знаки · Знаки приоритета · Знаки сервиса · Знаки особых предписаний · ГОСТ 32945-2014";

export default function ScrollingTicker() {
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
      className="bg-[#F6F7F9] border-y border-[#E5E7EB] py-4 overflow-hidden"
      id="ticker"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="font-body font-medium tracking-wide text-[#6B7280] whitespace-nowrap text-sm">
          <motion.div
            className="flex w-max"
            animate={{ x: [0, "-33.33%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-10 pr-10">
                <span>{tickerText}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
