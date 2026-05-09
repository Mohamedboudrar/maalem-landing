'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Handshake, MapPin, Bell, Send, CheckCircle, Users, Star } from 'lucide-react';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
  const locale = useLocale();
  const isRTL = locale === 'ar';

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

  const customerSteps = [
    {
      icon: Search,
      title: t('customerSteps.1.title'),
      description: t('customerSteps.1.description'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Handshake,
      title: t('customerSteps.2.title'),
      description: t('customerSteps.2.description'),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: MapPin,
      title: t('customerSteps.3.title'),
      description: t('customerSteps.3.description'),
      color: 'bg-green-100 text-green-600'
    }
  ];

  const professionalSteps = [
    {
      icon: Bell,
      title: t('professionalSteps.1.title'),
      description: t('professionalSteps.1.description'),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Send,
      title: t('professionalSteps.2.title'),
      description: t('professionalSteps.2.description'),
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: CheckCircle,
      title: t('professionalSteps.3.title'),
      description: t('professionalSteps.3.description'),
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Customer Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-900">{t('customerTitle')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connection Line */}
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-blue-200 to-orange-200 transform -translate-y-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-orange-900">{t('professionalTitle')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {professionalSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connection Line */}
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-orange-200 to-purple-200 transform -translate-y-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
}
