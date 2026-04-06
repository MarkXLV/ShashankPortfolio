'use client';

import { motion } from 'framer-motion';

interface SkillCategoryProps {
  category: string;
  skills: string[];
  index: number;
}

export default function SkillCategory({ category, skills, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.03 }}
            className="px-3 py-1.5 text-sm bg-gray-800/60 text-gray-300 rounded-lg border border-gray-700/50 hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
