import { Link } from 'react-router-dom';
import {
  Carrot,
  Apple,
  Leaf,
  Flower2,
  Wheat,
  ArrowRight,
  ArrowUpRight,
  Search,
  Layers,
  Send,
  type LucideIcon,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { categories, getCategoryProductCount } from '@/data/catalogue';

const iconMap: Record<string, LucideIcon> = {
  Carrot,
  Apple,
  Leaf,
  Flower2,
  Wheat,
};

const steps = [
  {
    icon: Layers,
    num: '01',
    title: 'Browse Crop Type',
    desc: 'Start by selecting the category that matches your growing interest — vegetables, fruits, herbs, flowers, or specialty seeds.',
  },
  {
    icon: Search,
    num: '02',
    title: 'Compare Product Details',
    desc: 'Review growing information, characteristics, and suitable conditions for each variety to find the best fit for your conditions.',
  },
  {
    icon: Send,
    num: '03',
    title: 'Send Your Requirement',
    desc: "When you've found the right variety, send us an enquiry with your quantity and location for a quick response.",
  },
];

export function Categories() {
  return (
    <>
      <PageHeader
        eyebrow="Categories"
        title="Find Seeds by Category"
        description="Our seed catalogue is organized into five practical categories. Each category groups varieties by crop type, making it easy to find the right seeds for your growing needs."
      />

      <div className="mx-auto max-w-edge px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Category grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Leaf;
            const count = getCategoryProductCount(cat.id);
            const isLarge = i === 0 || i === 4;
            return (
              <Reveal
                key={cat.id}
                delay={i * 80}
                className={isLarge ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <Link
                  to={`/products?category=${cat.id}`}
                  className="group flex h-full flex-col border border-ink-900/15 bg-paper-50 transition-all hover:border-ink-900/40 hover:shadow-[4px_4px_0_0_rgba(31,29,26,0.08)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-paper-200">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
                    <span className="absolute left-0 top-0 bg-ink-900 px-3 py-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-paper-50">
                      {count} {count === 1 ? 'Product' : 'Products'}
                    </span>
                    <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-paper-50/90 text-ink-900 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center bg-terracotta-50 text-terracotta-500">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <h2 className="font-serif text-xl font-medium text-ink-900">{cat.name}</h2>
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

        {/* Three-step callout */}
        <div className="mt-12 border-t-2 border-ink-900 pt-10">
          <div className="mb-6 text-center">
            <p className="label-tag mb-2 text-terracotta-500">How to Choose</p>
            <h2 className="editorial-h text-headline text-ink-900">
              Three steps to the <span className="italic">right seeds</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px border border-ink-900/15 bg-ink-900/10 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 120} className="bg-paper-50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center bg-ink-900 text-paper-50">
                    <step.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-xs text-ink-400">{step.num}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/products" className="btn-primary">
              Browse All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
