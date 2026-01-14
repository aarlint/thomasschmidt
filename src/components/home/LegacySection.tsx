import { useLanguage } from '../../context/LanguageContext';

export const LegacySection: React.FC = () => {
  const { t } = useLanguage();

  const legacyItems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: t('legacy.infrastructure'),
      description: t('legacy.infrastructureDesc'),
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('legacy.growth'),
      description: t('legacy.growthDesc'),
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('legacy.relations'),
      description: t('legacy.relationsDesc'),
      color: 'bg-purple-100 text-purple-700',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('legacy.economy'),
      description: t('legacy.economyDesc'),
      color: 'bg-amber-100 text-amber-700',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl text-slate-900 mb-4">
            {t('legacy.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {legacyItems.map(({ icon, title, description, color }) => (
            <div
              key={title}
              className="card p-6 flex gap-4"
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${color} flex items-center justify-center`}>
                {icon}
              </div>
              <div>
                <h3 className="font-headline text-lg text-slate-900 mb-1">
                  {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
