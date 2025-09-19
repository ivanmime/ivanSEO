import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const [language, setLanguage] = useState('es');
  const navigate = useNavigate();
  const location = useLocation();

  // Extract language from URL
  const getLanguageFromPath = (pathname) => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const langFromPath = pathSegments[0];
    return ['es', 'en'].includes(langFromPath) ? langFromPath : 'es';
  };

  useEffect(() => {
    const currentLang = getLanguageFromPath(location.pathname);
    setLanguage(currentLang);
  }, [location.pathname]);

  const changeLanguage = (lang) => {
    if (!['es', 'en'].includes(lang)) return;
    
    const currentPath = location.pathname;
    const hash = location.hash;
    
    // Extract the section hash if present
    const sectionHash = hash.startsWith('#') ? hash : '';
    
    // Navigate to new language path
    navigate(`/${lang}${sectionHash}`, { replace: true });
    setLanguage(lang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  // Helper function to get localized path
  const getLocalizedPath = (path = '') => {
    return `/${language}${path}`;
  };

  // Helper function to navigate with language preservation
  const navigateWithLang = (path) => {
    navigate(getLocalizedPath(path));
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