import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Code, Database, Cloud, Settings, Zap, Star } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    category: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React/Next.js', level: 95, experience: '5+ years' },
      { name: 'TypeScript', level: 90, experience: '4+ years' },
      { name: 'Vue.js', level: 85, experience: '3+ years' },
      { name: 'Tailwind CSS', level: 92, experience: '3+ years' }
    ]
  },
  {
    icon: Database,
    category: 'Backend', 
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', level: 93, experience: '6+ years' },
      { name: 'Python', level: 88, experience: '4+ years' },
      { name: 'MongoDB', level: 90, experience: '5+ years' },
      { name: 'PostgreSQL', level: 85, experience: '4+ years' }
    ]
  },
  {
    icon: Cloud,
    category: 'DevOps',
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'Docker', level: 88, experience: '4+ years' },
      { name: 'AWS', level: 85, experience: '3+ years' },
      { name: 'CI/CD', level: 90, experience: '4+ years' },
      { name: 'Kubernetes', level: 80, experience: '2+ years' }
    ]
  },
  {
    icon: Settings,
    category: 'Tools',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', level: 95, experience: '6+ years' },
      { name: 'VS Code', level: 92, experience: '5+ years' },
      { name: 'Linux', level: 88, experience: '4+ years' },
      { name: 'Figma', level: 75, experience: '2+ years' }
    ]
  }
];

export default function SkillsRedesigned() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Floating Code Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/5 font-mono text-lg animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {['{ }', '< >', '( )', '[ ]', '//', '===', '=>', '&&'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200">
              {t('skills.title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                    : 'bg-white/10 backdrop-blur-md text-gray-300 border border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5" />
                  <span>{category.category}</span>
                </div>
                
                {/* Active indicator */}
                {activeCategory === index && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills List */}
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`transform transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Skill Header */}
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <p className="text-sm text-gray-400">{skill.experience}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 150 + 300}ms`
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Representation */}
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Circular Progress Ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {skillCategories[activeCategory].skills.map((skill, index) => {
                    const radius = 35 - index * 6;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDasharray = circumference;
                    const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                    
                    return (
                      <circle
                        key={skill.name}
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={isVisible ? strokeDashoffset : circumference}
                        className="transition-all duration-1000 ease-out"
                        style={{ transitionDelay: `${index * 200}ms` }}
                      />
                    );
                  })}
                  
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                      {Math.round(skillCategories[activeCategory].skills.reduce((acc, skill) => acc + skill.level, 0) / skillCategories[activeCategory].skills.length)}%
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      Average
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Icons */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-lg font-semibold text-white mb-6 text-center">Technologies I Love</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker', 'AWS', 'Python', 'Git'].map((tech, index) => (
                <div 
                  key={tech}
                  className={`px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
            <Star className="w-5 h-5" />
            <span>Let's Build Something Amazing</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}