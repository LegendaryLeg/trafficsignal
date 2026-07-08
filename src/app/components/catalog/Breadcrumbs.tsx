import { Link } from "react-router-dom";

type Crumb = {
  label: string;
  to?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Хлебные крошки" className="text-sm font-body text-[#6B7280]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
              {idx > 0 ? <span aria-hidden>/</span> : null}
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-[#C1121F] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-[#1F2937] font-medium" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
