import { Link } from 'react-router-dom';
import { Sprout, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { categories } from '@/data/catalogue';
import { useEnquiry } from '@/context/EnquiryContext';

const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/why-us', label: 'Why Choose Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export function Footer() {
  const { openModal } = useEnquiry();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink-900 bg-ink-900 text-paper-50">
      <div className="mx-auto max-w-edge px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Verdant Seeds home">
              <span className="flex h-8 w-8 items-center justify-center bg-terracotta-500 text-paper-50">
                <Sprout className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-serif text-lg font-semibold tracking-tight text-paper-50">
                Verdant<span className="text-terracotta-500">.</span>Seeds
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-50/70">
              Seeds for Better Growth. Quality-focused seed varieties selected to support
              healthier crops, stronger cultivation, and better agricultural outcomes.
            </p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-paper-50/20 text-paper-50/80 transition-colors hover:bg-paper-50 hover:text-ink-900"
                  aria-label="Social media link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="label-tag mb-4 text-paper-50/50">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-paper-50/75 transition-colors hover:text-mustard-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Category links */}
          <div>
            <h3 className="label-tag mb-4 text-paper-50/50">Categories</h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="text-sm text-paper-50/75 transition-colors hover:text-mustard-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="label-tag mb-4 text-paper-50/50">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kasiv931@gmail.com"
                  className="flex items-start gap-2 text-sm text-paper-50/75 transition-colors hover:text-mustard-400"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-500" />
                  kasiv931@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-paper-50/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-500" />
                KPHB Colony, Hyderabad, Telangana 500072
              </li>
              <li className="flex items-start gap-2 text-sm text-paper-50/75">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-500" />
                Mon–Fri, 9:00 AM–6:00 PM IST
              </li>
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-paper-50/15 pt-6 sm:flex-row sm:items-center">
          <p className="font-serif text-lg font-medium text-paper-50">
            Looking for a specific seed?
          </p>
          <button
            onClick={() => openModal()}
            className="inline-flex items-center gap-2 text-sm font-medium text-mustard-400 transition-colors hover:text-mustard-100"
          >
            Request a Product
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-paper-50/10 pt-6 text-xs text-paper-50/50 sm:flex-row sm:items-center">
          <p>&copy; {year} Verdant Seeds. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-paper-50" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-paper-50" onClick={(e) => e.preventDefault()}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
