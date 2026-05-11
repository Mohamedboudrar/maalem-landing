import { getRequestConfig } from 'next-intl/server';

// Import all messages for fallback
import enMessages from '../messages/en.json';
import frMessages from '../messages/fr.json';
import arMessages from '../messages/ar.json';

const allMessages: Record<string, any> = {
  en: enMessages,
  fr: frMessages,
  ar: arMessages,
};

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale || 'fr';
  return {
    locale: safeLocale,
    messages: allMessages[safeLocale] || enMessages
  };
});
