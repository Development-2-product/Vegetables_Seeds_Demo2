import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink-900/10 bg-paper-100">
      <div className="mx-auto max-w-edge px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className="font-mono uppercase tracking-[0.1em] text-ink-500 transition-colors hover:text-terracotta-500"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-mono uppercase tracking-[0.1em] text-ink-900" aria-current="page">
                    {item.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="h-3 w-3 text-ink-400" />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
