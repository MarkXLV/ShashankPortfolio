'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/resume';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Gradient border glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-5 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-2 mb-8 flex-1">
          {project.bullets.map((b, i) => (
            <li key={i} className="text-gray-300 text-sm flex gap-2.5">
              <span className="text-blue-400 mt-0.5 shrink-0">&#9656;</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 flex-wrap mt-auto">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-700/50 text-white rounded-xl text-sm font-medium hover:bg-gray-600/50 transition-all duration-300 border border-gray-600/50"
            >
              <Github size={16} />
              Source Code
            </Link>
          )}
          {project.liveDemo && (
            <Link
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-sm font-medium hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
