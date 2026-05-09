'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('info.title')}</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{t('info.email.title')}</h3>
                        <p className="text-gray-600">{t('info.email.description')}</p>
                        <a href="mailto:contact@maalem.ma" className="text-blue-600 hover:text-blue-700">
                          contact@maalem.ma
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{t('info.phone.title')}</h3>
                        <p className="text-gray-600">{t('info.phone.description')}</p>
                        <a href="tel:+212612450649" className="text-blue-600 hover:text-blue-700">
                          +212 612450649
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{t('info.address.title')}</h3>
                        <p className="text-gray-700">
                          {t('info.address.street')}<br />
                          {t('info.address.city')}, {t('info.address.country')}
                        </p>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
