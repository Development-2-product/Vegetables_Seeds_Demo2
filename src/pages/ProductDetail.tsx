import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Sprout,
  Calendar,
  Sun,
  Droplets,
  Ruler,
  Timer,
  FlaskConical,
  Package,
  CheckCircle2,
} from 'lucide-react';
import {
  getProductById,
  getCategoryById,
  getRelatedProducts,
} from '@/data/catalogue';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { useEnquiry } from '@/context/EnquiryContext';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const { openModal } = useEnquiry();

  if (!product) {
    return (
      <>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: 'Not Found' }]} />
        <div className="mx-auto flex max-w-edge flex-col items-center justify-center px-4 py-24 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center bg-paper-100">
            <Sprout className="h-10 w-10 text-ink-400" strokeWidth={1.5} />
          </div>
          <p className="label-tag mb-2 text-terracotta-500">404</p>
          <h1 className="editorial-h text-headline text-ink-900">Product Not Found</h1>
          <p className="mt-3 max-w-md text-sm text-ink-600">
            The seed variety you're looking for isn't available in our catalogue. It may have been
            removed or the link might be incorrect.
          </p>
          <Link to="/products" className="btn-primary mt-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </>
    );
  }

  const category = getCategoryById(product.category);
  const related = getRelatedProducts(product.id, 3);

  const growingInfoItems = [
    { icon: Calendar, label: 'Sowing', value: product.growingInfo.sowing },
    { icon: Ruler, label: 'Spacing', value: product.growingInfo.spacing },
    { icon: FlaskConical, label: 'Germination', value: product.growingInfo.germination },
    { icon: Timer, label: 'Maturity', value: product.growingInfo.maturity },
    { icon: Droplets, label: 'Watering', value: product.growingInfo.watering },
    { icon: Sun, label: 'Sunlight', value: product.growingInfo.sunlight },
  ];

  const productInfoItems = [
    { label: 'Category', value: category?.name ?? '—' },
    { label: 'Crop Type', value: product.cropType },
    { label: 'Growing Season', value: product.season },
    { label: 'Suitable Conditions', value: product.suitableConditions },
    { label: 'Seed Type', value: product.seedType },
    { label: 'Growing Type', value: product.growingType },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: product.name },
        ]}
      />

      {/* Hero section */}
      <section className="border-b border-ink-900/15 bg-paper-100">
        <div className="mx-auto max-w-edge px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Image */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-ink-900/15">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/3] w-full object-cover"
                />
                {product.featured && (
                  <span className="absolute left-0 top-0 bg-mustard-400 px-3 py-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-ink-900">
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col lg:col-span-6 lg:py-4">
              <div className="mb-3 flex items-center gap-2">
                <Link
                  to={`/products?category=${product.category}`}
                  className="label-tag text-terracotta-500 transition-colors hover:text-terracotta-600"
                >
                  {category?.name}
                </Link>
                <span className="h-px flex-1 bg-ink-900/10" />
                <span className="label-tag">{product.cropType}</span>
              </div>

              <h1 className="editorial-h text-headline text-ink-900">{product.name}</h1>

              <p className="mt-4 text-base leading-relaxed text-ink-600">
                {product.shortDescription}
              </p>

              {/* Quick traits */}
              <div className="mt-5 flex flex-wrap gap-2">
                {product.characteristics.slice(0, 4).map((trait) => (
                  <span
                    key={trait}
                    className="inline-flex items-center gap-1 border border-ink-900/15 bg-paper-50 px-2.5 py-1 text-xs text-ink-700"
                  >
                    <CheckCircle2 className="h-3 w-3 text-leaf-500" />
                    {trait}
                  </span>
                ))}
              </div>

              {/* Quick facts grid */}
              <div className="mt-6 grid grid-cols-2 gap-px border border-ink-900/10 bg-ink-900/10">
                <div className="bg-paper-50 p-3">
                  <p className="label-tag-sm">Season</p>
                  <p className="mt-1 text-sm font-medium text-ink-900">{product.season}</p>
                </div>
                <div className="bg-paper-50 p-3">
                  <p className="label-tag-sm">Seed Type</p>
                  <p className="mt-1 text-sm font-medium text-ink-900">{product.seedType}</p>
                </div>
                <div className="bg-paper-50 p-3">
                  <p className="label-tag-sm">Growing Type</p>
                  <p className="mt-1 text-sm font-medium text-ink-900">{product.growingType}</p>
                </div>
                <div className="bg-paper-50 p-3">
                  <p className="label-tag-sm">Maturity</p>
                  <p className="mt-1 text-sm font-medium text-ink-900">{product.growingInfo.maturity}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => openModal(product.name)} className="btn-primary">
                  Request {product.name}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <Link to="/products" className="btn-secondary">
                  <ArrowLeft className="h-4 w-4" />
                  All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information + Growing Information */}
      <section className="bg-paper-50">
        <div className="mx-auto max-w-edge px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Product Information */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label-tag mb-3 text-terracotta-500">Product Information</p>
                <h2 className="editorial-h text-3xl font-light text-ink-900">
                  About this <span className="italic">variety</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  {product.longDescription}
                </p>

                <div className="mt-6">
                  <dl>
                    {productInfoItems.map((item) => (
                      <div key={item.label} className="data-row">
                        <dt className="data-label">{item.label}</dt>
                        <dd className="data-value">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Available formats */}
                <div className="mt-6 border-t border-ink-900/10 pt-4">
                  <p className="label-tag mb-3 flex items-center gap-2">
                    <Package className="h-3.5 w-3.5" />
                    Available Formats
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.availableFormats.map((fmt) => (
                      <span
                        key={fmt}
                        className="border border-ink-900/20 bg-paper-100 px-3 py-1.5 text-sm text-ink-800"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Growing Information */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <p className="label-tag mb-3 text-terracotta-500">Growing Information</p>
                <h2 className="editorial-h text-3xl font-light text-ink-900">
                  Cultivation <span className="italic">details</span>
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-px border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
                  {growingInfoItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-3 bg-paper-50 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-ink-900 text-paper-50">
                        <item.icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="label-tag-sm">{item.label}</p>
                        <p className="mt-0.5 text-sm font-medium text-ink-900">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Characteristics */}
                <div className="mt-6">
                  <p className="label-tag mb-3">Characteristics</p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {product.characteristics.map((char) => (
                      <li key={char} className="flex items-center gap-2 text-sm text-ink-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-leaf-400/15">
                          <CheckCircle2 className="h-3.5 w-3.5 text-leaf-500" />
                        </span>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final enquiry CTA */}
      <section className="bg-terracotta-500">
        <div className="mx-auto max-w-edge px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-paper-50/60">
                Interested in {product.name}?
              </p>
              <h2 className="mt-2 font-serif text-2xl font-light leading-tight text-paper-50 sm:text-3xl">
                Send us your requirement
              </h2>
              <p className="mt-2 max-w-md text-sm text-paper-50/80">
                Tell us your required quantity and location. We'll get back to you with availability
                and details.
              </p>
            </div>
            <button
              onClick={() => openModal(product.name)}
              className="inline-flex items-center justify-center gap-2 bg-ink-900 px-6 py-3.5 text-sm font-medium text-paper-50 transition-all hover:bg-paper-50 hover:text-ink-900"
            >
              Enquire About {product.name}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-ink-900/15 bg-paper-100">
          <div className="mx-auto max-w-edge px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="label-tag mb-2 text-terracotta-500">Related Varieties</p>
                <h2 className="editorial-h text-2xl font-light text-ink-900 sm:text-3xl">
                  More from {category?.shortName}
                </h2>
              </div>
              <Link
                to={`/products?category=${product.category}`}
                className="hidden items-center gap-1 text-sm font-medium text-ink-900 transition-colors hover:text-terracotta-500 sm:inline-flex"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
