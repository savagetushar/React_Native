
// src/screens/HomeScreen.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('welcome')}</Text>
    </View>
  );
};

const getStyles = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
    },
    text: {
      fontSize: 20,
      color: theme === 'dark' ? '#fff' : '#000',
    },
  });

export default HomeScreen;
