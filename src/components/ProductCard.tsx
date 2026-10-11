import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { Product } from '@/data/catalogue';
import { getCategoryById } from '@/data/catalogue';
import { useEnquiry } from '@/context/EnquiryContext';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const { openModal } = useEnquiry();
  const category = getCategoryById(product.category);

  return (
    <article className="group flex flex-col border border-ink-900/15 bg-paper-50 transition-all hover:border-ink-900/40 hover:shadow-[4px_4px_0_0_rgba(31,29,26,0.08)]">
      <Link
        to={`/products/${product.id}`}
        className="relative block overflow-hidden"
        aria-label={`View ${product.name} details`}
      >
        <div className="aspect-[4/3] overflow-hidden bg-paper-200">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </div>
        {product.featured && (
          <span className="absolute left-0 top-0 bg-mustard-400 px-2.5 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-ink-900">
            Featured
          </span>
        )}
        <span className="glass-label absolute right-3 top-3 flex h-9 w-9 items-center justify-center text-ink-900 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="label-tag-sm text-terracotta-500">{category?.shortName}</span>
          <span className="h-px flex-1 bg-ink-900/10" />
          <span className="label-tag-sm">{product.cropType}</span>
        </div>

        <h3 className="font-serif text-lg font-medium text-ink-900">
          <Link
            to={`/products/${product.id}`}
            className="transition-colors hover:text-terracotta-500"
          >
            {product.name}
          </Link>
        </h3>

        {variant === 'default' && (
          <p className="mt-2 text-sm leading-relaxed text-ink-600 line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-ink-900 transition-colors hover:text-terracotta-500"
          >
            Details
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => openModal(product.name)}
            className="inline-flex items-center gap-1 text-sm font-medium text-terracotta-500 transition-colors hover:text-terracotta-600"
          >
            Request
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
