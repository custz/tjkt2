
import React from 'react';
import { GALLERY } from '../constants';
import { Image as ImageIcon, Video, Sparkles, PlayCircle } from 'lucide-react';

const GalleryView: React.FC = () => {
  const getMediaUrl = (url: string, type: 'image' | 'video') => {
    // Jika path lokal atau URL langsung
    if (url.includes('/') || url.includes('.') || url.startsWith('http')) {
      return url;
    }
    
    // Jika ID Google Drive
    if (type === 'image') {
      return `https://drive.google.com/thumbnail?id=${url}&sz=w1200`;
    }
    return `https://drive.google.com/file/d/${url}/preview`;
  };

  const isDirectFile = (url: string) => url.includes('/') || url.includes('.');

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 tracking-tighter">GALLERY <span className="text-blue-500">X TJKT 2</span></h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-400 max-w-lg mx-auto italic leading-relaxed">"Dokumentasi setiap langkah perjuangan kita dalam menguasai teknologi."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {GALLERY.map((item) => (
          <div 
            key={item.id} 
            className="group relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
          >
            <div className="relative aspect-square overflow-hidden">
              {item.type === 'image' ? (
                <img 
                  src={getMediaUrl(item.url, 'image')} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.id}/800/800`;
                  }}
                />
              ) : (
                <div className="w-full h-full">
                  {isDirectFile(item.url) ? (
                    <video className="w-full h-full object-cover" controls playsInline>
                      <source src={getMediaUrl(item.url, 'video')} type="video/mp4" />
                    </video>
                  ) : (
                    <iframe
                      src={getMediaUrl(item.url, 'video')}
                      className="w-full h-full border-none"
                      allow="autoplay; fullscreen"
                      title={item.title}
                    />
                  )}
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                  {item.type === 'video' && <Video size={14} className="text-white/70" />}
                </div>
                <h3 className="text-lg font-bold text-white truncate">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
