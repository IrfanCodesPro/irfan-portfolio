import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, CircuitBoard, Server, Terminal } from 'lucide-react';
import { EXPERTISE_DOMAINS, ExpertiseDomain } from '../data/portfolio';

const ICON_MAP: Record<ExpertiseDomain['id'], typeof Cpu> = {
  ai: Cpu,
  fullstack: Server,
  iot: CircuitBoard,
  foundations: Terminal,
};

const DOMAIN_METRICS: Record<ExpertiseDomain['id'], { label: string; pct: number }[]> = {
  ai: [
    { label: 'Multi-Agent & LLM Orchestration', pct: 94 },
    { label: 'Computer Vision & TensorFlow ML', pct: 90 },
  ],
  fullstack: [
    { label: 'FastAPI, Flask & REST/WebSockets', pct: 92 },
    { label: 'React, Tailwind & MongoDB/SQLite', pct: 88 },
  ],
  iot: [
    { label: 'ESP32, Raspberry Pi & Sensor Fusion', pct: 93 },
    { label: 'Robotic Calibration & Edge Telemetry', pct: 87 },
  ],
  foundations: [
    { label: 'Python, C/C++, JavaScript & Kotlin', pct: 92 },
    { label: 'DSA, OOP & Rapid Prototyping', pct: 89 },
  ],
};

export function ExpertiseSection() {
  const [selectedId, setSelectedId] = useState<ExpertiseDomain['id']>('ai');
  const activeDomain =
    EXPERTISE_DOMAINS.find((domain) => domain.id === selectedId) ?? EXPERTISE_DOMAINS[0];
  const domainMeters = DOMAIN_METRICS[activeDomain.id];

  return (
    <section id="expertise" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-wide text-[var(--accent-ink)]">
            Core Skills &amp; Tech Stack
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] text-balance">
            Engineering at every layer from silicon sensors to multi-agent AI
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Tactile Domain Selector Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {EXPERTISE_DOMAINS.map((domain) => {
              const Icon = ICON_MAP[domain.id];
              const isSelected = domain.id === activeDomain.id;

              return (
                <button
                  key={domain.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedId(domain.id)}
                  className={`text-left rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] ${
                    isSelected ? 'neu-inset' : 'neu-interactive'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 min-w-0">
                      <span
                        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                          isSelected
                            ? 'bg-[#8DB9F0] text-[#0F172A] shadow-sm'
                            : 'neu-surface-sm text-[var(--text-secondary)]'
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                          {domain.title}
                        </h3>
                        <p className="mt-1 text-xs font-mono text-[var(--text-muted)] truncate">
                          {domain.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-[var(--text-muted)] tabular-nums shrink-0">
                      {domain.tools.length}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Stack, Capability Grooves & Engineering Standards Panel */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-9 neu-surface flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <p className="text-xs font-mono text-[var(--accent-ink)]">
                    {activeDomain.subtitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                    {activeDomain.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                    {activeDomain.summary}
                  </p>

                  {/* Tactile Carved Capability Grooves */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {domainMeters.map((meter) => (
                      <div key={meter.label} className="rounded-2xl p-4 neu-inset">
                        <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[var(--text-primary)]">
                          <span className="truncate">{meter.label}</span>
                          <span className="font-mono text-[var(--peach-ink)] tabular-nums">
                            {meter.pct}%
                          </span>
                        </div>
                        <div className="mt-2.5 h-2 w-full rounded-full bg-[var(--bg-canvas)] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${meter.pct}%` }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full accent-bar-gradient"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Engineering Standards List with Hairline Dividers */}
                  <div className="mt-7 divide-y divide-[var(--border-hairline)] border-y border-[var(--border-hairline)]">
                    {activeDomain.standards.map((item) => (
                      <div
                        key={item.label}
                        className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4"
                      >
                        <div className="sm:col-span-4 text-sm font-semibold text-[var(--text-primary)]">
                          {item.label}
                        </div>
                        <div className="sm:col-span-8 text-sm text-[var(--text-secondary)] leading-relaxed">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tactile Inset Tooling Matrix */}
                <div className="mt-7 rounded-2xl p-4 neu-inset">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    Verified Stack &amp; Tools
                  </span>
                  <p className="mt-1.5 font-mono text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                    {activeDomain.tools.join(' · ')}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
