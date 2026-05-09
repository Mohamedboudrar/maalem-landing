'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Languages, DollarSign, Users, Smartphone } from 'lucide-react';

// Morocco Flag Component
const MoroccoFlag = ({ className }: { className?: string }) => (
  <div className={className}>
    <img src="/assets/images/_.jpeg" alt="Morocco Flag" className="w-full h-full object-cover rounded-full" />
  </div>
);

export default function Morocco() {
  const t = useTranslations('morocco');

  const features = [
    {
      icon: Languages,
      title: t('localization.title'),
      description: t('localization.description'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: DollarSign,
      title: t('payment.title'),
      description: t('payment.description'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: t('culture.title'),
      description: t('culture.description'),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Smartphone,
      title: t('digital.title'),
      description: t('digital.description'),
      color: 'bg-purple-100 text-purple-600'
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-4">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
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

        {/* Morocco Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-green-50 rounded-3xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('coverage.title')}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Casablanca - {t('coverage.fullCoverage')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Rabat - {t('coverage.fullCoverage')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Agadir - {t('coverage.fullCoverage')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Fes - {t('coverage.expandingSoon')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Tangier - {t('coverage.expandingSoon')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Marrakech - {t('coverage.expandingSoon')}</span>
                </div>
              </div>

              
            </div>

            <div className="relative">
              <MoroccoFlag className="w-32 h-32 bg-gradient-to-br from-red-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center" />
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {t('proud.title')}
                </h4>
                <p className="text-gray-600">
                  {t('proud.description')}
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
