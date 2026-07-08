import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { whatsAppHref } from "../../lib/contact";

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

  return (
    <section ref={sectionRef} className="min-h-screen pt-28 pb-16 lg:pb-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center rounded-sm bg-[#C1121F] px-4 py-1.5 font-body text-sm font-medium tracking-wide text-white">
              ГОСТ 32945-2014 · Казахстан
            </div>

            <h1 className="font-headline text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.1] tracking-tight text-[#1F2937]">
              Дорожные знаки
              <br />
              для дорог
              <br />
              Казахстана
            </h1>

            <p className="font-body font-normal text-[#6B7280] text-lg leading-[1.7] max-w-[44rem]">
              Производство дорожных знаков по стандартам ГОСТ. Полное
              соответствие требованиям, быстрые сроки изготовления и доставка
              по всему Казахстану.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-md hover:brightness-95 transition font-body font-semibold text-center"
              >
                Написать в WhatsApp
              </a>

              <Link
                to="/products"
                className="border border-[#C1121F] bg-white text-[#C1121F] px-8 py-4 rounded-md hover:bg-[#C1121F] hover:text-white transition font-body font-semibold text-center"
              >
                Смотреть продукцию
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative h-full min-h-[420px] flex items-center justify-center rounded-lg bg-[#F6F7F9] border border-[#E5E7EB]">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <motion.img
                  src="/main-file/1.webp"
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
                      fill="#C1121F"
                      className="font-body text-[26px] tracking-[0.22em]"
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
