import * as React from "react";

import { StyleSheet, View } from "react-native";

import { AreaButtons } from "./gameComponents/AreaButtons";
import { AreaGame } from "./gameComponents/AreaGame";
import { SudokuProvider } from "./gameComponents/GameContext";

function PlayScreen() {
  return (
    <View style={styles.screen}>
      <SudokuProvider>
        <AreaGame
          style={styles.board}
          onPress={(position) => {
            console.log(position);
          }}
        />
        <AreaButtons
          style={styles.buttons}
          onPressNumber={(number) => console.log(number)}
          onPressUndo={() => console.log("undo")}
          onPressErase={() => console.log("erase")}
          onPressSolve={() => console.log("solve")}
        />
      </SudokuProvider>
    </View>
  );
}

export default PlayScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#02A171",
  },
  board: {
    paddingTop: "100px",
    height: "75%",
  },
  buttons: { height: "15%" },
});
