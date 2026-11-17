import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Awards', href: '#awards', id: 'awards' },
  { label: 'Projects', href: '#work', id: 'work' },
  { label: 'Skills', href: '#expertise', id: 'expertise' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.05 }
    );

    sections.forEach((sec) => observer.observe(sec));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--bg-canvas)]/92 backdrop-blur-md border-b border-[var(--border-hairline)] theme-transition">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="font-[var(--font-display)] text-lg font-bold tracking-tight text-[var(--text-primary)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] rounded-md px-1 -ml-1"
        >
          {PROFILE.name}
        </a>

        {/* Zone 2: 5 concise single-line nav links with live scroll-spy */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7 lg:gap-8">
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-[var(--accent-ink)] after:transition-transform after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] rounded-sm ${
                  isActive
                    ? 'text-[var(--text-primary)] font-semibold after:scale-x-100'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action (plus mobile menu toggle on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden md:inline-flex items-center justify-center rounded-xl px-4 py-2 min-h-[40px] text-sm font-semibold neu-accent-btn whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-canvas)]"
          >
            View Resume
          </button>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center rounded-xl h-11 w-11 neu-interactive text-[var(--text-primary)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Tactile Hairline Reading Progress Bar */}
      <div aria-hidden="true" className="h-[2.5px] w-full bg-transparent overflow-hidden">
        <div
          className="h-full accent-bar-gradient transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-t border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-4 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center rounded-xl px-4 py-3 min-h-[44px] text-sm font-medium text-[var(--text-primary)] ${
                  activeId === item.id ? 'neu-inset text-[var(--accent-ink)] font-semibold' : 'neu-surface-sm'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-2 flex items-center justify-center rounded-xl px-4 py-3 min-h-[44px] text-sm font-semibold neu-accent-btn cursor-pointer"
            >
              View Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
