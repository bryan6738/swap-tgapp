import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ru from './locales/ru.json';
import ch from './locales/ch.json';

i18n
    .use(LanguageDetector) // Detects user language automatically
    .use(initReactI18next)  // Passes i18n instance to react-i18next
    .init({
        detection: {
            order: ['localStorage', 'navigator'],  // Prioritize localStorage
            caches: ['localStorage']  // Store the selected language in localStorage
        },
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            ch: { translation: ch }
        },
        fallbackLng: 'en',  // Default language if no translation is available
        debug: false,
        interpolation: {
            escapeValue: false // React already does escaping
        }
    });

export default i18n;
