import { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("atmna_language") || "en");
  const [translations, setTranslations] = useState({});
  const [key, setKey] = useState(0);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("atmna_language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("atmna_language", language);
    setKey(prevKey => prevKey + 1);

    const loadTranslations = async () => {
      try {
        const res = await import(`../locales/${language}.json`);
        setTranslations(res);
      } catch (error) {
        console.error(`Error loading translations for language: ${language}`, error);
      }
    };
    loadTranslations();
  }, [language]);

  const translate = (keyPath) => {
    return keyPath.split(".").reduce((obj, key) => obj?.[key], translations) || keyPath;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);