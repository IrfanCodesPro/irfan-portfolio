import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Check,
  Copy,
  Cpu,
  Download,
  Sparkles,
  User,
} from 'lucide-react';
import { KEY_METRICS, PROFILE } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';

interface HeroProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const METRIC_ICONS = [Cpu, Award, Briefcase, Sparkles];

export function Hero({ theme, onToggleTheme }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="top" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 bg-blueprint-dots">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Utility Row: Role summary & tactile Light/Dark mode switch */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
            {PROFILE.title}
          </p>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Asymmetric Monumental Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Monumental Name Typography, Philosophy & Tactile Actions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl p-6 sm:p-10 neu-surface"
          >
            <div>
              <p className="text-xs font-semibold tracking-wide text-[var(--peach-ink)]">
                {PROFILE.availability}
              </p>

              <h1 className="mt-3 text-[clamp(3rem,6.4vw,5.25rem)] font-extrabold leading-[0.95] tracking-tight text-[var(--text-primary)]">
                IRFAN <span className="text-[var(--accent-ink)]">S</span>
              </h1>

              <p className="mt-4 text-lg sm:text-xl font-semibold tracking-tight text-[var(--text-primary)] text-balance max-w-xl">
                {PROFILE.headline}
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] max-w-[58ch]">
                {PROFILE.lead}
              </p>
            </div>

            <div className="mt-9 space-y-6">
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 min-h-[44px] text-sm font-semibold neu-accent-btn whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)]"
                >
                  <span>Explore 13+ Systems</span>
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={PROFILE.resumePdfUrl}
                  download="Irfan_S_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 min-h-[44px] text-sm font-medium text-[var(--text-primary)] neu-interactive whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)]"
                >
                  <Download className="h-4 w-4 text-[var(--accent-ink)]" aria-hidden="true" />
                  <span>Download Resume</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 min-h-[44px] text-sm font-medium text-[var(--text-primary)] neu-interactive whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-5 border-t border-[var(--border-hairline)] flex flex-wrap items-center gap-5 text-xs font-medium text-[var(--text-secondary)]">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
                >
                  <span>GitHub ({PROFILE.githubHandle})</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <span aria-hidden="true" className="text-[var(--text-muted)]">
                  ·
                </span>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <span aria-hidden="true" className="text-[var(--text-muted)]">
                  ·
                </span>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="font-mono hover:text-[var(--text-primary)] transition-colors truncate"
                >
                  {PROFILE.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Double-Bezel Instrument Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl p-4 sm:p-5 neu-surface flex flex-col justify-between gap-4"
          >
            <div className="relative flex-1 min-h-[360px] sm:min-h-[400px] lg:min-h-0 overflow-hidden rounded-2xl neu-inset">
              {!imgError ? (
                <img
                  src={PROFILE.heroImage}
                  alt={PROFILE.heroImageAlt}
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-3 p-6 text-center bg-[var(--bg-inset)]">
                  <User className="h-10 w-10 text-[var(--accent-ink)]" aria-hidden="true" />
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{PROFILE.name}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{PROFILE.title}</p>
                </div>
              )}

              {/* Subtle Bottom Contrast Scrim + Integrated Hardware Readout */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/88 via-slate-950/48 to-transparent p-4 pt-12">
                <div className="flex items-end justify-between gap-3 text-[#E9E8F8]">
                  <div>
                    <p className="text-xs font-mono text-[#8DB9F0]">Nexora Helix · CEO &amp; AI/ML Lead</p>
                    <p className="text-sm font-bold tracking-tight">B.E CSE (IoT) · Final Year</p>
                  </div>
                  <p className="font-mono text-xs text-[#F5B69E] tabular-nums shrink-0"></p>
                </div>
              </div>
            </div>

            {/* Carved Hardware Telemetry Footer Bar */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl px-4 py-3 neu-inset">
                <p className="font-mono text-[11px] text-[var(--accent-ink)]">Top Honor</p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate">
                  ISRO Top 3 National
                </p>
              </div>
              <div className="rounded-2xl px-4 py-3 neu-inset">
                <p className="font-mono text-[11px] text-[var(--peach-ink)]">Research</p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate">
                  IEEE RAASC Co-Author
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Tactile Metric Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {KEY_METRICS.map((metric, idx) => {
            const Icon = METRIC_ICONS[idx % METRIC_ICONS.length];
            const isPeach = idx % 2 === 1;
            return (
              <div
                key={metric.label}
                className="rounded-2xl p-5 neu-surface neu-accent-sweep flex items-start justify-between gap-4"
              >
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-[var(--text-primary)]">
                    {metric.label}
                  </div>
                  <div className="mt-0.5 text-xs text-[var(--text-muted)] leading-relaxed">
                    {metric.context}
                  </div>
                </div>
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl neu-inset ${
                    isPeach ? 'text-[var(--peach-ink)]' : 'text-[var(--accent-ink)]'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
