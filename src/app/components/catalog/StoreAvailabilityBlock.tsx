import { Check, MapPin } from "lucide-react";
import { storeAddress, storeDirectionsHref } from "../../../lib/store";
import { whatsAppHref } from "../../../lib/contact";

export default function StoreAvailabilityBlock() {
  return (
    <div className="mt-8 rounded-lg border border-[#E5E7EB] bg-[#F6F7F9] p-5 lg:p-6">
      <h2 className="font-headline text-base text-[#1F2937]">
        Наличие в магазине
      </h2>

      <ul className="mt-4 space-y-2 font-body text-sm text-[#1F2937]">
        <li className="flex items-start gap-2">
          <Check size={16} className="text-[#C1121F] mt-0.5 shrink-0" aria-hidden />
          <span>В наличии в розничном магазине в Алматы</span>
        </li>
        <li className="flex items-start gap-2">
          <MapPin size={16} className="text-[#C1121F] mt-0.5 shrink-0" aria-hidden />
          <span>
            {storeAddress.line1}, {storeAddress.city}
          </span>
        </li>
      </ul>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <a
          href={storeDirectionsHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-[#C1121F] bg-white text-[#C1121F] px-6 py-3 font-body font-semibold hover:bg-[#C1121F] hover:text-white transition"
        >
          Маршрут
        </a>
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-[#25D366] text-white px-6 py-3 font-body font-semibold hover:brightness-95 transition"
        >
          WhatsApp
        </a>
      </div>

      <p className="mt-5 font-body text-sm text-[#6B7280] leading-relaxed">
        Нужна большая партия или изделие по индивидуальному заказу? Свяжитесь с
        нами — мы изготавливаем дорожные знаки и оборудование на заказ.
      </p>
    </div>
  );
}
