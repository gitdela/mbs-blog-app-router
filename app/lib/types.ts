export interface Post {
  id: string;
  author: Author;
  categories: string[];
  title: string;
  body: string;
  is_featured: boolean;
  is_news: boolean;
  image_url: string;
  created_at: string;
  updated_at: string;
  snippet: string;
  meta_title: string;
  meta_desc: string;
}

export interface Posts {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface Result {
  id: string;
  author: string;
  categories: string[];
  title: string;
  snippet: string;
  is_featured: boolean;
  is_news: boolean;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}

export interface Categories {
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
}

export interface Author {
  name: string;
  profile_image: string;
}

export interface CoursesData {
  count: number;
  next: null;
  previous: null;
  results: CourseResult[];
}

export interface CourseResult {
  id: string;
  author: Author;
  timestamps: Timestamp[];
  title: string;
  description: string;
  video_url: string;
  created_at: Date;
  updated_at: Date;
}

export interface Timestamp {
  label: string;
  time: number;
}

export interface Author {
  name: string;
  profile_image: string;
}
