import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { products, getCategoryById } from '@/data/catalogue';

export function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Seed Gallery" title="See every variety." description="A visual index of the Verdant Seeds catalogue. Open any product for its growing details and available formats." />
      <section className="bg-paper-50"><div className="mx-auto max-w-edge px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <p className="mb-6 border-b border-ink-900/15 pb-4 text-sm text-ink-600"><strong className="text-ink-900">{products.length} varieties</strong> selected for practical growing conditions.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => <Reveal key={product.id} delay={Math.min(index * 35, 300)}><Link to={`/products/${product.id}`} className="group relative block aspect-[4/5] overflow-hidden bg-ink-900"><img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-3"><p className="label-tag-sm text-paper-50/70">{getCategoryById(product.category)?.shortName}</p><h2 className="mt-1 font-serif text-base text-paper-50 sm:text-lg">{product.name}</h2></div><ArrowUpRight className="absolute right-3 top-3 h-5 w-5 text-paper-50 opacity-0 transition-opacity group-hover:opacity-100" /></Link></Reveal>)}
        </div>
      </div></section>
    </>
  );
}
