import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter, Cairo } from 'next/font/google';
import { ReactNode } from 'react';
import { messages } from '../../lib/messages';
import HtmlLangSetter from '../../components/HtmlLangSetter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;

  if (!['en', 'fr', 'ar'].includes(locale)) notFound();

  const localeMessages = messages[locale as keyof typeof messages];
  const isRTL = locale === 'ar';

  return (
    <div
      className={`${inter.variable} ${cairo.variable} ${isRTL ? 'font-cairo' : 'font-inter'} antialiased`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <NextIntlClientProvider locale={locale} messages={localeMessages}>
        <HtmlLangSetter />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
