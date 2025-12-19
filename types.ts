
export interface Student {
  id: number;
  name: string;
  role?: string;
  photo: string;
  bio: string;
  votes: number;
}

export interface ScheduleItem {
  time: string;
  subject: string;
  teacher: string;
  description?: string;
  room?: string;
}

export interface DaySchedule {
  day: string;
  items: ScheduleItem[];
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: string;
  type: 'image' | 'video';
}

export type TabType = 'students' | 'schedule' | 'gallery' | 'ai';
