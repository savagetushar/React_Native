
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Counter from "../components/Counter";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Counter />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
