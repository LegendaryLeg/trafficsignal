import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { matchesShopFilter, productFilters } from "../../data/categories";
import { getInStockProducts } from "../../data/products";
import type { ShopFilterId } from "../../data/productTypes";
import Breadcrumbs from "../components/catalog/Breadcrumbs";
import Pagination from "../components/catalog/Pagination";
import ProductCard from "../components/catalog/ProductCard";
import StoreAvailabilityBadge from "../components/catalog/StoreAvailabilityBadge";
import StoreBanner from "../components/catalog/StoreBanner";
import VisitStoreCTA from "../components/catalog/VisitStoreCTA";

const PAGE_SIZE = 12;

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "all";
  const queryParam = searchParams.get("q") ?? "";
  const pageParam = Number(searchParams.get("page") ?? "1");

  const [query, setQuery] = useState(queryParam);

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const next = query.trim();
      if (next === queryParam) return;
      const params = new URLSearchParams(searchParams);
      if (next) params.set("q", next);
      else params.delete("q");
      params.delete("page");
      setSearchParams(params, { replace: true });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [query, queryParam, searchParams, setSearchParams]);

  const activeFilter = (
    productFilters.some((f) => f.id === categoryParam) ? categoryParam : "all"
  ) as ShopFilterId;

  const filtered = useMemo(() => {
    const q = queryParam.trim().toLowerCase();
    return getInStockProducts().filter((p) => {
      const matchesCategory = matchesShopFilter(p, activeFilter);
      const matchesQuery =
        !q ||
        p.code.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeFilter, queryParam]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, pageParam || 1), totalPages);
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const setCategory = (id: string) => {
    const params = new URLSearchParams(searchParams);
    if (id === "all") params.delete("category");
    else params.set("category", id);
    params.delete("page");
    setSearchParams(params);
  };

  const setPage = (nextPage: number) => {
    const params = new URLSearchParams(searchParams);
    if (nextPage <= 1) params.delete("page");
    else params.set("page", String(nextPage));
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <section className="pt-28 pb-10 lg:pb-14 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Главная", to: "/" },
              { label: "Продукция" }
            ]}
          />

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-end">
            <div>
              <StoreAvailabilityBadge className="mb-4" />
              <h1 className="font-headline text-[clamp(2rem,4vw,3rem)] tracking-tight text-[#1F2937]">
                Продукция в наличии в магазине
              </h1>
              <p className="mt-4 font-body text-[#6B7280] text-lg leading-relaxed max-w-2xl">
                Каталог средств обеспечения безопасности дорожного движения,
                доступных для покупки в нашем розничном магазине в Алматы.
                Нужно что-то другое? Мы также изготавливаем дорожные знаки и
                оборудование на заказ.
              </p>
            </div>

            <div
              className="hidden lg:block relative h-40 rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#F6F7F9]"
              aria-hidden
            >
              <img
                src="/content/photo_5325799549609645708_x.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <StoreBanner />

      <section className="py-10 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по коду или названию..."
              className="w-full rounded-lg border border-[#E5E7EB] bg-white pl-11 pr-4 py-3.5 font-body text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#C1121F] focus:ring-2 focus:ring-[#C1121F]/15 transition"
              aria-label="Поиск продукции"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {productFilters.map((f) => {
              const active = f.id === activeFilter;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setCategory(f.id)}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-medium border transition",
                    active
                      ? "bg-[#C1121F] border-[#C1121F] text-white"
                      : "bg-white border-[#E5E7EB] text-[#1F2937] hover:border-[#C1121F] hover:text-[#C1121F]"
                  ].join(" ")}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="font-body text-sm text-[#6B7280]">
              Найдено:{" "}
              <span className="font-semibold text-[#1F2937]">
                {filtered.length}
              </span>
            </p>
          </div>

          {pageItems.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-lg border border-[#E5E7EB] bg-[#F6F7F9] px-6 py-16 text-center">
              <p className="font-headline text-xl text-[#1F2937]">
                Ничего не найдено
              </p>
              <p className="mt-2 font-body text-[#6B7280]">
                Измените запрос или выберите другую категорию.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSearchParams({});
                }}
                className="mt-6 inline-flex rounded-md bg-[#C1121F] text-white px-6 py-3 font-semibold hover:bg-[#A10F1A] transition"
              >
                Сбросить фильтры
              </button>
            </div>
          )}

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </section>

      <VisitStoreCTA />
    </div>
  );
}
