import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  supportedLngs: ["en", "tr"],
  fallbackLng: "en",
  debug: false,
  detection: {
    order: ["cookie"],
    caches: ["cookie"],
  },

  resources: {
    en: {
      translation: {
        hello: "Hello",
      },
    },
    tr: {
      translation: {
        hello: "Merhaba",
      },
    },
  },
});

export default i18n;
