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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-950 dark:to-sky-950 pt-20"
    >
      {/* Animated Background Elements */}
      <div className="floating-shapes">
        <div className="floating-shape w-64 h-64 -top-32 -left-32 animate-float opacity-20"></div>
        <div className="floating-shape w-48 h-48 top-1/4 -right-24 animate-float opacity-15" style={{ animationDelay: '-2s' }}></div>
        <div className="floating-shape w-32 h-32 bottom-1/4 left-1/4 animate-float opacity-25" style={{ animationDelay: '-4s' }}></div>
        <div className="floating-shape w-40 h-40 bottom-10 right-1/3 animate-float opacity-10" style={{ animationDelay: '-6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          {/* Premium Avatar */}
          <div className="w-40 h-40 mx-auto mb-12 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-glow">
            RF
          </div>
          
          {/* Large Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-gray-900 dark:text-white mb-4">{t('hero.greeting')}</span>
            <span className="gradient-text">Raed Fadhlaoui</span>
          </h1>
          
          {/* Professional Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed font-medium">
            {t('hero.headline')}
          </h2>
          
          {/* Premium Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
            {t('hero.tagline')}
          </p>
          
          {/* Descriptive Text */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary text-lg px-10 py-4 relative z-10 min-w-[200px] inline-flex items-center justify-center"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="w-5 h-5 ml-2 rtl-flip" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-lg min-w-[200px] inline-flex items-center justify-center"
            >
              <span>{t('hero.contact')}</span>
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-sky-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
