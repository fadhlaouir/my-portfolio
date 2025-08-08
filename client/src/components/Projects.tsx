import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Github, ExternalLink, Star, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'project1',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    stars: '9k+',
    status: 'Open Source',
    github: 'https://github.com/fadhlaouir/create-express-node-starter'
  },
  {
    id: 'project2',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    stars: '876',
    status: 'Live Demo'
  },
  {
    id: 'project3',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    stars: '1.3k',
    status: 'Live Demo'
  },
  {
    id: 'project4',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'OpenAI API'],
    stars: '3.2k',
    status: 'Beta Release'
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
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
      
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
                <div className="h-64 bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-3xl font-bold text-sky-600 dark:text-sky-400">
                        {project.id === 'express-starter' ? '🚀' : 
                         project.id === 'ai-chatbot' ? '🤖' : 
                         project.id === 'ecommerce' ? '🛒' : '📱'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {t(`projects.${project.id}.title`)}
                    </h3>
                    <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-semibold">{project.stars}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                    {t(`projects.${project.id}.description`)}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge px-4 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 rounded-xl text-sm font-semibold"
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
                      className="flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 rounded-xl transition-all duration-300 font-semibold"
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
