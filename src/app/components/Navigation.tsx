import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const whatsAppMessage = encodeURIComponent(
  "Здравствуйте. Я бы хотел сделать заказ."
);
const whatsAppHref = `https://wa.me/77067052342?text=${whatsAppMessage}`;

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { label: "Дорожные знаки", id: "signs" },
      { label: "Виды Пленки", id: "types" },
      { label: "О нас", id: "why-us" },
      { label: "Каталог", id: "catalog" }
    ],
    []
  );

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navLinks]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={[
        "fixed left-0 top-0 z-50 w-full h-20 bg-white border-b transition-shadow",
        isScrolled
          ? "border-[#E5E7EB] shadow-[0_1px_3px_rgba(31,41,55,0.06)]"
          : "border-[#E5E7EB]"
      ].join(" ")}
    >
      <div className="h-20 max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="select-none flex items-center gap-2 shrink-0"
          aria-label="ДорЗнак"
        >
          <img
            src="/content/logo bg removed (1).png"
            alt=""
            className="logo-on-light h-10 sm:h-11 md:h-12 w-auto max-h-[3rem] object-contain object-left"
            draggable={false}
          />
          <img
            src="/content/logo bg removed (2).png"
            alt=""
            className="logo-on-light h-10 sm:h-11 md:h-12 w-auto max-h-[3rem] object-contain object-left"
            draggable={false}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body font-medium text-[#1F2937]">
          {navLinks.map((l) => (
            <button
              key={l.id}
              type="button"
              className={[
                "text-base transition-colors",
                activeId === l.id
                  ? "text-[#C1121F]"
                  : "hover:text-[#C1121F]"
              ].join(" ")}
              onClick={() => scrollToId(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={whatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] text-white px-6 py-2.5 rounded-md hover:brightness-95 transition"
          >
            <span className="font-body text-sm font-semibold">WhatsApp</span>
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#E5E7EB] hover:border-[#C1121F] transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? (
              <X size={22} color="#1F2937" />
            ) : (
              <Menu size={22} color="#1F2937" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white">
          <div className="max-w-[1440px] mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                className={[
                  "text-left font-body font-medium transition-colors text-base",
                  activeId === l.id
                    ? "text-[#C1121F]"
                    : "text-[#1F2937] hover:text-[#C1121F]"
                ].join(" ")}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToId(l.id);
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
