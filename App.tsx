
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudentDirectory from './components/StudentDirectory';
import ScheduleGrid from './components/ScheduleGrid';
import GalleryView from './components/GalleryView';
import AIAssistant from './components/AIAssistant';
import { TabType } from './types';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('students');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'students':
        return <StudentDirectory />;
      case 'schedule':
        return <ScheduleGrid />;
      case 'gallery':
        return <GalleryView />;
      case 'ai':
        return <AIAssistant />;
      default:
        return <StudentDirectory />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto pb-20 relative">
        <Hero />
        
        {/* Animated Wrapper for Tabs */}
        <div key={activeTab} className="animate-tabChange transition-all duration-500 ease-out">
          {renderContent()}
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 px-4 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-black text-xl shadow-lg shadow-blue-600/20">X</div>
              <span className="font-black text-2xl tracking-tighter uppercase">TJKT 2</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Mendidik generasi ahli teknologi jaringan masa depan yang berintegritas dan kompeten.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-bold uppercase tracking-widest">Instagram</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-bold uppercase tracking-widest">YouTube</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-bold uppercase tracking-widest">GitHub</a>
            </div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
              &copy; 2024 Kelas X TJKT 2. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-blue-600 text-white shadow-2xl shadow-blue-600/40 transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
        aria-label="Kembali ke atas"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default App;
