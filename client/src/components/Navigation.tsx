import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
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
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-sky-50 dark:hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm border border-sky-200 dark:border-gray-600"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            
            {/* Language Switcher */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-white/50 dark:bg-gray-800/50 border border-sky-200 dark:border-gray-600 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 backdrop-blur-sm transition-all duration-300 text-gray-900 dark:text-gray-100"
              >
                <option value="en" className="bg-white dark:bg-gray-800">EN</option>
                <option value="fr" className="bg-white dark:bg-gray-800">FR</option>
                <option value="ar" className="bg-white dark:bg-gray-800">AR</option>
              </select>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-sky-50 dark:hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm border border-sky-200 dark:border-gray-600"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden nav-glass border-t border-sky-200/20 dark:border-gray-600/20">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {/* Mobile Theme & Language Controls */}
            <div className="flex gap-4 mb-6">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/90 dark:bg-gray-800/90 border border-sky-200 dark:border-gray-600 rounded-xl transition-all duration-300 text-gray-900 dark:text-gray-100"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-4 h-4" />
                    <span className="text-sm">Dark</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4" />
                    <span className="text-sm">Light</span>
                  </>
                )}
              </button>
              
              {/* Mobile Language Switcher */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="flex-1 bg-white/90 dark:bg-gray-800/90 border border-sky-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-gray-900 dark:text-gray-100"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
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
