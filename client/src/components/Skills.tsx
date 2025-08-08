import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Star, Zap, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    key: 'languages',
    color: 'text-sky-600',
    icon: TrendingUp,
    skills: [
      { name: 'JavaScript', icon: 'JS', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600', level: 'Expert', percentage: 95 },
      { name: 'TypeScript', icon: 'TS', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced', percentage: 90 },
      { name: 'C#', icon: 'C#', bgColor: 'bg-purple-100', textColor: 'text-purple-600', level: 'Advanced', percentage: 85 },
      { name: 'Python', icon: 'Py', bgColor: 'bg-green-100', textColor: 'text-green-600', level: 'Intermediate', percentage: 75 },
      { name: 'SQL', icon: 'SQL', bgColor: 'bg-gray-100', textColor: 'text-gray-600', level: 'Advanced', percentage: 88 }
    ]
  },
  {
    key: 'frontend',
    color: 'text-blue-600',
    icon: Star,
    skills: [
      { name: 'React', icon: 'R', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Expert', percentage: 95 },
      { name: 'Angular', icon: 'A', bgColor: 'bg-red-100', textColor: 'text-red-600', level: 'Advanced', percentage: 85 },
      { name: 'Next.js', icon: 'N', bgColor: 'bg-gray-100', textColor: 'text-gray-600', level: 'Advanced', percentage: 88 },
      { name: 'Vue.js', icon: 'V', bgColor: 'bg-green-100', textColor: 'text-green-600', level: 'Intermediate', percentage: 70 },
      { name: 'Tailwind CSS', icon: 'TW', bgColor: 'bg-cyan-100', textColor: 'text-cyan-600', level: 'Advanced', percentage: 92 },
      { name: 'Material-UI', icon: 'MU', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced', percentage: 80 }
    ]
  },
  {
    key: 'backend',
    color: 'text-emerald-600',
    icon: Zap,
    skills: [
      { name: 'Node.js', icon: 'N', bgColor: 'bg-green-100', textColor: 'text-green-600', level: 'Expert', percentage: 95 },
      { name: 'Express.js', icon: 'Ex', bgColor: 'bg-gray-100', textColor: 'text-gray-600', level: 'Expert', percentage: 93 },
      { name: 'ASP.NET Core', icon: '.N', bgColor: 'bg-purple-100', textColor: 'text-purple-600', level: 'Advanced', percentage: 85 },
      { name: 'NestJS', icon: 'Ne', bgColor: 'bg-red-100', textColor: 'text-red-600', level: 'Advanced', percentage: 80 },
      { name: 'GraphQL', icon: 'GQL', bgColor: 'bg-pink-100', textColor: 'text-pink-600', level: 'Intermediate', percentage: 70 },
      { name: 'REST APIs', icon: 'API', bgColor: 'bg-emerald-100', textColor: 'text-emerald-600', level: 'Expert', percentage: 95 }
    ]
  },
  {
    key: 'databases',
    color: 'text-purple-600',
    icon: Star,
    skills: [
      { name: 'MongoDB', icon: 'M', bgColor: 'bg-emerald-100', textColor: 'text-emerald-600', level: 'Advanced', percentage: 85 },
      { name: 'PostgreSQL', icon: 'P', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced', percentage: 88 },
      { name: 'MySQL', icon: 'My', bgColor: 'bg-orange-100', textColor: 'text-orange-600', level: 'Advanced', percentage: 82 },
      { name: 'Redis', icon: 'R', bgColor: 'bg-red-100', textColor: 'text-red-600', level: 'Intermediate', percentage: 75 },
      { name: 'SQL Server', icon: 'SS', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced', percentage: 80 }
    ]
  },
  {
    key: 'devops',
    color: 'text-orange-600',
    icon: TrendingUp,
    skills: [
      { name: 'Azure DevOps', icon: 'Az', bgColor: 'bg-sky-100', textColor: 'text-sky-600', level: 'Advanced', percentage: 85 },
      { name: 'Docker', icon: 'D', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced', percentage: 82 },
      { name: 'Kubernetes', icon: 'K8s', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Intermediate', percentage: 68 },
      { name: 'GitHub Actions', icon: 'GA', bgColor: 'bg-gray-100', textColor: 'text-gray-600', level: 'Advanced', percentage: 80 },
      { name: 'AWS', icon: 'AWS', bgColor: 'bg-orange-100', textColor: 'text-orange-600', level: 'Intermediate', percentage: 72 }
    ]
  },
  {
    key: 'tools',
    color: 'text-gray-600',
    icon: Zap,
    skills: [
      { name: 'Visual Studio', icon: 'VS', bgColor: 'bg-purple-100', textColor: 'text-purple-600', level: 'Expert', percentage: 95 },
      { name: 'VS Code', icon: 'VSC', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Expert', percentage: 98 },
      { name: 'Postman', icon: 'PM', bgColor: 'bg-orange-100', textColor: 'text-orange-600', level: 'Advanced', percentage: 85 },
      { name: 'Figma', icon: 'Fig', bgColor: 'bg-purple-100', textColor: 'text-purple-600', level: 'Intermediate', percentage: 70 },
      { name: 'Jira', icon: 'J', bgColor: 'bg-blue-100', textColor: 'text-blue-600', level: 'Advanced', percentage: 80 }
    ]
  }
];

export default function Skills() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('skills.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('skills.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={category.key} className="premium-card p-8 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 ${category.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${category.color}`}>
                      {t(`skills.${category.key}`)}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 ${skill.bgColor} rounded-lg flex items-center justify-center group-hover/skill:scale-110 transition-transform duration-200`}>
                              <span className={`${skill.textColor} font-bold text-xs`}>
                                {skill.icon}
                              </span>
                            </div>
                            <span className="font-semibold text-gray-800">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gray-900">{skill.percentage}%</span>
                            <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ 
                              width: hasIntersected ? `${skill.percentage}%` : '0%',
                              transitionDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
