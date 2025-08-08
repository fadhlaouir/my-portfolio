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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-sky-50 pt-20"
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
            <span className="block text-gray-900 mb-4">{t('hero.greeting')}</span>
            <span className="gradient-text">Raed Fadhlaoui</span>
          </h1>
          
          {/* Professional Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-8 leading-relaxed font-medium">
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
            
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-lg min-w-[200px] inline-flex items-center justify-center"
            >
              <span>{t('hero.contact')}</span>
            </button>
          </div>
          

        </div>
      </div>
    </section>
  );
}
