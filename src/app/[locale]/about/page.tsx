'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, Globe, CheckCircle, Star, Clock, MapPin } from 'lucide-react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function AboutPage() {
  const t = useTranslations('about');

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
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">{t('mission.title')}</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('mission.content')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Maalem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full mb-4">
                <Zap className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-900">{t('whyMaalem.title')}</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('whyMaalem.content')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t('whatWeOffer.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                {t('whatWeOffer.content')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.raw('whatWeOffer.audience').map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 text-center border border-gray-100"
                >
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Globe className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('vision.title')}
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              {t('vision.content')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Built for Morocco Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full mb-4">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">{t('builtForMorocco.title')}</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              {t('builtForMorocco.content')}
            </p>
            <div className="flex justify-center space-x-4">
              {t.raw('builtForMorocco.languages').map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust and Safety Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full mb-4">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-900">{t('trustAndSafety.title')}</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('trustAndSafety.content')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full mb-4">
                <Zap className="w-5 h-5 text-indigo-600" />
                <span className="font-semibold text-indigo-900">{t('technology.title')}</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
              {t('technology.content')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.raw('technology.features').map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full mb-4">
                <Users className="w-5 h-5 text-yellow-600" />
                <span className="font-semibold text-yellow-900">{t('team.title')}</span>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
                {t('team.content')}
              </p>
              <div className="bg-gradient-to-r from-blue-100 to-orange-100 rounded-2xl p-6 text-center">
                <p className="text-gray-700 font-medium">
                  {t('team.shortDescription')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('closing.title')}
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              {t('closing.content')}
            </p>
          </motion.div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
