import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Cpu,
  FolderGit2,
  Layers,
  Mail,
  Radar,
  Terminal,
  X,
} from 'lucide-react';
import { PROFILE, PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolio';

const FILTER_OPTIONS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'iot', label: 'IoT & Robotics' },
  { id: 'fullstack', label: 'Full Stack' },
];

const CATEGORY_ICON: Record<ProjectItem['category'], typeof Cpu> = {
  ai: Cpu,
  iot: Radar,
  fullstack: Terminal,
};

const AUTODEV_AGENTS = ['Planner', 'Architect', 'Coder', 'Tester', 'Debugger', 'Packager'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const visibleProjects =
    activeFilter === 'all' && !showAll ? filteredProjects.slice(0, 6) : filteredProjects;

  const selectedIndex = selectedProject
    ? filteredProjects.findIndex((item) => item.id === selectedProject.id)
    : -1;

  const handleNavigateModal = useCallback(
    (direction: -1 | 1) => {
      if (selectedIndex === -1 || filteredProjects.length === 0) return;
      const nextIndex = (selectedIndex + direction + filteredProjects.length) % filteredProjects.length;
      setSelectedProject(filteredProjects[nextIndex]);
    },
    [selectedIndex, filteredProjects]
  );

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      } else if (event.key === 'ArrowRight') {
        handleNavigateModal(1);
      } else if (event.key === 'ArrowLeft') {
        handleNavigateModal(-1);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, handleNavigateModal]);

  const markImageFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="work" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header + Segmented Neumorphic Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[var(--accent-ink)]">
              Selected Portfolio · {PROJECTS.length} Real-World Systems
            </p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] text-balance">
              AI agents, computer vision, IoT &amp; full-stack builds
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter projects by discipline"
            className="inline-flex flex-wrap items-center gap-1.5 rounded-2xl p-1.5 neu-inset self-start md:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(option.id)}
                  className={`rounded-xl px-4 py-2 min-h-[40px] text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)] ${
                    isActive
                      ? 'neu-surface-sm text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media & Schematic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => {
              const isLeadCard = activeFilter === 'all' && index === 0;
              const hasImage = Boolean(project.image) && !failedImages[project.id];
              const CategoryIcon = CATEGORY_ICON[project.category];
              const isAutoDev = project.id === 'autodev-ai';

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className={`group rounded-3xl p-5 sm:p-6 neu-surface neu-accent-sweep flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 ${
                    isLeadCard ? 'md:col-span-2' : ''
                  }`}
                >
                  <div
                    className={`grid gap-6 ${
                      isLeadCard ? 'grid-cols-1 lg:grid-cols-12 items-center' : 'grid-cols-1'
                    }`}
                  >
                    {/* Visual Container: Studio photo or full Blueprint Schematic Canvas */}
                    {hasImage ? (
                      <div
                        className={`overflow-hidden rounded-2xl neu-inset ${
                          isLeadCard ? 'lg:col-span-7 aspect-[16/9]' : 'aspect-[16/10]'
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.imageAlt ?? project.title}
                          referrerPolicy="no-referrer"
                          onError={() => markImageFailed(project.id)}
                          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] rounded-2xl p-5 neu-inset bg-blueprint-dots flex flex-col justify-between">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-ink)]">
                            {project.categoryLabel}
                          </span>
                          <span className="font-mono text-xs text-[var(--text-muted)] tabular-nums">
                            PRJ-{String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="my-auto flex flex-col items-center justify-center text-center py-3">
                          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl neu-surface-sm text-[var(--peach-ink)] transition-transform duration-200 group-hover:scale-105">
                            <CategoryIcon className="h-6 w-6" aria-hidden="true" />
                          </span>
                          <p className="mt-3 text-sm font-bold text-[var(--text-primary)] line-clamp-1">
                            {project.recognition ?? project.organization}
                          </p>
                          <p className="mt-1 font-mono text-xs text-[var(--text-muted)] line-clamp-1">
                            {project.stack.join(' · ')}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-2 pt-3 border-t border-[var(--border-hairline)] font-mono text-[11px] text-[var(--text-muted)]">
                          <span className="truncate">{project.organization}</span>
                          <span className="tabular-nums shrink-0">{project.year}</span>
                        </div>
                      </div>
                    )}

                    {/* Text & Outcome Block */}
                    <div className={isLeadCard ? 'lg:col-span-5 flex flex-col justify-between h-full py-1' : ''}>
                      <div>
                        {/* Zero-pill clean unboxed metadata */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                          <span className="text-[var(--accent-ink)] font-semibold">
                            {project.categoryLabel}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{project.organization}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono tabular-nums">{project.year}</span>
                        </div>

                        <h3 className="mt-2.5 text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] text-balance">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[var(--text-secondary)]">
                          {project.summary}
                        </p>

                        {isAutoDev && (
                          <div className="mt-4 rounded-2xl p-3.5 neu-inset">
                            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-2">
                              6-Agent Autonomous Pipeline
                            </p>
                            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono font-medium text-[var(--text-primary)]">
                              {AUTODEV_AGENTS.map((agent, stageIdx) => (
                                <span key={agent} className="inline-flex items-center gap-1.5">
                                  <span
                                    className={
                                      stageIdx % 2 === 0
                                        ? 'text-[var(--accent-ink)]'
                                        : 'text-[var(--peach-ink)]'
                                    }
                                  >
                                    {agent}
                                  </span>
                                  {stageIdx < AUTODEV_AGENTS.length - 1 && (
                                    <ArrowRight className="h-3 w-3 text-[var(--text-muted)]" aria-hidden="true" />
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <p className="mt-4 pt-3 border-t border-[var(--border-hairline)] text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                          {project.outcome}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <p className="font-mono text-xs text-[var(--text-muted)] truncate max-w-[240px] sm:max-w-xs">
                          {project.recognition ?? project.stack.slice(0, 3).join(' · ')}
                        </p>

                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold text-[var(--text-primary)] neu-interactive whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                        >
                          <span>Inspect System</span>
                          <ArrowUpRight className="h-4 w-4 text-[var(--accent-ink)]" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Expand / Collapse Remaining Projects when viewing All Work */}
        {activeFilter === 'all' && filteredProjects.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 min-h-[44px] text-sm font-semibold text-[var(--text-primary)] neu-interactive cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
            >
              {showAll ? (
                <>
                  <span>Show Featured 6 Projects</span>
                  <ChevronUp className="h-4 w-4 text-[var(--accent-ink)]" aria-hidden="true" />
                </>
              ) : (
                <>
                  <span>Show All {filteredProjects.length} Projects</span>
                  <ChevronDown className="h-4 w-4 text-[var(--accent-ink)]" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Case Study Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 neu-surface text-[var(--text-primary)]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-[var(--border-hairline)]">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[var(--text-muted)]">
                  <span className="font-mono tabular-nums">
                    {String(selectedIndex + 1).padStart(2, '0')} /{' '}
                    {String(filteredProjects.length).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[var(--accent-ink)] font-semibold">
                    {selectedProject.categoryLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{selectedProject.year}</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => handleNavigateModal(-1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl neu-interactive cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => handleNavigateModal(1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl neu-interactive cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Close case study"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl neu-interactive cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="mt-6">
                <h3
                  id="case-study-title"
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] text-balance"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {selectedProject.role} · {selectedProject.organization} ·{' '}
                  <span className="font-mono text-xs">{selectedProject.stack.join(' · ')}</span>
                </p>

                {selectedProject.image && !failedImages[selectedProject.id] ? (
                  <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl neu-inset">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.imageAlt ?? selectedProject.title}
                      referrerPolicy="no-referrer"
                      onError={() => markImageFailed(selectedProject.id)}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mt-6 rounded-2xl p-6 neu-inset bg-blueprint-dots flex items-center gap-4">
                    <Layers className="h-8 w-8 shrink-0 text-[var(--accent-ink)]" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {selectedProject.recognition ?? selectedProject.organization}
                      </p>
                      <p className="mt-1 text-xs font-mono text-[var(--text-muted)]">
                        {selectedProject.stack.join(' · ')}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      Problem Context
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      System Architecture
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {selectedProject.architecture}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--border-hairline)]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    Outcomes &amp; Technical Highlights
                  </h4>
                  <p className="mt-2 text-base font-semibold text-[var(--peach-ink)]">
                    {selectedProject.outcome}
                  </p>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)] marker:text-[var(--accent-ink)]">
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 pt-5 border-t border-[var(--border-hairline)]">
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 min-h-[44px] text-sm font-semibold neu-accent-btn whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                  >
                    <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                    <span>View GitHub Profile</span>
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                      `[Portfolio] ${selectedProject.title}`
                    )}`}
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 min-h-[44px] text-sm font-medium text-[var(--text-primary)] neu-interactive whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-accent)]"
                  >
                    <Mail className="h-4 w-4 text-[var(--peach-ink)]" aria-hidden="true" />
                    <span>Discuss Project</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
