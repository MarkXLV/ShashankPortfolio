import Link from 'next/link';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 font-mono"
      style={{ background: '#0d1117', borderTop: '1px solid #21262d' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Identity */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span style={{ color: '#8b949e' }}>$</span>
              <span className="text-sm font-bold glow-text-sm">shashank</span>
              <span style={{ color: '#8b949e' }}>@</span>
              <span className="text-sm" style={{ color: '#00bfff' }}>deccan</span>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: '#8b949e' }}>
              AI Engineer building RL platforms and LLM agent systems for production workloads.
            </p>
            <div className="flex gap-2">
              {[
                { href: 'https://github.com/MarkXLV', icon: GithubIcon, label: '[gh]' },
                { href: 'https://linkedin.com/in/shashanktiwari11', icon: LinkedinIcon, label: '[in]' },
                { href: 'mailto:tiwari.shashank.85911@gmail.com', icon: Mail, label: '[mail]' },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded transition-all duration-200 hover:border-green-400/30"
                  style={{ color: '#8b949e', border: '1px solid #21262d' }}
                >
                  <Icon size={11} />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs mb-4" style={{ color: '#00ff41' }}># navigation</div>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'about' },
                { href: '/projects', label: 'projects' },
                { href: '/resume', label: 'resume' },
                { href: '/contact', label: 'contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors duration-200 hover:opacity-80"
                    style={{ color: '#8b949e' }}
                  >
                    <span style={{ color: '#30363d' }}>./</span>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <div className="text-xs mb-4" style={{ color: '#00ff41' }}># core-stack</div>
            <div className="flex flex-wrap gap-1.5">
              {['Python', 'FastAPI', 'Kubernetes', 'LangChain', 'RL/RLHF', 'MCP', 'PostgreSQL', 'Docker'].map((skill) => (
                <span key={skill} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="green-divider mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs" style={{ color: '#8b949e' }}>
          <span>
            <span style={{ color: '#30363d' }}>{'// '}</span>
            &copy; {currentYear} Shashank Tiwari
          </span>
          <span style={{ color: '#30363d' }}>
            built with Next.js · deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
