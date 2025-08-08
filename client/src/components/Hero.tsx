import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-emerald-100 dark:from-dark-950 dark:to-dark-900 pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          {/* Professional headshot placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-400 to-emerald-400 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            RF
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span>{t('hero.greeting')}</span>{' '}
            <span className="gradient-text">Raed Fadhlaoui</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t('hero.tagline')}
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5 ml-2 rtl-flip" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              <span>{t('hero.contact')}</span>
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
