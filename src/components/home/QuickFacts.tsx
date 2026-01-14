import { useLanguage } from '../../context/LanguageContext';

export const QuickFacts: React.FC = () => {
  const { t } = useLanguage();

  const facts = [
    { label: t('facts.name'), value: 'Thomas Schmidt' },
    { label: t('facts.born'), value: t('facts.bornValue') },
    { label: t('facts.party'), value: t('facts.partyValue') },
    { label: t('facts.profession'), value: t('facts.professionValue') },
    { label: t('facts.terms'), value: t('facts.termsValue') },
    { label: t('facts.achievement'), value: t('facts.achievementValue') },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-card p-8 -mt-24 relative z-20">
            <h2 className="font-headline text-2xl text-slate-900 mb-6">
              {t('facts.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facts.map(({ label, value }) => (
                <div
                  key={label}
                  className="p-4 bg-slate-50 rounded-lg border-l-4 border-primary-500"
                >
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-slate-900 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
