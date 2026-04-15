import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import logoLeft from "../../../content/logo bg removed (1).png";
import logoRight from "../../../content/logo bg removed (2).png";

const whatsAppHref = "https://wa.me/77073718653";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { label: "Дорожные знаки", id: "signs" },
      { label: "Конуса", id: "cones" },
      { label: "Лежачие полицейские", id: "speedbump" },
      { label: "О нас", id: "why-us" }
    ],
    []
  );

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={[
        "fixed left-0 top-0 z-50 w-full h-20 backdrop-blur-[10px] transition-colors",
        isScrolled ? "bg-[rgba(15,15,15,0.95)]" : "bg-[rgba(15,15,15,0.7)]"
      ].join(" ")}
    >
      <div className="h-20 max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        <a
          href={whatsAppHref}
          target="_blank"
          rel="noreferrer"
          className="select-none flex items-center gap-2 shrink-0"
          aria-label="ДорЗнак"
        >
          <img
            src={logoLeft}
            alt=""
            className="h-10 sm:h-11 md:h-12 w-auto max-h-[3rem] object-contain object-left"
            draggable={false}
          />
          <img
            src={logoRight}
            alt=""
            className="h-10 sm:h-11 md:h-12 w-auto max-h-[3rem] object-contain object-left"
            draggable={false}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body font-light text-[#F0EDE6]">
          {navLinks.map((l) => (
            <button
              key={l.id}
              type="button"
              className="text-base hover:text-[#D62B2B] transition-colors"
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
            className="bg-[#25D366] text-[#0F0F0F] px-6 py-2.5 rounded-md hover:brightness-110 transition"
          >
            <span className="font-mono text-sm font-medium">WhatsApp</span>
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#888888]/20 hover:border-[#D62B2B] transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? <X size={22} color="#F0EDE6" /> : <Menu size={22} color="#F0EDE6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#888888]/20 bg-[rgba(15,15,15,0.95)] backdrop-blur-[10px]">
          <div className="max-w-[1440px] mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                className="text-left font-body font-light text-[#F0EDE6] hover:text-[#D62B2B] transition-colors text-base"
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

