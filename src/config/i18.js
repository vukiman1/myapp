import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from "../locales/en.json";
import vi from "../locales/vi.json";

// Prepare resources
const resources = {
  en: {
    translation: en,
    common: en,
  },
  vi: {
    translation: vi,
    common: vi,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vi", // Default language
    fallbackLng: "en",
    debug: false,

    ns: ["translation", "common"],
    defaultNS: "translation",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
