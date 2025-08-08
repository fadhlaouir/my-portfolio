import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    id: 'cofomo',
    icon: 'C',
    iconBg: 'bg-primary-100 dark:bg-primary-900/30',
    iconColor: 'text-primary-600 dark:text-primary-400',
    technologies: ['React', 'Node.js', '.NET', 'Azure']
  },
  {
    id: 'orange',
    icon: 'O',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
    technologies: ['JavaScript', 'Node.js', 'PostgreSQL', 'Redis']
  },
  {
    id: 'teaching',
    icon: 'T',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    technologies: ['JavaScript', 'React', 'Node.js', 'Mentoring']
  }
];

const technologyColors: Record<string, string> = {
  React: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
  'Node.js': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
  '.NET': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
  Azure: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200',
  JavaScript: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
  PostgreSQL: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
  Redis: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200',
  Mentoring: 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200'
};

export default function Experience() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
          
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-gray-50 dark:bg-dark-900 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${experience.iconBg} rounded-xl flex items-center justify-center`}>
                      <span className={`${experience.iconColor} font-bold text-xl`}>
                        {experience.icon}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t(`experience.${experience.id}.title`)}
                      </h3>
                      <span className={`text-sm font-medium ${experience.iconColor}`}>
                        {t(`experience.${experience.id}.period`)}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                      {t(`experience.${experience.id}.company`)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {t(`experience.${experience.id}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            technologyColors[tech] || 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
