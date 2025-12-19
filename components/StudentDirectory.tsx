
import React, { useState } from 'react';
import { STUDENTS } from '../constants';
import { Search, Heart, Star } from 'lucide-react';
import { Student } from '../types';

const StudentDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [studentList, setStudentList] = useState<Student[]>(STUDENTS);

  const handleVote = (id: number) => {
    setStudentList(prev => prev.map(student => 
      student.id === id ? { ...student, votes: student.votes + 1 } : student
    ));
  };

  const filteredStudents = studentList.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20" id="students">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">Siswa Kami</h2>
          <p className="text-slate-400">Anggota hebat dari kelas X TJKT 2.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Cari siswa..."
            className="w-full bg-slate-900 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStudents.map((student) => (
          <div key={student.id} className="glass rounded-[2.5rem] p-5 md:p-6 group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full border border-white/5 hover:border-blue-500/30">
            <div className="relative mb-5 overflow-hidden rounded-[2rem]">
              <img 
                src={student.photo} 
                alt={student.name} 
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {student.role && (
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.1em] shadow-xl text-white">
                  {student.role}
                </div>
              )}
              <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/10 text-xs font-bold flex items-center gap-2">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span>{student.votes}</span>
              </div>
            </div>
            
            <div className="flex-1 px-2">
              <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{student.name}</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed italic line-clamp-3">"{student.bio}"</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-[10px] px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 uppercase font-black tracking-widest">IT Engineering</span>
                <span className="text-[10px] px-3 py-1 bg-white/5 border border-white/5 rounded-full text-slate-500 uppercase font-black tracking-widest">SMK</span>
              </div>
            </div>

            <button 
              onClick={() => handleVote(student.id)}
              className="w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-blue-600 hover:text-white group/btn transition-all duration-500 flex items-center justify-center gap-3 font-bold text-sm shadow-sm"
            >
              <Heart size={20} className="text-blue-500 group-hover:text-white group-hover/btn:fill-white group-hover/btn:scale-125 transition-all duration-500" />
              <span>Dukung Siswa</span>
            </button>
          </div>
        ))}
      </div>
      
      {filteredStudents.length === 0 && (
        <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
          <p className="text-slate-500 font-medium">Siswa "{searchTerm}" tidak ditemukan.</p>
        </div>
      )}
    </div>
  );
};

export default StudentDirectory;
