// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const STORAGE_KEY = 'portfolio-language';

/** @returns {'en' | 'tr' | null} */
function readStoredLanguage() {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'tr') return stored;
  } catch {
    // ignore
  }
  return null;
}

/**
 * If Turkish appears anywhere in the user's locale list, prefer Turkish.
 * Many browsers put a generic "en" first even when Turkish is listed as preferred.
 */
function languageFromNavigator() {
  if (typeof navigator === 'undefined') return 'en';

  const tags = [];

  if (Array.isArray(navigator.languages)) {
    tags.push(...navigator.languages);
  }
  if (navigator.language) {
    tags.push(navigator.language);
  }

  try {
    const intlLocale =
      typeof Intl !== 'undefined' &&
      Intl.DateTimeFormat().resolvedOptions().locale;
    if (intlLocale) tags.push(intlLocale);
  } catch {
    // ignore
  }

  for (const raw of tags) {
    if (!raw || typeof raw !== 'string') continue;
    const primary = raw.split('-')[0].toLowerCase();
    if (primary === 'tr') return 'tr';
  }

  return 'en';
}

function getInitialLanguage() {
  const stored = readStoredLanguage();
  if (stored) return stored;
  return languageFromNavigator();
}

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => getInitialLanguage());

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const next = prevLang === 'en' ? 'tr' : 'en';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  const t = (enText, trText) => (language === 'en' ? enText : trText);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
