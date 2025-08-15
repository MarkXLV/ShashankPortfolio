import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Conversational AI Marketing Chatbot",
      description: "A single-page, WhatsApp-style chatbot for marketing support featuring Clerk authentication, product metadata ingestion, guardrails (off-topic, competitor negativity, profanity), OpenAI integration, and persistent chat history.",
             tech: ["Next.js 14", "FastAPI", "Python", "OpenAI API", "Clerk Auth", "SQLite"],
       impact: "Full-stack application with modern authentication, AI-powered conversations, and custom safety guardrails for marketing teams",
       features: [
         "Clerk authentication system",
         "Product metadata ingestion",
         "AI-powered conversations with OpenAI",
         "Custom guardrails for safety",
         "Persistent chat history",
         "Docker containerization"
       ],
       github: "https://github.com/MarkXLV/MarketingAgent",
       readme: "https://github.com/MarkXLV/MarketingAgent#readme",
       liveDemo: "https://marketing-agents-frontend.onrender.com/"
    },
    {
      title: "Amazon Discount Notifier",
      description: "A Python-based web scraping tool that monitors Amazon product prices and notifies users when prices drop. Built using Scrapy framework with MySQL database integration.",
      tech: ["Python 3.10+", "Scrapy", "MySQL", "Web Scraping", "Price Monitoring", "Data Processing"],
      impact: "Automated price monitoring system that scrapes product data, calculates normalized ratings, and sends notifications for price drops",
      features: [
        "Amazon product data scraping",
        "Price, rating, and review extraction",
        "Normalized rating calculations",
        "MySQL database storage",
        "Price drop notifications",
        "Multi-category support"
      ],
             github: "https://github.com/MarkXLV/AmazonNotifier",
       readme: "https://github.com/MarkXLV/AmazonNotifier#readme",
              liveDemo: null
     }
   ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects I&apos;ve worked on, showcasing my skills in backend development, 
              MLOps, and full-stack applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-blue-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700/50 text-blue-300 rounded-full text-sm border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-200 font-medium mb-4">{project.impact}</p>
                
                {/* Features List */}
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-105 border border-gray-600"
                  >
                    <Github size={16} />
                    View Code
                  </Link>
                  <Link
                    href={project.readme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Read More
                  </Link>
                  {project.liveDemo && (
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
