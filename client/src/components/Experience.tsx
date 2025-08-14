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
  React: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'Node.js': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  '.NET': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  Azure: 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300',
  Angular: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  JavaScript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  'Team Leadership': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  Agile: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Performance Optimization': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  Security: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  JWT: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'Clean Architecture': 'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300',
  Microservices: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'RESTful APIs': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  'Project Management': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  MongoDB: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  Mentoring: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  'Curriculum Design': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  Teaching: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'Full Stack Development': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'UI/UX': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  'Code Review': 'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300',
  'Accessibility': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'Documentation': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  'Prototyping': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  'Team Collaboration': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300'
};

export default function Experience() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Paint Splash Background */}
      <div className="paint-splashes absolute inset-0">
        <svg className="absolute bottom-20 right-16 w-88 h-88 opacity-8 dark:opacity-4 animate-float" 
             style={{ animationDelay: '-4s' }} viewBox="0 0 200 200" fill="none">
          <path d="M100,40 C120,35 140,45 145,65 C150,85 140,105 120,110 C100,115 80,105 75,85 C70,65 90,45 100,40 Z" 
                fill="url(#expPaint1)"/>
          <path d="M60,120 C70,115 80,125 75,135 C70,145 60,140 65,130 C60,120 60,120 60,120 Z" fill="url(#expPaint1)"/>
          <defs>
            <linearGradient id="expPaint1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
