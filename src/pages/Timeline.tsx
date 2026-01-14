import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTimelineData } from '../hooks/useTimelineData';
import { useLanguage } from '../context/LanguageContext';
import { TimelineCard, TimelineCardMobile } from '../components/timeline/TimelineCard';
import { TimelineModal } from '../components/timeline/TimelineModal';
import { CategoryLegend } from '../components/timeline/CategoryLegend';
import type { TimelineEntry } from '../types/timeline';

export const Timeline: React.FC = () => {
  const { t } = useLanguage();
  const timelineData = useTimelineData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedEntry, setSelectedEntry] = useState<TimelineEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle entry ID from URL
  useEffect(() => {
    const entryId = searchParams.get('entry');
    if (entryId) {
      const entry = timelineData.find((e) => e.id === entryId);
      if (entry) {
        setSelectedEntry(entry);
        setIsModalOpen(true);
      }
    }
  }, [searchParams, timelineData]);

  const handleOpenModal = (entry: TimelineEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
    setSearchParams({ entry: entry.id });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="container-page text-center">
          <h1 className="font-headline text-4xl md:text-5xl text-slate-900 mb-4">
            {t('nav.timeline')}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            {t('hero.years')} &middot; 24 {t('stat.years')}
          </p>
          <CategoryLegend />
        </div>
      </div>

      {/* Timeline */}
      <div className="container-page py-16">
        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

          <div className="space-y-12">
            {timelineData.map((entry, index) => (
              <TimelineCard
                key={entry.id}
                entry={entry}
                onClick={() => handleOpenModal(entry)}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          {/* Left line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

          <div className="space-y-6">
            {timelineData.map((entry) => (
              <TimelineCardMobile
                key={entry.id}
                entry={entry}
                onClick={() => handleOpenModal(entry)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <TimelineModal
        entry={selectedEntry}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
