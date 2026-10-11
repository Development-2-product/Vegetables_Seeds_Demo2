import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Sprout, ArrowRight } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/categories', label: 'Categories' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useEnquiry();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-paper-50"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-all duration-300',
          scrolled
            ? 'glass-nav'
            : 'border-ink-900/10 bg-paper-50'
        )}
      >
        <div className="mx-auto flex max-w-edge items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="group flex items-center gap-2.5"
            aria-label="Verdant Seeds home"
          >
            <span className="flex h-8 w-8 items-center justify-center bg-ink-900 text-paper-50 transition-colors group-hover:bg-terracotta-500">
              <Sprout className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight text-ink-900">
              Verdant<span className="text-terracotta-500">.</span>Seeds
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-terracotta-500'
                      : 'text-ink-700 hover:text-ink-900'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openModal()}
              className="hidden items-center gap-2 bg-terracotta-500 px-4 py-2.5 text-sm font-medium text-paper-50 transition-all hover:bg-terracotta-600 active:scale-[0.98] sm:inline-flex"
            >
              Request Seeds
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center border border-ink-900/15 text-ink-900 transition-colors hover:bg-ink-900 hover:text-paper-50 lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            'absolute inset-0 bg-ink-900/60 transition-opacity duration-300',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            'absolute right-0 top-0 h-full w-[85%] max-w-sm bg-paper-50 shadow-2xl transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between border-b border-ink-900/15 px-5 py-4">
            <span className="font-serif text-lg font-semibold text-ink-900">
              Verdant<span className="text-terracotta-500">.</span>Seeds
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center border border-ink-900/15 text-ink-900 hover:bg-ink-900 hover:text-paper-50"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col px-5 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'border-b border-ink-900/10 py-3.5 text-base font-medium transition-colors',
                    isActive ? 'text-terracotta-500' : 'text-ink-800 hover:text-terracotta-500'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                openModal();
              }}
              className="mt-5 flex items-center justify-center gap-2 bg-terracotta-500 px-5 py-3.5 text-sm font-medium text-paper-50 transition-colors hover:bg-terracotta-600"
            >
              Request Seeds
              <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
