'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, GithubIcon, LinkedinIcon, Mail, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import TerminalTyping from '@/components/TerminalTyping';
import { personalInfo, stats, skills, codingProfiles, experiences } from '@/data/resume';
import { useState, useEffect } from 'react';

// Module-level: survives client-side navigation, resets on hard refresh
let heroAnimationDone = false;

export default function Home() {
  // If animation already played this session, jump straight to the final state
  const [heroStep, setHeroStep] = useState(() => heroAnimationDone ? 3 : 0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Pass to TerminalTyping so re-visits show text instantly without animation
  const skipAnim = heroAnimationDone;

  return (
    <div className="min-h-screen" style={{ background: '#0d1117' }}>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-14">

        {/* Radial green glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,65,0.035) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto w-full">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="terminal-window"
          >
            <div className="terminal-titlebar">
              <div className="terminal-dot" style={{ background: '#ff5f57' }} />
              <div className="terminal-dot" style={{ background: '#febc2e' }} />
              <div className="terminal-dot" style={{ background: '#28c840' }} />
              <span className="ml-4 text-xs font-mono" style={{ color: '#8b949e' }}>
                bash — shashank@deccan: ~
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-4 font-mono">

              {/* whoami */}
              <div className="flex items-center gap-2 text-sm">
                <span style={{ color: '#00ff41' }}>❯</span>
                <span style={{ color: '#8b949e' }}>whoami</span>
              </div>

              <div className="pl-4">
                <TerminalTyping
                  text={personalInfo.name}
                  speed={55}
                  delay={400}
                  startOnMount
                  skip={skipAnim}
                  className="text-2xl sm:text-4xl font-bold glow-text tracking-tight"
                  onDone={() => setHeroStep(1)}
                />
              </div>

              {heroStep >= 1 && (
                <motion.div initial={{ opacity: skipAnim ? 1 : 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm">
                  <span style={{ color: '#00ff41' }}>❯</span>
                  <span style={{ color: '#8b949e' }}>cat role.txt</span>
                </motion.div>
              )}

              {heroStep >= 1 && (
                <motion.div initial={{ opacity: skipAnim ? 1 : 0 }} animate={{ opacity: 1 }} className="pl-4">
                  <TerminalTyping
                    text="AI Engineer · RL Infrastructure · LLM Agents · Distributed Systems"
                    speed={22}
                    delay={150}
                    startOnMount
                    skip={skipAnim}
                    className="text-sm sm:text-base"
                    style={{ color: '#00bfff' } as React.CSSProperties}
                    onDone={() => setHeroStep(2)}
                  />
                </motion.div>
              )}

              {heroStep >= 2 && (
                <motion.div initial={{ opacity: skipAnim ? 1 : 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm">
                  <span style={{ color: '#00ff41' }}>❯</span>
                  <span style={{ color: '#8b949e' }}>cat bio.txt</span>
                </motion.div>
              )}

              {heroStep >= 2 && (
                <motion.div initial={{ opacity: skipAnim ? 1 : 0 }} animate={{ opacity: 1 }} className="pl-4 max-w-2xl">
                  <TerminalTyping
                    text={personalInfo.summary}
                    speed={12}
                    delay={150}
                    startOnMount
                    skip={skipAnim}
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: '#8b949e' } as React.CSSProperties}
                    onDone={() => {
                      heroAnimationDone = true;
                      setHeroStep(3);
                    }}
                  />
                </motion.div>
              )}

              {heroStep >= 3 && (
                <>
                  <motion.div initial={{ opacity: skipAnim ? 1 : 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm">
                    <span style={{ color: '#00ff41' }}>❯</span>
                    <span style={{ color: '#8b949e' }}>ls --links</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: skipAnim ? 1 : 0, y: skipAnim ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: skipAnim ? 0 : 0.15 }}
                    className="pl-4 flex flex-col sm:flex-row gap-3"
                  >
                    <Link
                      href="/resume"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold rounded transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        background: 'rgba(0,255,65,0.08)',
                        border: '1px solid rgba(0,255,65,0.35)',
                        color: '#00ff41',
                        boxShadow: '0 0 14px rgba(0,255,65,0.08)',
                      }}
                    >
                      ./view-resume
                      <ArrowRight size={13} />
                    </Link>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold rounded transition-all duration-200 hover:opacity-80"
                      style={{ border: '1px solid #21262d', color: '#c9d1d9' }}
                    >
                      ./view-projects
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: skipAnim ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: skipAnim ? 0 : 0.35 }}
                    className="pl-4 flex gap-3"
                  >
                    {[
                      { href: personalInfo.github, icon: GithubIcon, label: 'gh' },
                      { href: personalInfo.linkedin, icon: LinkedinIcon, label: 'in' },
                      { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'mail' },
                    ].map(({ href, icon: Icon, label }) => (
                      <Link
                        key={label}
                        href={href}
                        target={label !== 'mail' ? '_blank' : undefined}
                        rel={label !== 'mail' ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-1.5 text-xs font-mono transition-all duration-200 px-2.5 py-1.5 rounded hover:border-green-400/30"
                        style={{ color: '#8b949e', border: '1px solid #21262d' }}
                        aria-label={label}
                      >
                        <Icon size={12} />
                        [{label}]
                      </Link>
                    ))}
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>

          {/* Scroll hint */}
          {heroStep >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs font-mono" style={{ color: '#30363d' }}>scroll</span>
                <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, #30363d, transparent)' }} />
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── STATS ─── */}
      <AnimatedSection>
        <section
          className="py-14 px-4 sm:px-6 lg:px-8"
          style={{ borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d' }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 font-mono text-xs" style={{ color: '#8b949e' }}>
              <span style={{ color: '#00ff41' }}>❯</span> cat stats.json
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="terminal-card p-5"
                >
                  <div className="text-xs font-mono mb-2" style={{ color: '#8b949e' }}>{'// '}{s.label.toLowerCase()}</div>
                  <div className="stat-value">{s.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── EXPERIENCE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="mb-10 font-mono">
              <div className="text-xs mb-2" style={{ color: '#8b949e' }}>
                <span style={{ color: '#00ff41' }}>❯</span> cat experience.log
              </div>
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#c9d1d9' }}>Work Experience</h2>
              <div className="green-divider mt-4" />
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {experiences.slice(0, 2).map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="terminal-window"
              >
                <div className="terminal-titlebar">
                  <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                  <div className="terminal-dot" style={{ background: '#febc2e' }} />
                  <div className="terminal-dot" style={{ background: '#28c840' }} />
                  <span className="ml-3 text-xs font-mono" style={{ color: '#8b949e' }}>
                    {exp.company.toLowerCase().replace(/\s/g, '_')}.log
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-mono" style={{ color: '#00ff41' }}>$</span>
                        <span className="font-bold text-sm font-mono" style={{ color: '#c9d1d9' }}>{exp.company}</span>
                      </div>
                      <span className="text-xs font-mono" style={{ color: '#00bfff' }}>{exp.role}</span>
                    </div>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded self-start sm:self-auto"
                      style={{ color: '#8b949e', border: '1px solid #21262d', background: '#0d1117' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-mono" style={{ color: '#8b949e' }}>
                    <span style={{ color: '#00ff41', flexShrink: 0, marginTop: 2 }}>›</span>
                    <span className="leading-relaxed">{exp.bullets[0]}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-mono transition-all duration-200 hover:opacity-70"
              style={{ color: '#00ff41' }}
            >
              <span style={{ color: '#8b949e' }}>./</span>view-full-experience
              <ArrowRight size={12} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(22,27,34,0.5)', borderTop: '1px solid #21262d', borderBottom: '1px solid #21262d' }}
      >
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="mb-10 font-mono">
              <div className="text-xs mb-2" style={{ color: '#8b949e' }}>
                <span style={{ color: '#00ff41' }}>❯</span> ls skills/ --verbose
              </div>
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#c9d1d9' }}>Technical Skills</h2>
              <div className="green-divider mt-4" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skills).map(([category, list], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="terminal-card p-5"
              >
                <div className="text-xs font-mono mb-4" style={{ color: '#00ff41' }}>
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

      {/* ─── CODING PROFILES ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="mb-10 font-mono">
              <div className="text-xs mb-2" style={{ color: '#8b949e' }}>
                <span style={{ color: '#00ff41' }}>❯</span> curl profiles.json | jq .
              </div>
              <h2 className="text-xl sm:text-2xl font-bold" style={{ color: '#c9d1d9' }}>Coding Profiles</h2>
              <div className="green-divider mt-4" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {codingProfiles.map((profile, i) => (
              <motion.a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="terminal-card p-4 block group"
              >
                <div className="text-xs font-mono mb-3" style={{ color: '#00ff41' }}>
                  $ {profile.platform.toLowerCase()}
                </div>
                {profile.rating && (
                  <div className="text-xl font-bold font-mono mb-0.5" style={{ color: '#c9d1d9' }}>
                    {profile.rating}
                  </div>
                )}
                {profile.rank && (
                  <div className="text-xs font-mono mb-1" style={{ color: '#8b949e' }}>{profile.rank}</div>
                )}
                <div className="text-xs font-mono" style={{ color: '#8b949e' }}>{profile.highlight}</div>
                <div
                  className="mt-3 flex items-center gap-1 text-xs font-mono group-hover:text-green-400 transition-colors duration-200"
                  style={{ color: '#30363d' }}
                >
                  open → <ExternalLink size={10} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <AnimatedSection>
        <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid #21262d' }}>
          <div className="max-w-2xl mx-auto">
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#febc2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="ml-3 text-xs font-mono" style={{ color: '#8b949e' }}>contact.sh</span>
              </div>
              <div className="p-8 sm:p-10 text-center">
                <div className="text-xs font-mono mb-6" style={{ color: '#8b949e' }}>
                  <span style={{ color: '#00ff41' }}>❯</span> echo &quot;open to opportunities&quot;
                </div>
                <h2 className="text-lg sm:text-2xl font-bold font-mono mb-3" style={{ color: '#c9d1d9' }}>
                  Interested in working together?
                </h2>
                <p className="text-xs sm:text-sm font-mono mb-8 leading-relaxed" style={{ color: '#8b949e' }}>
                  Always open to discussing backend engineering,
                  distributed systems, and agent infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-mono font-semibold rounded transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(0,255,65,0.08)',
                      border: '1px solid rgba(0,255,65,0.35)',
                      color: '#00ff41',
                    }}
                  >
                    ./get-in-touch <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/resume"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-mono font-semibold rounded transition-all duration-200 hover:opacity-70"
                    style={{ border: '1px solid #21262d', color: '#c9d1d9' }}
                  >
                    ./view-resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
