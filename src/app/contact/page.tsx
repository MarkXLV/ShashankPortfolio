'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/SectionHeading';
import { personalInfo } from '@/data/resume';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    external: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    external: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/MarkXLV',
    href: personalInfo.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shashanktiwari11',
    href: personalInfo.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Contact Me"
              gradient="from-blue-400 to-cyan-400"
              subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology."
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white mb-6">Get in Touch</h2>
                {contactLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="glass-card p-4 flex items-center gap-4 transition-all duration-500"
                  >
                    <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20 shrink-0">
                      <item.icon className="text-blue-400" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="text-gray-300 hover:text-blue-400 transition-colors text-sm truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* What I'm Looking For */}
            <AnimatedSection delay={0.15}>
              <div className="glass-card p-8 h-full">
                <h2 className="text-xl font-bold text-white mb-6">What I&apos;m Looking For</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                      Technical Focus
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'RL infrastructure & post-training systems',
                        'LLM agent orchestration at scale',
                        'Production ML/AI platforms',
                        'Distributed systems & cloud-native architecture',
                      ].map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2.5">
                          <span className="text-blue-400/50 mt-0.5 shrink-0">&#9656;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                      Team & Culture
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'Collaborative AI/ML engineering teams',
                        'Research-to-production pipeline',
                        'Innovation-driven environment',
                        'Mentorship & growth opportunities',
                      ].map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2.5">
                          <span className="text-blue-400/50 mt-0.5 shrink-0">&#9656;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
