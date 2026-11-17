import { motion } from 'motion/react';
import { Award, Cpu, FileText, Medal, Rocket, Trophy } from 'lucide-react';
import { AWARDS } from '../data/portfolio';

const AWARD_ICONS = [Rocket, Trophy, Medal, Award, Cpu, FileText];

export function AwardsSection() {
  return (
    <section id="awards" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[var(--accent-ink)]">
              Recognition &amp; Research
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] text-balance">
              National awards, ISRO selection &amp; IEEE research
            </h2>
          </div>

          <p className="max-w-md text-sm text-[var(--text-secondary)] leading-relaxed">
            Recognized at national, state, and institutional competitions for engineering impact across AI, robotics, and IoT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS.map((award, idx) => {
            const Icon = AWARD_ICONS[idx % AWARD_ICONS.length];
            const isPeach = idx % 2 === 1;
            return (
              <motion.article
                key={award.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl p-6 sm:p-7 neu-surface neu-accent-sweep flex flex-col justify-between transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-4xl font-extrabold tracking-tight text-[var(--text-muted)]/60 tabular-nums leading-none">
                      {award.number}
                    </span>
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl neu-inset ${
                        isPeach ? 'text-[var(--peach-ink)]' : 'text-[var(--accent-ink)]'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <p
                    className={`mt-5 text-xs font-semibold ${
                      isPeach ? 'text-[var(--peach-ink)]' : 'text-[var(--accent-ink)]'
                    }`}
                  >
                    {award.placement}
                  </p>

                  <h3 className="mt-1.5 text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)] text-balance">
                    {award.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-[var(--text-muted)]">
                    {award.organization} · {award.venue}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>Verified Honor</span>
                  <span className="tabular-nums font-medium text-[var(--text-secondary)]">
                    {award.date}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
