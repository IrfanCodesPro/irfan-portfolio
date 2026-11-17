import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Footer({ theme, onToggleTheme }: FooterProps) {
  return (
    <footer className="border-t border-[var(--border-hairline)] py-10 theme-transition">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            {PROFILE.name}
            <span aria-hidden="true" className="mx-2 text-[var(--peach-ink)]">
              ·
            </span>
            <span className="font-mono text-xs font-normal text-[var(--text-muted)]">
              {PROFILE.location}
            </span>
          </p>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} {PROFILE.name}. Agentic AI, IoT &amp; Full-Stack Portfolio.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} compact />
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 min-h-[44px] text-xs font-semibold text-[var(--text-primary)] neu-interactive whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
