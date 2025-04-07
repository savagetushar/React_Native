// src/translations/index.ts
export const translations = {
    en: {
      home: 'Home',
      settings: 'Settings',
      welcome: 'Welcome to the App!',
      theme: 'Toggle Theme',
      language: 'Change Language',
    },
    es: {
      home: 'Inicio',
      settings: 'Configuración',
      welcome: '¡Bienvenido a la aplicación!',
      theme: 'Cambiar tema',
      language: 'Cambiar idioma',
    },
  };
  
  export type TranslationKeys = keyof typeof translations['en'];
  