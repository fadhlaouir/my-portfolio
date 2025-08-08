import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skillCategories = [
  {
    key: 'languages',
    color: 'text-sky-600',
    skills: [
      { name: 'JavaScript', icon: 'JS', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600', level: 'Expert' },
      { name: 'TypeScript', icon: 'TS', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced' },
      { name: 'C#', icon: 'C#', bgColor: 'bg-purple-100', textColor: 'text-purple-600', level: 'Advanced' },
      { name: 'Python', icon: 'Py', bgColor: 'bg-green-100', textColor: 'text-green-600', level: 'Intermediate' },
      { name: 'SQL', icon: 'SQL', bgColor: 'bg-gray-100', textColor: 'text-gray-600', level: 'Advanced' }
    ]
  },
  {
    key: 'frontend',
    color: 'text-blue-600',
    skills: [
      { name: 'React', icon: 'R', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Expert' },
      { name: 'Angular', icon: 'A', bgColor: 'bg-red-100', textColor: 'text-red-600', level: 'Advanced' },
      { name: 'Next.js', icon: 'N', bgColor: 'bg-gray-100', textColor: 'text-gray-600', level: 'Advanced' },
      { name: 'Vue.js', icon: 'V', bgColor: 'bg-green-100', textColor: 'text-green-600', level: 'Intermediate' },
      { name: 'Tailwind CSS', icon: 'TW', bgColor: 'bg-cyan-100', textColor: 'text-cyan-600', level: 'Advanced' },
      { name: 'Material-UI', icon: 'MU', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced' }
    ]
  },
  {
    key: 'backend',
    color: 'text-emerald-600',
    skills: [
      { name: 'Node.js', icon: 'N', bgColor: 'bg-green-100', textColor: 'text-green-600', level: 'Expert' },
      { name: 'Express.js', icon: 'Ex', bgColor: 'bg-gray-100', textColor: 'text-gray-600', level: 'Expert' },
      { name: 'ASP.NET Core', icon: '.N', bgColor: 'bg-purple-100', textColor: 'text-purple-600', level: 'Advanced' },
      { name: 'NestJS', icon: 'Ne', bgColor: 'bg-red-100', textColor: 'text-red-600', level: 'Advanced' },
      { name: 'GraphQL', icon: 'GQL', bgColor: 'bg-pink-100', textColor: 'text-pink-600', level: 'Intermediate' },
      { name: 'REST APIs', icon: 'API', bgColor: 'bg-emerald-100', textColor: 'text-emerald-600', level: 'Expert' }
    ]
  },
  {
    key: 'databases',
    color: 'text-purple-600',
    skills: [
      { name: 'MongoDB', icon: 'M', bgColor: 'bg-emerald-100', textColor: 'text-emerald-600', level: 'Advanced' },
      { name: 'PostgreSQL', icon: 'P', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced' },
      { name: 'MySQL', icon: 'My', bgColor: 'bg-orange-100', textColor: 'text-orange-600', level: 'Advanced' },
      { name: 'Redis', icon: 'R', bgColor: 'bg-red-100', textColor: 'text-red-600', level: 'Intermediate' },
      { name: 'SQL Server', icon: 'SS', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced' }
    ]
  },
  {
    key: 'devops',
    color: 'text-orange-600',
    skills: [
      { name: 'Azure DevOps', icon: 'Az', bgColor: 'bg-sky-100', textColor: 'text-sky-600', level: 'Advanced' },
      { name: 'Docker', icon: 'D', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced' },
      { name: 'Kubernetes', icon: 'K8s', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Intermediate' },
      { name: 'GitHub Actions', icon: 'GA', bgColor: 'bg-gray-100', textColor: 'text-gray-600', level: 'Advanced' },
      { name: 'AWS', icon: 'AWS', bgColor: 'bg-orange-100', textColor: 'text-orange-600', level: 'Intermediate' }
    ]
  },
  {
    key: 'tools',
    color: 'text-gray-600',
    skills: [
      { name: 'Visual Studio', icon: 'VS', bgColor: 'bg-purple-100', textColor: 'text-purple-600', level: 'Expert' },
      { name: 'VS Code', icon: 'VSC', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Expert' },
      { name: 'Postman', icon: 'PM', bgColor: 'bg-orange-100', textColor: 'text-orange-600', level: 'Advanced' },
      { name: 'Figma', icon: 'Fig', bgColor: 'bg-purple-100', textColor: 'text-purple-600', level: 'Intermediate' },
      { name: 'Jira', icon: 'J', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced' }
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.key} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className={`text-lg font-semibold mb-4 ${category.color}`}>
                  {t(`skills.${category.key}`)}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between tech-badge p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${skill.bgColor} rounded flex items-center justify-center`}>
                          <span className={`${skill.textColor} font-bold text-xs`}>
                            {skill.icon}
                          </span>
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-md">
                        {skill.level}
                      </span>
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
