
import React from "react";
import { View, Text, Button } from "react-native";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <View>
      <Text style={{ fontSize: 32, textAlign: "center", marginBottom: 10 }}>{count}</Text>
      <Button title="Increment" onPress={increment} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default Counter;
