import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Download, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'express-starter',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    downloads: '9k+',
    github: 'https://github.com/fadhlaouir/create-express-node-starter',
    npm: 'https://www.npmjs.com/package/create-express-node-starter'
  },
  {
    id: 'ai-chatbot',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Node.js'],
    github: 'https://github.com/fadhlaouir/flashsolve'
  },
  {
    id: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/fadhlaouir/adswift'
  },
  {
    id: 'mobile-app',
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/fadhlaouir/remotehorizon'
  }
];

const technologyColors: Record<string, string> = {
  JavaScript: 'bg-yellow-100 text-yellow-800',
  TypeScript: 'bg-blue-100 text-blue-800',
  'Node.js': 'bg-green-100 text-green-800',
  Express: 'bg-gray-100 text-gray-800',
  MongoDB: 'bg-emerald-100 text-emerald-800',
  React: 'bg-blue-100 text-blue-800',
  JWT: 'bg-purple-100 text-purple-800',
  Swagger: 'bg-orange-100 text-orange-800',
  Tailwind: 'bg-cyan-100 text-cyan-800',
  'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
  'OpenAI API': 'bg-pink-100 text-pink-800'
};

export default function Projects() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative pb-16"
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={t(`projects.${project.id}.title`)}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  {project.downloads && (
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-600">
                        {project.downloads} Downloads
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    {t(`projects.${project.id}.title`)}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t(`projects.${project.id}.description`)}
                  </p>
                  
                  <div className="flex gap-3 pt-2">
                    {project.npm && (
                      <a
                        href={project.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        NPM Package
                      </a>
                    )}
                  </div>
                  
                  <div className={`absolute bottom-6 left-6 right-6 flex gap-2 ${project.id === 'express-starter' || project.id === 'ai-chatbot' ? 'flex-nowrap overflow-x-auto' : 'flex-wrap'}`}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium flex-shrink-0 ${
                          technologyColors[tech] || 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/fadhlaouir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              {t('projects.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}