
import { Student, DaySchedule, GalleryItem } from './types';

/**
 * PANDUAN STRUKTUR GITHUB (Agar Lancar):
 * 1. Letakkan foto siswa di: public/assets/students/
 * 2. Letakkan video/foto galeri di: public/assets/gallery/
 * 3. Gunakan path relatif seperti "assets/gallery/video.mp4"
 */

export const STUDENTS: Student[] = [
  { id: 1, name: "Arya Wijaya", role: "Ketua Kelas", photo: "https://picsum.photos/seed/arya/400/400", bio: "Spesialis infrastruktur jaringan dan server.", votes: 12 },
  { id: 2, name: "Bunga Citra", role: "Sekretaris", photo: "https://picsum.photos/seed/bunga/400/400", bio: "Manajemen data dan ketelitian organisasi.", votes: 8 },
  { id: 3, name: "Dimas Saputra", photo: "https://picsum.photos/seed/dimas/400/400", bio: "Hardware enthusiast dan teknisi PC.", votes: 5 },
  { id: 4, name: "Eka Putri", photo: "https://picsum.photos/seed/eka/400/400", bio: "Fokus pada keamanan siber dan cloud.", votes: 15 },
];

export const SCHEDULE: DaySchedule[] = [
  {
    day: "Senin",
    items: [
      { time: "07:30 - 09:00", subject: "Dasar Jaringan", teacher: "Bapak Heru", room: "Lab TJKT 1", description: "Topologi dan pengalamatan IP." },
      { time: "09:30 - 11:30", subject: "Sistem Operasi", teacher: "Ibu Ani", room: "Lab TJKT 2", description: "Instalasi Linux Debian 12." }
    ]
  },
  {
    day: "Selasa",
    items: [
      { time: "07:30 - 10:00", subject: "Perakitan Hardware", teacher: "Bapak Anton", room: "Bengkel Komputer", description: "Identifikasi komponen motherboard." }
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  { 
    id: 1, 
    // Ganti ID Drive ini dengan path lokal (misal: "assets/gallery/v1.mp4") setelah upload ke GitHub
    url: "1DRs7_8pn7RKpveScdZaUUIR-abdFqD_N", 
    title: "Praktikum Jaringan", 
    category: "Momen", 
    type: 'video' 
  },
  { 
    id: 2, 
    url: "1GZGDgyGMrVkAWHyIMdoYWcUSC1xS-Yc1", 
    title: "Bongkar CPU", 
    category: "Praktikum", 
    type: 'image' 
  },
];
