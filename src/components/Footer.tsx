import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bio */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Shashank Tiwari
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              AI Engineer specializing in RL infrastructure, LLM agent systems,
              and production post-training pipelines.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/MarkXLV', icon: Github },
                { href: 'https://linkedin.com/in/shashanktiwari11', icon: Linkedin },
                { href: 'mailto:tiwari.shashank.85911@gmail.com', icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="p-2 rounded-lg text-gray-600 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/resume', label: 'Resume' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Reinforcement Learning',
                'LLMs',
                'Agent Systems',
                'MCP',
                'Python',
                'FastAPI',
                'Kubernetes',
                'Fine-tuning',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs bg-gray-800/60 text-gray-500 rounded-md border border-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-10 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Shashank Tiwari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
