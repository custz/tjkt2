
import { Student, DaySchedule, GalleryItem } from './types';

/**
 * PANDUAN UNTUK GITHUB:
 * 1. Simpan foto siswa di folder: public/assets/students/
 * 2. Simpan video/foto galeri di folder: public/assets/gallery/
 * 3. Update url di bawah menjadi: "assets/gallery/nama_file.mp4"
 */

export const STUDENTS: Student[] = [
  { id: 1, name: "Arya Wijaya", role: "Ketua Kelas", photo: "https://picsum.photos/seed/arya/400/400", bio: "Antusias teknologi dan spesialis jaringan.", votes: 12 },
  { id: 2, name: "Bunga Citra", role: "Sekretaris", photo: "https://picsum.photos/seed/bunga/400/400", bio: "Berdedikasi pada organisasi dan ketelitian.", votes: 8 },
  { id: 3, name: "Dimas Saputra", photo: "https://picsum.photos/seed/dimas/400/400", bio: "Penggemar perangkat keras dan perakit PC.", votes: 5 },
  { id: 4, name: "Eka Putri", photo: "https://picsum.photos/seed/eka/400/400", bio: "Calon ahli keamanan siber masa depan.", votes: 15 },
  { id: 5, name: "Fajar Ramadan", photo: "https://picsum.photos/seed/fajar/400/400", bio: "Coding adalah bahasa kedua saya.", votes: 7 },
  { id: 6, name: "Gita Permata", photo: "https://picsum.photos/seed/gita/400/400", bio: "Desainer kreatif dan penggemar UI/UX.", votes: 9 },
];

export const SCHEDULE: DaySchedule[] = [
  {
    day: "Senin",
    items: [
      { time: "07:30 - 09:00", subject: "Dasar Jaringan", teacher: "Bapak Heru", room: "Lab Jaringan 1", description: "Mempelajari topologi jaringan, pengalamatan IP, dan konsep dasar OSI Layer." },
      { time: "09:30 - 11:00", subject: "Matematika", teacher: "Ibu Sari", room: "Ruang Teori 10", description: "Fokus pada logika matematika dan aljabar boolean untuk dasar pemrograman." },
      { time: "11:00 - 12:30", subject: "Logika Pemrograman", teacher: "Bapak Budi", room: "Lab Komputer 2", description: "Dasar-dasar algoritma menggunakan flowchart dan bahasa Python." }
    ]
  },
  {
    day: "Selasa",
    items: [
      { time: "07:30 - 09:30", subject: "Perakitan Komputer", teacher: "Bapak Anton", room: "Bengkel Hardware", description: "Praktik langsung identifikasi komponen dan perakitan PC dari nol." },
      { time: "10:00 - 12:00", subject: "Bahasa Inggris Teknik", teacher: "Ibu Diana", room: "Ruang Teori 12", description: "Mempelajari istilah-istilah teknis komputer dalam bahasa internasional." }
    ]
  },
  {
    day: "Rabu",
    items: [
      { time: "07:30 - 09:30", subject: "Pengembangan Web", teacher: "Bapak Yusuf", room: "Lab Komputer 3", description: "Memulai perjalanan web dengan HTML5, CSS3, dan konsep dasar desain responsif." },
      { time: "10:00 - 12:00", subject: "Sistem Database", teacher: "Ibu Linda", room: "Lab Komputer 3", description: "Pengenalan basis data relasional dan penggunaan SQL sederhana." }
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  { 
    id: 1, 
    url: "1DRs7_8pn7RKpveScdZaUUIR-abdFqD_N", 
    title: "Momen Kebersamaan Siswa", 
    category: "Momen", 
    type: 'video' 
  },
  { 
    id: 2, 
    url: "1uQ3emg0Gy1ScVIK1n7rwbPU9ghHvzxA6", 
    title: "Siswa X TJKT 2", 
    category: "Momen", 
    type: 'video' 
  },
  { 
    id: 3, 
    url: "1GZGDgyGMrVkAWHyIMdoYWcUSC1xS-Yc1", 
    title: "Day 1: Pembongkaran CPU", 
    category: "Praktikum", 
    type: 'image' 
  },
  { 
    id: 4, 
    url: "1tb2WCz1Tp8KbCHFNye2o6X7uCTU_v-96", 
    title: "Pose Ceria di Kelas", 
    category: "Momen", 
    type: 'image' 
  },
  { 
    id: 5, 
    url: "1Cl3dX3-6Nv3DLhbPpGNTNwTmoIQfhTGw", 
    title: "Teknik Bongkar Hardware", 
    category: "Praktikum", 
    type: 'image' 
  },
  { 
    id: 6, 
    url: "1A8f6z5B7JpD6JUFcENY1BQE6viGpqMS0", 
    title: "Classmeet: Technical Famiglia 23", 
    category: "Acara", 
    type: 'image' 
  },
  { 
    id: 7, 
    url: "1yxG3jRdVXGsXgGo8hu_nBvYRGtRcM8lI", 
    title: "Foto Angkatan SMK Nurul Islam", 
    category: "Dokumentasi", 
    type: 'image' 
  }
];
