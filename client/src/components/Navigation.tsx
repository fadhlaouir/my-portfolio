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
          <div className="text-2xl font-bold gradient-text">RF</div>
          
          <div className="hidden md:flex items-center space-x-8">
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
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              {t('nav.contact')}
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-white/50 border border-sky-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 backdrop-blur-sm transition-all duration-300 text-gray-900"
              >
                <option value="en" className="bg-white">EN</option>
                <option value="fr" className="bg-white">FR</option>
                <option value="ar" className="bg-white">العربية</option>
              </select>
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
            <button onClick={() => scrollToSection('home')} className="block w-full text-left nav-link py-2">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left nav-link py-2">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left nav-link py-2">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left nav-link py-2">
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left nav-link py-2">
              {t('nav.experience')}
            </button>
            <button onClick={() => scrollToSection('education')} className="block w-full text-left nav-link py-2">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left nav-link py-2">
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
