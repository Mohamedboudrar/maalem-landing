'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Building, Zap, Shield, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function Business() {
  const t = useTranslations('business');
  const locale = useLocale();

  const features = [
    {
      icon: Building,
      title: t('features.multi.title'),
      description: t('features.multi.description'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Zap,
      title: t('features.priority.title'),
      description: t('features.priority.description'),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Shield,
      title: t('features.centralized.title'),
      description: t('features.centralized.description'),
      color: 'bg-green-100 text-green-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="business" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full mb-4">
            <Building className="w-5 h-5 text-purple-600" />
            <span className="font-semibold text-purple-900">B2B Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="w-10 h-10" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* B2B CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  {t('cta.title')}
                </h3>
                <p className="text-xl mb-8 text-purple-100">
                  {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`} className="bg-white text-purple-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors font-medium">
                    {t('cta.scheduleDemo')}
                  </Link>
                  <Link href={`/${locale}/#how-it-works`} className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-colors font-medium">
                    {t('cta.learnMore')}
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-5">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="text-5xl font-extrabold mb-1">{t('metrics.responseTime.value')}</div>
                  <div className="text-sm font-semibold text-white/90 uppercase tracking-widest mt-2">{t('metrics.responseTime.label')}</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="text-5xl font-extrabold mb-1">{t('metrics.segments.value')}</div>
                  <div className="text-sm font-semibold text-white/90 uppercase tracking-widest mt-2">{t('metrics.segments.label')}</div>
                  <div className="text-xs text-white/70 mt-1 font-medium">{t('metrics.segments.sublabel')}</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="text-5xl font-extrabold mb-1">{t('metrics.coordination.value')}</div>
                  <div className="text-sm font-semibold text-white/90 uppercase tracking-widest mt-2">{t('metrics.coordination.label')}</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
