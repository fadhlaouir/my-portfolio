import { Users, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const volunteerExperience = [
  {
    id: 'gdsc-lead',
    title: 'Google Developer Student Clubs Lead',
    organization: 'Polytech Intl, Tunis',
    period: 'July 2021 - May 2022',
    description: 'Organizing events, workshops, etc. for over 1000 students.',
    icon: 'G',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    impact: '1000+ students'
  },
  {
    id: 'marketing-community',
    title: 'Member of the FSEGN Marketing Community',
    organization: 'FSEGN, Nabeul',
    period: 'October 2018 - May 2019',
    description: 'Assisting students in learning marketing and its benefits.',
    icon: 'M',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    impact: 'Student mentorship'
  },
  {
    id: 'microsoft-club',
    title: 'Member of the Microsoft FSEGN Technology Club',
    organization: 'FSEGN, Nabeul',
    period: 'October 2017 - May 2018',
    description: 'Assisting students in bridging the gap between theory and practice.',
    icon: 'T',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    impact: 'Theory-practice bridge'
  }
];

export default function Volunteer() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-sky-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Volunteer Experience
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Community involvement and leadership roles that have shaped my commitment to education, mentorship, and technology advocacy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerExperience.map((experience) => (
              <div
                key={experience.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${experience.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className={`${experience.iconColor} font-bold text-lg`}>
                      {experience.icon}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-sky-600 font-medium text-sm mb-2">
                      {experience.organization}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      {experience.period}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-emerald-600 font-medium">
                    {experience.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Award className="w-5 h-5 text-sky-600" />
              <span className="text-gray-700 font-medium">
                Committed to giving back to the tech community through education and mentorship
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}