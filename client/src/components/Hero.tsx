import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowRight, ChevronDown } from 'lucide-react';
import profileImage from '@assets/1680177373328_1754661590948.jpg';

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
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
          {/* Professional Photo */}
          <div className="w-40 h-40 mx-auto mb-12 rounded-full overflow-hidden shadow-2xl animate-glow ring-4 ring-sky-400/20">
            <img 
              src={profileImage} 
              alt="Raed Fadhlaoui"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Large Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-gray-900 dark:text-gray-100 mb-4">{t('hero.greeting')}</span>
            <span className="gradient-text">{t('name')}</span>
          </h1>
          
          {/* Professional Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed font-medium">
            {t('hero.headline')}
          </h2>
          
          {/* Premium Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
            {t('hero.tagline')}
          </p>
          
          {/* Descriptive Text */}
          <p className="text-lg sm:text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
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
            
            <a
              href="/assets/RAED_FADHLAOUI_EN_CV_1754669760827.pdf"
              download="Raed_Fadhlaoui_Resume.pdf"
              className="btn-secondary text-lg min-w-[200px] inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{t('about.resume')}</span>
            </a>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors"
            >
              <span>{t('hero.contact')}</span>
            </button>
          </div>
          

        </div>
      </div>
    </section>
  );
}
