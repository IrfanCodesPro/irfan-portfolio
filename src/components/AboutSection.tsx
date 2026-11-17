import { motion } from 'motion/react';
import { Briefcase, Cpu, GraduationCap, Lightbulb } from 'lucide-react';
import { INFO_ROWS, PROFILE } from '../data/portfolio';

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    eyebrow: 'Academic Track',
    title: 'Paavai Engineering College',
    detail: 'B.E CSE (IoT) · Final Year · CGPA 7.56 · Anna University',
  },
  {
    icon: Cpu,
    eyebrow: 'Leadership',
    title: 'CEO & AI/ML Lead · Nexora Helix',
    detail: 'Building AutoDev AI & BLACKBOX-AI agentic production systems',
  },

  {
    icon: Cpu,
    eyebrow: 'Leadership',
    title: 'Software & AI/ML Lead · UATS',
    detail: 'Building AutoDev AI & BLACKBOX-AI agentic production systems',
  },
  {
    icon: Briefcase,
    eyebrow: 'Industry Experience',
    title: '3D Printz · Rajshree Sugars · EduSkills',
    detail: 'Robotics calibration, industrial IoT telemetry & TensorFlow ML',
  },
  {
    icon: Lightbulb,
    eyebrow: 'Engineering Focus',
    title: 'Silicon to Autonomous Agents',
    detail: 'Bridging physical hardware sensing with multi-agent software intelligence',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Manifesto Quote + Trajectory Cards */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="rounded-3xl p-6 sm:p-9 neu-surface">
              <p className="text-xs font-semibold tracking-wide text-[var(--accent-ink)]">
                About Me
              </p>

              <blockquote className="mt-3 text-2xl sm:text-3xl font-bold leading-snug tracking-tight text-[var(--text-primary)] text-balance">
                {PROFILE.quotePrefix}
                <span className="text-[var(--peach-ink)]">{PROFILE.quoteAccent}</span>
                {PROFILE.quoteSuffix}
              </blockquote>

              <div className="mt-6 space-y-4 text-sm sm:text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {PROFILE.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* 2x2 Recessed Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon;
                const isPeach = idx % 2 === 1;
                return (
                  <div key={item.title} className="rounded-2xl p-5 neu-surface neu-accent-sweep">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-[11px] uppercase tracking-wider ${
                          isPeach ? 'text-[var(--peach-ink)]' : 'text-[var(--accent-ink)]'
                        }`}
                      >
                        {item.eyebrow}
                      </span>
                      <Icon className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />
                    </div>
                    <h3 className="mt-2.5 text-sm font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Machined Technical Spec Sheet ("Personal & Professional Info") */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 rounded-3xl p-6 sm:p-8 neu-surface"
          >
            <div className="rounded-2xl px-4 py-3.5 neu-inset flex items-center justify-between gap-4 mb-4">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-ink)]">
                  Dossier · Quick Reference
                </p>
                <h2 className="mt-0.5 text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  Personal &amp; Professional Info
                </h2>
              </div>
              <span className="font-mono text-xs text-[var(--peach-ink)]">2026</span>
            </div>

            <dl className="divide-y divide-[var(--border-hairline)]">
              {INFO_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="py-2.5 px-2 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline rounded-lg transition-colors duration-150 hover:bg-[var(--bg-inset)]/45"
                >
                  <dt className="sm:col-span-4 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    {row.label}
                  </dt>
                  <dd className="sm:col-span-8 text-sm font-medium text-[var(--text-primary)] break-words">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith('http') ? '_blank' : undefined}
                        rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-[var(--accent-ink)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] rounded"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className={row.highlight ? 'text-emerald-700 dark:text-emerald-400 font-semibold' : ''}>
                        {row.value}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
