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
                className="bg-white/50 dark:bg-black/50 border border-sky-200 dark:border-sky-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 backdrop-blur-sm transition-all duration-300"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">العربية</option>
              </select>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-white/50 dark:bg-black/50 hover:bg-sky-50 dark:hover:bg-sky-900/30 transition-all duration-300 backdrop-blur-sm border border-sky-200 dark:border-sky-800"
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
            <button onClick={() => scrollToSection('education')} className="block hover:text-primary-500 transition-colors">
              Education
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
