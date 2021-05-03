import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Cell } from "./Cell";
import React from "react";
import { useGameContext } from "./GameContext";

export const AreaGame = (props) => {
  let { sudokuArray, initSudoku } = useGameContext();
  const cells = [];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      cells.push(
        <Cell
          key={[i, j]}
          position={[i, j]}
          onPress={(position) => {
            props.onPress(position);
          }}
          value={sudokuArray[i][j]}
        ></Cell>
      );
    }
  }
  return (
    <View style={styles.area_game}>
      <TouchableOpacity style={styles.newgame_area}>
        <Text style={styles.newgame}>New Game{"\n"}</Text>
      </TouchableOpacity>
      {cells}
    </View>
  );
};

const styles = StyleSheet.create({
  area_game: {
    marginTop: "25%",
    alignItems: "center",
    width: "90%",
    height: "65%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  newgame: { width: "100%", textAlign: "center" },
  newgame_area: { marginHorizontal: "40%" },
});
