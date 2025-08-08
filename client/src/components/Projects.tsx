import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Github, ExternalLink, Star, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'express-starter',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bdc57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    stars: '9k+',
    status: 'Open Source',
    github: 'https://github.com/fadhlaouir/create-express-node-starter'
  },
  {
    id: 'ai-chatbot',
    image: 'https://images.unsplash.com/photo-1677442136019-1595019bdbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Node.js'],
    stars: '3.2k',
    status: 'Beta Release',
    github: 'https://github.com/fadhlaouir/flashsolve'
  },
  {
    id: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    stars: '1.3k',
    status: 'Live Demo',
    github: 'https://github.com/fadhlaouir/adswift'
  },
  {
    id: 'mobile-app',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    stars: '876',
    status: 'Live Demo',
    github: 'https://github.com/fadhlaouir/remotehorizon'
  }
];

const technologyColors: Record<string, string> = {
  JavaScript: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
  TypeScript: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
  'Node.js': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
  Express: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
  MongoDB: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200',
  React: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
  JWT: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
  Swagger: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200',
  Tailwind: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200',
  'Tailwind CSS': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200',
  'OpenAI API': 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200'
};

export default function Projects() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="projects" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">{t('projects.title')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="glass project-card rounded-3xl overflow-hidden group"
              >
                <div className="h-64 bg-gradient-to-br from-sky-100 to-sky-200 relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={t(`projects.${project.id}.title`)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {t(`projects.${project.id}.title`)}
                    </h3>
                    <div className="flex items-center gap-2 text-sky-600">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-semibold">{project.stars}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    {t(`projects.${project.id}.description`)}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge px-4 py-2 bg-sky-100 text-sky-800 rounded-xl text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 rounded-xl transition-all duration-300 font-semibold"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 btn-primary"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a
              href="https://github.com/fadhlaouir"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-3"
            >
              <span>{t('projects.viewAll')}</span>
              <ArrowRight className="w-5 h-5 rtl-flip" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
