import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const catalogPdfHref = "/catalog.pdf";

export default function CTABand() {
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
      id="catalog"
      ref={sectionRef}
      className="bg-white border-y border-[#E5E7EB] py-16 lg:py-20 scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center gap-8 flex-col lg:flex-row">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-headline text-[#1F2937] text-center lg:text-left text-[clamp(1.75rem,3.5vw,2.5rem)] leading-snug tracking-tight"
        >
          Каталог дорожных знаков
        </motion.h2>

        <motion.a
          href={catalogPdfHref}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="bg-[#C1121F] text-white px-12 py-5 rounded-md hover:bg-[#A10F1A] transition font-body font-semibold text-center shrink-0"
        >
          Открыть каталог (PDF)
        </motion.a>
      </div>
    </section>
  );
}
