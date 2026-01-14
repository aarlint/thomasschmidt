import { useState } from 'react';
import type { TimelineEntry } from '../../types/timeline';
import { categoryColors } from '../../utils/categoryColors';
import { useLanguage } from '../../context/LanguageContext';
import { Modal } from '../common/Modal';
import DOMPurify from 'dompurify';

interface TimelineModalProps {
  entry: TimelineEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TimelineModal: React.FC<TimelineModalProps> = ({ entry, isOpen, onClose }) => {
  const { t } = useLanguage();
  const [isPortrait, setIsPortrait] = useState(false);

  if (!entry) return null;

  const colors = categoryColors[entry.category];
  const categoryLabel = t(`category.${entry.category}` as keyof typeof t);
  const sanitizedContent = DOMPurify.sanitize(entry.content);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setIsPortrait(img.naturalHeight > img.naturalWidth);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Header Image */}
      {entry.image && (
        <div className={`relative w-full overflow-hidden ${isPortrait ? 'max-h-96' : 'aspect-video'}`}>
          <img
            src={entry.image}
            alt={entry.title}
            className={`w-full object-cover ${isPortrait ? 'h-96 object-top' : 'h-full'}`}
            style={{ objectPosition: entry.imagePosition || 'center center' }}
            onLoad={handleImageLoad}
            onError={(e) => {
              e.currentTarget.parentElement!.style.display = 'none';
            }}
          />
          {entry.imageCaption && (
            <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm px-4 py-2">
              {entry.imageCaption}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Year & Category */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-lg font-bold text-primary-600">
            {entry.year}
          </span>
          <span className={`category-badge ${colors.bg} ${colors.text}`}>
            {categoryLabel}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-headline text-2xl md:text-3xl text-slate-900 mb-6">
          {entry.title}
        </h2>

        {/* Main Content */}
        <div
          className="prose prose-slate max-w-none prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 prose-ul:text-slate-600"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />

        {/* Quote */}
        {entry.quote && (
          <blockquote className="mt-6 border-l-4 border-accent-500 bg-accent-50 p-4 rounded-r-lg">
            <p className="text-slate-700 italic mb-2">"{entry.quote.text}"</p>
            {entry.quote.translation && (
              <p className="text-slate-500 text-sm">
                Translation: "{entry.quote.translation}"
              </p>
            )}
            <cite className="text-slate-600 text-sm font-medium">— Thomas Schmidt</cite>
          </blockquote>
        )}

        {/* Link */}
        {entry.link && (
          <div className="mt-6">
            <a
              href={entry.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {entry.link.text}
            </a>
          </div>
        )}

        {/* Gallery placeholder */}
        {entry.images && entry.images.length > 0 && (
          <div className="mt-8">
            <h3 className="font-headline text-lg text-slate-900 mb-4">
              {t('common.viewGallery')}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {entry.images.map((img, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
