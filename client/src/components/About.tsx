import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            {t('about.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div>
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                {t('about.bio')}
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-gray-600">
                {t('about.bio2')}
              </p>

              <p className="text-lg leading-relaxed mb-8 text-gray-600">
                Beyond coding, I'm passionate about mentoring aspiring developers and contributing to open-source projects. I believe in the power of collaboration and continuous learning to drive innovation in the tech industry.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
                  🎯 Problem Solver
                </span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  🌱 Open Source
                </span>
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  🚀 Innovation
                </span>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
