import { storeAvailabilityLabel } from "../../../lib/store";

export default function StoreAvailabilityBadge({
  className = ""
}: {
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex items-center rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        "bg-[#C1121F]/10 text-[#C1121F]",
        className
      ].join(" ")}
    >
      {storeAvailabilityLabel}
    </span>
  );
}
