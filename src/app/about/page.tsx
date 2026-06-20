'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ExperienceCard from '@/components/ExperienceCard';
import { personalInfo, experiences, education, skills, achievements, certifications } from '@/data/resume';

function SectionLabel({ cmd, title }: { cmd: string; title: string }) {
  return (
    <div className="mb-10 font-mono">
      <div className="text-xs mb-2" style={{ color: '#8b949e' }}>
        <span style={{ color: '#00ff41' }}>❯</span> {cmd}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#c9d1d9' }}>{title}</h2>
      <div className="green-divider mt-4" />
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: '#0d1117' }}>

      {/* ─── INTRO ─── */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="font-mono mb-10">
              <div className="text-xs mb-2" style={{ color: '#8b949e' }}>
                <span style={{ color: '#00ff41' }}>❯</span> cat about.txt
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#c9d1d9' }}>About Me</h1>
              <div className="green-divider mt-4" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#febc2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="ml-3 text-xs font-mono" style={{ color: '#8b949e' }}>about.txt</span>
              </div>
              <div className="p-6 font-mono">
                <div className="text-xs mb-3" style={{ color: '#8b949e' }}>
                  <span style={{ color: '#00ff41' }}>❯</span> cat about.txt
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#c9d1d9' }}>
                  {personalInfo.summary}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(22,27,34,0.5)', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d' }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionLabel cmd="cat experience.log" title="Work Experience" />
          </AnimatedSection>
          <div className="ml-3">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionLabel cmd="cat education.txt" title="Education" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#febc2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="ml-3 text-xs font-mono" style={{ color: '#8b949e' }}>education.txt</span>
              </div>
              <div className="p-6 font-mono">
                <div className="flex items-start gap-2 mb-1">
                  <span style={{ color: '#00ff41' }}>$</span>
                  <span className="text-sm font-bold" style={{ color: '#c9d1d9' }}>{education.institution}</span>
                </div>
                <div className="text-xs mb-3" style={{ color: '#00bfff' }}>{education.degree}</div>
                <div className="flex flex-wrap gap-4 text-xs" style={{ color: '#8b949e' }}>
                  <span>CGPA: <span style={{ color: '#00ff41' }}>{education.cgpa}</span></span>
                  <span>{education.period}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(22,27,34,0.5)', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d' }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionLabel cmd="ls certifications/" title="Certifications" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.url}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="terminal-card p-5 flex items-start gap-4 group"
              >
                <div
                  className="p-2 rounded shrink-0"
                  style={{ background: 'rgba(0,255,65,0.08)', border: '1px solid rgba(0,255,65,0.2)' }}
                >
                  <BadgeCheck size={18} style={{ color: '#00ff41' }} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold font-mono flex items-center gap-1.5 mb-1" style={{ color: '#c9d1d9' }}>
                    <span>{cert.name}</span>
                    <ExternalLink size={12} style={{ color: '#8b949e' }} />
                  </h3>
                  <p className="text-xs font-mono" style={{ color: '#00ff41' }}>{cert.issuer}</p>
                  <p className="text-xs font-mono mt-1" style={{ color: '#8b949e' }}>{cert.date}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionLabel cmd="cat achievements.json | jq" title="Achievements" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {achievements.map((a, i) => (
              <motion.div
                key={a.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="terminal-card p-5 font-mono"
              >
                <div className="text-xs mb-4" style={{ color: '#00ff41' }}>
                  # {a.category.toLowerCase()}
                </div>
                <ul className="space-y-2">
                  {a.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: '#8b949e' }}>
                      <span style={{ color: '#00ff41', flexShrink: 0 }}>›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS MATRIX ─── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(22,27,34,0.5)', borderTop: '1px solid #21262d' }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionLabel cmd="ls skills/ --verbose" title="Skills Matrix" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skills).map(([category, list], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="terminal-card p-5 font-mono"
              >
                <div className="text-xs mb-4" style={{ color: '#00ff41' }}>
                  # {category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {list.map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
