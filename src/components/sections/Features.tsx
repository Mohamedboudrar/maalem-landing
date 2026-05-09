'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Zap, 
  MessageSquare, 
  Shield, 
  Star, 
  MapPin, 
  Brain, 
  Languages, 
  Building 
} from 'lucide-react';

export default function Features() {
  const t = useTranslations('features');

  const features = [
    {
      icon: AlertTriangle,
      title: t('emergency.title'),
      description: t('emergency.description'),
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Zap,
      title: t('matching.title'),
      description: t('matching.description'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MessageSquare,
      title: t('negotiation.title'),
      description: t('negotiation.description'),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Shield,
      title: t('verified.title'),
      description: t('verified.description'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Star,
      title: t('ratings.title'),
      description: t('ratings.description'),
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: MapPin,
      title: t('tracking.title'),
      description: t('tracking.description'),
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
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

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8" />
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

        
      </div>
    </section>
  );
}
