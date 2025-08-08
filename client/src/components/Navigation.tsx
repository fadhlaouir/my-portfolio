import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 nav-glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <img src="/rf-logo.svg" alt="RF Logo" className="w-12 h-12" />
          </div>
          
          <div className={`hidden md:flex items-center ${language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <button onClick={() => scrollToSection('home')} className="nav-link">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">
              {t('nav.experience')}
            </button>
            <button onClick={() => scrollToSection('education')} className="nav-link">
              {t('nav.education')}
            </button>
            <button onClick={() => scrollToSection('volunteer')} className="nav-link">
              {t('nav.volunteer')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              {t('nav.contact')}
            </button>
          </div>
          
          <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Interactive Language Switcher with Flags */}
            <div className="flex items-center space-x-1 bg-white/50 backdrop-blur-sm border border-sky-200 rounded-xl p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  language === 'en' 
                    ? 'bg-blue-500 shadow-lg scale-105' 
                    : 'bg-transparent hover:bg-sky-50'
                }`}
                title="English"
              >
                <span className="text-xl">🇺🇸</span>
                {language === 'en' && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg animate-pulse"></div>
                )}
              </button>
              
              <button
                onClick={() => setLanguage('fr')}
                className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  language === 'fr' 
                    ? 'bg-blue-500 shadow-lg scale-105' 
                    : 'bg-transparent hover:bg-sky-50'
                }`}
                title="Français"
              >
                <span className="text-xl">🇫🇷</span>
                {language === 'fr' && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg animate-pulse"></div>
                )}
              </button>
              
              <button
                onClick={() => setLanguage('ar')}
                className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  language === 'ar' 
                    ? 'bg-blue-500 shadow-lg scale-105' 
                    : 'bg-transparent hover:bg-sky-50'
                }`}
                title="العربية"
              >
                <span className="text-xl">🇸🇦</span>
                {language === 'ar' && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg animate-pulse"></div>
                )}
              </button>
            </div>
            

            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-white/50 hover:bg-sky-50 transition-all duration-300 backdrop-blur-sm border border-sky-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden nav-glass border-t border-sky-200/20">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {/* Mobile Language Switcher */}
            <div className="mb-6">
              <div className="flex justify-center space-x-2 bg-white/90 border border-sky-200 rounded-xl p-2">
                <button
                  onClick={() => {setLanguage('en'); setIsMobileMenuOpen(false);}}
                  className={`flex items-center justify-center flex-1 py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    language === 'en' 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-transparent text-gray-700 hover:bg-sky-50'
                  }`}
                >
                  <span className="text-lg mr-2">🇺🇸</span>
                  <span className="text-sm font-medium">EN</span>
                </button>
                
                <button
                  onClick={() => {setLanguage('fr'); setIsMobileMenuOpen(false);}}
                  className={`flex items-center justify-center flex-1 py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    language === 'fr' 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-transparent text-gray-700 hover:bg-sky-50'
                  }`}
                >
                  <span className="text-lg mr-2">🇫🇷</span>
                  <span className="text-sm font-medium">FR</span>
                </button>
                
                <button
                  onClick={() => {setLanguage('ar'); setIsMobileMenuOpen(false);}}
                  className={`flex items-center justify-center flex-1 py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    language === 'ar' 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-transparent text-gray-700 hover:bg-sky-50'
                  }`}
                >
                  <span className="text-lg mr-2">🇸🇦</span>
                  <span className="text-sm font-medium">ع</span>
                </button>
              </div>
            </div>

            <button onClick={() => scrollToSection('home')} className={`block w-full nav-link py-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className={`block w-full nav-link py-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('projects')} className={`block w-full nav-link py-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('skills')} className={`block w-full nav-link py-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection('experience')} className={`block w-full nav-link py-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('nav.experience')}
            </button>
            <button onClick={() => scrollToSection('education')} className={`block w-full nav-link py-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('nav.education')}
            </button>
            <button onClick={() => scrollToSection('volunteer')} className={`block w-full nav-link py-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('nav.volunteer')}
            </button>
            <button onClick={() => scrollToSection('contact')} className={`block w-full nav-link py-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
