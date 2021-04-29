import { StyleSheet, Text, View } from "react-native";

import { Cell } from "./Cell";
import React from "react";

export const AreaGame = (props) => {
  const customData = require("../data/dataSmall.json");
  const items = [];
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      items.push(<Cell key={[i, j]}></Cell>);
    }
  }
  return <View style={styles.area_game}>{items}</View>;
};

const styles = StyleSheet.create({
  area_game: {
    marginTop: "20%",
    alignItems: "center",
    width: "90%",
    height: "75%",
    backgroundColor: "red",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
