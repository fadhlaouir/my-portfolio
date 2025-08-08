import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    id: 'engineering',
    degree: 'National Engineering Diploma – Big Data & BI',
    school: 'International Private Polytechnic School of Tunis',
    period: '2019–2022',
    note: 'Recognized as equivalent to Canadian BSc in CS',
    icon: 'E',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 'bachelor',
    degree: 'Bachelor\'s in CS Applied to Management',
    school: 'Faculty of Economics and Management Sciences of Nabeul',
    period: '2016–2019',
    note: '',
    icon: 'B',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400'
  }
];

const certifications = [
  {
    title: 'Google: Foundations of Project Management',
    year: '2024',
    issuer: 'Google',
    type: 'Project Management'
  },
  {
    title: 'Scrum Fundamentals Certified',
    year: '2023',
    issuer: 'SCRUMstudy',
    type: 'Agile/Scrum'
  },
  {
    title: 'MTA Database Fundamentals',
    year: '2021',
    issuer: 'Microsoft',
    type: 'Database'
  },
  {
    title: 'MTA Networking Fundamentals',
    year: '2019',
    issuer: 'Microsoft',
    type: 'Networking'
  },
  {
    title: 'MTA Windows OS Fundamentals',
    year: '2019',
    issuer: 'Microsoft',
    type: 'Operating Systems'
  }
];

export default function Education() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Education & Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Academic background and professional certifications that shaped my expertise in technology and development.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-gray-50 dark:bg-dark-900 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${edu.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <span className={`${edu.iconColor} font-bold text-lg`}>
                          {edu.icon}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                          {edu.school}
                        </p>
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {edu.period}
                        </p>
                        {edu.note && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                            {edu.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-dark-900 rounded-xl p-5 shadow-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          {cert.issuer}
                        </p>
                        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-xs font-medium">
                          {cert.type}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}