
import React, { useState } from 'react';
import { SCHEDULE } from '../constants';
import { Clock, User, MapPin, Info, ChevronDown } from 'lucide-react';

const ScheduleGrid: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(SCHEDULE[0].day);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const activeSchedule = SCHEDULE.find(s => s.day === selectedDay);

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Jadwal Pelajaran</h2>
        <p className="text-slate-400">Klik pada item untuk melihat detail tambahan.</p>
      </div>

      <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
        {SCHEDULE.map((s) => (
          <button
            key={s.day}
            onClick={() => {
              setSelectedDay(s.day);
              setExpandedIndex(null);
            }}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
              selectedDay === s.day 
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
              : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            {s.day}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {activeSchedule?.items.map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => handleToggleExpand(idx)}
            className={`glass p-6 rounded-2xl flex flex-col gap-4 border-l-4 border-l-blue-500 cursor-pointer transition-all duration-300 hover:bg-white/10 ${expandedIndex === idx ? 'bg-white/10' : ''}`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-0.5">{item.time}</div>
                  <div className="text-lg font-bold">{item.subject}</div>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-6">
                <div className="flex items-center gap-3 text-slate-400">
                  <User size={18} />
                  <span className="text-sm font-medium">{item.teacher}</span>
                </div>
                <ChevronDown size={20} className={`text-slate-500 transition-transform duration-300 ${expandedIndex === idx ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Expanded Section */}
            {expandedIndex === idx && (
              <div className="pt-4 mt-2 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Ruang Kelas</div>
                    <div className="text-sm text-slate-200">{item.room || 'Belum ditentukan'}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Info size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Materi</div>
                    <div className="text-sm text-slate-300 leading-relaxed">{item.description || 'Tidak ada deskripsi tambahan.'}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleGrid;
