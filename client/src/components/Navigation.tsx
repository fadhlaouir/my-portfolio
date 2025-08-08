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
            {[
              { key: 'home', section: 'home' },
              { key: 'about', section: 'about' },
              { key: 'projects', section: 'projects' },
              { key: 'skills', section: 'skills' },
              { key: 'experience', section: 'experience' },
              { key: 'education', section: 'education' },
              { key: 'volunteer', section: 'volunteer' },
              { key: 'contact', section: 'contact' }
            ].map(({ key, section }) => (
              <button key={key} onClick={() => scrollToSection(section)} className="nav-link">
                {t(`nav.${key}`)}
              </button>
            ))}
          </div>
          
          <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Language Switcher */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-white/50 border border-sky-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 backdrop-blur-sm transition-all duration-300 text-gray-900"
              >
                <option value="en" className="bg-white">🇬🇧 English</option>
                <option value="fr" className="bg-white">🇫🇷 Français</option>
                <option value="ar" className="bg-white">🇹🇳 العربية</option>
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
            {/* Mobile Language Switcher */}
            <div className="mb-6">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="w-full bg-white/90 border border-sky-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-900"
              >
                <option value="en">🇬🇧 English</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="ar">🇹🇳 العربية</option>
              </select>
            </div>

            {[
              { key: 'home', section: 'home' },
              { key: 'about', section: 'about' },
              { key: 'projects', section: 'projects' },
              { key: 'skills', section: 'skills' },
              { key: 'experience', section: 'experience' },
              { key: 'education', section: 'education' },
              { key: 'volunteer', section: 'volunteer' },
              { key: 'contact', section: 'contact' }
            ].map(({ key, section }) => (
              <button 
                key={key}
                onClick={() => scrollToSection(section)} 
                className={`block w-full nav-link py-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {t(`nav.${key}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
