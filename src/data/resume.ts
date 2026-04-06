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
      "Built a production RL Gym platform (Python, FastAPI) coordinating 500+ annotators for SFT data collection; designed task queuing logic that slashed annotation turnaround by 35%.",
      "Architected Stark-Forge, an RL training framework running MCP servers on Kubernetes with process-level isolation; supports LangChain, AutoGen, and CrewAI with pluggable verifiers (SQL, JSON, Python).",
      "Designed reward functions and evaluation pipelines for agent tasks \u2014 defined success criteria, failure taxonomies, and auto-verifiers, improving task success rate from 41% to 68% across SQL and code benchmarks.",
      "Delivered 20+ production MCP servers generating verified golden trajectories; Jira MCP server handles 10,000+ requests/day for agent evaluation pipelines at Microsoft and Google.",
      "Fine-tuned Qwen-0.5B for text-to-SQL on Spider using Agent-Lightning; within 2% of GPT-4o-mini accuracy at 3\u00d7 smaller scale and 10\u00d7 lower inference cost.",
    ],
  },
  {
    company: "Deutsche Bank",
    role: "Software Engineer",
    location: "Pune, India",
    period: "Jul 2024 \u2013 Oct 2025",
    bullets: [
      "Architected a RESTful ETL pipeline (Spring Boot + Airflow) automating 10,000+ alerts/day; reduced data load time by 40% and freed 3 ops engineers for higher-value work.",
      "Engineered high-concurrency microservices with Memcached and Java ExecutorService; reduced outages by 30% and drove P99 latency from 820ms to 310ms for 5,000+ daily users.",
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
      "ReAct-style multi-agent system with tool registry, short-term memory, and financial data retrieval.",
    bullets: [
      "Handles 100+ concurrent sessions at sub-500ms latency via async FastAPI and streaming LLM responses.",
      "Multi-agent orchestration with tool registry and short-term memory for financial data retrieval.",
    ],
    github: "https://github.com/MarkXLV/Finwise",
    liveDemo: "https://finwise-demo.vercel.app",
  },
  {
    title: "Amazon Discount Notifier",
    tech: ["Python", "Scrapy", "MySQL"],
    description:
      "Automated price monitoring system that scrapes product data, calculates normalized ratings, and sends notifications for price drops.",
    bullets: [
      "Scraped and tracked 50,000+ product listings with automated price-drop alerts.",
      "Delivered 15% average buyer savings per triggered purchase across 200+ active users.",
    ],
    github: "https://github.com/MarkXLV/AmazonNotifier",
    liveDemo: null,
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
  Languages: ["Python", "Java", "C/C++", "SQL", "JavaScript"],
  Backend: [
    "FastAPI",
    "Spring Boot",
    "Django",
    "RESTful APIs",
    "Microservices",
    "JDBC",
  ],
  Databases: ["PostgreSQL", "MySQL", "Oracle", "Memcached"],
  "Concepts & Tools": [
    "System Design",
    "Distributed Systems",
    "DSA",
    "Git",
    "Postman",
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
  { label: "Annotators Managed", value: "500+" },
  { label: "MCP Servers Delivered", value: "20+" },
  { label: "Requests/Day", value: "10K+" },
  { label: "Within GPT-4o-mini", value: "2%" },
];
