import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const whatsAppMessage = encodeURIComponent(
  "Здравствуйте. Я бы хотел сделать заказ."
);
const whatsAppHref = `https://wa.me/77073718653?text=${whatsAppMessage}`;

export default function Footer() {
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
    <footer ref={sectionRef} className="bg-[#1A1A1A] py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto px-6"
      >
        <div className="flex items-start justify-between gap-10 flex-col md:flex-row">
          <div>
            <a
              href={whatsAppHref}
              target="_blank"
              rel="noreferrer"
              className="select-none inline-block"
              aria-label="Логотип"
            >
              <img
                src="/content/logo bg removed (2).png"
                alt=""
                className="h-16 sm:h-20 md:h-24 w-auto max-h-28 object-contain object-left"
                draggable={false}
              />
            </a>
          </div>

          <div className="text-right w-full md:w-auto">
            <div className="font-body font-medium text-[#F0EDE6] text-base">
              Алматы, Казахстан
            </div>
            <div className="mt-3">
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[1.125rem] text-[#25D366] hover:brightness-110 transition"
              >
                +7 707 371 86 53
              </a>
            </div>
            <div className="mt-4 font-body font-light text-[#888888] text-sm">
              © 2026 TrafficSignal. Все права защищены.
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
