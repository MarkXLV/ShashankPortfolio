'use client';

import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 slide-in" style={{ animationDelay: '0ms' }}>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a href="mailto:tiwari.shashank.85911@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    tiwari.shashank.85911@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Pune, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                  <Github className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub</h3>
                  <a href="https://github.com/MarkXLV" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    github.com/MarkXLV
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                  <Linkedin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/shashank-tiwari-916234244" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    linkedin.com/in/shashank-tiwari-916234244
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 slide-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl font-bold text-white mb-6">What I&apos;m Looking For</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">Technical Growth</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Large-scale distributed systems</li>
                    <li>• Cloud-native architecture</li>
                    <li>• ML/AI infrastructure</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Team & Culture</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Collaborative engineering teams</li>
                    <li>• Mentorship opportunities</li>
                    <li>• Innovation-driven environment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
