import { quoteWhatsAppHref, whatsAppHref } from "../../../lib/contact";

export default function CatalogCTA() {
  return (
    <section className="bg-[#F6F7F9] border-y border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h2 className="font-headline text-[clamp(1.5rem,3vw,2.25rem)] text-[#1F2937] tracking-tight">
          Нужны дорожные знаки для проекта?
        </h2>
        <p className="mt-4 font-body text-[#6B7280] text-base leading-relaxed max-w-2xl mx-auto">
          Изготавливаем продукцию для муниципалитетов, подрядчиков и
          инфраструктурных проектов по всему Казахстану. Рассчитаем стоимость
          по вашему списку позиций.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={quoteWhatsAppHref()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#C1121F] text-white px-8 py-4 font-body font-semibold hover:bg-[#A10F1A] transition"
          >
            Запросить расчёт
          </a>
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#25D366] text-white px-8 py-4 font-body font-semibold hover:brightness-95 transition"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
