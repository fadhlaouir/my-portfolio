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
    <section id="projects" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="card-hover bg-gray-50 dark:bg-dark-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={t(`projects.${project.id}.title`)}
                  className="rounded-xl mb-6 w-full h-48 object-cover"
                />
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t(`projects.${project.id}.title`)}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-emerald-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(`projects.${project.id}.description`)}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
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
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{project.stars} stars</span>
                  </div>
                  <span>{project.status}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <span>{t('projects.viewAll')}</span>
              <ArrowRight className="w-5 h-5 ml-2 rtl-flip" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
