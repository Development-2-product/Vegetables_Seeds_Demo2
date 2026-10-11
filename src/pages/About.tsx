import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Handshake, Leaf, ScanSearch } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';

const values = [
  { icon: ScanSearch, title: 'Clear information', text: 'Practical growing details help you compare varieties before you make an enquiry.' },
  { icon: Leaf, title: 'Selected varieties', text: 'Our catalogue is curated around reliable crops for gardens, farms, and commercial cultivation.' },
  { icon: Handshake, title: 'Helpful support', text: 'Tell us what you need and we will help you move from selection to planting.' },
];

export function About() {
  return (
    <>
      <PageHeader eyebrow="About Verdant Seeds" title="Growing better, together." description="We make dependable seed varieties easier to discover, compare, and request." />
      <section className="border-b border-ink-900/15 bg-paper-50">
        <div className="mx-auto grid max-w-edge gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
          <Reveal className="lg:col-span-5">
            <img className="aspect-[4/3] w-full object-cover" src="https://images.pexels.com/photos/5529588/pexels-photo-5529588.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Young plants growing in cultivated soil" loading="lazy" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 lg:pl-8">
            <p className="label-tag text-terracotta-500">Our approach</p>
            <h2 className="editorial-h mt-3 text-headline text-ink-900">Practical seeds for <span className="italic">real conditions.</span></h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">Verdant Seeds works with growers, distributors, agricultural businesses, and home gardeners who need clear information before they choose a variety. Our focus is straightforward: dependable seed selections, presented honestly, with support when it helps.</p>
            <p className="mt-4 text-base leading-relaxed text-ink-600">Every product brings together the details that matter in the field: season, suitable conditions, seed type, pack formats, and growing guidance.</p>
            <Link to="/products" className="btn-primary mt-7">Explore the catalogue <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
      <section className="bg-paper-100">
        <div className="mx-auto max-w-edge px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-px border border-ink-900/15 bg-ink-900/10 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 100} className="bg-paper-50 p-6"><Icon className="h-6 w-6 text-terracotta-500" /><h2 className="mt-5 font-serif text-xl text-ink-900">{title}</h2><p className="mt-2 text-sm leading-relaxed text-ink-600">{text}</p></Reveal>)}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-900/15 pt-8 sm:flex-row">
            <p className="flex items-center gap-2 text-sm text-ink-600"><CheckCircle2 className="h-5 w-5 text-leaf-500" />A clearer way to choose the right seed.</p>
            <Link to="/contact" className="btn-secondary">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
