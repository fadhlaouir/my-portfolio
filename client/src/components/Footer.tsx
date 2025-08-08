import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-dark-950 border-t border-gray-200 dark:border-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">Raed Fadhlaoui</div>
            <p className="text-gray-600 dark:text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Raed Fadhlaoui. {t('footer.copyright').split(' ').slice(2).join(' ')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              {t('footer.built')} ❤️ {t('footer.tech')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
