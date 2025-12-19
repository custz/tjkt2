
import React from 'react';
import { Code2, Network, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-8 animate-pulse">
          <ShieldCheck size={14} /> Angkatan 2024-2025
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Merintis <span className="text-gradient">Masa Depan Teknologi</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Portal digital resmi untuk kelas X TJKT 2. Tempat di mana coding bertemu dengan jaringan, dan kreativitas memicu inovasi.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4 border-white/5 group hover:border-blue-500/50 transition-colors">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
              <Network size={24} />
            </div>
            <div className="text-left">
              <div className="font-bold">Networking</div>
              <div className="text-xs text-slate-500">Cisco & Mikrotik</div>
            </div>
          </div>
          <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4 border-white/5 group hover:border-purple-500/50 transition-colors">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
              <Code2 size={24} />
            </div>
            <div className="text-left">
              <div className="font-bold">Software</div>
              <div className="text-xs text-slate-500">Web & Logika</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
