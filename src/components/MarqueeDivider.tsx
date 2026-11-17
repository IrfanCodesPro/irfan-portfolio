const RIBBON_ITEMS = [
  'Agentic & Multi-Agent AI',
  'Computer Vision & OpenCV',
  'IoT & Assistive Robotics',
  'FastAPI, Flask & React',
  'ISRO Top 3 & National Award Winner',
  'IEEE RAASC Paper Co-Author',
];

export function MarqueeDivider() {
  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden border-y border-[var(--border-hairline)] bg-[var(--bg-inset)] py-3.5 theme-transition"
    >
      <div className="animate-marquee">
        {[0, 1].map((loopIndex) => (
          <div key={loopIndex} className="flex items-center shrink-0">
            {RIBBON_ITEMS.map((item, idx) => (
              <span
                key={`${loopIndex}-${item}`}
                className="flex items-center text-xs font-medium tracking-wide text-[var(--text-muted)] whitespace-nowrap"
              >
                <span className="px-5">{item}</span>
                <span className={idx % 2 === 0 ? 'text-[var(--accent-ink)]' : 'text-[var(--peach-ink)]'}>
                  ·
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
