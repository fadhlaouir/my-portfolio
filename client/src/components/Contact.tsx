import { useLanguage } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-sky-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-96 overflow-y-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                {t('contact.info.title')}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{t('contact.info.location')}</h4>
                      <p className="text-gray-600">{t('contact.location.city')}</p>
                      <p className="text-sm text-gray-500 mt-1">{t('contact.location.description')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{t('contact.email')}</h4>
                      <a 
                        href="mailto:raed.fadhlaoui@gmail.com" 
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        raed.fadhlaoui@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">{t('contact.social.title')}</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/raed-fadhlaoui/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </a>
                    <a
                      href="https://github.com/raedfadhlaoui"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-6 h-6 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quebec City Map */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179956.23978652125!2d-71.38230989999999!3d46.8139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2sQuebec%20City%2C%20QC%2C%20Canada!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quebec City Map"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}