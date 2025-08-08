import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
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
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-950/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold gradient-text">RF</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link hover:text-primary-500 transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link hover:text-primary-500 transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link hover:text-primary-500 transition-colors">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link hover:text-primary-500 transition-colors">
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection('experience')} className="nav-link hover:text-primary-500 transition-colors">
              {t('nav.experience')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link hover:text-primary-500 transition-colors">
              {t('nav.contact')}
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent border border-gray-300 dark:border-dark-700 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">العربية</option>
              </select>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-950 border-b border-gray-200 dark:border-dark-800">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block hover:text-primary-500 transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="block hover:text-primary-500 transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="block hover:text-primary-500 transition-colors">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('skills')} className="block hover:text-primary-500 transition-colors">
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollToSection('experience')} className="block hover:text-primary-500 transition-colors">
              {t('nav.experience')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block hover:text-primary-500 transition-colors">
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
