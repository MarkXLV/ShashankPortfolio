'use client';

import { useState } from 'react';
import { Download, FileText, Eye } from 'lucide-react';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    const link = document.createElement('a');
    link.href = '/ShashankTiwari_Resume.pdf';
    link.download = 'ShashankTiwari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Resume</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional experience, skills, and achievements. Feel free to download a copy for your records.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handleDownload} 
              disabled={isLoading} 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Downloading...
                </>
              ) : (
                <>
                  <Download size={20} />
                  Download Resume
                </>
              )}
            </button>
            <a 
              href="/ShashankTiwari_Resume.pdf" 
              target="_blank" 
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              <Eye size={20} />
              View PDF
            </a>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition-all duration-300">
            <div className="text-center mb-6">
              <FileText size={48} className="text-blue-400 mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Resume Available</h3>
              <p className="text-gray-300">Click &quot;View PDF&quot; to open the resume in a new tab, or &quot;Download Resume&quot; to save a copy.</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 text-center border border-gray-600">
              <p className="text-sm text-gray-300">📄 ShashankTiwari_Resume.pdf is ready for viewing and download</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
