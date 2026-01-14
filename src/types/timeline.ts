export type TimelineCategory =
  | 'personal'
  | 'politics'
  | 'election'
  | 'infrastructure'
  | 'international'
  | 'education'
  | 'achievement';

export interface TimelineImage {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
}

export interface TimelineQuote {
  text: string;
  translation?: string;
}

export interface TimelineLink {
  url: string;
  text: string;
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  category: TimelineCategory;
  image?: string;
  imageCaption?: string;
  imagePosition?: string;
  images?: TimelineImage[];
  content: string;
  quote?: TimelineQuote;
  link?: TimelineLink;
}
