import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '24', label: t('stat.years') },
    { value: '3', label: t('stat.terms') },
    { value: '81%', label: t('stat.population') },
    { value: '5', label: t('stat.partners') },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-page relative z-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-200 mb-2">
            {t('hero.subtitle')}
          </p>

          {/* Years badge */}
          <div className="inline-block bg-accent-500 text-primary-900 px-6 py-2 rounded-full font-bold text-lg mb-8">
            {t('hero.years')}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {value}
                </div>
                <div className="text-sm text-primary-300 uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              {t('common.viewTimeline')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
