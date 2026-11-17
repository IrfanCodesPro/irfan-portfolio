export type ProjectCategory = 'all' | 'ai' | 'iot' | 'fullstack';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  year: string;
  organization: string;
  role: string;
  stack: string[];
  summary: string;
  outcome: string;
  recognition?: string;
  architecture: string;
  challenge: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  repoUrl: string;
}

export interface KeyMetric {
  value: string;
  label: string;
  context: string;
}

export interface AwardItem {
  number: string;
  placement: string;
  venue: string;
  title: string;
  organization: string;
  description: string;
  date: string;
}

export interface ExpertiseDomain {
  id: 'ai' | 'fullstack' | 'iot' | 'foundations';
  title: string;
  subtitle: string;
  summary: string;
  tools: string[];
  standards: {
    label: string;
    detail: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  outcomes: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  detail: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
}

export interface InfoRow {
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}

export const PROFILE = {
  name: 'Irfan S',
  shortName: 'Irfan',
  monogram: 'IS',
  title: 'Agentic AI Developer · AI/ML Engineer · Full-Stack Developer',
  availability: 'Open for Opportunities · Kallakurichi, Tamil Nadu, India',
  quotePrefix: 'I engineer systems where ',
  quoteAccent: 'silicon thinks',
  quoteSuffix: ', machines perceive, and code creates real-world change.',
  headline: 'Engineering autonomous AI, IoT hardware, and full-stack software.',
  lead: 'Final-year B.E Computer Science & Engineering (IoT) student at Paavai Engineering College, CEO at Nexora Helix and Software & AI/ML Lead at Unified Automations & Tech Solutions (UATS). National competition winner building multi-agent AI platforms, computer vision pipelines, and embedded automation systems that work in the real world.',
  aboutParagraphs: [
    'I am a final-year B.E Computer Science & Engineering (IoT) student at Paavai Engineering College (Anna University), Tamil Nadu — focused on Agentic AI, scalable backend architectures, IoT automation, and practical software delivery.',
    'From winning National-Level Symposiums with autonomous vehicle and smart parking prototypes to having a QR identity verification system achieve Top 3 at the ISRO Project Competition for college deployment, I design systems that move from prototype to production.',
    'Alongside academic research — including co-authoring an IEEE paper on Reality-Aware Agentic Surveillance (RAASC) — I co-lead Unified Automations & Tech Solutions (UATS) as Software & AI/ML Lead and have been recognized by three industry CEOs for innovations in AI and IoT.',
  ],
  email: 'shairfan2005@gmail.com',
  phone: '+91 7200621273',
  location: 'Kallakurichi, Tamil Nadu, India',
  organization: 'Nexora Helix',
  github: 'https://github.com/IrfanCodesPro',
  githubHandle: 'IrfanCodesPro',
  linkedin: 'https://linkedin.com/in/irfan-s-438844300',
  linkedinHandle: 'irfan-s-438844300',
  heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_9.33.39_AM_23305c8e.jpeg',
  heroImageAlt: 'Portrait of Irfan S in a tailored dark charcoal blazer and copper-brown collared shirt',
  resumePdfUrl: '/assets/aistudio/Irfan_S_Resume_2Page__1__1ace688a.pdf',
};

export const KEY_METRICS: KeyMetric[] = [
  {
    value: '13+',
    label: 'Engineered Systems',
    context: 'Agentic AI, IoT, robotics & full-stack apps',
  },
  {
    value: '5',
    label: 'National & Expo Wins',
    context: 'ISRO Top 3, 1st Place Symposiums & KANAM’26',
  },
  {
    value: '3',
    label: 'Industry Internships',
    context: '3D Printz · Rajshree Sugars · EduSkills',
  },
  {
    value: '3',
    label: 'CEO Recognitions',
    context: 'Honored for AI & IoT real-world innovation',
  },
];

export const AWARDS: AwardItem[] = [
  {
    number: '01',
    placement: 'Top 3 Nationally · Selected for Deployment',
    venue: 'ISRO Project Competition',
    title: 'Smart ID System — QR Access Control',
    organization: 'Indian Space Research Organisation (ISRO)',
    description:
      'QR-based identity verification and real-time campus access control platform selected for real-world college deployment.',
    date: '2024',
  },
  {
    number: '02',
    placement: 'First Place · National Level Symposium',
    venue: 'Paper Presentation & Technical Showcase',
    title: 'Autonomous Car Concept',
    organization: 'Kavery College of Technology',
    description:
      'Sensor-driven autonomous vehicle navigation, obstacle avoidance, and path-planning research awarded 1st Place among national competitors.',
    date: '4 November 2024',
  },
  {
    number: '03',
    placement: 'First Place · National Level Symposium',
    venue: 'IoT Automation Competition',
    title: 'Smart Parking System — IoT Automation',
    organization: 'National Level Technical Symposium',
    description:
      'Real-time ESP32 and IR-sensor parking slot detection platform paired with a live availability dashboard.',
    date: '2025',
  },
  {
    number: '04',
    placement: 'Third Place · Project Expo',
    venue: "KANAM'26 Project Expo",
    title: 'BLACKBOX-AI — Agentic Surveillance System',
    organization: "KANAM'26",
    description:
      'Multi-agent surveillance architecture combining computer vision detection, autonomous reasoning, and automated incident alerts.',
    date: '2026',
  },
  {
    number: '05',
    placement: 'Second Place · Intra-College Expo',
    venue: 'Engineering Project Showcase',
    title: 'Bionic Arm — Sensor-Based Prosthetic',
    organization: 'Paavai Engineering College',
    description:
      'ESP32-powered assistive prosthetic arm using adaptive servo control and gesture-driven sensors for upper-limb amputees.',
    date: '2024',
  },
  {
    number: '06',
    placement: 'IEEE Research & Executive Recognition',
    venue: 'Co-authored Paper & Industry Honors',
    title: 'RAASC Surveillance Paper & 3 CEO Recognitions',
    organization: 'IEEE · 3 Industry CEOs',
    description:
      'Co-authored IEEE research on Reality-Aware Agentic Surveillance Camera Systems (RAASC) and recognized by three industry CEOs for AI and IoT breakthroughs.',
    date: '2025 — 2026',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'autodev-ai',
    title: 'AutoDev AI — Autonomous Code Generator',
    category: 'ai',
    categoryLabel: 'Agentic AI',
    year: '2026',
    organization: 'Unified Automations & Tech Solutions (UATS)',
    role: 'Lead AI Architect',
    stack: ['Python', 'FastAPI', 'Multi-Agent AI', 'Groq API', 'REST APIs'],
    summary:
      'Engineered a 6-agent pipeline (Planner → Architect → Coder → Tester → Debugger → Packager) that generates, validates, and packages full-stack applications directly from natural-language prompts.',
    outcome: 'Reduced end-to-end application development effort by over 80%.',
    recognition: 'UATS Flagship Product',
    challenge:
      'Single-prompt LLM code generation frequently breaks across multi-file architectures because planning, dependency wiring, debugging, and packaging are collapsed into one unverified pass.',
    architecture:
      'Separated the software development lifecycle into six specialized autonomous agents orchestrated over FastAPI with Groq inference, automated syntax/runtime test loops, and deterministic project packaging.',
    highlights: [
      '6-stage autonomous workflow: plan, build, test, debug, verify, and deploy',
      'Automated self-debugging feedback loop before final artifact export',
      'Prompt-to-repository generation reducing manual boilerplate by 80%+',
    ],
    image: '/src/assets/images/project_automation_cli_1794887110539.jpg',
    imageAlt: 'Precision modular hardware and engineering workstation representing autonomous multi-agent code generation',
    featured: true,
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'blackbox-ai',
    title: 'BLACKBOX-AI — Agentic Surveillance System',
    category: 'ai',
    categoryLabel: 'Agentic AI & Vision',
    year: '2026',
    organization: 'UATS Flagship',
    role: 'Software & AI/ML Lead',
    stack: ['Python', 'FastAPI', 'OpenCV', 'React', 'WebSocket'],
    summary:
      'Real-time AI surveillance platform powered by multi-agent pipelines for continuous video processing, anomaly detection, contextual reasoning, and automated incident response.',
    outcome: "Secured 3rd Place at KANAM'26 Project Expo for autonomous vision reasoning.",
    recognition: "3rd Place — KANAM'26 Expo",
    challenge:
      'Traditional CCTV pipelines passively record footage or emit high false-positive motion alerts without understanding intent, sequence, or scene context.',
    architecture:
      'Paired OpenCV frame ingestion with multi-agent reasoning workers over FastAPI and low-latency WebSocket streams into a React operator console for live incident escalation.',
    highlights: [
      'Continuous real-time computer vision detection and event triage',
      'Autonomous incident reasoning beyond simple bounding-box triggers',
      'Live WebSocket operator dashboard with structured alert logs',
    ],
    image: '/src/assets/images/project_api_gateway_1794887109630.jpg',
    imageAlt: 'Matte-charcoal compute infrastructure powering real-time multi-agent video reasoning',
    featured: true,
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'smart-id-system',
    title: 'Smart ID System — QR Access Control',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & IoT',
    year: '2024',
    organization: 'ISRO Project Competition',
    role: 'System Architect',
    stack: ['Python', 'Flask', 'QR Tech', 'SQLite', 'IoT'],
    summary:
      'Secure QR-based identity verification and access management platform built with Flask and SQLite, selected for real-world campus deployment.',
    outcome: 'Achieved Top 3 nationally at the ISRO Project Competition.',
    recognition: 'Top 3 — ISRO Competition',
    challenge:
      'Manual campus ID checks created gate bottlenecks and lacked verifiable digital audit trails for student and visitor entry.',
    architecture:
      'Built a lightweight Flask verification backend backed by SQLite with cryptographically signed QR tokens, instant scanner validation, and real-time entry logging.',
    highlights: [
      'Selected for real-world institutional college deployment',
      'Sub-second QR scan verification with tamper-resistant ID records',
      'Zero-dependency SQLite persistence designed for reliable campus hosting',
    ],
    image: '/src/assets/images/project_analytics_suite_1794887109253.jpg',
    imageAlt: 'Clean verification telemetry interface and hardware desk setup',
    featured: true,
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'paavai-1',
    title: 'Paavai 1 — One Campus, One Intelligence',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Platform',
    year: '2026',
    organization: 'Paavai Engineering College',
    role: 'Full-Stack Developer',
    stack: ['MongoDB Atlas', 'FastAPI', 'React', 'Automation', 'REST APIs'],
    summary:
      'Centralized, department-isolated academic management platform unifying institutional administration through automated workflows and modern data processing.',
    outcome: 'Streamlined multi-department academic operations inside a single role-isolated portal.',
    recognition: 'Campus Intelligence System',
    challenge:
      'Academic departments tracked records in fragmented spreadsheets without clean role boundaries or unified administrative visibility.',
    architecture:
      'Modeled department-isolated document collections in MongoDB Atlas with role-scoped API routes and automated academic reporting pipelines.',
    highlights: [
      'Department-isolated data architecture preserving administrative privacy',
      'Automated academic record processing and reporting workflows',
      'Scalable cloud database design via MongoDB Atlas',
    ],
    image: '/src/assets/images/project_ecommerce_engine_1794887109905.jpg',
    imageAlt: 'Tactile workstation running centralized full-stack academic platform architecture',
    featured: true,
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'raasc-ieee',
    title: 'Reality-Aware Agentic Surveillance (RAASC)',
    category: 'ai',
    categoryLabel: 'AI / Research (IEEE)',
    year: '2025',
    organization: 'IEEE Co-Authored Research',
    role: 'Co-Author & AI Researcher',
    stack: ['Computer Vision', 'Multi-Agent AI', 'Deep Learning', 'IEEE'],
    summary:
      'AI-powered vision architecture that perceives and interprets complex scenes rather than merely recording video, enabling context-aware incident detection.',
    outcome: 'Co-authored IEEE research paper and award-winning prototype.',
    recognition: 'IEEE Paper · Award Winner',
    challenge:
      'Conventional surveillance cameras store passive video streams without semantic awareness of environmental context or anomalous behavior.',
    architecture:
      'Combined frame-level computer vision detectors with agentic context fusion to evaluate scene state transitions and flag actionable incidents.',
    highlights: [
      'Co-authored formal IEEE paper detailing the RAASC framework',
      'Context-aware incident classification minimizing noisy alerts',
      'Direct conceptual foundation for BLACKBOX-AI production pipelines',
    ],
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'careerfit-ai',
    title: 'CareerFit AI — Resume–Job Fit Predictor',
    category: 'ai',
    categoryLabel: 'ML & NLP',
    year: '2026',
    organization: 'AI / ML Engineering',
    role: 'ML Engineer',
    stack: ['Python', 'NLP', 'Scikit-learn', 'RandomForest'],
    summary:
      'Machine learning scoring engine that extracts semantic features from candidate resumes and job descriptions using NLP and a RandomForest classifier.',
    outcome: 'Achieved 95% classification accuracy across benchmark resume-role evaluations.',
    recognition: '95% Model Accuracy',
    challenge:
      'Naive keyword matching misses transferable domain skills and produces noisy fit scores across varying resume formats.',
    architecture:
      'Implemented an NLP preprocessing and vector feature extraction pipeline feeding a tuned RandomForest classifier for interpretable role-fit scoring.',
    highlights: [
      '95% measured prediction accuracy on validation datasets',
      'NLP skill and domain feature extraction pipeline in Python',
      'Fast, lightweight inference with Scikit-learn',
    ],
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'smart-parking-iot',
    title: 'Smart Car Parking System — IoT Automation',
    category: 'iot',
    categoryLabel: 'IoT & Embedded',
    year: '2025',
    organization: 'National Level Symposium',
    role: 'IoT Systems Engineer',
    stack: ['ESP32', 'IR Sensors', 'IoT', 'Live Dashboard'],
    summary:
      'Hardware-software IoT parking automation system using ESP32 microcontrollers and infrared sensors for real-time bay occupancy tracking and live dashboard updates.',
    outcome: 'Won 1st Place at National Level Technical Symposium.',
    recognition: '1st Place — National Symposium',
    challenge:
      'Drivers waste fuel and time circling congested parking structures without accurate, real-time slot visibility.',
    architecture:
      'Wired calibrated IR sensor arrays to an ESP32 telemetry node streaming live slot occupancy updates to a responsive web status dashboard.',
    highlights: [
      'Real-time slot occupancy updates with millisecond sensor polling',
      '1st Place winner at National Level Symposium competition',
      'Compact, low-cost ESP32 hardware topology ready for campus lots',
    ],
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'bionic-arm',
    title: 'Bionic Arm — Sensor-Based Prosthetic',
    category: 'iot',
    categoryLabel: 'Robotics & Hardware',
    year: '2024',
    organization: 'Paavai Engineering College',
    role: 'Robotics Designer',
    stack: ['ESP32', 'Arduino IDE', 'Servo Control', 'Gesture Sensors'],
    summary:
      'Human-centered assistive prosthetic upper-limb arm powered by ESP32 and adaptive servo actuation with sensor-driven gesture recognition.',
    outcome: 'Won 2nd Place at Intra-College Project Expo for social impact and engineering.',
    recognition: '2nd Place — Intra-College Expo',
    challenge:
      'Commercial myoelectric prosthetics remain cost-prohibitive for many upper-limb amputees seeking functional daily grip assistance.',
    architecture:
      'Mapped analog gesture sensor signals through an ESP32 microcontroller to coordinated multi-servo finger articulation profiles.',
    highlights: [
      'Adaptive servo control calibrated for responsive grip patterns',
      'Real-time gesture recognition via embedded sensor inputs',
      'Recognized for affordable assistive robotics engineering',
    ],
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'autonomous-car',
    title: 'Autonomous Car Concept',
    category: 'iot',
    categoryLabel: 'Autonomous Systems',
    year: '2024',
    organization: 'Kavery College of Technology',
    role: 'Lead Presenter & Builder',
    stack: ['AI Navigation', 'Sensors', 'Obstacle Avoidance', 'Path Planning'],
    summary:
      'National award-winning autonomous vehicle architecture combining sensor-driven navigation, obstacle avoidance, and real-time path planning.',
    outcome: 'Awarded 1st Place at National Level Symposium (4 November 2024).',
    recognition: '1st Place — Kavery Tech Symposium',
    challenge:
      'Reliable autonomous navigation in dynamic environments requires fusing obstacle distance sensing with deterministic path-planning decisions.',
    architecture:
      'Designed an embedded navigation pipeline pairing multi-sensor obstacle detection with real-time steering and velocity control logic.',
    highlights: [
      '1st Place Winner among national paper & prototype presenters',
      'Low-latency obstacle avoidance and dynamic path re-routing',
      'Validated sensor fusion approach for compact mobile platforms',
    ],
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'nexora-helix-vision',
    title: 'Nexora Helix Vision — AI Camera App',
    category: 'ai',
    categoryLabel: 'Mobile AI & Vision',
    year: '2026',
    organization: 'Mobile AI Engineering',
    role: 'Android & AI Developer',
    stack: ['Kotlin', 'CameraX', 'Gemini API', 'Android'],
    summary:
      'Android camera application integrating Google CameraX and the Gemini API for real-time AI-powered scene understanding and visual analysis.',
    outcome: 'Brings low-latency multimodal scene interpretation directly to mobile devices.',
    recognition: 'Active Mobile AI Build',
    challenge:
      'Standard mobile cameras capture pixels without offering instant contextual reasoning about objects, text, or surroundings.',
    architecture:
      'Built a Kotlin CameraX capture pipeline streaming structured visual frames to Gemini multimodal endpoints for real-time on-screen analysis.',
    highlights: [
      'Native Kotlin & CameraX frame pipeline for smooth mobile capture',
      'Real-time visual scene understanding via Gemini API',
      'Designed for instant contextual feedback in everyday environments',
    ],
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'voltex-arena',
    title: "Voltex Arena — Circuit Survival Game (Techfinix'26)",
    category: 'fullstack',
    categoryLabel: 'Interactive Competition',
    year: '2026',
    organization: "Techfinix'26 · Dept. of CSE-IoT, Paavai",
    role: 'Game & Challenge Architect',
    stack: ['Electronics', 'Circuit Design', 'Game Dev', 'Web'],
    summary:
      "Multi-round technical competition platform built for Techfinix'26 National-Level Symposium where participants identify circuits and solve electronics/programming challenges under time pressure.",
    outcome: "Hosted live multi-round technical competition for Techfinix'26 participants.",
    recognition: "Techfinix'26 National Symposium",
    challenge:
      'Traditional technical quizzes lack engaging real-time circuit reasoning and time-boxed survival mechanics.',
    architecture:
      'Created structured round progression, live countdown constraints, and circuit fault-identification challenges blending electronics and programming.',
    highlights: [
      "Specially engineered for Dept. of CSE-IoT, Techfinix'26 Symposium",
      'Tests circuit analysis and coding skills under timed elimination',
      'Engaging interactive UI built for live symposium rounds',
    ],
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'circuit-draft',
    title: "Circuit Draft — Component Auction Game (Techfinix'26)",
    category: 'fullstack',
    categoryLabel: 'Strategy & Electronics',
    year: '2026',
    organization: "Techfinix'26 · Dept. of CSE-IoT, Paavai",
    role: 'Game Systems Designer',
    stack: ['Electronics', 'Strategy Logic', 'Game Design', 'Web'],
    summary:
      "Auction-based technical game developed for Techfinix'26 where competing teams bid on electronic components within a virtual budget to assemble working circuits.",
    outcome: "Delivered an interactive resource-strategy engineering challenge at Techfinix'26.",
    recognition: "Techfinix'26 National Symposium",
    challenge:
      'Students rarely practice hardware component budgeting alongside practical circuit architecture under competitive constraints.',
    architecture:
      'Engineered virtual budget tracking, live component bidding rounds, and circuit assembly validation scoring.',
    highlights: [
      'Combines virtual budget strategy with real electronic component specs',
      "Custom built for Techfinix'26 National-Level Symposium",
      'Promotes collaborative hardware-design thinking under constraints',
    ],
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
  {
    id: 'pythonai-error-corrector',
    title: 'PythonAI Error Detector & Corrector',
    category: 'ai',
    categoryLabel: 'AI Developer Tool',
    year: '2025',
    organization: 'Developer Tooling',
    role: 'Creator',
    stack: ['Python', 'AI', 'NLP', 'Static Analysis'],
    summary:
      'Intelligent developer utility that parses Python source code, diagnoses syntax and logical bugs, and automatically proposes AI-assisted fixes.',
    outcome: 'Award-winning tool accelerating Python debugging and learning workflows.',
    recognition: 'Award Winner',
    challenge:
      'Beginners and rapid-prototyping engineers spend disproportionate time deciphering stack traces and subtle Python runtime bugs.',
    architecture:
      'Combined Python AST diagnostics with NLP-powered correction synthesis to highlight root causes and emit ready-to-apply patches.',
    highlights: [
      'Automated bug localization across Python scripts',
      'Context-aware fix recommendations shortening debug cycles',
      'Clean CLI/web workflow built for everyday Python development',
    ],
    repoUrl: 'https://github.com/IrfanCodesPro',
  },
];

export const EXPERTISE_DOMAINS: ExpertiseDomain[] = [
  {
    id: 'ai',
    title: 'AI / ML & Agentic Systems',
    subtitle: 'Multi-Agent AI · Computer Vision · TensorFlow · LLMs',
    summary:
      'Designing autonomous reasoning pipelines, deep learning classifiers, and real-time computer vision systems that act reliably in production.',
    tools: [
      'TensorFlow',
      'Scikit-learn',
      'OpenCV',
      'Multi-Agent Systems',
      'Groq API',
      'Gemini API',
      'Claude API',
      'NLP',
      'Deep Learning',
    ],
    standards: [
      {
        label: 'Agentic Pipelines',
        detail: 'Decomposing complex workflows into specialized plan, build, verify, and act agents.',
      },
      {
        label: 'Vision Intelligence',
        detail: 'Real-time OpenCV detection combined with semantic scene understanding (RAASC & BLACKBOX-AI).',
      },
      {
        label: 'Applied ML',
        detail: '95%-accurate RandomForest NLP scoring and TensorFlow image/signal classification models.',
      },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack & Databases',
    subtitle: 'FastAPI · Flask · React · MongoDB Atlas · WebSocket',
    summary:
      'Building clean backend APIs, real-time WebSocket streams, and tactile, accessible web interfaces backed by reliable cloud and local storage.',
    tools: [
      'FastAPI',
      'Flask',
      'React',
      'Tailwind CSS',
      'REST APIs',
      'WebSocket',
      'MongoDB Atlas',
      'Firebase Studio',
      'SQLite',
    ],
    standards: [
      {
        label: 'API Architecture',
        detail: 'Predictable FastAPI and Flask endpoints engineered for low latency and clear error contracts.',
      },
      {
        label: 'Accessible UI/UX',
        detail: 'WCAG AA compliant dark/light themes, keyboard parity, and calm responsive layout systems.',
      },
      {
        label: 'Data Modeling',
        detail: 'Department-isolated MongoDB Atlas collections and dependable SQLite edge storage.',
      },
    ],
  },
  {
    id: 'iot',
    title: 'Embedded, IoT & Robotics',
    subtitle: 'ESP32 · Raspberry Pi · Arduino · Sensors · Calibration',
    summary:
      'Bridging physical hardware and cloud intelligence through sensor fusion, microcontroller firmware, robotic arm calibration, and mobile vision.',
    tools: [
      'ESP32',
      'Raspberry Pi',
      'Arduino Mega / IDE',
      'IR & Gesture Sensors',
      'Servo Actuation',
      'Robotic Calibration',
      'Kotlin / CameraX',
    ],
    standards: [
      {
        label: 'Hardware Telemetry',
        detail: 'Real-time IR and industrial sensor streams connected directly to web dashboards.',
      },
      {
        label: 'Assistive Robotics',
        detail: 'Adaptive servo actuation and Raspberry Pi calibration validated in lab and industry.',
      },
      {
        label: 'Field Readiness',
        detail: 'Tested under real production conditions at Rajshree Sugars and 3D Printz.',
      },
    ],
  },
  {
    id: 'foundations',
    title: 'Languages, Tooling & CS Core',
    subtitle: 'Python · JavaScript · C/C++ · Kotlin · DSA · OOP',
    summary:
      'Grounded in strong computer science fundamentals, clean tooling habits, and fast iteration across desktop, web, mobile, and browser extensions.',
    tools: [
      'Python',
      'JavaScript',
      'C / C++',
      'Kotlin',
      'R',
      'HTML5 / CSS3',
      'Git / GitHub',
      'VS Code & Antigravity',
      'Chrome Extensions',
    ],
    standards: [
      {
        label: 'CS Fundamentals',
        detail: 'Data Structures, Algorithms, and Object-Oriented Programming applied to every system.',
      },
      {
        label: 'Developer Velocity',
        detail: 'Clean Git workflows, Antigravity & VS Code mastery, and automated tooling.',
      },
      {
        label: 'Cross-Platform',
        detail: 'Shipping seamlessly across Python servers, React web apps, Android CameraX, and extensions.',
      },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Present',
    role: 'Software & AI/ML Lead',
    organization: 'Unified Automations & Tech Solutions (UATS)',
    location: 'Tamil Nadu, India',
    summary:
      'Co-leading engineering and product direction for agentic AI systems and intelligent automation tools built for real-world deployment.',
    outcomes: [
      'Architected AutoDev AI (6-agent autonomous code generator reducing dev effort by 80%+)',
      "Engineered BLACKBOX-AI real-time agentic surveillance system (3rd Place, KANAM'26 Expo)",
    ],
  },
  {
    period: 'Mar 2026 — Apr 2026',
    role: 'Robotics and Automation Intern',
    organization: '3D Printz',
    location: 'India',
    summary:
      'Hands-on robotics engineering focused on physical arm assembly, embedded calibration, and reliable automation control.',
    outcomes: [
      'Executed robotic arm mechanical assembly and actuator alignment',
      'Calibrated Raspberry Pi controllers and authored automation control scripts',
    ],
  },
  {
    period: 'Jun 2025 — Jul 2025',
    role: 'Industrial Intern',
    organization: 'Rajshree Sugars & Chemicals Ltd.',
    location: 'Tamil Nadu, India',
    summary:
      'Embedded inside live manufacturing operations to evaluate process bottlenecks and deploy IoT-driven industrial monitoring.',
    outcomes: [
      'Identified and implemented IoT-based automation solutions for industrial process monitoring',
      'Validated sensor telemetry workflows inside real-time production environments',
    ],
  },
  {
    period: 'Jan 2025 — Mar 2025',
    role: 'AI / ML Intern',
    organization: 'EduSkills',
    location: 'Remote',
    summary:
      'Focused deep learning internship building, training, and evaluating neural classification pipelines.',
    outcomes: [
      'Developed and trained deep learning models using TensorFlow for structured classification tasks',
      'Applied data preprocessing, model tuning, and accuracy evaluation workflows',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering — Computer Science & Engineering (IoT)',
    institution: 'Paavai Engineering College, Namakkal (Anna University)',
    detail: 'Final-Year · CGPA: 7.56',
    period: '2023 — 2027',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Government Model Higher Secondary School',
    detail: 'Score: 70%',
    period: '2022 — 2023',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Government Higher Secondary School',
    detail: 'Completed Secondary Education',
    period: '2020 — 2021',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'OS – Bug Bounty Challenge (National-Level Competition)',
    issuer: 'C-DAC',
    date: 'July 2026',
  },
  {
    title: 'AI Integrated IoT: Concepts, Architectures & Applications Workshop',
    issuer: 'Paavai Innovation Forum',
    date: 'Apr 2026',
  },
  {
    title: "iStart Hackathon'26 — 24-Hour Grand Innovation Challenge",
    issuer: 'StartupTN',
    date: 'Mar 2026',
  },
  {
    title: 'Hands-on Quantum Coding with IBM Qiskit Workshop',
    issuer: "KANAM'26 · Dr. NGP Institute of Technology",
    date: 'Jan 2026',
  },
  {
    title: 'ICATS’25 — International Conference on Adaptive Technologies for Sustainable Growth ("The Era of AI")',
    issuer: 'Paavai Engineering College',
    date: 'May 2025',
  },
];

export const INFO_ROWS: InfoRow[] = [
  { label: 'Full Name', value: 'Irfan S' },
  { label: 'Role', value: 'Agentic AI Developer · AI/ML Engineer · Full-Stack & IoT Engineer' },
  { label: 'Organization', value: 'Unified Automations & Tech Solutions (UATS) — Software & AI/ML Lead' },
  { label: 'College', value: 'Paavai Engineering College, Namakkal' },
  { label: 'University', value: 'Anna University' },
  { label: 'Degree', value: 'B.E — Computer Science & Engineering (IoT)' },
  { label: 'Academic Standing', value: 'Final Year · 2023 – 2027 · CGPA: 7.56' },
  { label: 'Location', value: 'Kallakurichi, Tamil Nadu, India' },
  { label: 'Email', value: 'shairfan2005@gmail.com', href: 'mailto:shairfan2005@gmail.com' },
  { label: 'Phone', value: '+91 7200621273', href: 'tel:+917200621273' },
  { label: 'GitHub', value: 'github.com/IrfanCodesPro', href: 'https://github.com/IrfanCodesPro' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/irfan-s-438844300',
    href: 'https://linkedin.com/in/irfan-s-438844300',
  },
  { label: 'IEEE Paper', value: 'RAASC — Reality-Aware Agentic Surveillance Camera System (Co-authored)' },
  { label: 'Availability', value: 'Open for Opportunities', highlight: true },
];
