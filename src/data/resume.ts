export const personalInfo = {
  name: "Shashank Tiwari",
  title: "AI Engineer",
  phone: "+91-8591194172",
  email: "tiwari.shashank.85911@gmail.com",
  linkedin: "https://linkedin.com/in/shashanktiwari11",
  github: "https://github.com/MarkXLV",
  website: "shashank-portfolio-woad.vercel.app",
  location: "Hyderabad, India",
  summary:
    "AI Engineer specializing in RL infrastructure and LLM agent systems \u2014 built production platforms serving Microsoft and Google, and fine-tuned sub-billion parameter models to within 2% of GPT-4o-mini. Experienced across the full post-training stack: data collection, reward design, agent orchestration, and evaluation on Kubernetes.",
};

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "DeccanAI",
    role: "AI & Backend Engineer",
    location: "Hyderabad, India",
    period: "Oct 2025 \u2013 Present",
    bullets: [
      "Built a production RL platform (Python, FastAPI) for human-in-the-loop golden trajectory generation, coordinating 500+ annotators and driving $10M ARR.",
      "Architected Stark-Forge, a distributed backend framework that runs isolated services on Kubernetes; added pluggable SQL, JSON, and Python verification services with support for multiple agent runtimes.",
      "Designed evaluation and verification pipelines by defining success criteria and automated checks for SQL and code tasks, improving end-to-end task success rate from 41% to 68%.",
      "Owned delivery of 20+ production MCP servers that generated verified execution traces; the Jira MCP server handles 10,000+ requests/day in production evaluation pipelines used by Microsoft and Google.",
      "Fine-tuned Qwen-0.5B for text-to-SQL on Spider using Agent-Lightning, reaching within 2% of GPT-4o-mini accuracy with 3\u00d7 smaller scale and 10\u00d7 lower inference cost.",
    ],
  },
  {
    company: "Deutsche Bank",
    role: "Software Engineer",
    location: "Pune, India",
    period: "Jul 2024 \u2013 Oct 2025",
    bullets: [
      "Architected a RESTful ETL pipeline (Spring Boot, Airflow, SQL) automating 10,000+ alerts/day across financial workflows; reduced data load time by 40% and freed 3 ops engineers for higher-value work.",
      "Engineered high-concurrency microservices with Memcached and Java ExecutorService for business-critical internal systems; reduced outages by 30% and improved P99 latency from 820ms to 310ms for 5,000+ daily users.",
    ],
  },
  {
    company: "AiDash",
    role: "Machine Learning Engineer Intern",
    location: "Bengaluru, India",
    period: "Jan 2024 \u2013 Jul 2024",
    bullets: [
      "Built a Python ML SDK abstracting Kubeflow and Airflow; compressed pipeline setup from 2 days to 3 hours, adopted by 12+ data scientists with 30% faster experiment cycles.",
      "Developed a human-in-the-loop Annotation Service with QGIS for raster validation; eliminated 40% of manual GIS effort across 8 annotation campaigns.",
    ],
  },
];

export interface Project {
  title: string;
  tech: string[];
  description: string;
  bullets: string[];
  github: string | null;
  liveDemo: string | null;
}

export const projects: Project[] = [
  {
    title: "Finwise",
    tech: ["Next.js", "FastAPI", "LangChain"],
    description:
      "AI-powered financial assistant with multi-tool agent orchestration, real-time streaming, and a Next.js frontend — built for 100+ concurrent sessions.",
    bullets: [
      "Built a low-latency FastAPI backend with async request handling, streaming responses, and LangChain tool orchestration.",
      "Supported 100+ concurrent sessions at sub-500ms P99 latency.",
    ],
    github: "https://github.com/MarkXLV/Finwise",
    liveDemo: "https://finwise-demo.vercel.app",
  },
  {
    title: "Price Watch",
    tech: ["Python", "Scrapy", "MySQL"],
    description:
      "Automated price monitoring system that scrapes product listings and sends alerts on price drops.",
    bullets: [
      "Scraped and tracked 50,000+ product listings with automated price-drop alerts.",
      "Delivered 15% average buyer savings per triggered purchase across 200+ active users.",
    ],
    github: "https://github.com/MarkXLV/AmazonNotifier",
    liveDemo: "https://pricewatch-ui.onrender.com/",
  },
];

export const education = {
  institution: "Indian Institute of Information Technology Allahabad",
  degree: "Bachelor of Technology in Electronics & Communication Engineering",
  period: "Nov 2020 \u2013 May 2024",
  cgpa: "8.80/10.0",
};

export const skills: Record<string, string[]> = {
  "AI & ML": [
    "Reinforcement Learning",
    "LLMs",
    "SFT",
    "RLHF",
    "Post-training",
    "Fine-tuning",
    "Reward Design",
    "Evaluation",
  ],
  "Agent Systems": [
    "LangChain",
    "AutoGen",
    "CrewAI",
    "Agent-Lightning",
    "MCP",
    "Tool-use Agents",
    "Multi-Agent Orchestration",
  ],
  "ML Infra & Cloud": [
    "Kubeflow",
    "Airflow",
    "Distributed Training",
    "Kubernetes",
    "AWS",
    "GCP",
    "Docker",
    "Jenkins",
    "CI/CD",
  ],
  Languages: ["Python", "Java", "TypeScript", "JavaScript", "C/C++", "SQL"],
  Backend: [
    "FastAPI",
    "Spring Boot",
    "Django",
    "REST APIs",
    "Microservices",
  ],
  Databases: ["PostgreSQL", "MySQL", "Oracle", "Memcached"],
  Concepts: [
    "Distributed Systems",
    "System Design",
    "DSA",
    "Async Processing",
    "Data Pipelines",
  ],
};

export const achievements = [
  {
    category: "Academic Distinction",
    items: [
      "JEE Main 99.34 percentile",
      "JEE Advanced AIR ~9,000",
    ],
  },
  {
    category: "Hackathons",
    items: [
      "Top 33 of 1,000+ teams (top 3.3%) at Hack In the North HINT-5.0",
      "Rank 2 at Hackout '22",
    ],
  },
  {
    category: "Competitive Programming",
    items: [
      "Codeforces 1549 (Specialist, top 15%)",
      "CodeChef 1982 (4-Star, top 5%)",
      "Google Kick Start 2022 rank 1636",
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic Education",
    date: "May 2026",
    url: "https://verify.skilljar.com/c/6ubxjxjvfh6o",
  },
  {
    name: "Building with the Claude API",
    issuer: "Anthropic Education",
    date: "May 2026",
    url: "https://verify.skilljar.com/c/gyy8r7ndu5qa",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic Education",
    date: "May 2026",
    url: "https://verify.skilljar.com/c/jzz2t5v2fxuu",
  },
  {
    name: "Introduction to Agent Skills",
    issuer: "Anthropic Education",
    date: "May 2026",
    url: "https://verify.skilljar.com/c/4tju67fvmby8",
  },
];

export const codingProfiles = [
  {
    platform: "Codeforces",
    username: "codeme_123",
    url: "https://codeforces.com/profile/codeme_123",
    rating: "1549",
    rank: "Specialist",
    highlight: "Top 15%",
    color: "from-orange-500 to-red-500",
  },
  {
    platform: "CodeChef",
    username: "codeme_2802",
    url: "https://www.codechef.com/users/codeme_2802",
    rating: "1982",
    rank: "4-Star",
    highlight: "Top 5%",
    color: "from-green-500 to-emerald-500",
  },
  {
    platform: "LeetCode",
    username: "sstiwari2802",
    url: "https://leetcode.com/sstiwari2802/",
    rating: "",
    rank: "",
    highlight: "DSA Practice",
    color: "from-yellow-500 to-orange-500",
  },
  {
    platform: "Google Kick Start",
    username: "",
    url: "https://codingcompetitions.withgoogle.com/kickstart",
    rating: "",
    rank: "Rank 1636",
    highlight: "2022",
    color: "from-blue-500 to-cyan-500",
  },
];

export const stats = [
  { label: "Annotators Coordinated", value: "500+" },
  { label: "MCP Servers Delivered", value: "20+" },
  { label: "Requests / Day (Prod)", value: "10K+" },
  { label: "Gap vs GPT-4o-mini", value: "≤2%" },
];
