'use client';

import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/resume';

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="My Projects"
              gradient="from-blue-400 to-cyan-400"
              subtitle="Production-grade systems showcasing AI, agent orchestration, and full-stack engineering."
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
