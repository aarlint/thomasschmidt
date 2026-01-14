export type Language = 'en' | 'de';

export interface TranslationKeys {
  // Navigation
  'nav.home': string;
  'nav.timeline': string;
  'nav.about': string;

  // Hero
  'hero.title': string;
  'hero.subtitle': string;
  'hero.years': string;

  // Stats
  'stat.years': string;
  'stat.terms': string;
  'stat.population': string;
  'stat.partners': string;

  // Quick Facts
  'facts.title': string;
  'facts.name': string;
  'facts.born': string;
  'facts.bornValue': string;
  'facts.party': string;
  'facts.partyValue': string;
  'facts.profession': string;
  'facts.professionValue': string;
  'facts.terms': string;
  'facts.termsValue': string;
  'facts.achievement': string;
  'facts.achievementValue': string;

  // Categories
  'category.personal': string;
  'category.politics': string;
  'category.election': string;
  'category.infrastructure': string;
  'category.international': string;
  'category.education': string;
  'category.achievement': string;

  // Legacy Section
  'legacy.title': string;
  'legacy.infrastructure': string;
  'legacy.infrastructureDesc': string;
  'legacy.growth': string;
  'legacy.growthDesc': string;
  'legacy.relations': string;
  'legacy.relationsDesc': string;
  'legacy.economy': string;
  'legacy.economyDesc': string;

  // About Page
  'about.title': string;
  'about.intro': string;
  'about.partnerCities': string;

  // Footer
  'footer.title': string;
  'footer.compiled': string;

  // Common
  'common.readMore': string;
  'common.viewGallery': string;
  'common.close': string;
  'common.language': string;
  'common.viewTimeline': string;
}

export type Translations = Record<Language, TranslationKeys>;
