
// src/screens/SettingsScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage, t } = useContext(LanguageContext);

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('theme')}</Text>
      <Button title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'} onPress={toggleTheme} />

      <Text style={[styles.text, { marginTop: 20 }]}>{t('language')}</Text>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="Español" onPress={() => changeLanguage('es')} />
    </View>
  );
};

const getStyles = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
    },
    text: {
      fontSize: 18,
      color: theme === 'dark' ? '#ffffff' : '#000000',
      marginBottom: 10,
    },
  });

export default SettingsScreen;
