import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, Search, Send } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';

const steps = [{ icon: Search, number: '01', title: 'Explore your crop', text: 'Start by category or search the catalogue for the varieties relevant to your plan.' }, { icon: ClipboardCheck, number: '02', title: 'Compare the details', text: 'Review conditions, characteristics, formats, and growing information.' }, { icon: Send, number: '03', title: 'Send your requirement', text: 'Share your variety, quantity, and location in one clear enquiry.' }];

export function WhyUs() {
  return <><PageHeader eyebrow="Why Verdant Seeds" title="A clearer way to choose the right seed." description="Useful variety information and a simple enquiry process help you move from research to planting with confidence." /><section className="bg-ink-900 text-paper-50"><div className="mx-auto max-w-edge px-4 py-12 sm:px-6 lg:px-8 lg:py-16"><div className="grid gap-px bg-paper-50/10 md:grid-cols-3">{steps.map(({ icon: Icon, number, title, text }, index) => <Reveal key={number} delay={index * 100} className="bg-ink-900 p-7"><p className="font-mono text-xs text-mustard-400">{number}</p><Icon className="mt-5 h-6 w-6 text-paper-50" /><h2 className="mt-5 font-serif text-2xl">{title}</h2><p className="mt-3 text-sm leading-relaxed text-paper-50/70">{text}</p></Reveal>)}</div><div className="mt-10 flex flex-col justify-between gap-5 border-t border-paper-50/15 pt-8 sm:flex-row sm:items-center"><p className="max-w-xl text-base leading-relaxed text-paper-50/75">Focused selection, practical data, and helpful human support—without making choosing a variety more complicated than it needs to be.</p><Link className="btn-primary shrink-0" to="/contact">Send an enquiry <ArrowRight className="h-4 w-4" /></Link></div></div></section></>;
}
