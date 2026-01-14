import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../types/translations';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex bg-slate-100 rounded-lg p-1"
      role="group"
      aria-label="Language selection"
    >
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`
            px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
            ${
              language === code
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
            }
          `}
          aria-pressed={language === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
