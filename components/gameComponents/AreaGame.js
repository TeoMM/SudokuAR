import { StyleSheet, Text, View } from "react-native";

import React from "react";

export const AreaGame = (props) => {
  const customData = require("../data/dataSmall.json");
  return (
    <View style={styles.area_game}>
      <Text>{customData[1]["puzzle"]}</Text>
      <Text>Lol</Text>
      <Text>Lol</Text>
      <Text>Lol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  area_game: {
    marginTop: "10%",
    alignItems: "center",
    width: "90%",
    height: "80%",
    backgroundColor: "red",
  },
});
