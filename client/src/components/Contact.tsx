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
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`fade-in ${hasIntersected ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Location Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('contact.info.location')}</h3>
              <p className="text-gray-300 mb-2">{t('contact.location.city')}</p>
              <p className="text-sm text-gray-400">{t('contact.location.description')}</p>
            </div>

            {/* Email Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('contact.email')}</h3>
              <a 
                href="mailto:raed.fadhlaoui@gmail.com" 
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                raed.fadhlaoui@gmail.com
              </a>
            </div>

            {/* Availability Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Availability</h3>
              <p className="text-gray-300 mb-2">Open to new opportunities</p>
              <p className="text-sm text-gray-400">EST timezone</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Interactive Map Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-blue-400" />
                Quebec City, Canada
              </h3>
              
              {/* Map Container */}
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179885.38408715503!2d-71.38454755000001!3d46.8138783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2sQuebec%20City%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sus!4v1642683947834!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale hover:grayscale-0 transition-all duration-500"
                  title="Quebec City Location"
                ></iframe>
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all duration-500"></div>
              </div>
              
              {/* Location Details */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">Historic Old Quebec, UNESCO World Heritage Site</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">Eastern Time Zone (UTC-5/-4)</span>
                </div>
              </div>
            </div>

            {/* Social & Contact Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-8">{t('contact.social.title')}</h3>
              
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/in/raed-fadhlaoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <p className="text-sm text-gray-400">Professional network</p>
                  </div>
                </a>

                <a
                  href="https://github.com/fadhlaouir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center group-hover:bg-gray-500/30 transition-colors">
                    <Github className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">GitHub</h4>
                    <p className="text-sm text-gray-400">Open source projects</p>
                  </div>
                </a>

                <a
                  href="mailto:raed.fadhlaoui@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-sm text-gray-400">Direct contact</p>
                  </div>
                </a>

                {/* Call to Action */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20">
                  <h4 className="font-bold text-white mb-2">Ready to collaborate?</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Let's discuss your next project and bring your ideas to life.
                  </p>
                  <a
                    href="mailto:raed.fadhlaoui@gmail.com"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    Get In Touch
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