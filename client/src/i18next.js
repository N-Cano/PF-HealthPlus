import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend";

i18next
  .use(initReactI18next) // Función para ejecutar la librería
  .use(LanguageDetector) // Función para detectar el idioma del browser del usuario
  .use(HTTPApi) // Modulo para detectar y manejar cada petición de traducción dependiendo del idioma solicitado
  .init({
    fallbackLng: "en", // Idioma por default
    debug: false, // En true muestra mensajes durante el desarrollo de la app.

    interpolation: {
      escapeValue: false, // Esto previene "cross-head scripting attacks"
    },
  });

export default i18next;
