'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '../../../public/assets/images/logo-maalem.jpg';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [email, setEmail] = useState('');

  const handleLanguageChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|fr|ar)/, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const isRTL = locale === 'ar';

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="rounded-lg flex items-center justify-center">
                 <img src={Logo.src} alt="Maalem" className="w-8 h-8" />
              </div>
              <span className="font-bold text-xl">Maalem</span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              {t('description')}
            </p>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <label className="block text-sm font-medium mb-2">Stay Updated</label>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/maalem_tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-3.37-3.37 4 4 0 0 1 3.37 3.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/about`} className="text-gray-400 hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-400 hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          

          {/* Download App */}
          <div>
            <h3 className="font-semibold text-lg mb-6">{t('downloadApp')}</h3>
            <p className="text-gray-400 mb-4">Coming soon</p>
            
            <div className="space-y-3">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="flex items-center space-x-3 bg-black/60 px-4 py-2 rounded-lg w-full opacity-60 cursor-not-allowed"
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
                className="flex items-center space-x-3 bg-black/60 px-4 py-2 rounded-lg w-full opacity-60 cursor-not-allowed"
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

            {/* Language Selector */}
            <div className="mt-6">
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Language</span>
              </div>
              <select
                value={locale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">contact@maalem.ma</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">+212 612450649</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">Agadir, Morocco</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
