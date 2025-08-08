import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skillCategories = [
  {
    key: 'languages',
    color: 'text-sky-600',
    skills: [
      { name: 'JavaScript', icon: 'JS', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' },
      { name: 'TypeScript', icon: 'TS', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
      { name: 'C#', icon: 'C#', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
      { name: 'Python', icon: 'Py', bgColor: 'bg-green-100', textColor: 'text-green-600' },
      { name: 'SQL', icon: 'SQL', bgColor: 'bg-gray-100', textColor: 'text-gray-600' }
    ]
  },
  {
    key: 'frontend',
    color: 'text-blue-600',
    skills: [
      { name: 'React', icon: 'R', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
      { name: 'Angular', icon: 'A', bgColor: 'bg-red-100', textColor: 'text-red-600' },
      { name: 'Next.js', icon: 'N', bgColor: 'bg-gray-100', textColor: 'text-gray-600' },
      { name: 'Vue.js', icon: 'V', bgColor: 'bg-green-100', textColor: 'text-green-600' },
      { name: 'Tailwind', icon: 'TW', bgColor: 'bg-cyan-100', textColor: 'text-cyan-600' }
    ]
  },
  {
    key: 'backend',
    color: 'text-emerald-600',
    skills: [
      { name: 'Node.js', icon: 'N', bgColor: 'bg-green-100', textColor: 'text-green-600' },
      { name: 'Express', icon: 'Ex', bgColor: 'bg-gray-100', textColor: 'text-gray-600' },
      { name: 'ASP.NET', icon: '.N', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
      { name: 'MongoDB', icon: 'M', bgColor: 'bg-emerald-100', textColor: 'text-emerald-600' },
      { name: 'PostgreSQL', icon: 'P', bgColor: 'bg-blue-100', textColor: 'text-blue-600' }
    ]
  },
  {
    key: 'devops',
    color: 'text-orange-600',
    skills: [
      { name: 'Azure', icon: 'Az', bgColor: 'bg-sky-100', textColor: 'text-sky-600' },
      { name: 'Docker', icon: 'D', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
      { name: 'Git', icon: 'Git', bgColor: 'bg-gray-100', textColor: 'text-gray-600' },
      { name: 'CI/CD', icon: 'CI', bgColor: 'bg-green-100', textColor: 'text-green-600' },
      { name: 'AWS', icon: 'AWS', bgColor: 'bg-orange-100', textColor: 'text-orange-600' }
    ]
  }
];

export default function Skills() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div key={category.key} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className={`text-lg font-semibold mb-4 ${category.color}`}>
                  {t(`skills.${category.key}`)}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 tech-badge p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
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
