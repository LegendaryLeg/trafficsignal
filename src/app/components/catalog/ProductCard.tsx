import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { categoryLabels } from "../../../data/categories";
import type { Product } from "../../../data/productTypes";
import {
  formatPriceKzt,
  getOptionImage,
  getPriceOptions,
  getStartingPrice,
  hasSelectablePricing
} from "../../../lib/pricing";
import SizePriceSelector from "./SizePriceSelector";
import StoreAvailabilityBadge from "./StoreAvailabilityBadge";

export default function ProductCard({ product }: { product: Product }) {
  const options = useMemo(() => getPriceOptions(product), [product]);
  const [selectedOptionId, setSelectedOptionId] = useState(
    options[0]?.id ?? ""
  );
  const startingPrice = getStartingPrice(product);
  const showSelectablePricing = hasSelectablePricing(product);
  const displayImage =
    getOptionImage(product, selectedOptionId) ?? product.image;

  return (
    <article className="card-industrial card-industrial-hover rounded-lg overflow-hidden flex flex-col h-full">
      <Link
        to={`/products/${product.id}`}
        className="relative block bg-[#F6F7F9] aspect-[4/3] p-6 flex items-center justify-center border-b border-[#E5E7EB]"
      >
        <StoreAvailabilityBadge className="absolute top-3 right-3 z-10" />
        <img
          src={displayImage}
          alt={`${product.code} ${product.name}`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <span className="font-body text-sm font-semibold text-[#C1121F]">
            {product.code}
          </span>
          {product.gost.includes("ГОСТ") ? (
            <span className="shrink-0 inline-flex items-center rounded px-2 py-0.5 text-[11px] font-semibold bg-[#C1121F]/10 text-[#C1121F]">
              ГОСТ
            </span>
          ) : null}
        </div>

        <h3 className="mt-2 font-headline text-lg text-[#1F2937] leading-snug">
          <Link
            to={`/products/${product.id}`}
            className="hover:text-[#C1121F] transition-colors"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 font-body text-sm text-[#6B7280] leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>

        {showSelectablePricing ? (
          <SizePriceSelector
            product={product}
            selectedOptionId={selectedOptionId}
            onOptionChange={setSelectedOptionId}
            compact
          />
        ) : product.price != null ? (
          <div className="mt-3 font-headline text-xl text-[#1F2937]">
            {formatPriceKzt(product.price)}
          </div>
        ) : (
          <>
            {product.sizes.length > 0 ? (
              <div className="mt-3 text-xs font-body text-[#6B7280]">
                <span className="font-medium text-[#1F2937]">Размеры: </span>
                {product.sizes.join(" · ")}
              </div>
            ) : null}
            {startingPrice != null ? (
              <div className="mt-2 font-headline text-xl text-[#1F2937]">
                от {formatPriceKzt(startingPrice)}
              </div>
            ) : null}
          </>
        )}

        <div className="mt-1 text-xs font-body text-[#6B7280]">
          {categoryLabels[product.category]}
        </div>

        <div className="mt-auto pt-5">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex w-full items-center justify-center rounded-md border border-[#C1121F] bg-white px-4 py-2.5 text-sm font-semibold text-[#C1121F] hover:bg-[#C1121F] hover:text-white transition"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}
