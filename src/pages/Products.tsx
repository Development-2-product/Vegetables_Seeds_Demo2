import { useMemo, useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, SlidersHorizontal, ArrowRight, PackageSearch } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import {
  products,
  categories,
  uniqueSeasons,
  uniqueGrowingTypes,
  type CategoryId,
} from '@/data/catalogue';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'az', label: 'A–Z' },
  { value: 'category', label: 'Category' },
] as const;

type SortValue = (typeof sortOptions)[number]['value'];

const PAGE_SIZE = 9;

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortValue>('featured');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categoryParam = searchParams.get('category') as CategoryId | null;
  const seasonParam = searchParams.get('season');
  const growingTypeParam = searchParams.get('growing');

  const setCategory = useCallback(
    (cat: CategoryId | null) => {
      const next = new URLSearchParams(searchParams);
      if (cat) next.set('category', cat);
      else next.delete('category');
      setSearchParams(next, { replace: false });
      setVisibleCount(PAGE_SIZE);
    },
    [searchParams, setSearchParams]
  );

  const setSeason = useCallback(
    (season: string | null) => {
      const next = new URLSearchParams(searchParams);
      if (season) next.set('season', season);
      else next.delete('season');
      setSearchParams(next, { replace: false });
      setVisibleCount(PAGE_SIZE);
    },
    [searchParams, setSearchParams]
  );

  const setGrowingType = useCallback(
    (type: string | null) => {
      const next = new URLSearchParams(searchParams);
      if (type) next.set('growing', type);
      else next.delete('growing');
      setSearchParams(next, { replace: false });
      setVisibleCount(PAGE_SIZE);
    },
    [searchParams, setSearchParams]
  );

  const resetFilters = useCallback(() => {
    setSearchParams({}, { replace: false });
    setSearch('');
    setSortBy('featured');
    setVisibleCount(PAGE_SIZE);
  }, [setSearchParams]);

  const hasActiveFilters = !!(categoryParam || seasonParam || growingTypeParam || search);

  const filtered = useMemo(() => {
    let result = [...products];

    if (categoryParam) {
      result = result.filter((p) => p.category === categoryParam);
    }
    if (seasonParam) {
      result = result.filter((p) => p.season === seasonParam);
    }
    if (growingTypeParam) {
      result = result.filter((p) => p.growingType === growingTypeParam);
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter((p) => {
        const haystack = [
          p.name,
          p.category,
          p.cropType,
          p.shortDescription,
          p.longDescription,
          ...p.characteristics,
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(q);
      });
    }

    switch (sortBy) {
      case 'az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        result.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [categoryParam, seasonParam, growingTypeParam, search, sortBy]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Sync category title
  const activeCategory = categoryParam
    ? categories.find((c) => c.id === categoryParam)
    : null;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [categoryParam, seasonParam, growingTypeParam]);

  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title={activeCategory ? activeCategory.name : 'Our Seed Collection'}
        description={
          activeCategory
            ? activeCategory.longDescription
            : 'Browse our full range of quality seed varieties. Search by name, filter by category and growing conditions, and compare practical details for each product.'
        }
      >
        <div className="flex flex-col gap-2 text-right">
          <span className="label-tag">Total Varieties</span>
          <span className="font-serif text-4xl font-light text-ink-900">{products.length}</span>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-edge px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Search + sort bar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Search by name, crop type, characteristics..."
              aria-label="Search products"
              className="w-full border border-ink-900/20 bg-paper-50 py-2.5 pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-cobalt-500 focus:ring-offset-1 focus:ring-offset-paper-50"
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="label-tag whitespace-nowrap" htmlFor="sort-select">Sort</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortValue)}
              className="border border-ink-900/20 bg-paper-50 px-3 py-2.5 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-cobalt-500 focus:ring-offset-1 focus:ring-offset-paper-50"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 border border-ink-900/20 px-3 py-2.5 text-sm text-ink-900 lg:hidden"
              aria-expanded={showMobileFilters}
              aria-controls="filter-panel"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
          {/* Filters sidebar */}
          <aside
            id="filter-panel"
            className={`${showMobileFilters ? 'block' : 'hidden'} lg:block lg:col-span-1`}
          >
            <div className="sticky top-24 border border-ink-900/15 bg-paper-50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="label-tag">Filters</h2>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-xs font-medium text-terracotta-500 transition-colors hover:text-terracotta-600"
                  >
                    Reset all
                  </button>
                )}
              </div>

              {/* Category filter */}
              <div className="mb-5">
                <h3 className="mb-2.5 text-sm font-medium text-ink-900">Category</h3>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setCategory(null)}
                    className={`text-left py-1.5 text-sm transition-colors ${
                      !categoryParam ? 'font-medium text-terracotta-500' : 'text-ink-600 hover:text-ink-900'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`text-left py-1.5 text-sm transition-colors ${
                        categoryParam === cat.id ? 'font-medium text-terracotta-500' : 'text-ink-600 hover:text-ink-900'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Season filter */}
              <div className="mb-5 border-t border-ink-900/10 pt-4">
                <h3 className="mb-2.5 text-sm font-medium text-ink-900">Growing Season</h3>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setSeason(null)}
                    className={`text-left py-1.5 text-sm transition-colors ${
                      !seasonParam ? 'font-medium text-terracotta-500' : 'text-ink-600 hover:text-ink-900'
                    }`}
                  >
                    All Seasons
                  </button>
                  {uniqueSeasons.map((season) => (
                    <button
                      key={season}
                      onClick={() => setSeason(season)}
                      className={`text-left py-1.5 text-sm transition-colors ${
                        seasonParam === season ? 'font-medium text-terracotta-500' : 'text-ink-600 hover:text-ink-900'
                      }`}
                    >
                      {season}
                    </button>
                  ))}
                </div>
              </div>

              {/* Growing type filter */}
              <div className="border-t border-ink-900/10 pt-4">
                <h3 className="mb-2.5 text-sm font-medium text-ink-900">Growing Type</h3>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setGrowingType(null)}
                    className={`text-left py-1.5 text-sm transition-colors ${
                      !growingTypeParam ? 'font-medium text-terracotta-500' : 'text-ink-600 hover:text-ink-900'
                    }`}
                  >
                    All Types
                  </button>
                  {uniqueGrowingTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setGrowingType(type)}
                      className={`text-left py-1.5 text-sm transition-colors ${
                        growingTypeParam === type ? 'font-medium text-terracotta-500' : 'text-ink-600 hover:text-ink-900'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <div className="lg:col-span-3">
            {/* Active filter chips + count */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="label-tag-sm">
                {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
              </span>
              {categoryParam && (
                <FilterChip label={categories.find((c) => c.id === categoryParam)?.name ?? ''} onRemove={() => setCategory(null)} />
              )}
              {seasonParam && (
                <FilterChip label={seasonParam} onRemove={() => setSeason(null)} />
              )}
              {growingTypeParam && (
                <FilterChip label={growingTypeParam} onRemove={() => setGrowingType(null)} />
              )}
              {search && (
                <FilterChip label={`"${search}"`} onRemove={() => setSearch('')} />
              )}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="ml-auto text-xs font-medium text-terracotta-500 transition-colors hover:text-terracotta-600"
                >
                  Reset all
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center border border-ink-900/15 bg-paper-50 py-20 text-center">
                <PackageSearch className="mb-4 h-12 w-12 text-ink-400" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-medium text-ink-900">No products found</h3>
                <p className="mt-2 max-w-sm text-sm text-ink-600">
                  No seed varieties match your current filters. Try adjusting your search or resetting
                  all filters to see the full catalogue.
                </p>
                <button onClick={resetFilters} className="btn-secondary mt-5">
                  <X className="h-4 w-4" />
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {visible.map((product, i) => (
                    <Reveal key={product.id} delay={(i % 3) * 80}>
                      <ProductCard product={product} />
                    </Reveal>
                  ))}
                </div>

                {hasMore && (
                  <div className="mt-8 flex flex-col items-center gap-3 border-t border-ink-900/10 pt-6">
                    <p className="label-tag-sm">
                      Showing {visible.length} of {filtered.length}
                    </p>
                    <button
                      onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                      className="btn-primary"
                    >
                      Load More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-ink-900/20 bg-paper-100 px-2.5 py-1 text-xs text-ink-700">
      {label}
      <button
        onClick={onRemove}
        className="text-ink-400 transition-colors hover:text-terracotta-500"
        aria-label={`Remove filter: ${label}`}
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  );
}
