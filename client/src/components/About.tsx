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
    <section id="about" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Paint Splash Background */}
      <div className="paint-splashes absolute inset-0">
        <svg className="absolute top-20 right-10 w-64 h-64 opacity-10 dark:opacity-5 animate-float" 
             style={{ animationDelay: '-1s' }} viewBox="0 0 200 200" fill="none">
          <path d="M60,80 C80,75 100,85 110,105 C115,125 105,145 85,150 C65,155 45,145 40,125 C35,105 55,85 60,80 Z" 
                fill="url(#aboutPaint1)"/>
          <defs>
            <linearGradient id="aboutPaint1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
                      className={`flex items-center gap-3 px-6 py-3 ${highlight.bg} dark:bg-opacity-20 ${highlight.border} dark:border-opacity-30 border rounded-2xl transition-all duration-300 hover:scale-105`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <IconComponent className={`w-5 h-5 ${highlight.color}`} />
                      <span className={`font-semibold ${highlight.color} dark:text-opacity-90`}>
                        {t(`about.badge.${highlight.key}`)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Section */}
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Career Highlights</h3>
              <div className="space-y-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800/50 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{t(`about.stats.${stat.label}`)}</div>
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
