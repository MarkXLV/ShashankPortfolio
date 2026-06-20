'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { personalInfo } from '@/data/resume';

const contactLinks = [
  {
    icon: Mail,
    label: 'email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: 'phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    external: false,
  },
  {
    icon: MapPin,
    label: 'location',
    value: personalInfo.location,
    href: null,
    external: false,
  },
  {
    icon: GithubIcon,
    label: 'github',
    value: 'github.com/MarkXLV',
    href: personalInfo.github,
    external: true,
  },
  {
    icon: LinkedinIcon,
    label: 'linkedin',
    value: 'linkedin.com/in/shashanktiwari11',
    href: personalInfo.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ background: '#0d1117' }}>
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="font-mono mb-10">
              <div className="text-xs mb-2" style={{ color: '#8b949e' }}>
                <span style={{ color: '#00ff41' }}>❯</span> ./contact.sh
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#c9d1d9' }}>Contact</h1>
              <p className="text-xs mt-2" style={{ color: '#8b949e' }}>
                Open to discussing backend engineering, distributed systems, and agent infrastructure.
              </p>
              <div className="green-divider mt-4" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Contact links */}
            <AnimatedSection>
              <div className="terminal-window">
                <div className="terminal-titlebar">
                  <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                  <div className="terminal-dot" style={{ background: '#febc2e' }} />
                  <div className="terminal-dot" style={{ background: '#28c840' }} />
                  <span className="ml-3 text-xs font-mono" style={{ color: '#8b949e' }}>contact.json</span>
                </div>
                <div className="p-5 font-mono space-y-3">
                  <div className="text-xs mb-4" style={{ color: '#8b949e' }}>
                    <span style={{ color: '#00ff41' }}>❯</span> cat contact.json
                  </div>
                  {contactLinks.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="flex items-center gap-3 p-3 rounded transition-all duration-200"
                      style={{ border: '1px solid #21262d' }}
                    >
                      <item.icon size={14} style={{ color: '#00ff41', flexShrink: 0 }} />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs mb-0.5" style={{ color: '#8b949e' }}>
                          {item.label}:
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                            className="text-xs truncate flex items-center gap-1 hover:opacity-75 transition-opacity"
                            style={{ color: '#c9d1d9' }}
                          >
                            {item.value}
                            {item.external && <ExternalLink size={10} style={{ color: '#8b949e', flexShrink: 0 }} />}
                          </a>
                        ) : (
                          <span className="text-xs" style={{ color: '#c9d1d9' }}>{item.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* What I'm looking for */}
            <AnimatedSection delay={0.15}>
              <div className="terminal-window h-full">
                <div className="terminal-titlebar">
                  <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                  <div className="terminal-dot" style={{ background: '#febc2e' }} />
                  <div className="terminal-dot" style={{ background: '#28c840' }} />
                  <span className="ml-3 text-xs font-mono" style={{ color: '#8b949e' }}>opportunities.txt</span>
                </div>
                <div className="p-5 font-mono h-full">
                  <div className="text-xs mb-5" style={{ color: '#8b949e' }}>
                    <span style={{ color: '#00ff41' }}>❯</span> cat opportunities.txt
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-xs mb-3" style={{ color: '#00ff41' }}>
                        # technical-focus
                      </div>
                      <ul className="space-y-2">
                        {[
                          'Backend platforms & distributed services',
                          'RL infrastructure and agent systems',
                          'Production Kubernetes workloads',
                          'LLM fine-tuning and evaluation',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs" style={{ color: '#8b949e' }}>
                            <span style={{ color: '#00ff41', flexShrink: 0 }}>›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs mb-3" style={{ color: '#00bfff' }}>
                        # team-culture
                      </div>
                      <ul className="space-y-2">
                        {[
                          'Collaborative AI/ML engineering teams',
                          'Research-to-production pipeline',
                          'Innovation-driven environment',
                          'Mentorship & growth opportunities',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs" style={{ color: '#8b949e' }}>
                            <span style={{ color: '#00bfff', flexShrink: 0 }}>›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
