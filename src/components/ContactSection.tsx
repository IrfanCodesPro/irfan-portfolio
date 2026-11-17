import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Mail, Phone, Send, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface FormState {
  name: string;
  email: string;
  scope: string;
  message: string;
}

const SCOPE_OPTIONS = [
  'Agentic AI / Multi-Agent Systems',
  'Full-Stack Web Platform (FastAPI / Flask / React)',
  'IoT, Computer Vision & Robotics Automation',
  'Internship, Research or Engineering Role',
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    scope: SCOPE_OPTIONS[0],
    message: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email address, and project message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      scope: SCOPE_OPTIONS[0],
      message: '',
    });
    setSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-20 bg-blueprint-dots">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Monumental Callout & Direct Contact Tiles */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-9 neu-surface flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-semibold tracking-wide text-[var(--peach-ink)]">
                Let&apos;s Talk
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-[0.95] tracking-tight text-[var(--text-primary)]">
                <span className="block">LET&apos;S</span>
                <span className="block text-[var(--accent-ink)]">BUILD</span>
                <span className="block text-[var(--peach-ink)]">TOGETHER</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                Open to internships, AI/ML and full-stack engineering roles, research collaborations,
                and ambitious automation projects.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl p-4 neu-inset">
                  <span className="text-xs font-medium text-[var(--text-muted)]">Direct Email</span>
                  <div className="mt-1 flex items-center justify-between gap-3">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-sm font-mono font-medium text-[var(--text-primary)] hover:text-[var(--accent-ink)] truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] rounded"
                    >
                      {PROFILE.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl neu-interactive cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                    >
                      {copiedEmail ? (
                        <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                      ) : (
                        <Copy className="h-4 w-4 text-[var(--text-secondary)]" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl p-4 neu-inset">
                  <span className="text-xs font-medium text-[var(--text-muted)]">Phone &amp; Location</span>
                  <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                    <a
                      href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-[var(--text-primary)] hover:text-[var(--accent-ink)]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[var(--peach-ink)]" aria-hidden="true" />
                      <span>{PROFILE.phone}</span>
                    </a>
                    <span className="text-xs text-[var(--text-muted)]">{PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-hairline)] flex flex-wrap items-center gap-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
              >
                <span>GitHub ({PROFILE.githubHandle})</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <span aria-hidden="true" className="text-[var(--peach-ink)]">
                ·
              </span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Tactile Neumorphic Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-9 neu-surface"
          >
            {submitted ? (
              <div className="flex h-full min-h-[340px] flex-col items-start justify-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl neu-inset text-emerald-700 dark:text-emerald-400">
                  <Check className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[var(--text-primary)]">
                  Inquiry prepared for {PROFILE.name}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-[var(--text-secondary)] max-w-lg leading-relaxed">
                  Thank you, {form.name}. Your message regarding{' '}
                  <span className="font-semibold text-[var(--text-primary)]">{form.scope}</span> is
                  ready. Open your mail client below to dispatch it directly to{' '}
                  <span className="font-mono">{PROFILE.email}</span>.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                      `[Portfolio] ${form.scope} — ${form.name}`
                    )}&body=${encodeURIComponent(form.message)}`}
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 min-h-[44px] text-sm font-semibold neu-accent-btn whitespace-nowrap shrink-0"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Open in Mail App</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center rounded-xl px-5 py-3 min-h-[44px] text-sm font-medium text-[var(--text-primary)] neu-interactive whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[var(--text-secondary)] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      className="w-full rounded-xl px-4 py-3 min-h-[44px] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] neu-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[var(--text-secondary)] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="you@organization.com"
                      className="w-full rounded-xl px-4 py-3 min-h-[44px] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] neu-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-scope"
                    className="block text-xs font-semibold text-[var(--text-secondary)] mb-2"
                  >
                    Collaboration Topic
                  </label>
                  <select
                    id="contact-scope"
                    name="scope"
                    value={form.scope}
                    onChange={(e) => setForm((prev) => ({ ...prev, scope: e.target.value }))}
                    className="w-full rounded-xl px-4 py-3 min-h-[44px] text-sm text-[var(--text-primary)] neu-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] cursor-pointer"
                  >
                    {SCOPE_OPTIONS.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[var(--bg-surface)] text-[var(--text-primary)]"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[var(--text-secondary)] mb-2"
                  >
                    Project Brief or Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Share your goals, technical stack, or opportunity details..."
                    className="w-full rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] neu-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] resize-y"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-rose-700 dark:text-rose-400">
                    {error}
                  </p>
                )}

                <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-[var(--text-muted)]">
                    Typical response within 24 hours.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 min-h-[44px] text-sm font-semibold neu-accent-btn whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)]"
                  >
                    <span>Say Hello</span>
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
