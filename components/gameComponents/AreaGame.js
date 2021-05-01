import { StyleSheet, Text, View } from "react-native";

import { Cell } from "./Cell";
import React from "react";
import { useGameContext } from "./GameContext";

export const AreaGame = (props) => {
  const customData = require("../data/dataSmall.json");

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
        ></Cell>
      );
    }
  }
  return (
    <View style={styles.area_game}>
      <Text style={styles.newgame}>New Game{"\n"}</Text>
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
});
