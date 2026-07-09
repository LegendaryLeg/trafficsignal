import { MapPin } from "lucide-react";
import { storeAddress, storeDirectionsHref } from "../../../lib/store";
import { whatsAppHref } from "../../../lib/contact";

export default function StoreBanner() {
  return (
    <section className="pb-10 lg:pb-12 border-b border-[#E5E7EB]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="rounded-lg border border-[#E5E7EB] bg-[#F6F7F9] p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-md border border-[#E5E7EB] bg-white flex items-center justify-center">
              <MapPin size={20} className="text-[#C1121F]" aria-hidden />
            </div>
            <div>
              <p className="font-body font-semibold text-[#1F2937]">
                В наличии в нашем розничном магазине
              </p>
              <p className="mt-1 font-body text-[#6B7280]">{storeAddress.line1}</p>
              <p className="font-body text-[#6B7280]">{storeAddress.city}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
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
        </div>
      </div>
    </section>
  );
}
