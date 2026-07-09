import { storeDirectionsHref } from "../../../lib/store";
import { whatsAppHref } from "../../../lib/contact";

export default function VisitStoreCTA() {
  return (
    <section className="bg-[#F6F7F9] border-y border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h2 className="font-headline text-[clamp(1.5rem,3vw,2.25rem)] text-[#1F2937] tracking-tight">
          Посетите наш магазин
        </h2>
        <p className="mt-4 font-body text-[#6B7280] text-base leading-relaxed max-w-2xl mx-auto">
          Посмотрите продукцию вживую и получите консультацию от нашей команды.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#25D366] text-white px-8 py-4 font-body font-semibold hover:brightness-95 transition"
          >
            Написать в WhatsApp
          </a>
          <a
            href={storeDirectionsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[#C1121F] bg-white text-[#C1121F] px-8 py-4 font-body font-semibold hover:bg-[#C1121F] hover:text-white transition"
          >
            Маршрут
          </a>
        </div>
      </div>
    </section>
  );
}
