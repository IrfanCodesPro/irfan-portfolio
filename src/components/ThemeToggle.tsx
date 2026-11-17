import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
  compact?: boolean;
}

export function ThemeToggle({ theme, onToggle, compact = false }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={onToggle}
      className="group inline-flex items-center gap-3 rounded-xl px-3.5 py-2 min-h-[44px] neu-interactive text-sm font-medium text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-canvas)] cursor-pointer select-none whitespace-nowrap shrink-0"
    >
      <span
        aria-hidden="true"
        className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full neu-inset p-0.5"
      >
        <span
          className={`inline-flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm ${
            isDark
              ? 'translate-x-5 bg-[#8DB9F0] text-[#0F172A]'
              : 'translate-x-0 bg-[#F5B69E] text-[#0F172A]'
          }`}
        >
          {isDark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
        </span>
      </span>
      {!compact && (
        <span className="text-xs font-semibold tracking-tight text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
}
