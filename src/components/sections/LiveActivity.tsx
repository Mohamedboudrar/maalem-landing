'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Zap, MapPin, Activity } from 'lucide-react';

interface ActivityItem {
  id: number;
  type: 'electrician' | 'plumber' | 'technician' | 'carpenter';
  city: string;
  time: string;
}

const cities = {
  en: ['Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Tangier', 'Agadir'],
  fr: ['Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tanger', 'Agadir'],
  ar: ['الدار البيضاء', 'الرباط', 'مراكش', 'فاس', 'طنجة', 'أكادير']
};

export default function LiveActivity() {
  const t = useTranslations('liveActivity');
  const locale = useLocale();
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [visibleActivities, setVisibleActivities] = useState<ActivityItem[]>([]);

  const generateActivity = (): ActivityItem => {
    const types: ActivityItem['type'][] = ['electrician', 'plumber', 'technician', 'carpenter'];
    const cityList = cities[locale as keyof typeof cities] || cities.en;
    
    return {
      id: Date.now() + Math.random(),
      type: types[Math.floor(Math.random() * types.length)],
      city: cityList[Math.floor(Math.random() * cityList.length)],
      time: 'just now'
    };
  };

  useEffect(() => {
    // Generate initial activities
    const initialActivities = Array.from({ length: 3 }, generateActivity);
    setActivities(initialActivities);
    setVisibleActivities(initialActivities);

    // Add new activity every 5 seconds
    const interval = setInterval(() => {
      const newActivity = generateActivity();
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, [locale]);

  useEffect(() => {
    setVisibleActivities(activities.slice(0, 3));
  }, [activities]);

  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'electrician':
        return <Zap className="w-4 h-4 text-yellow-500" />;
      case 'plumber':
        return <Activity className="w-4 h-4 text-blue-500" />;
      case 'technician':
        return <Zap className="w-4 h-4 text-orange-500" />;
      case 'carpenter':
        return <Activity className="w-4 h-4 text-green-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getActivityMessage = (activity: ActivityItem) => {
    const messageKey = activity.type;
    return t(messageKey, { city: activity.city });
  };

  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">{t('title')}</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{t('subtitle')}</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {visibleActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md border border-gray-100 flex items-center space-x-3 max-w-sm"
            >
              {getActivityIcon(activity.type)}
              <div className="flex-1">
                <p className="text-sm text-gray-700">{getActivityMessage(activity)}</p>
                <p className="text-xs text-gray-500 flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{activity.time}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [-100, 400], y: [-50, 50] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          />
          <motion.div
            animate={{ x: [400, -100], y: [50, -50] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 w-16 h-16 bg-orange-200 rounded-full opacity-20"
          />
        </div>
      </div>
    </section>
  );
}
