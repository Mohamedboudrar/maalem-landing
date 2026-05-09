'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '../../../public/assets/images/logo-M.png';

// Smooth scroll utility
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|fr|ar)/, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const isRTL = locale === 'ar';

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center">
              <img src={Logo.src} alt="Maalem" className="w-16 h-16" />
              <span className="font-bold text-xl text-gray-900">Maalem</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href={`#how-it-works`} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
            >
              {t('howItWorks')}
            </a>
            <a 
              href={`#features`} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            >
              {t('features')}
            </a>
            <a 
              href={`#business`} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('business'); }}
            >
              {t('forBusiness')}
            </a>
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {locale === 'en' ? 'EN' : locale === 'fr' ? 'FR' : 'AR'}
                </span>
              </button>
              <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('fr')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  FR
                </button>
                <button
                  onClick={() => handleLanguageChange('ar')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  AR
                </button>
              </div>
            </div>

            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link href={`/${locale}#how-it-works`} className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg">
                {t('howItWorks')}
              </Link>
              <Link href={`/${locale}#features`} className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg">
                {t('features')}
              </Link>
              <Link href={`/${locale}#business`} className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg">
                {t('forBusiness')}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 text-gray-700 mb-2">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">Language</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange('fr')}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                  >
                    FR
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ar')}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                  >
                    AR
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
