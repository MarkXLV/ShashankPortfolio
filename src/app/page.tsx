'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import GradientBackground from '@/components/GradientBackground';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import SkillCategory from '@/components/SkillCategory';
import { personalInfo, stats, skills, codingProfiles, experiences } from '@/data/resume';

const roles = ['AI Engineer', 'RL Infrastructure', 'LLM Agent Systems', 'Post-Training Stack'];

function HeroTypewriter() {
  return (
    <motion.span className="inline-block">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          className="absolute left-0 right-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
          }}
          transition={{
            duration: 3,
            delay: i * 3,
            repeat: Infinity,
            repeatDelay: (roles.length - 1) * 3,
            ease: 'easeInOut',
          }}
        >
          {role}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <GradientBackground />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-6"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative h-10 sm:h-12 text-2xl sm:text-3xl font-semibold mb-8 flex items-center justify-center"
          >
            <HeroTypewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02]"
            >
              View Resume
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-xl font-semibold border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 hover:scale-[1.02]"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center gap-5"
          >
            {[
              { href: personalInfo.github, icon: Github, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-xl text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={22} />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-gray-700 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-gray-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <AnimatedSection>
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── EXPERIENCE PREVIEW ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Work Experience"
              gradient="from-blue-400 to-cyan-400"
              subtitle="Building production AI systems at scale"
            />
          </AnimatedSection>

          <div className="space-y-4">
            {experiences.slice(0, 2).map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-6 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                    <p className="text-blue-400 text-sm font-medium">{exp.role}</p>
                  </div>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {exp.bullets[0]}
                </p>
              </motion.div>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View full experience
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Technical Skills"
              gradient="from-purple-400 to-pink-400"
              subtitle="Technologies and tools I work with"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, list], i) => (
              <SkillCategory key={category} category={category} skills={list} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CODING PROFILES ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Coding Profiles"
              gradient="from-green-400 to-emerald-400"
              subtitle="Competitive programming achievements"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {codingProfiles.map((profile, i) => (
              <motion.a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-5 transition-all duration-500 group block"
              >
                <div className={`text-xs font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${profile.color} mb-3`}>
                  {profile.platform}
                </div>
                {profile.rating && (
                  <div className="text-2xl font-bold text-white mb-1">{profile.rating}</div>
                )}
                {profile.rank && (
                  <div className="text-sm text-gray-400 mb-1">{profile.rank}</div>
                )}
                <div className="text-xs text-gray-500">{profile.highlight}</div>
                <div className="mt-3 flex items-center gap-1 text-xs text-gray-600 group-hover:text-blue-400 transition-colors">
                  View profile <ExternalLink size={12} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <AnimatedSection>
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              I&apos;m always open to discussing new opportunities in AI engineering,
              RL infrastructure, and agent systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-xl font-semibold border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
