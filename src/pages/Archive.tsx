import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ArchiveItem {
  id: string;
  titleEN: string;
  titleDE: string;
  descriptionEN?: string;
  descriptionDE?: string;
  type: 'pdf' | 'video' | 'link' | 'photo';
  url: string;
  date?: string;
}

const archiveItems: ArchiveItem[] = [
  {
    id: 'rueckblick-bm',
    titleEN: 'Retrospective of a Mayor',
    titleDE: 'Rückblick eines Bürgermeisters',
    descriptionEN: 'A comprehensive look back at 24 years of mayoral leadership in Teltow.',
    descriptionDE: 'Ein umfassender Rückblick auf 24 Jahre Bürgermeisterschaft in Teltow.',
    type: 'pdf',
    url: '/documents/rueckblick-buergermeister.pdf',
    date: '2025',
  },
];

const typeIcons: Record<string, React.ReactNode> = {
  pdf: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zm-3 9.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5v-6H8.5c.83 0 1.5.67 1.5 1.5v1zm5 3c0 .83-.67 1.5-1.5 1.5H11v-6h2.5c.83 0 1.5.67 1.5 1.5v3zm4-3c0 .83-.67 1.5-1.5 1.5H17v1h1.5V17H17v1.5h-1.5v-6H19c.83 0 1.5.67 1.5 1.5v1z"/>
    </svg>
  ),
  video: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
    </svg>
  ),
  link: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>
  ),
  photo: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
    </svg>
  ),
};

const typeLabels: Record<string, { en: string; de: string }> = {
  pdf: { en: 'PDF Document', de: 'PDF-Dokument' },
  video: { en: 'Video', de: 'Video' },
  link: { en: 'External Link', de: 'Externer Link' },
  photo: { en: 'Photo Gallery', de: 'Fotogalerie' },
};

export const Archive: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-page">
          <h1 className="font-headline text-4xl md:text-5xl mb-4">
            {t('archive.title')}
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            {t('archive.subtitle')}
          </p>
        </div>
      </div>

      {/* Archive Items */}
      <div className="container-page py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archiveItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex flex-col hover:border-primary-300 transition-all duration-300 group"
            >
              {/* Type Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {typeIcons[item.type]}
                </div>
                {item.date && (
                  <span className="text-sm text-slate-500">{item.date}</span>
                )}
              </div>

              {/* Content */}
              <h3 className="font-headline text-xl text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                {language === 'de' ? item.titleDE : item.titleEN}
              </h3>

              {(item.descriptionEN || item.descriptionDE) && (
                <p className="text-slate-600 text-sm mb-4 flex-grow">
                  {language === 'de' ? item.descriptionDE : item.descriptionEN}
                </p>
              )}

              {/* Type Badge */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  {language === 'de' ? typeLabels[item.type].de : typeLabels[item.type].en}
                </span>
                <svg className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Empty state hint for future items */}
        {archiveItems.length === 1 && (
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              {language === 'de'
                ? 'Weitere Dokumente und Medien werden hinzugefügt...'
                : 'More documents and media will be added...'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
