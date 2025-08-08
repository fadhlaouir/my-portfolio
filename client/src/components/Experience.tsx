import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    id: 'cofomo',
    icon: 'C',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    technologies: ['.NET', 'Angular', 'React', 'Azure', 'Clean Architecture', 'Agile']
  },
  {
    id: 'orange',
    icon: 'O',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    technologies: ['Team Leadership', 'Microservices', 'RESTful APIs', 'Node.js', 'Project Management']
  },
  {
    id: 'emiketic',
    icon: 'E',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    technologies: ['React', 'MongoDB', 'Performance Optimization', 'Security', 'JWT']
  },
  {
    id: 'rbk',
    icon: 'R',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    technologies: ['Mentoring', 'Curriculum Design', 'JavaScript', 'React', 'Node.js', 'Teaching']
  },
  {
    id: 'gomycode',
    icon: 'G',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    technologies: ['Full Stack Development', 'UI/UX', 'Code Review', 'Accessibility', 'Documentation']
  },
  {
    id: 'gomycode-intern',
    icon: 'GI',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    technologies: ['JavaScript', 'React', 'Node.js', 'Prototyping', 'Team Collaboration']
  }
];

const technologyColors: Record<string, string> = {
  React: 'bg-blue-100 text-blue-800',
  'Node.js': 'bg-green-100 text-green-800',
  '.NET': 'bg-purple-100 text-purple-800',
  Azure: 'bg-sky-100 text-sky-800',
  Angular: 'bg-red-100 text-red-800',
  JavaScript: 'bg-yellow-100 text-yellow-800',
  'Team Leadership': 'bg-indigo-100 text-indigo-800',
  Agile: 'bg-cyan-100 text-cyan-800',
  'Performance Optimization': 'bg-green-100 text-green-800',
  Security: 'bg-red-100 text-red-800',
  JWT: 'bg-purple-100 text-purple-800',
  'Clean Architecture': 'bg-gray-100 text-gray-800',
  Microservices: 'bg-blue-100 text-blue-800',
  'RESTful APIs': 'bg-emerald-100 text-emerald-800',
  'Project Management': 'bg-orange-100 text-orange-800',
  MongoDB: 'bg-green-100 text-green-800',
  Mentoring: 'bg-emerald-100 text-emerald-800',
  'Curriculum Design': 'bg-purple-100 text-purple-800',
  Teaching: 'bg-blue-100 text-blue-800',
  'Full Stack Development': 'bg-blue-100 text-blue-800',
  'UI/UX': 'bg-pink-100 text-pink-800',
  'Code Review': 'bg-gray-100 text-gray-800',
  'Accessibility': 'bg-green-100 text-green-800',
  'Documentation': 'bg-indigo-100 text-indigo-800',
  'Prototyping': 'bg-orange-100 text-orange-800',
  'Team Collaboration': 'bg-cyan-100 text-cyan-800'
};

export default function Experience() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
            {t('experience.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
          
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {t(`experience.${experience.id}.title`)}
                      </h3>
                      <span className={`text-sm font-medium ${experience.iconColor}`}>
                        {t(`experience.${experience.id}.period`)}
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                      {t(`experience.${experience.id}.company`)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {t(`experience.${experience.id}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            technologyColors[tech] || 'bg-gray-100 text-gray-800'
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
