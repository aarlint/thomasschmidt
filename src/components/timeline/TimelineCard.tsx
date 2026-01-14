import type { TimelineEntry } from '../../types/timeline';
import { categoryColors } from '../../utils/categoryColors';
import { useLanguage } from '../../context/LanguageContext';

interface TimelineCardProps {
  entry: TimelineEntry;
  onClick: () => void;
  isEven: boolean;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ entry, onClick, isEven }) => {
  const { t } = useLanguage();
  const colors = categoryColors[entry.category];
  const categoryLabel = t(`category.${entry.category}` as keyof typeof t);

  const truncatedContent = entry.content.replace(/<[^>]*>/g, '').slice(0, 150) + '...';

  return (
    <div
      className={`relative flex items-start gap-8 ${isEven ? 'flex-row-reverse' : ''}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md z-10"
        style={{ top: '24px' }}
      >
        <div className={`w-full h-full rounded-full ${colors.dot}`} />
      </div>

      {/* Card */}
      <div className={`w-[calc(50%-2rem)] ${isEven ? 'text-left' : 'text-right'}`}>
        <button
          onClick={onClick}
          className="card w-full text-left p-0 overflow-hidden cursor-pointer group"
        >
          {/* Image */}
          {entry.image && (
            <div className="aspect-video overflow-hidden">
              <img
                src={entry.image}
                alt={entry.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: entry.imagePosition || 'center center' }}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="p-5">
            {/* Year & Category */}
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-sm font-bold text-primary-600">
                {entry.year}
              </span>
              <span className={`category-badge ${colors.bg} ${colors.text}`}>
                {categoryLabel}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-headline text-lg text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
              {entry.title}
            </h3>

            {/* Preview content */}
            <p className="text-sm text-slate-600 line-clamp-3">
              {truncatedContent}
            </p>

            {/* Read more indicator */}
            <div className="mt-3 flex items-center gap-1 text-primary-600 text-sm font-medium">
              {t('common.readMore')}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Spacer for the other side */}
      <div className="w-[calc(50%-2rem)]" />
    </div>
  );
};

// Mobile version
export const TimelineCardMobile: React.FC<Omit<TimelineCardProps, 'isEven'>> = ({ entry, onClick }) => {
  const { t } = useLanguage();
  const colors = categoryColors[entry.category];
  const categoryLabel = t(`category.${entry.category}` as keyof typeof t);

  const truncatedContent = entry.content.replace(/<[^>]*>/g, '').slice(0, 100) + '...';

  return (
    <div className="relative pl-8">
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-4 h-4 rounded-full border-4 border-white shadow-md z-10">
        <div className={`w-full h-full rounded-full ${colors.dot}`} />
      </div>

      {/* Card */}
      <button
        onClick={onClick}
        className="card w-full text-left p-0 overflow-hidden cursor-pointer group"
      >
        {entry.image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: entry.imagePosition || 'center center' }}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        <div className="p-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-sm font-bold text-primary-600">
              {entry.year}
            </span>
            <span className={`category-badge ${colors.bg} ${colors.text}`}>
              {categoryLabel}
            </span>
          </div>

          <h3 className="font-headline text-base text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
            {entry.title}
          </h3>

          <p className="text-sm text-slate-600 line-clamp-2">
            {truncatedContent}
          </p>
        </div>
      </button>
    </div>
  );
};
