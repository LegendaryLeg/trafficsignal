import {
  formatPriceKzt,
  getOptionsLabel,
  getPriceForOption,
  getPriceOptions,
  hasSelectablePricing
} from "../../../lib/pricing";
import type { Product } from "../../../data/productTypes";

type Props = {
  product: Product;
  selectedOptionId: string;
  onOptionChange: (optionId: string) => void;
  /** Compact layout for product cards */
  compact?: boolean;
};

export default function SizePriceSelector({
  product,
  selectedOptionId,
  onOptionChange,
  compact = false
}: Props) {
  if (!hasSelectablePricing(product)) return null;

  const options = getPriceOptions(product);
  const price = getPriceForOption(product, selectedOptionId);
  const label = getOptionsLabel(product);
  const isSizeLike = !product.priceOptions?.length;

  return (
    <div className={compact ? "mt-3" : "mt-6"}>
      <div
        className={[
          "font-body text-[#6B7280]",
          compact
            ? "text-xs font-medium"
            : "text-xs font-semibold uppercase tracking-wide"
        ].join(" ")}
      >
        {label}
      </div>

      <div
        className={["flex flex-wrap gap-2", compact ? "mt-2" : "mt-3"].join(
          " "
        )}
      >
        {options.map((option) => {
          const active = option.id === selectedOptionId;
          return (
            <button
              key={option.id}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onOptionChange(option.id);
              }}
              className={[
                "rounded-md border font-body font-medium transition",
                compact ? "px-2.5 py-1.5 text-xs" : "px-4 py-2.5 text-sm",
                active
                  ? "border-[#C1121F] bg-[#C1121F] text-white"
                  : "border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#C1121F] hover:text-[#C1121F]"
              ].join(" ")}
              aria-pressed={active}
            >
              {isSizeLike && option.label.endsWith(" мм") ? (
                <>
                  {option.label.replace(/ мм$/, "")}
                  <span className="opacity-70"> мм</span>
                </>
              ) : (
                option.label
              )}
            </button>
          );
        })}
      </div>

      {price != null ? (
        <div
          className={[
            "font-headline text-[#1F2937]",
            compact ? "mt-3 text-xl" : "mt-4 text-[2rem] leading-none"
          ].join(" ")}
        >
          {formatPriceKzt(price)}
        </div>
      ) : null}
    </div>
  );
}
