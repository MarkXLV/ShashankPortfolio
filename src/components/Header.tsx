'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: '~', full: 'home' },
  { href: '/about', label: 'about', full: 'about' },
  { href: '/projects', label: 'projects', full: 'projects' },
  { href: '/resume', label: 'resume', full: 'resume' },
  { href: '/contact', label: 'contact', full: 'contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(13, 17, 23, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #21262d',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-wider flex items-center gap-1.5 group"
          >
            <span style={{ color: '#8b949e' }}>$</span>
            <span
              className="glow-text transition-all duration-300 group-hover:tracking-widest"
            >
              shashank
            </span>
            <span style={{ color: '#8b949e' }}>@</span>
            <span style={{ color: '#00bfff' }}>deccan</span>
            <span
              className="inline-block w-2 h-3.5 ml-0.5 align-middle"
              style={{
                background: '#00ff41',
                animation: 'blink 1s step-end infinite',
                boxShadow: '0 0 6px #00ff41',
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-1.5 text-xs font-mono transition-all duration-200 rounded"
                  style={{
                    color: isActive ? '#00ff41' : '#8b949e',
                    background: isActive ? 'rgba(0,255,65,0.06)' : 'transparent',
                    border: isActive ? '1px solid rgba(0,255,65,0.2)' : '1px solid transparent',
                  }}
                >
                  {isActive && (
                    <span style={{ color: '#00ff41', marginRight: 4 }}>./</span>
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-sm font-mono transition-colors duration-200"
            style={{ color: '#8b949e' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div
            className="md:hidden pb-4 pt-2"
            style={{ borderTop: '1px solid #21262d' }}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-xs font-mono rounded transition-all duration-200"
                    style={{
                      color: isActive ? '#00ff41' : '#8b949e',
                      background: isActive ? 'rgba(0,255,65,0.06)' : 'transparent',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span style={{ color: '#00ff41', marginRight: 6 }}>
                      {isActive ? '>' : ' '}
                    </span>
                    ./{item.full}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
