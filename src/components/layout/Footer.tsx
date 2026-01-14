import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-page">
        <div className="text-center">
          <h3 className="font-headline text-2xl mb-2">{t('footer.title')}</h3>
          <p className="text-slate-400 text-sm">{t('footer.compiled')}</p>
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="https://www.teltow.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Stadt Teltow
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-sm">2001 - 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
