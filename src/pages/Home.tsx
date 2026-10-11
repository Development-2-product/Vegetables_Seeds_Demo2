import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  MapPin,
  Mail,
  Layers,
  Search,
  Send,
  Carrot,
  Apple,
  Leaf,
  Flower2,
  Wheat,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useEnquiry } from '@/context/EnquiryContext';
import {
  products,
  categories,
  getFeaturedProducts,
  getCategoryProductCount,
  type CategoryId,
} from '@/data/catalogue';

const categoryIcons: Record<CategoryId, typeof Carrot> = {
  'vegetable-seeds': Carrot,
  'fruit-seeds': Apple,
  'herb-seeds': Leaf,
  'flower-seeds': Flower2,
  'specialty-seeds': Wheat,
};

const benefits = [
  {
    icon: Layers,
    title: 'Browse by Crop Type',
    description:
      'Filter our catalogue by vegetables, fruits, herbs, flowers, and specialty seeds to find exactly what you need.',
  },
  {
    icon: Search,
    title: 'Compare Practical Growing Details',
    description:
      'Access sowing seasons, spacing, germination times, maturity, watering, and sunlight requirements for every variety.',
  },
  {
    icon: Send,
    title: 'Send an Enquiry',
    description:
      'Use our product enquiry form to request specific varieties with your requirements — delivered straight to our team.',
  },
];

const highlightedCategories: CategoryId[] = ['vegetable-seeds', 'fruit-seeds', 'herb-seeds'];

export function Home() {
  const { openModal } = useEnquiry();
  const featured = getFeaturedProducts();
  const totalProducts = products.length;

  return (
    <>
      {/* Hero — editorial multi-column masthead */}
      <section className="border-b-2 border-ink-900 bg-paper-50">
        <div className="mx-auto max-w-edge px-4 sm:px-6 lg:px-8">
          {/* Top bar with technical info */}
          <div className="flex items-center justify-between border-b border-ink-900/15 py-2.5">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 bg-terracotta-500" />
              <span className="label-tag-sm">Seed Catalogue — Vol. 01</span>
            </div>
            <span className="label-tag-sm hidden sm:block">Hyderabad · Telangana · India</span>
            <span className="label-tag-sm">{totalProducts} Varieties</span>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 gap-0 py-10 lg:grid-cols-12 lg:py-16">
            {/* Left: oversized headline */}
            <div className="lg:col-span-7 lg:pr-10">
              <p className="label-tag mb-4 text-terracotta-500">Verdant Seeds — Est. Hyderabad</p>
              <h1 className="editorial-h text-display text-ink-900">
                Seeds for<br />
                <span className="italic text-terracotta-500">Better</span> Growth.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-600 sm:text-lg">
                Quality-focused seed varieties selected to support healthier crops, stronger
                cultivation, and better agricultural outcomes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/products" className="btn-primary">
                  Explore Seeds
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button onClick={() => openModal()} className="btn-secondary">
                  Request a Product
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right: seed packet-style panels */}
            <div className="mt-10 grid grid-cols-2 gap-3 lg:col-span-5 lg:mt-0">
              <div className="relative overflow-hidden border border-ink-900/15 bg-terracotta-500">
                <div className="flex h-full flex-col justify-between p-4 text-paper-50">
                  <FlaskConical className="h-7 w-7" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-paper-50/70">
                      Lab Tested
                    </p>
                    <p className="mt-1 font-serif text-lg font-medium leading-tight">
                      Germination Verified
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden border border-ink-900/15">
                <img
                  src="https://images.pexels.com/photos/15182672/pexels-photo-15182672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Hands holding soil with seeds"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative col-span-2 overflow-hidden border border-ink-900/15">
                <img
                  src="https://images.pexels.com/photos/11688197/pexels-photo-11688197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Agricultural field cultivation"
                  loading="eager"
                  className="h-44 w-full object-cover sm:h-56"
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-ink-900/85 px-4 py-2.5">
                  <span className="font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-paper-50/70">
                    From Field to Harvest
                  </span>
                  <span className="font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-mustard-400">
                    19 Varieties
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — three-column with rule lines */}
      <section className="border-b border-ink-900/15 bg-paper-100">
        <div className="mx-auto max-w-edge px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-0">
            {benefits.map((benefit, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className={`lg:px-8 ${i > 0 ? 'lg:border-l lg:border-ink-900/15' : ''} ${i > 0 ? 'lg:pl-8' : ''}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center bg-ink-900 text-paper-50">
                    <benefit.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-xs text-ink-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-ink-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{benefit.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted categories */}
      <section className="border-b border-ink-900/15 bg-paper-50">
        <div className="mx-auto max-w-edge px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="label-tag mb-2 text-terracotta-500">Categories</p>
              <h2 className="editorial-h text-headline text-ink-900">
                Browse by <span className="italic">crop type</span>
              </h2>
            </div>
            <Link
              to="/categories"
              className="hidden items-center gap-1 text-sm font-medium text-ink-900 transition-colors hover:text-terracotta-500 sm:inline-flex"
            >
              All Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {highlightedCategories.map((catId, i) => {
              const cat = categories.find((c) => c.id === catId)!;
              const Icon = categoryIcons[cat.id];
              const count = getCategoryProductCount(cat.id);
              return (
                <Reveal key={catId} delay={i * 120}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="group flex flex-col border border-ink-900/15 bg-paper-50 transition-all hover:border-ink-900/40 hover:shadow-[4px_4px_0_0_rgba(31,29,26,0.08)]"
                  >
                    <div className="relative aspect-[5/3] overflow-hidden bg-paper-200">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-0 top-0 bg-ink-900 px-3 py-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-paper-50">
                        {count} Products
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex items-center gap-2.5">
                        <Icon className="h-5 w-5 text-terracotta-500" strokeWidth={1.8} />
                        <h3 className="font-serif text-xl font-medium text-ink-900">{cat.name}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-ink-600">{cat.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terracotta-500 transition-colors group-hover:text-terracotta-600">
                        Browse {cat.shortName}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products — editorial strip */}
      <section className="border-b border-ink-900/15 bg-paper-100">
        <div className="mx-auto max-w-edge px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-tag mb-2 text-terracotta-500">Featured Selection</p>
              <h2 className="editorial-h text-headline text-ink-900">
                Spotlight <span className="italic">varieties</span>
              </h2>
            </div>
            <Link to="/products" className="btn-secondary">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 80}>
                <article className="group flex flex-col border border-ink-900/15 bg-paper-50 transition-all hover:border-ink-900/40 hover:shadow-[4px_4px_0_0_rgba(31,29,26,0.08)]">
                  <Link to={`/products/${product.id}`} className="relative block overflow-hidden" aria-label={`View ${product.name}`}>
                    <div className="aspect-square overflow-hidden bg-paper-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  <span className="glass-label absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-ink-900 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-4">
                    <span className="label-tag-sm mb-1.5 text-terracotta-500">
                      {product.cropType}
                    </span>
                    <h3 className="font-serif text-base font-medium text-ink-900">
                      <Link to={`/products/${product.id}`} className="transition-colors hover:text-terracotta-500">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <Link
                      to={`/products/${product.id}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ink-900 transition-colors hover:text-terracotta-500"
                    >
                      View Details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="border-b border-ink-900/15 bg-paper-50">
        <div className="mx-auto max-w-edge px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label-tag mb-2 text-terracotta-500">About Verdant Seeds</p>
                <h2 className="editorial-h text-headline text-ink-900">
                  A practical approach to <span className="italic">seed selection</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <p className="text-base leading-relaxed text-ink-600">
                  We focus on dependable varieties, transparent product information, and practical
                  support — for farmers, distributors, agricultural businesses, home gardens, and
                  commercial fields alike. Our catalogue is built around what works in real growing
                  conditions, not just in theory.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  Every variety is described with the details that matter: sowing season, spacing,
                  germination period, maturity, watering, and sunlight requirements. We want you to
                  make informed choices.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link to="/about" className="btn-primary">
                    Read Our Story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/why-us" className="btn-secondary">
                    Why Choose Us
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us preview */}
      <section className="border-b border-ink-900/15 bg-ink-900 text-paper-50">
        <div className="mx-auto max-w-edge px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-paper-50/50">
                Why Choose Us
              </p>
              <h2 className="mt-2 font-serif text-3xl font-light leading-tight sm:text-4xl">
                A clear <span className="italic text-mustard-400">selection workflow</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-px bg-paper-50/10 sm:grid-cols-3">
                {[
                  { num: '01', title: 'Explore Your Crop', desc: 'Browse our catalogue by crop type, category, or search by characteristics.' },
                  { num: '02', title: 'Compare Details', desc: 'Review growing information, traits, and suitable conditions side by side.' },
                  { num: '03', title: 'Send Your Requirement', desc: 'Submit an enquiry with your specific needs through our product request form.' },
                ].map((step, i) => (
                  <Reveal key={i} delay={i * 100} className="bg-ink-900 p-6">
                    <p className="font-mono text-xs text-mustard-400">{step.num}</p>
                    <h3 className="mt-2 font-serif text-lg font-medium text-paper-50">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper-50/70">{step.desc}</p>
                  </Reveal>
                ))}
              </div>
              <Link
                to="/why-us"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-mustard-400 transition-colors hover:text-mustard-100"
              >
                Learn More About Our Process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — From Seed to Harvest */}
      <section className="bg-terracotta-500">
        <div className="mx-auto max-w-edge px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-paper-50/60">
                From Seed to Harvest
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight text-paper-50 sm:text-4xl lg:text-5xl">
                Start your next cultivation<br />
                with the <span className="italic">right seeds</span>.
              </h2>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-ink-900 px-6 py-3.5 text-sm font-medium text-paper-50 transition-all hover:bg-paper-50 hover:text-ink-900"
              >
                Explore Seeds
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2 border border-paper-50 px-6 py-3.5 text-sm font-medium text-paper-50 transition-all hover:bg-paper-50 hover:text-terracotta-500"
              >
                Request a Product
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="border-b border-ink-900/15 bg-paper-100">
        <div className="mx-auto max-w-edge px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <a href="mailto:kasiv931@gmail.com" className="flex items-center gap-2 text-ink-700 transition-colors hover:text-terracotta-500">
                <Mail className="h-4 w-4 text-terracotta-500" />
                kasiv931@gmail.com
              </a>
              <span className="flex items-center gap-2 text-ink-700">
                <MapPin className="h-4 w-4 text-terracotta-500" />
                KPHB Colony, Hyderabad, Telangana 500072
              </span>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 font-medium text-ink-900 transition-colors hover:text-terracotta-500"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
