'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            
            
            <Link
              href={`/${locale}/contact`}
              className="flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              <span className="font-semibold">{t('joinBeta')}</span>
            </Link>
            
            
          </div>

          
          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="flex items-center space-x-3 bg-black/60 text-white px-6 py-3 rounded-lg opacity-60 cursor-not-allowed"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M16.365 1.43c.03 1.18-.35 2.34-1.08 3.25-.76.98-2 1.73-3.2 1.64-.16-1.15.39-2.37 1.09-3.16.78-.93 2.1-1.64 3.19-1.73Zm4.05 16.05c-.45 1.03-.66 1.49-1.24 2.42-.81 1.31-1.96 2.95-3.39 2.96-1.27.01-1.6-.83-3.32-.82-1.72.01-2.08.83-3.35.82-1.43-.01-2.52-1.49-3.33-2.8-2.28-3.7-2.52-8.05-1.11-10.23 1-1.55 2.58-2.46 4.06-2.46 1.51 0 2.47.84 3.72.84 1.22 0 1.97-.84 3.71-.84 1.32 0 2.72.72 3.72 1.95-3.28 1.8-2.75 6.48.53 7.16Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
            
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="flex items-center space-x-3 bg-black/60 text-white px-6 py-3 rounded-lg opacity-60 cursor-not-allowed"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                <path d="M3 2l12.5 10L3 22V2Z" fill="#34A853" />
                <path d="M21 9.5 15.5 12 21 14.5c.6-.5 1-.98 1-1.5s-.4-1-1-1.5Z" fill="#FBBC05" />
                <path d="M3 2l9.2 7.4L21 9.5c-.52-.45-1.24-.74-2.1-.84L3 2Z" fill="#4285F4" />
                <path d="M3 22l15.9-6.66c.86-.1 1.58-.4 2.1-.84l-8.8-.1L3 22Z" fill="#EA4335" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}
