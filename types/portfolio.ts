export interface Project {
  // Basic
  slug: string;
  index: string;

  title: string;
  sub: string;
  cat: string;

  // Metadata
  role: string;
  year: string;
  doc: string;

  // Card
  accent: string;
  cover?: string;
  span: number;
  tall?: boolean;

  // Case Study
  tagline: string;
  brief: string;
  approach: string;
  contribution: string;

  // Layout Type
  layout: "editorial" | "mobile" | "video" | "campaign" | "reel";

  // Content
  gallery?: GalleryImage[];
  videos?: VideoItem[];

  phone?: PhonePrototype;

  stats?: Stat[];

  press?: string;

  youtube?: string;

  links?: ProjectLink[];
}

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface VideoItem {
  src: string;
  poster?: string;
  caption?: string;
}

export interface PhonePrototype {
  proto?: string;

  shots?: PhoneShot[];

  scroll?: boolean;
}

export interface PhoneShot {
  img: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}
