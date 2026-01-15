import en from "~/locales/en";
import pt from "~/locales/pt";
import tr from "~/locales/tr";

export const supportedLngs = ["pt", "en", "tr"];

export const fallbackLng = "pt";

export const defaultNS = "translation";

export const resources = {
  en: { translation: en },
  pt: { translation: pt },
  tr: { translation: tr },
};
