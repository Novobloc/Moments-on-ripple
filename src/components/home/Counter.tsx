import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Text } from "@/theme";

const CounterApp = ({ count, setCount }: any) => {
  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text marginBottom="md" variant="header">
        Counter: {count}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={incrementCounter} />
        <Button title="Decrement" onPress={decrementCounter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%"
  }
});

export default CounterApp;
