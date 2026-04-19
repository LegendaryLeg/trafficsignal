import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const whatsAppMessage = encodeURIComponent(
  "Здравствуйте. Я бы хотел сделать заказ."
);
const whatsAppHref = `https://wa.me/77073718653?text=${whatsAppMessage}`;

export default function Hero() {
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

  const scrollToCatalog = () => {
    const el = document.getElementById("signs");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="min-h-screen pt-20 bg-[#0F0F0F]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center rounded-sm bg-[#D62B2B] px-4 py-1.5 font-mono text-sm tracking-[0.1em]">
              ГОСТ 32945-2014 · Казахстан
            </div>

            <h1 className="font-headline text-[clamp(3rem,8vw,5.5rem)] leading-none tracking-[0.02em] text-[#F0EDE6]">
              ДОРОЖНЫЕ ЗНАКИ
              <br />
              ДЛЯ ДОРОГ
              <br />
              КАЗАХСТАНА
            </h1>

            <p className="font-body font-light text-[#888888] text-lg leading-[1.7] max-w-[44rem]">
              Производство дорожных знаков по стандартам ГОСТ. Полное
              соответствие требованиям, быстрые сроки изготовления и доставка
              по всему Казахстану.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-[#0F0F0F] px-8 py-4 rounded-md hover:brightness-110 transition font-body font-medium text-center"
              >
                Написать в WhatsApp
              </a>

              <button
                type="button"
                onClick={scrollToCatalog}
                className="border border-[#F0EDE6]/20 text-[#F0EDE6] px-8 py-4 rounded-md hover:border-[#D62B2B] hover:text-[#D62B2B] transition font-body font-medium"
              >
                Смотреть каталог ↓
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div
              className="relative h-full min-h-[420px] flex items-center justify-center rounded-none"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, rgba(214, 43, 43, 0.05), rgba(214, 43, 43, 0.05) 20px, rgba(214, 43, 43, 0.15) 20px, rgba(214, 43, 43, 0.15) 40px), radial-gradient(circle, rgba(214, 43, 43, 0.2), rgba(15, 15, 15, 0.9))`,
              }}
            >
              <div className="relative w-80 h-80 flex items-center justify-center">
                <motion.img
                  src="/main-file/1.png"
                  alt="ГОСТ сертифицировано"
                  className="w-[280px] h-[280px] object-contain"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg
                    viewBox="0 0 256 256"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="gost-ring-path"
                        d="M 128,128 m -112,0 a 112,112 0 1,1 224,0 a 112,112 0 1,1 -224,0"
                      />
                    </defs>
                    <text
                      fill="#D62B2B"
                      className="font-mono text-[26px] tracking-[0.22em]"
                    >
                      <textPath href="#gost-ring-path">
                        • ГОСТ СЕРТИФИЦИРОВАНО •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
