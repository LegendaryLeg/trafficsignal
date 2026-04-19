import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const whatsAppMessage = encodeURIComponent(
  "Здравствуйте. Я бы хотел сделать заказ."
);
const whatsAppHref = `https://wa.me/77073718653?text=${whatsAppMessage}`;

const tiers = [
  {
    key: "standard",
    orderDesktop: 1,
    orderMobile: 2,
    title: "Высокоинтенсивная",
    subtitle: undefined,
    price: "от 8 200 ₸",
    note: "Малые знаки до 600мм",
    features: [
      "Оснава из оцинкованной стали",
      "Двойная отбортовка",
      "Типоразмеры I–III",
      "Средняя степень светоотражения",
      "Доставка по всему Казахстану"
    ],
    buttonVariant: "whatsapp" as const,
    badge: undefined
  },
  {
    key: "pro",
    orderDesktop: 2,
    orderMobile: 1,
    title: "Инженерная",
    subtitle: "Популярная",
    price: "от 7 600 ₸",
    note: "Средние знаки 700–900мм",
    features: [
      "Основа из оцинкованной стали",
      "Двойная отбортовка",
      "Типоразмеры I–III",
      "Быстрый срок изготовления",
      "Хорошая степень светоотражения",
      "Доставка по всему Казахстану"
    ],
    buttonVariant: "dark" as const,
    badge: "ПОПУЛЯРНЫЙ"
  },
  {
    key: "project",
    orderDesktop: 3,
    orderMobile: 3,
    title: "Алмазная",
    subtitle: undefined,
    price: "от 9 600 ₸",
    note: "Крупные и нестандартные",
    features: [
      "Основа из оцинкованной стали",
      "Двойная отбортовка",
      "Типоразмеры I–III",
      "Наивысшая степень светоотражения",
      "Доставка по всему Казахстану"
    ],
    buttonVariant: "whatsapp" as const,
    badge: undefined
  }
] as const;

export default function Pricing() {
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
      id="types"
      className="bg-[#1A1A1A] py-20 lg:py-32 scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-headline text-center text-[#F0EDE6] text-[2.75rem] lg:text-[3.25rem]">
          ТИП СВЕТОВОЗВРАЩАЮЩЕЙ ПЛЕНКИ
        </h2>

        <div className="mt-12 flex flex-col lg:flex-row gap-6">
          {tiers.map((t, idx) => {
            const isFeatured = t.key === "pro";
            const orderClass =
              t.key === "standard"
                ? "order-2 lg:order-1"
                : t.key === "pro"
                  ? "order-1 lg:order-2"
                  : "order-3 lg:order-3";
            return (
              <motion.article
                key={t.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={[
                  orderClass,
                  "flex-1 rounded-lg p-8 relative border border-[#888888]/10",
                  isFeatured ? "bg-[#D62B2B] md:scale-105 transition-transform" : "bg-[#0F0F0F]"
                ].join(" ")}
              >
                {isFeatured && t.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#F5C518] text-[#0F0F0F] font-mono text-xs px-4 py-1 rounded-md">
                      {t.badge}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <div className="font-headline text-[2rem] text-[#F0EDE6]">
                    {t.title}
                  </div>
                  {t.subtitle && (
                    <div className="font-mono text-xs text-[#0F0F0F]/80 mt-1">
                      {t.subtitle}
                    </div>
                  )}
                </div>

                <div className={isFeatured ? "text-[#0F0F0F]" : "text-[#F0EDE6]"}>
                  <div className="mt-4 font-headline text-[2.6rem] leading-none">
                    {t.price}
                  </div>
                  <div
                    className={[
                      "mt-3 font-body font-light text-base",
                      isFeatured ? "text-[#0F0F0F]/80" : "text-[#888888]"
                    ].join(" ")}
                  >
                    {t.note}
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={18}
                        color={isFeatured ? "#0F0F0F" : "#25D366"}
                        className="mt-0.5"
                      />
                      <span
                        className={[
                          "font-body font-light text-base leading-relaxed",
                          isFeatured ? "text-[#0F0F0F]" : "text-[#F0EDE6]"
                        ].join(" ")}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-xs text-[#888888]">
                  Цены являются ориентировочными и могут зависеть от проекта и
                  типоразмеров.
                </div>

                <div className="mt-8">
                  {t.buttonVariant === "whatsapp" ? (
                    <a
                      href={whatsAppHref}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full text-center bg-[#25D366] text-[#0F0F0F] px-8 py-4 rounded-md hover:brightness-110 transition font-body font-medium"
                    >
                      Написать в WhatsApp
                    </a>
                  ) : (
                    <a
                      href={whatsAppHref}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full text-center bg-[#0F0F0F] text-[#F0EDE6] px-8 py-4 rounded-md hover:bg-[#1A1A1A] transition font-body font-medium"
                    >
                      Оставить заявку
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
