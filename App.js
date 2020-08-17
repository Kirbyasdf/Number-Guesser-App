import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";

//screens
import StartGameScreen from "./screens/StartGameScreen.js";
import GameScreen from "./screens/GameScreen.js";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [finalRoundCount, setFinalRoundCount] = useState(0);

  const configureNewGameHandler = () => {
    setFinalRoundCount(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (roundCount) => {
    setFinalRoundCount(roundCount);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber && finalRoundCount <= 0) {
    content = <GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />;
  } else if (finalRoundCount > 0) {
    content = (
      <GameOverScreen
        configureNewGameHandler={configureNewGameHandler}
        roundCount={finalRoundCount}
        userNumber={userNumber}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title={"GUESS A NUMBER"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
