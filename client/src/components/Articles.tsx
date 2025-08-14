import { BookOpen, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useQuery } from '@tanstack/react-query';

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  guid: string;
}

const fetchMediumArticles = async (): Promise<MediumArticle[]> => {
  // Medium RSS feed URL
  const mediumRSSUrl = 'https://medium.com/feed/@fadhlaouiraed';
  
  // Use a CORS proxy to fetch the RSS feed
  const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRSSUrl)}`;
  
  const response = await fetch(proxyUrl);
  
  if (!response.ok) {
    throw new Error('Failed to fetch Medium articles');
  }
  
  const data = await response.json();
  
  if (data.status !== 'ok') {
    throw new Error('RSS feed error');
  }
  
  return data.items.map((item: any) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    content: item.content || item.description,
    guid: item.guid
  }));
};

export default function Articles() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['/api/medium-articles'],
    queryFn: fetchMediumArticles,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 2
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    const cleaned = stripHtml(text);
    if (cleaned.length <= maxLength) return cleaned;
    return cleaned.substring(0, maxLength).trim() + '...';
  };

  return (
    <section id="articles" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Paint Splash Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-25 blur-lg animate-bounce slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                {t('articles.title')}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('articles.subtitle')}
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-6 animate-pulse">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                  <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 max-w-md mx-auto">
                <BookOpen className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">
                  {t('articles.error.title')}
                </h3>
                <p className="text-red-600 dark:text-red-500 text-sm mb-4">
                  {t('articles.error.message')}
                </p>
                <a 
                  href="https://medium.com/@fadhlaouiraed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('articles.visitMedium')}
                </a>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          {articles && articles.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.guid}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg leading-tight mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.pubDate}>
                      {formatDate(article.pubDate)}
                    </time>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {truncateText(article.content, 120)}
                  </p>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors group/link"
                  >
                    {t('articles.readMore')}
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </article>
              ))}
            </div>
          )}

          {/* View All Articles Link */}
          {articles && articles.length > 0 && (
            <div className="text-center mt-12">
              <a
                href="https://medium.com/@fadhlaouiraed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5" />
                {t('articles.viewAll')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}