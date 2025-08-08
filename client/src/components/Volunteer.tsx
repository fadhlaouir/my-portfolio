import { Users, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const volunteerExperience = [
  {
    id: 'gdsc-lead',
    icon: 'G',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 'marketing-community',
    icon: 'M',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 'microsoft-club',
    icon: 'T',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
];

export default function Volunteer() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-sky-600 dark:text-sky-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {t('volunteer.title')}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('volunteer.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerExperience.map((experience) => (
              <div
                key={experience.id}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${experience.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className={`${experience.iconColor} font-bold text-lg`}>
                      {experience.icon}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg leading-tight mb-1">
                      {t(`volunteer.${experience.id}.title`)}
                    </h3>
                    <p className="text-sky-600 dark:text-sky-400 font-medium text-sm mb-2">
                      {t(`volunteer.${experience.id}.organization`)}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                      {t(`volunteer.${experience.id}.period`)}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {t(`volunteer.${experience.id}.description`)}
                </p>
                
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    {t(`volunteer.${experience.id}.impact`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-700 rounded-full px-6 py-3 shadow-md">
              <Award className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {t('volunteer.commitment')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}