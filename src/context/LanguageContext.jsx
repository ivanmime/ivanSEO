import React, { createContext, useContext, useState } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const LanguageProvider = ({ children }) => {
  // App is Spanish-only now
  const [language, setLanguage] = useState('es');

  const changeLanguage = (lang) => {
    // No-op: only Spanish supported
    if (lang !== 'es') return;
    setLanguage('es');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  // Keep helpers as no-ops to avoid breaking callers elsewhere
  const getLocalizedPath = (path = '') => `/${language}${path}`;
  const navigateWithLang = (path) => {
    // no-op in Spanish-only mode
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        changeLanguage, 
        t, 
        getLocalizedPath,
        navigateWithLang 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
