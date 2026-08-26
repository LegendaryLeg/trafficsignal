import { Download, FileText } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getProductById,
  getProductSpecRows,
  getRelatedProducts
} from "../../data/products";
import type { ShopFilterId } from "../../data/productTypes";
import { quoteWhatsAppHref } from "../../lib/contact";
import {
  formatPriceKzt,
  getOptionImage,
  getPriceOptions,
  hasSelectablePricing
} from "../../lib/pricing";
import Breadcrumbs from "../components/catalog/Breadcrumbs";
import CatalogCTA from "../components/catalog/CatalogCTA";
import ProductCard from "../components/catalog/ProductCard";
import SizePriceSelector from "../components/catalog/SizePriceSelector";
import StoreAvailabilityBlock from "../components/catalog/StoreAvailabilityBlock";

function shopFilterForProduct(group: string): {
  id: ShopFilterId;
  label: string;
} {
  if (group === "road-signs") {
    return { id: "road-signs", label: "Дорожные знаки в наличии" };
  }
  return { id: "equipment", label: "Дорожное оборудование" };
}

export default function ProductDetailPage() {
  const { productId = "" } = useParams();
  const product = useMemo(() => getProductById(productId), [productId]);
  const related = useMemo(
    () => (product ? getRelatedProducts(product, 4) : []),
    [product]
  );
  const priceOptions = useMemo(
    () => (product ? getPriceOptions(product) : []),
    [product]
  );
  const [selectedOptionId, setSelectedOptionId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    setSelectedOptionId(priceOptions[0]?.id ?? "");
  }, [priceOptions, productId]);

  if (!product) {
    return (
      <div className="pt-28 pb-20 max-w-[1440px] mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: "Главная", to: "/" },
            { label: "Продукция", to: "/products" },
            { label: "Не найдено" }
          ]}
        />
        <h1 className="mt-8 font-headline text-3xl text-[#1F2937]">
          Товар не найден
        </h1>
        <p className="mt-3 text-[#6B7280]">
          Проверьте ссылку или вернитесь в каталог.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex rounded-md bg-[#C1121F] text-white px-6 py-3 font-semibold hover:bg-[#A10F1A] transition"
        >
          К каталогу
        </Link>
      </div>
    );
  }

  const specs = getProductSpecRows(product);
  const shopFilter = shopFilterForProduct(product.group);
  const showSelectablePricing = hasSelectablePricing(product);
  const displayImage =
    getOptionImage(product, selectedOptionId) ?? product.image;
  const selectedOptionLabel =
    priceOptions.find((o) => o.id === selectedOptionId)?.label ??
    selectedOptionId;

  return (
    <div className="bg-white">
      <section className="pt-28 pb-12 lg:pb-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Главная", to: "/" },
              { label: "Продукция", to: "/products" },
              {
                label: shopFilter.label,
                to: `/products?category=${shopFilter.id}`
              },
              { label: product.name }
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="rounded-lg border border-[#E5E7EB] bg-[#F6F7F9] p-8 lg:p-12 flex items-center justify-center min-h-[360px]">
              <img
                src={displayImage}
                alt={`${product.code} ${product.name}`}
                className="max-w-full max-h-[420px] object-contain"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-body text-sm font-semibold text-[#C1121F]">
                  {product.code}
                </span>
                <span className="inline-flex items-center rounded px-2.5 py-1 text-xs font-semibold bg-[#C1121F]/10 text-[#C1121F]">
                  {product.gost}
                </span>
              </div>

              <h1 className="mt-3 font-headline text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-tight text-[#1F2937]">
                {product.name}
              </h1>

              <p className="mt-4 font-body text-[#6B7280] text-base leading-relaxed">
                {product.description}
              </p>

              {showSelectablePricing ? (
                <SizePriceSelector
                  product={product}
                  selectedOptionId={selectedOptionId}
                  onOptionChange={setSelectedOptionId}
                />
              ) : product.price != null ? (
                <div className="mt-6 font-headline text-[2rem] leading-none text-[#1F2937]">
                  {formatPriceKzt(product.price)}
                </div>
              ) : null}

              <StoreAvailabilityBlock />

              <dl className="mt-8 space-y-4">
                {!showSelectablePricing && product.sizes.length > 0 ? (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                      Доступные размеры
                    </dt>
                    <dd className="mt-1.5 font-body text-[#1F2937]">
                      {product.sizes.join(" · ")}
                    </dd>
                  </div>
                ) : null}

                {product.reflectiveFilms.length > 0 ? (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                      Световозвращающая плёнка
                    </dt>
                    <dd className="mt-1.5 font-body text-[#1F2937]">
                      {product.reflectiveFilms.join(" · ")}
                    </dd>
                  </div>
                ) : null}

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                    Материал
                  </dt>
                  <dd className="mt-1.5 font-body text-[#1F2937]">
                    {product.material}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-[#6B7280]">
                    Стандарт изготовления
                  </dt>
                  <dd className="mt-1.5 font-body text-[#1F2937]">{product.gost}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={quoteWhatsAppHref(
                    product.code,
                    product.name,
                    selectedOptionLabel || undefined
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#C1121F] text-white px-8 py-4 font-body font-semibold hover:bg-[#A10F1A] transition"
                >
                  Запросить расчёт
                </a>

                {product.pdfUrl ? (
                  <a
                    href={product.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E5E7EB] bg-white text-[#1F2937] px-8 py-4 font-body font-semibold hover:border-[#C1121F] hover:text-[#C1121F] transition"
                  >
                    <Download size={18} />
                    Скачать PDF
                  </a>
                ) : (
                  <a
                    href="/catalog.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E5E7EB] bg-white text-[#1F2937] px-8 py-4 font-body font-semibold hover:border-[#C1121F] hover:text-[#C1121F] transition"
                  >
                    <FileText size={18} />
                    Общий каталог PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F6F7F9] border-y border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-headline text-2xl text-[#1F2937]">
            Технические характеристики
          </h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
            <table className="w-full text-left font-body text-sm">
              <thead>
                <tr className="border-b border-[#E5E7EB] bg-white">
                  <th className="px-5 py-3.5 font-semibold text-[#1F2937] w-[40%]">
                    Параметр
                  </th>
                  <th className="px-5 py-3.5 font-semibold text-[#1F2937]">
                    Значение
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr key={row.label} className="border-b border-[#E5E7EB] last:border-b-0">
                    <td className="px-5 py-3.5 text-[#6B7280]">{row.label}</td>
                    <td className="px-5 py-3.5 text-[#1F2937]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="py-12 lg:py-16">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-headline text-2xl text-[#1F2937]">
                Похожие товары
              </h2>
              <Link
                to={`/products?category=${shopFilter.id}`}
                className="text-sm font-semibold text-[#C1121F] hover:text-[#A10F1A] transition"
              >
                Смотреть категорию →
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CatalogCTA />
    </div>
  );
}
