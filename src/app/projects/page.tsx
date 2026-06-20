'use client';

import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/resume';

export default function Projects() {
  return (
    <div className="min-h-screen" style={{ background: '#0d1117' }}>
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="font-mono mb-10">
              <div className="text-xs mb-2" style={{ color: '#8b949e' }}>
                <span style={{ color: '#00ff41' }}>❯</span> ls projects/ --all
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#c9d1d9' }}>Projects</h1>
              <p className="text-xs mt-2" style={{ color: '#8b949e' }}>
                Production-grade systems — AI agents, backend platforms, and full-stack engineering.
              </p>
              <div className="green-divider mt-4" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
