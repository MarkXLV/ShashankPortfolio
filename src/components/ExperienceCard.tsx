'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import type { Experience } from '@/data/resume';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-transparent group-last:bg-gradient-to-b group-last:from-blue-500/60 group-last:to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-gray-900 z-10" />

      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/60">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Briefcase size={18} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{experience.company}</h3>
              <p className="text-blue-400 font-medium">{experience.role}</p>
            </div>
          </div>
          <div className="text-sm text-gray-400 sm:text-right">
            <p>{experience.period}</p>
            <p>{experience.location}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="text-gray-300 text-sm leading-relaxed flex gap-3">
              <span className="text-blue-400 mt-1.5 shrink-0">&#9656;</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
