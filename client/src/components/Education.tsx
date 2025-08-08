import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const education = [
  {
    id: 'license',
    degree: 'Bachelor\'s Degree in Computer Science',
    school: 'Higher Institute of Technological Studies of Djerba',
    period: '2017 - 2020',
    icon: 'BSc',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    note: 'Specialized in Software Engineering and Database Systems'
  },
  {
    id: 'baccalaureate',
    degree: 'Scientific Baccalaureate',
    school: 'High School of Sciences',
    period: '2016',
    icon: 'HS',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    note: 'Mathematics and Computer Science Track - Honors'
  }
];

const certifications = [
  {
    title: 'Full Stack JavaScript Development',
    year: '2021',
    issuer: 'ReBootKamp Tunisia',
    type: 'Bootcamp'
  },
  {
    title: 'Azure Fundamentals (AZ-900)',
    year: '2023',
    issuer: 'Microsoft',
    type: 'Cloud Computing'
  },
  {
    title: 'React Development Professional',
    year: '2022',
    issuer: 'Meta',
    type: 'Frontend Development'
  },
  {
    title: 'Node.js Application Development',
    year: '2021',
    issuer: 'Node.js Foundation',
    type: 'Backend Development'
  },
  {
    title: 'MongoDB Developer Certification',
    year: '2022',
    issuer: 'MongoDB University',
    type: 'Database'
  },
  {
    title: 'Git Version Control System',
    year: '2020',
    issuer: 'Atlassian',
    type: 'Development Tools'
  },
  {
    title: 'Agile Project Management',
    year: '2023',
    issuer: 'Scrum Alliance',
    type: 'Project Management'
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
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Education & Certifications
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Academic background and professional certifications that shaped my expertise in technology and development.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Academic Background</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id} className="relative">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 ${edu.iconBg} rounded-lg flex items-center justify-center`}>
                          <span className={`${edu.iconColor} font-bold text-lg`}>
                            {edu.icon}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-gray-900">
                            {edu.degree}
                          </h4>
                          <span className="text-sm text-sky-600 font-medium">
                            {edu.period}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 mb-2">
                          {edu.school}
                        </p>
                        
                        {edu.note && (
                          <p className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg inline-block">
                            {edu.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">
                        {cert.title}
                      </h4>
                      <span className="text-sm text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-lg">
                        {cert.year}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-gray-700 font-medium">
                        {cert.issuer}
                      </p>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                        {cert.type}
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