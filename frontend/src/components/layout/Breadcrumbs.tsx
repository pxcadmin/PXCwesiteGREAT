import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-xs sm:text-sm ${className ?? ""}`}
      data-testid="breadcrumbs"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-[#AEA1EA]">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-[#47d8ff] transition-colors"
            data-testid="breadcrumb-home"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-[#47d8ff]/60" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#47d8ff] transition-colors"
                  data-testid={`breadcrumb-link-${i}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-[#47d8ff] font-semibold"
                  aria-current="page"
                  data-testid={`breadcrumb-current`}
                >
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
