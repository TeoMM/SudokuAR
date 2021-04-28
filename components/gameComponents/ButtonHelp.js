import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

export const ButtonHelp = (props) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.button_layout} onPress={props.onPress}>
        <Ionicons
          name={
            props.action === "undo"
              ? "arrow-undo-circle-outline"
              : props.action === "erase"
              ? "close-circle-outline"
              : props.action === "hint"
              ? "apps-outline"
              : ""
          }
          size={24}
        />
        <Text>
          {props.action === "undo"
            ? "Undo"
            : props.action === "erase"
            ? "Erase"
            : props.action === "hint"
            ? "Hint"
            : ""}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    margin: 2,
  },
  button_layout: {
    flexDirection: "column",
    alignItems: "center",
    color: "#2c2a25",
  },
});
