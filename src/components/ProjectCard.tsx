'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GithubIcon, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/resume';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="terminal-window h-full flex flex-col"
    >
      {/* Title bar */}
      <div className="terminal-titlebar">
        <div className="terminal-dot" style={{ background: '#ff5f57' }} />
        <div className="terminal-dot" style={{ background: '#febc2e' }} />
        <div className="terminal-dot" style={{ background: '#28c840' }} />
        <span className="ml-3 text-xs font-mono" style={{ color: '#8b949e' }}>
          {project.title.toLowerCase().replace(/\s/g, '-')}.md
        </span>
      </div>

      {/* Body */}
      <div className="p-5 font-mono flex flex-col flex-1">
        {/* Project name */}
        <div className="mb-3">
          <div className="text-xs mb-1" style={{ color: '#8b949e' }}>
            <span style={{ color: '#00ff41' }}>$</span> cat README.md
          </div>
          <h3 className="text-base font-bold" style={{ color: '#c9d1d9' }}>{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed mb-4" style={{ color: '#8b949e' }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <span style={{ color: '#00ff41', flexShrink: 0, marginTop: 2 }}>›</span>
              <span style={{ color: '#8b949e' }}>{b}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-2 flex-wrap mt-auto pt-2" style={{ borderTop: '1px solid #21262d' }}>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-all duration-200 hover:opacity-75"
              style={{ border: '1px solid #21262d', color: '#8b949e' }}
            >
              <GithubIcon size={12} />
              [source]
            </Link>
          )}
          {project.liveDemo && (
            <Link
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-all duration-200 hover:opacity-80"
              style={{
                background: 'rgba(0,255,65,0.07)',
                border: '1px solid rgba(0,255,65,0.3)',
                color: '#00ff41',
              }}
            >
              <ExternalLink size={12} />
              [live-demo]
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
