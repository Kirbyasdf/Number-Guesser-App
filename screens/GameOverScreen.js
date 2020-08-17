import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOver = ({ roundCount, userNumber, configureNewGameHandler }) => (
  <View style={styles.screen}>
    <Text>The Game is Over!</Text>
    <Text> Number: {userNumber}</Text>
    <Text> Number of rounds: {roundCount}</Text>
    <Button title="Play Again?" onPress={configureNewGameHandler} />
  </View>
);
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
