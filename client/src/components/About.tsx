import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Code, Heart, Lightbulb, Target, Globe, Users } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  const highlights = [
    { icon: Code, key: 'problem', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { icon: Heart, key: 'opensource', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { icon: Lightbulb, key: 'innovation', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' }
  ];

  const stats = [
    { value: '5+', label: 'years.experience', icon: Target },
    { value: '50+', label: 'projects.completed', icon: Globe },
    { value: '9k+', label: 'npm.downloads', icon: Users }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              {t('about.title')}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Section */}
            <div className="space-y-8">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p className="text-xl text-reveal">{t('about.bio')}</p>
                <p>{t('about.bio2')}</p>
                <p>{t('about.bio3')}</p>
              </div>
              
              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-4">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div 
                      key={highlight.key}
                      className={`flex items-center gap-3 px-6 py-3 ${highlight.bg} ${highlight.border} border rounded-2xl transition-all duration-300 hover:scale-105`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <IconComponent className={`w-5 h-5 ${highlight.color}`} />
                      <span className={`font-semibold ${highlight.color}`}>
                        {t(`about.badge.${highlight.key}`)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Section */}
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Career Highlights</h3>
              <div className="space-y-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600 font-medium">{t(`about.stats.${stat.label}`)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
