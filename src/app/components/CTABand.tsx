import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const whatsAppHref = "https://wa.me/77001234567";

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
    <section ref={sectionRef} className="bg-[#D62B2B] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center gap-6 flex-col lg:flex-row">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-headline text-[#F0EDE6] text-center lg:text-left text-[clamp(2rem,5vw,3.5rem)] leading-none"
        >
          ГОТОВЫ СДЕЛАТЬ ЗАКАЗ?
        </motion.h2>

        <motion.a
          href={whatsAppHref}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="bg-[#0F0F0F] text-[#F0EDE6] px-12 py-5 rounded-md hover:bg-[#1A1A1A] transition font-body font-medium text-center"
        >
          Написать в WhatsApp
        </motion.a>
      </div>
    </section>
  );
}

