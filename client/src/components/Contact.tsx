import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, MapPin, Github, Linkedin, Clock } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Location Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('contact.info.location')}</h3>
              <p className="text-gray-600 mb-2">{t('contact.location.city')}</p>
              <p className="text-sm text-gray-500">{t('contact.location.description')}</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('contact.email')}</h3>
              <a 
                href="mailto:raed.fadhlaoui@gmail.com" 
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                raed.fadhlaoui@gmail.com
              </a>
            </div>

            {/* Availability Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('contact.availability.title')}</h3>
              <p className="text-gray-600 mb-2">{t('contact.availability.status')}</p>
              <p className="text-sm text-gray-500">{t('contact.availability.timezone')}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Interactive Map Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
                <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                {t('contact.location.city')}
              </h3>
              
              {/* Map Container */}
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179885.38408715503!2d-71.38454755000001!3d46.8138783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2sQuebec%20City%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sus!4v1642683947834!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Quebec City Location"
                ></iframe>
              </div>
            </div>

            {/* Social & Contact Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">{t('contact.social.title')}</h3>
              
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/in/raed-fadhlaoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('contact.social.linkedin')}</h4>
                    <p className="text-sm text-gray-600">{t('contact.social.linkedin.description')}</p>
                  </div>
                </a>

                <a
                  href="https://github.com/fadhlaouir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <Github className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('contact.social.github')}</h4>
                    <p className="text-sm text-gray-600">{t('contact.social.github.description')}</p>
                  </div>
                </a>

                <a
                  href="mailto:raed.fadhlaoui@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 hover:border-emerald-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('contact.email')}</h4>
                    <p className="text-sm text-gray-600">{t('contact.social.email.description')}</p>
                  </div>
                </a>

                {/* Call to Action */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-2">{t('contact.cta.title')}</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {t('contact.cta.description')}
                  </p>
                  <a
                    href="mailto:raed.fadhlaoui@gmail.com"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    {t('contact.cta.button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}