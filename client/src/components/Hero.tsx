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
      {/* Paint Splash Background Elements */}
      <div className="paint-splashes">
        {/* Large paint splash */}
        <svg className="absolute -top-20 -left-20 w-96 h-96 opacity-20 dark:opacity-10 animate-float" viewBox="0 0 200 200" fill="none">
          <path d="M100,20 C120,30 140,50 130,80 C135,100 120,120 100,125 C80,130 60,120 55,100 C50,80 70,60 85,40 C90,30 95,25 100,20 Z" 
                fill="url(#paint1)" className="animate-pulse"/>
          <defs>
            <linearGradient id="paint1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Medium paint splash */}
        <svg className="absolute top-1/4 -right-16 w-72 h-72 opacity-15 dark:opacity-8 animate-float" 
             style={{ animationDelay: '-2s' }} viewBox="0 0 200 200" fill="none">
          <path d="M150,40 C160,55 165,75 155,90 C160,110 145,125 125,120 C105,115 95,95 100,75 C105,55 125,35 140,30 C145,28 148,32 150,40 Z" 
                fill="url(#paint2)" className="animate-pulse"/>
          <defs>
            <linearGradient id="paint2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Small paint splashes */}
        <svg className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-25 dark:opacity-12 animate-float" 
             style={{ animationDelay: '-4s' }} viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="60" fill="url(#paint3)" className="animate-pulse"/>
          <path d="M140,80 C150,85 155,95 145,105 C135,115 125,110 130,95 C135,85 140,80 140,80 Z" fill="url(#paint3)"/>
          <defs>
            <linearGradient id="paint3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Bottom right splash */}
        <svg className="absolute bottom-10 right-1/3 w-56 h-56 opacity-18 dark:opacity-10 animate-float" 
             style={{ animationDelay: '-6s' }} viewBox="0 0 200 200" fill="none">
          <path d="M80,60 C100,65 120,75 125,95 C130,115 120,135 100,140 C80,145 60,135 55,115 C50,95 60,75 80,60 Z" 
                fill="url(#paint4)"/>
          <path d="M140,100 C145,105 148,115 140,120 C132,125 128,115 135,105 C140,100 140,100 140,100 Z" fill="url(#paint4)"/>
          <defs>
            <linearGradient id="paint4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          {/* Professional Photo */}
          <div className="w-40 h-40 mx-auto mb-12 rounded-full overflow-hidden shadow-2xl animate-glow ring-4 ring-sky-400/20 magnetic-hover premium-float">
            <img 
              src={profileImage} 
              alt="Raed Fadhlaoui"
              className="w-full h-full object-cover transition-transform duration-500"
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
              className="btn-primary text-lg px-10 py-4 relative z-10 min-w-[200px] inline-flex items-center justify-center magnetic-hover animate-glow"
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
