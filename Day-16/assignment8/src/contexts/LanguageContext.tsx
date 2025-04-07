import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translations, TranslationKeys } from '../translations';

export type LanguageType = 'en' | 'es';

interface LanguageContextType {
  language: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
  t: (key: TranslationKeys) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  changeLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('en');

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const savedLang = await AsyncStorage.getItem('appLanguage');
        if (savedLang === 'en' || savedLang === 'es') {
          setLanguage(savedLang);
        }
      } catch (error) {
        console.log('Failed to load language from AsyncStorage', error);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = async (lang: LanguageType) => {
    try {
      await AsyncStorage.setItem('appLanguage', lang);
      setLanguage(lang);
    } catch (error) {
      console.log('Failed to save language to AsyncStorage', error);
    }
  };

  const t = (key: TranslationKeys) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
