import { Hero } from '../components/home/Hero';
import { QuickFacts } from '../components/home/QuickFacts';
import { LegacySection } from '../components/home/LegacySection';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <QuickFacts />
      <LegacySection />
    </>
  );
};
