import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Пагинация"
      className="mt-12 flex items-center justify-center gap-2 flex-wrap"
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E5E7EB] bg-white text-[#1F2937] disabled:opacity-40 hover:border-[#C1121F] transition"
        aria-label="Предыдущая страница"
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          className={[
            "inline-flex h-10 min-w-10 px-3 items-center justify-center rounded-md border text-sm font-semibold transition",
            p === page
              ? "border-[#C1121F] bg-[#C1121F] text-white"
              : "border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#C1121F]"
          ].join(" ")}
          aria-current={p === page ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E5E7EB] bg-white text-[#1F2937] disabled:opacity-40 hover:border-[#C1121F] transition"
        aria-label="Следующая страница"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}
