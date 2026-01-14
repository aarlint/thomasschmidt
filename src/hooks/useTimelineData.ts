import { useLanguage } from '../context/LanguageContext';
import { timelineEntriesEN, timelineEntriesDE } from '../data';

export const useTimelineData = () => {
  const { language } = useLanguage();
  return language === 'en' ? timelineEntriesEN : timelineEntriesDE;
};
