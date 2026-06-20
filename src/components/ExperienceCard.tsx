'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/data/resume';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-6 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div
        className="absolute left-0 top-2 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, rgba(0,255,65,0.4), transparent)' }}
      />
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
        style={{
          background: '#00ff41',
          boxShadow: '0 0 8px rgba(0,255,65,0.6)',
        }}
      />

      <div className="terminal-window ml-2">
        <div className="terminal-titlebar">
          <div className="terminal-dot" style={{ background: '#ff5f57' }} />
          <div className="terminal-dot" style={{ background: '#febc2e' }} />
          <div className="terminal-dot" style={{ background: '#28c840' }} />
          <span className="ml-3 text-xs font-mono" style={{ color: '#8b949e' }}>
            {experience.company.toLowerCase().replace(/\s/g, '_')}.log
          </span>
        </div>
        <div className="p-5 font-mono">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs" style={{ color: '#00ff41' }}>$</span>
                <span className="font-bold text-sm" style={{ color: '#c9d1d9' }}>{experience.company}</span>
              </div>
              <div className="text-xs" style={{ color: '#00bfff' }}>{experience.role}</div>
            </div>
            <div className="text-right">
              <div
                className="text-xs px-2 py-0.5 rounded inline-block"
                style={{ color: '#8b949e', border: '1px solid #21262d', background: '#0d1117' }}
              >
                {experience.period}
              </div>
              <div className="text-xs mt-1" style={{ color: '#8b949e' }}>{experience.location}</div>
            </div>
          </div>

          <ul className="space-y-2">
            {experience.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                <span style={{ color: '#00ff41', flexShrink: 0, marginTop: 2 }}>›</span>
                <span style={{ color: '#8b949e' }}>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
