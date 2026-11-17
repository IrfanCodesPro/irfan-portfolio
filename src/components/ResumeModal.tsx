import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Download, Printer, X } from 'lucide-react';
import {
  AWARDS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  EXPERTISE_DOMAINS,
  PROFILE,
  PROJECTS,
} from '../data/portfolio';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-9 neu-surface text-[var(--text-primary)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[var(--border-hairline)]">
              <div>
                <h2 id="resume-modal-title" className="text-2xl font-bold tracking-tight">
                  {PROFILE.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{PROFILE.title}</p>
                <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
                  {PROFILE.email} · {PROFILE.phone} · {PROFILE.location}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <a
                  href={PROFILE.resumePdfUrl}
                  download="Irfan_S_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold neu-accent-btn whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 min-h-[40px] text-xs sm:text-sm font-medium text-[var(--text-primary)] neu-interactive cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                >
                  <Printer className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                  <span>Print</span>
                </button>
                <button
                  type="button"
                  aria-label="Close resume preview"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl neu-interactive cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                  Summary
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {PROFILE.lead}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                  Core Skills
                </h3>
                <div className="mt-3 space-y-2.5 text-sm">
                  {EXPERTISE_DOMAINS.map((domain) => (
                    <div key={domain.id} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                      <span className="sm:col-span-4 font-semibold text-[var(--text-primary)]">
                        {domain.title}
                      </span>
                      <span className="sm:col-span-8 font-mono text-xs sm:text-sm text-[var(--text-secondary)]">
                        {domain.tools.join(' · ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                  Experience
                </h3>
                <div className="mt-3 space-y-4 divide-y divide-[var(--border-hairline)]">
                  {EXPERIENCE.map((item, idx) => (
                    <div key={`${item.organization}-${item.period}`} className={idx > 0 ? 'pt-4' : ''}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                          {item.role} — {item.organization}
                        </span>
                        <span className="font-mono text-xs text-[var(--peach-ink)] tabular-nums">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                  Highlighted Projects
                </h3>
                <div className="mt-3 space-y-3 divide-y divide-[var(--border-hairline)]">
                  {PROJECTS.slice(0, 8).map((proj, idx) => (
                    <div key={proj.id} className={idx > 0 ? 'pt-3' : ''}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="text-sm font-bold text-[var(--text-primary)]">
                          {proj.title}
                        </span>
                        <span className="font-mono text-xs text-[var(--text-muted)]">
                          {proj.stack.slice(0, 4).join(' · ')}
                        </span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-[var(--text-secondary)]">
                        {proj.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                    Education
                  </h3>
                  <div className="mt-3 space-y-3">
                    {EDUCATION.map((edu) => (
                      <div key={edu.degree}>
                        <p className="text-sm font-bold text-[var(--text-primary)]">{edu.degree}</p>
                        <p className="text-xs text-[var(--text-secondary)]">
                          {edu.institution} · {edu.detail} ({edu.period})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-ink)]">
                    Certifications &amp; Key Achievements
                  </h3>
                  <ul className="mt-3 list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)] marker:text-[var(--peach-ink)]">
                    {AWARDS.slice(0, 5).map((award) => (
                      <li key={award.number}>
                        {award.placement.split('·')[0].trim()} — {award.title}
                      </li>
                    ))}
                    {CERTIFICATIONS.slice(0, 3).map((cert) => (
                      <li key={cert.title}>
                        {cert.title} ({cert.date})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
