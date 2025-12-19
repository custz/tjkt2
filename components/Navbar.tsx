
import React from 'react';
import { Cpu, Users, Calendar, Image as ImageIcon, MessageSquare } from 'lucide-react';
import { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'students', label: 'Siswa', icon: <Users size={18} /> },
    { id: 'schedule', label: 'Jadwal', icon: <Calendar size={18} /> },
    { id: 'gallery', label: 'Galeri', icon: <ImageIcon size={18} /> },
    { id: 'ai', label: 'Velicia X', icon: <MessageSquare size={18} /> },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl border border-white/10">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab('students')}
        >
          <Cpu className="text-blue-400 group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-lg tracking-tight hidden sm:block">X TJKT 2</span>
        </div>
        <div className="flex gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                activeTab === item.id 
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span className="hidden md:block">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
