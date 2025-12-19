
import React from 'react';
import { GALLERY } from '../constants';
import { Image as ImageIcon, Video, Sparkles, PlayCircle } from 'lucide-react';

const GalleryView: React.FC = () => {
  // Fungsi untuk mendapatkan URL media
  const getMediaUrl = (url: string, type: 'image' | 'video') => {
    // Jika url mengandung '/' atau '.', asumsikan itu path langsung (GitHub/Lokal)
    if (url.includes('/') || url.includes('.')) {
      return url;
    }
    
    // Jika bukan path langsung, asumsikan itu ID Google Drive
    if (type === 'image') {
      return `https://drive.google.com/thumbnail?id=${url}&sz=w1200`;
    }
    return `https://drive.google.com/file/d/${url}/preview`;
  };

  const isDirectFile = (url: string) => url.includes('/') || url.includes('.');

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-2">Momen & Kenangan</h2>
        <p className="text-slate-400 italic">"Setiap frame adalah cerita, setiap detik adalah sejarah yang kita ukir bersama."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GALLERY.map((item) => (
          <div 
            key={item.id} 
            className="group relative overflow-hidden rounded-[2.5rem] glass border-white/5 bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30"
          >
            {/* Container Media */}
            <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden bg-slate-800">
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
                <div className="w-full h-full relative">
                  {isDirectFile(item.url) ? (
                    /* Video Player Native untuk file GitHub/Lokal - Lebih Lancar */
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      poster={`https://picsum.photos/seed/${item.id}/800/800`}
                    >
                      <source src={getMediaUrl(item.url, 'video')} type="video/mp4" />
                      Browser Anda tidak mendukung tag video.
                    </video>
                  ) : (
                    /* Iframe tetap digunakan jika masih memakai ID Google Drive */
                    <>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:opacity-0 transition-opacity pointer-events-none z-10">
                        <PlayCircle size={48} className="text-white/70" />
                      </div>
                      <iframe
                        src={getMediaUrl(item.url, 'video')}
                        className="absolute top-0 left-0 w-full h-full border-none"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title={item.title}
                      />
                    </>
                  )}
                </div>
              )}
              
              {/* Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                  {item.type === 'image' ? <ImageIcon size={12} className="text-blue-400" /> : <Video size={12} className="text-purple-400" />}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{item.category}</span>
                </div>
                <h3 className="text-lg font-bold text-white truncate">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Motivasi & Kenangan */}
      <div className="mt-20 p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-blue-600/10 via-slate-900 to-purple-600/10 border border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
            <Sparkles size={400} className="text-blue-400 animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Sparkles size={32} />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-gradient uppercase tracking-tight">Solidaritas Tanpa Batas</h3>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed italic font-light">
              "Teknologi mungkin berkembang dan perangkat bisa usang, namun persahabatan yang kita bangun di <span className="text-blue-400 font-bold">X TJKT 2</span> akan tetap abadi melampaui waktu. Teruslah bermimpi, teruslah berinovasi, dan jadilah versi terbaik dari dirimu sendiri!"
            </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
