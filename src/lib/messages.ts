import en from '../../messages/en.json';
import fr from '../../messages/fr.json';
import ar from '../../messages/ar.json';

export const messages = {
  en,
  fr,
  ar,
} as const;

export type Locale = keyof typeof messages;
