import { useLanguage } from '../../context/LanguageContext';
import { categoryColors } from '../../utils/categoryColors';
import type { TimelineCategory } from '../../types/timeline';

const categories: TimelineCategory[] = [
  'personal',
  'politics',
  'election',
  'infrastructure',
  'international',
  'education',
  'achievement',
];

export const CategoryLegend: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => {
        const colors = categoryColors[category];
        const label = t(`category.${category}` as keyof typeof t);

        return (
          <div
            key={category}
            className="flex items-center gap-2"
          >
            <div className={`w-3 h-3 rounded-full ${colors.dot}`} />
            <span className="text-sm text-slate-600">{label}</span>
          </div>
        );
      })}
    </div>
  );
};
