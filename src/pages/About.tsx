import { useLanguage } from '../context/LanguageContext';

const partnerCities = [
  {
    name: 'Ahlen',
    country: 'Germany',
    since: '1991',
    flag: '🇩🇪',
    description: 'First post-reunification partnership, Westphalia',
  },
  {
    name: "Gonfreville l'Orcher",
    country: 'France',
    since: '1999',
    flag: '🇫🇷',
    description: 'Normandy, contact since 1964',
  },
  {
    name: 'Żagań',
    country: 'Poland',
    since: '2006',
    flag: '🇵🇱',
    description: 'Key partner in Ukraine support efforts',
  },
  {
    name: 'Rudong',
    country: 'China',
    since: '2018',
    flag: '🇨🇳',
    description: 'Jiangsu Province, economic & cultural exchange',
  },
  {
    name: 'Khotyn',
    country: 'Ukraine',
    since: '2023',
    flag: '🇺🇦',
    description: 'First German-Polish-Ukrainian trilateral partnership',
  },
];

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20">
        <div className="container-page">
          <h1 className="font-headline text-4xl md:text-5xl mb-4">
            {t('about.title')}
          </h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            {t('about.intro')}
          </p>
        </div>
      </div>

      {/* Biography */}
      <div className="container-page py-16">
        <div className="max-w-3xl">
          <h2 className="font-headline text-2xl text-slate-900 mb-6">
            {language === 'de' ? 'Biografie' : 'Biography'}
          </h2>

          <div className="prose prose-slate max-w-none">
            {language === 'de' ? (
              <>
                <p>
                  Thomas Schmidt wurde im Februar 1961 in Potsdam, DDR, geboren. Nach seiner Ausbildung zum Koch
                  leistete er seinen Wehrdienst als Bausoldat - eine bewusste Entscheidung gegen das Tragen von Waffen.
                </p>
                <p>
                  Nach der Wiedervereinigung begann seine politische Karriere 1990 als Mitglied der Teltower
                  Stadtverordnetenversammlung. Er diente acht Jahre im Kreistag Potsdam-Mittelmark, bevor er
                  im November 2001 zum Bürgermeister von Teltow gewählt wurde.
                </p>
                <p>
                  In seinen 24 Jahren im Amt transformierte Schmidt Teltow von einer 16.000-Einwohner-Stadt
                  in eine blühende Gemeinde mit fast 29.000 Einwohnern. Sein Engagement für Infrastruktur,
                  internationale Partnerschaften und Bildung hinterlässt ein dauerhaftes Vermächtnis.
                </p>
              </>
            ) : (
              <>
                <p>
                  Thomas Schmidt was born in February 1961 in Potsdam, East Germany (DDR). After training as
                  a professional cook, he served in the military as a Bausoldat - a conscious decision to
                  refuse to bear arms.
                </p>
                <p>
                  Following German reunification, his political career began in 1990 as a member of the
                  Teltow City Council. He served eight years on the Potsdam-Mittelmark County Council before
                  being elected Mayor of Teltow in November 2001.
                </p>
                <p>
                  During his 24 years in office, Schmidt transformed Teltow from a 16,000-resident town
                  into a thriving community of nearly 29,000. His dedication to infrastructure, international
                  partnerships, and education leaves a lasting legacy.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Partner Cities */}
      <div className="bg-slate-50 py-16">
        <div className="container-page">
          <h2 className="font-headline text-2xl text-slate-900 mb-8 text-center">
            {t('about.partnerCities')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnerCities.map((city) => (
              <div key={city.name} className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{city.flag}</span>
                  <div>
                    <h3 className="font-headline text-lg text-slate-900">
                      {city.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-2">
                      {city.country} &middot; {language === 'de' ? 'Seit' : 'Since'} {city.since}
                    </p>
                    <p className="text-sm text-slate-600">{city.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="container-page py-16">
        <h2 className="font-headline text-2xl text-slate-900 mb-8 text-center">
          {language === 'de' ? 'Wichtige Errungenschaften' : 'Key Achievements'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-headline text-lg text-slate-900 mb-1">S-Bahn {language === 'de' ? 'Anbindung' : 'Connection'}</h3>
              <p className="text-sm text-slate-600">
                {language === 'de'
                  ? 'Nach 43 Jahren wieder an das Berliner S-Bahn-Netz angeschlossen (2005)'
                  : 'Reconnected to Berlin S-Bahn network after 43 years (2005)'}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <div>
              <h3 className="font-headline text-lg text-slate-900 mb-1">Marina Teltow</h3>
              <p className="text-sm text-slate-600">
                {language === 'de'
                  ? '15 Millionen Euro Hafenprojekt am Teltowkanal (2019)'
                  : '15 million euro harbor project on Teltow Canal (2019)'}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h3 className="font-headline text-lg text-slate-900 mb-1">
                {language === 'de' ? 'Internationale Partnerschaften' : 'International Partnerships'}
              </h3>
              <p className="text-sm text-slate-600">
                {language === 'de'
                  ? '5 Partnerstädte in 4 Ländern, darunter erste deutsch-polnisch-ukrainische Partnerschaft'
                  : '5 partner cities across 4 countries, including first German-Polish-Ukrainian partnership'}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="font-headline text-lg text-slate-900 mb-1">Grace-Hopper-Gesamtschule</h3>
              <p className="text-sm text-slate-600">
                {language === 'de'
                  ? '42 Millionen Euro Schulprojekt, größte Investition des Landkreises (2023)'
                  : '42 million euro school project, county\'s largest investment (2023)'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
