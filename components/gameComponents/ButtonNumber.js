import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { useGameContext } from "./GameContext";

export const ButtonNumber = (props) => {
  let { numberSelected } = useGameContext();

  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.number}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
  },
  text: {
    minWidth: 25,
    fontSize: 25,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: "#2c2a25",
    borderRadius: 10,
    color: "#2c2a25",
  },
});
