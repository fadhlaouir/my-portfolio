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
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 stagger-animation">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="premium-card p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image with Overlay Effect */}
                <div className="aspect-video rounded-xl overflow-hidden mb-6 relative group">
                  <img 
                    src={project.image} 
                    alt={t(`projects.${project.id}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-6">
                  {/* Stats Badge */}
                  {project.downloads && (
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200">
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        {project.downloads} {t('projects.downloads')}
                      </span>
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {t(`projects.${project.id}.title`)}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t(`projects.${project.id}.description`)}
                  </p>
                  
                  {/* Technology Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                            technologyColors[tech] || 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-6 py-3 inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Code
                    </a>
                    {project.npm && (
                      <a
                        href={project.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary px-6 py-3 inline-flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Install Package
                      </a>
                    )}
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
              className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-3"
            >
              {t('projects.viewAll')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}