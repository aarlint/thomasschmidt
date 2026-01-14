import type { TimelineCategory } from '../types/timeline';

export const categoryColors: Record<
  TimelineCategory,
  { bg: string; text: string; border: string; dot: string }
> = {
  personal: {
    bg: 'bg-orange-100',
    text: 'text-orange-700',
    border: 'border-orange-500',
    dot: 'bg-orange-500',
  },
  politics: {
    bg: 'bg-slate-100',
    text: 'text-slate-700',
    border: 'border-slate-500',
    dot: 'bg-slate-700',
  },
  election: {
    bg: 'bg-red-100',
    text: 'text-red-700',
    border: 'border-red-500',
    dot: 'bg-red-500',
  },
  infrastructure: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    border: 'border-green-500',
    dot: 'bg-green-500',
  },
  international: {
    bg: 'bg-purple-100',
    text: 'text-purple-700',
    border: 'border-purple-500',
    dot: 'bg-purple-500',
  },
  education: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-500',
    dot: 'bg-blue-500',
  },
  achievement: {
    bg: 'bg-amber-100',
    text: 'text-amber-700',
    border: 'border-amber-500',
    dot: 'bg-amber-500',
  },
};

export const getCategoryColor = (category: TimelineCategory) => categoryColors[category];
