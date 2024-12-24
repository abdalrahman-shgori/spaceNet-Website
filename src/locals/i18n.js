import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
//
import { defaultLang } from "./config";
//
import en from "./en/translation.json";
import ar from "./ar/translation.json";
import ku from './ku/translation.json'
// ----------------------------------------------------------------------

let lng = defaultLang.value;

if (typeof window !== "undefined") {
    lng = localStorage.getItem("i18nextLng") || defaultLang.value;
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en,
            ar,
            ku
        },
        lng,
        fallbackLng: defaultLang.value,
        debug: false,
        ns: ["translations"],
        defaultNS: "translations",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
