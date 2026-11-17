import { motion } from 'motion/react';
import { Award, GraduationCap } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-wide text-[var(--accent-ink)]">
            Experience, Education &amp; Credentials
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] text-balance">
            Leadership, industry internships &amp; academic foundation
          </h2>
        </div>

        {/* Experience Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-6 sm:p-10 neu-surface divide-y divide-[var(--border-hairline)]"
        >
          {EXPERIENCE.map((item, idx) => (
            <div
              key={`${item.organization}-${item.period}`}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 ${
                idx === 0 ? 'pb-8' : idx === EXPERIENCE.length - 1 ? 'pt-8' : 'py-8'
              }`}
            >
              {/* Period & Organization */}
              <div className="lg:col-span-4 flex flex-col items-start">
                <span className="inline-flex items-center rounded-xl px-4 py-2 font-mono text-xs font-medium text-[var(--text-primary)] neu-inset tabular-nums">
                  {item.period}
                </span>
                <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">
                  {item.organization}
                </p>
                <p className="text-xs text-[var(--text-muted)]">{item.location}</p>
              </div>

              {/* Role & Outcomes */}
              <div className="lg:col-span-8">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  {item.role}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                  {item.summary}
                </p>

                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)] marker:text-[var(--accent-ink)]">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className="leading-relaxed">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Education & Certifications 2-Column Tactile Split */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 neu-surface neu-accent-sweep flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[var(--accent-ink)]">
                    Education
                  </p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-[var(--text-primary)]">
                    Academic Background
                  </h3>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl neu-inset text-[var(--accent-ink)]">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="rounded-2xl p-4 neu-inset">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-mono text-xs text-[var(--accent-ink)] tabular-nums">
                        {edu.period}
                      </span>
                      <span className="text-xs font-semibold text-[var(--text-primary)]">
                        {edu.detail}
                      </span>
                    </div>
                    <h4 className="mt-1.5 text-sm font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-xs text-[var(--text-secondary)]">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications & Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 neu-surface neu-accent-sweep"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[var(--peach-ink)]">
                  Continuous Learning
                </p>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  Certifications, Hackathons &amp; Workshops
                </h3>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl neu-inset text-[var(--peach-ink)]">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl px-4 py-3.5 neu-inset flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                      {cert.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-[var(--text-muted)]">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs font-medium text-[var(--peach-ink)] shrink-0 tabular-nums">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
