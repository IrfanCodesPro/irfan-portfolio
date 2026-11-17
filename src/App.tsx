import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeDivider } from './components/MarqueeDivider';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    if (document.documentElement.classList.contains('dark')) {
      return 'dark';
    }
  }
  return 'light';
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('irfan-portfolio-theme', theme);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] theme-transition selection:bg-[#8DB9F0] selection:text-[#0F172A]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold neu-accent-btn"
        >
          Skip to main content
        </a>

        <Navbar onOpenResume={() => setResumeOpen(true)} />

        <main id="main-content">
          <Hero theme={theme} onToggleTheme={toggleTheme} />
          <MarqueeDivider />
          <AboutSection />
          <AwardsSection />
          <ProjectsSection />
          <ExpertiseSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer theme={theme} onToggleTheme={toggleTheme} />

        <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </MotionConfig>
  );
}
