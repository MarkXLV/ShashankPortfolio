import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, Trophy, Code, Brain, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Shashank Tiwari
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Software Engineer passionate about building scalable backend systems and MLOps pipelines. 
              Specialized in Java, Python, Spring Boot, FastAPI, AWS, Docker, and Kubernetes.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Resume
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                href="#coding-profiles"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Coding Profiles
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/MarkXLV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 hover:bg-gray-800/50 rounded-full hover:scale-110"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shashank-tiwari-916234244"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 hover:bg-gray-800/50 rounded-full hover:scale-110"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="mailto:tiwari.shashank.85911@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-2 hover:bg-gray-800/50 rounded-full hover:scale-110"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding-profiles" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Coding Profiles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My competitive programming journey and algorithmic problem-solving skills across various platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                platform: "Codeforces",
                username: "codeme_123",
                url: "https://codeforces.com/profile/codeme_123",
                icon: Code,
                color: "bg-orange-500",
                description: "Competitive programming platform with algorithmic challenges",
                achievements: ["Global Rank 1636 in Google Kick Start 2022"]
              },
              {
                platform: "CodeChef",
                username: "codeme_2802",
                url: "https://www.codechef.com/users/codeme_2802",
                icon: Trophy,
                color: "bg-green-500",
                description: "Programming contests and practice problems",
                achievements: ["Global Rank 6 in CodeChef Starters 30 (Aug 2022)"]
              },
              {
                platform: "LeetCode",
                username: "sstiwari2802",
                url: "https://leetcode.com/sstiwari2802/",
                icon: Brain,
                color: "bg-blue-500",
                description: "Coding interview preparation and practice",
                achievements: ["Data Structures & Algorithms practice"]
              },
              {
                platform: "InterviewBit",
                username: "shashank-tiwari_277",
                url: "https://www.interviewbit.com/profile/shashank-tiwari_277/",
                icon: Target,
                color: "bg-purple-500",
                description: "Coding interview preparation and company-specific problems",
                achievements: ["Interview preparation practice", "Company-specific coding challenges"]
              }
            ].map((profile, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-blue-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${profile.color} p-3 rounded-lg shadow-lg`}>
                    <profile.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{profile.platform}</h3>
                    <p className="text-gray-400 text-sm">@{profile.username}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm">{profile.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Achievements:</h4>
                  <ul className="space-y-1">
                    {profile.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-105"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Java & Spring Boot', 'Python & FastAPI', 'AWS & Cloud', 'Docker & Kubernetes',
              'Apache Airflow', 'PostgreSQL', 'MLOps & AI', 'Microservices'
            ].map((skill, index) => (
              <div 
                key={skill} 
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-700 hover:border-blue-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-gray-300 font-medium hover:text-blue-400 transition-colors">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
