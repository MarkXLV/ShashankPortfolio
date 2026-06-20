'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import ExperienceCard from '@/components/ExperienceCard';
import SkillCategory from '@/components/SkillCategory';
import { personalInfo, experiences, education, skills, achievements, certifications } from '@/data/resume';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ─── INTRO ─── */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="About Me"
              gradient="from-blue-400 to-cyan-400"
              subtitle="My professional journey, skills, and what drives me"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="glass-card p-8 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── EXPERIENCE TIMELINE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Work Experience"
              gradient="from-purple-400 to-pink-400"
            />
          </AnimatedSection>

          <div className="ml-4">
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
            <SectionHeading
              title="Education"
              gradient="from-green-400 to-emerald-400"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20 shrink-0">
                  <GraduationCap size={24} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {education.institution}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">{education.degree}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span>CGPA: {education.cgpa}</span>
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Certifications"
              gradient="from-indigo-400 to-purple-400"
              subtitle="Verified credentials from Anthropic Education"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.url}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 flex items-start gap-4 group hover:border-indigo-500/40 transition-colors"
              >
                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 shrink-0">
                  <BadgeCheck size={24} className="text-indigo-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white mb-1 flex items-center gap-1.5">
                    <span className="group-hover:text-indigo-300 transition-colors">
                      {cert.name}
                    </span>
                    <ExternalLink
                      size={14}
                      className="text-gray-500 group-hover:text-indigo-400 transition-colors shrink-0"
                    />
                  </h3>
                  <p className="text-indigo-400 text-sm font-medium">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
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
            <SectionHeading
              title="Achievements"
              gradient="from-yellow-400 to-orange-400"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card p-6"
              >
                <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-4">
                  {a.category}
                </h3>
                <ul className="space-y-2">
                  {a.items.map((item, j) => (
                    <li key={j} className="text-gray-300 text-sm flex gap-2.5">
                      <span className="text-yellow-400/60 mt-0.5 shrink-0">&#9656;</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Skills Matrix"
              gradient="from-blue-400 to-cyan-400"
              subtitle="Technologies across the full AI and backend stack"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, list], i) => (
              <SkillCategory key={category} category={category} skills={list} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
