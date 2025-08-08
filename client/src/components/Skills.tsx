import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skillCategories = [
  {
    key: 'languages',
    color: 'text-primary-600 dark:text-primary-400',
    skills: [
      { name: 'JavaScript', icon: 'JS', bgColor: 'bg-yellow-100 dark:bg-yellow-900/30', textColor: 'text-yellow-600' },
      { name: 'TypeScript', icon: 'TS', bgColor: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-600' },
      { name: 'C#', icon: 'C#', bgColor: 'bg-purple-100 dark:bg-purple-900/30', textColor: 'text-purple-600' },
      { name: 'SQL', icon: 'SQL', bgColor: 'bg-gray-100 dark:bg-gray-800', textColor: 'text-gray-600 dark:text-gray-300' }
    ]
  },
  {
    key: 'frontend',
    color: 'text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'React', icon: 'R', bgColor: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-600' },
      { name: 'Angular', icon: 'A', bgColor: 'bg-red-100 dark:bg-red-900/30', textColor: 'text-red-600' },
      { name: 'Next.js', icon: 'N', bgColor: 'bg-gray-100 dark:bg-gray-800', textColor: 'text-gray-600 dark:text-gray-300' },
      { name: 'Tailwind', icon: 'TW', bgColor: 'bg-cyan-100 dark:bg-cyan-900/30', textColor: 'text-cyan-600' }
    ]
  },
  {
    key: 'backend',
    color: 'text-emerald-600 dark:text-emerald-400',
    skills: [
      { name: 'Node.js', icon: 'N', bgColor: 'bg-green-100 dark:bg-green-900/30', textColor: 'text-green-600' },
      { name: 'Express', icon: 'Ex', bgColor: 'bg-gray-100 dark:bg-gray-800', textColor: 'text-gray-600 dark:text-gray-300' },
      { name: 'ASP.NET', icon: '.N', bgColor: 'bg-purple-100 dark:bg-purple-900/30', textColor: 'text-purple-600' },
      { name: 'Nest.js', icon: 'Ne', bgColor: 'bg-red-100 dark:bg-red-900/30', textColor: 'text-red-600' }
    ]
  },
  {
    key: 'devops',
    color: 'text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'Azure', icon: 'Az', bgColor: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-600' },
      { name: 'Docker', icon: 'D', bgColor: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-600' },
      { name: 'Git', icon: 'Git', bgColor: 'bg-gray-100 dark:bg-gray-800', textColor: 'text-gray-600 dark:text-gray-300' },
      { name: 'CI/CD', icon: 'CI', bgColor: 'bg-green-100 dark:bg-green-900/30', textColor: 'text-green-600' }
    ]
  }
];

export default function Skills() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div key={category.key} className="bg-white dark:bg-dark-950 rounded-2xl p-6 shadow-lg">
                <h3 className={`text-lg font-semibold mb-4 ${category.color}`}>
                  {t(`skills.${category.key}`)}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 tech-badge p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-800"
                    >
                      <div className={`w-8 h-8 ${skill.bgColor} rounded flex items-center justify-center`}>
                        <span className={`${skill.textColor} font-bold text-xs`}>
                          {skill.icon}
                        </span>
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
