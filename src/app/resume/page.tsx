'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Briefcase, GraduationCap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import { personalInfo, experiences, education, skills } from '@/data/resume';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    const link = document.createElement('a');
    link.href = '/ShashankTiwari_Resume.pdf';
    link.download = 'ShashankTiwari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="My Resume"
              gradient="from-blue-400 to-cyan-400"
              subtitle="Download or view my professional resume"
            />
          </AnimatedSection>

          {/* Download buttons */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={handleDownload}
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 disabled:opacity-50 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download size={18} />
                    Download PDF
                  </>
                )}
              </button>
              <a
                href="/ShashankTiwari_Resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-xl font-semibold border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
              >
                <Eye size={18} />
                View PDF
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── INLINE RESUME PREVIEW ─── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <AnimatedSection>
            <div className="glass-card p-8 mb-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">{personalInfo.name}</h2>
              <p className="text-blue-400 font-medium text-lg mb-3">{personalInfo.title}</p>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 mb-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase size={20} className="text-blue-400" />
                Work Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={i < experiences.length - 1 ? 'pb-8 border-b border-gray-800/50' : ''}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
                      <div>
                        <h4 className="text-white font-semibold">{exp.company}</h4>
                        <p className="text-blue-400 text-sm">{exp.role}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span>{exp.period}</span>
                        <span className="mx-2">|</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-gray-400 text-sm flex gap-2.5">
                          <span className="text-blue-400/50 mt-0.5 shrink-0">&#9656;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={0.15}>
            <div className="glass-card p-8 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <GraduationCap size={20} className="text-green-400" />
                Education
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{education.institution}</h4>
                  <p className="text-blue-400 text-sm">{education.degree}</p>
                </div>
                <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                  <span>CGPA: {education.cgpa}</span>
                  <span className="mx-2">|</span>
                  <span>{education.period}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, list]) => (
                  <div key={category}>
                    <span className="text-sm text-blue-400 font-medium">{category}: </span>
                    <span className="text-sm text-gray-400">{list.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
