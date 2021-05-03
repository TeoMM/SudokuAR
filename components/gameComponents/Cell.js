import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { useGameContext } from "./GameContext";

export const Cell = (props) => {
  let { cellSelected } = useGameContext();
  const computeStyle = () => {
    let result = [];
    if (
      props.position[0] % 3 == 0 &&
      props.position[0] > 0 &&
      props.position[1] % 3 == 0 &&
      props.position[1] > 0
    ) {
      result = [styles.inner_cell, styles.vertical_border, styles.horizontal_border];
    } else if (props.position[1] % 3 == 0 && props.position[1] > 0) {
      result = [styles.inner_cell, styles.vertical_border];
    } else if (props.position[0] % 3 == 0 && props.position[0] > 0) {
      result = [styles.inner_cell, styles.horizontal_border];
    } else {
      result = [styles.inner_cell];
    }
    if (cellSelected[0] == props.position[0] && cellSelected[1] == props.position[1]) {
      result.push(styles.selected_cell);
    }
    return result;
  };
  function handlePress() {
    props.onPress(props.position);
  }

  return (
    <View style={styles.cell}>
      <TouchableOpacity style={computeStyle()} onPress={handlePress}>
        <Text style={styles.cell_text}>{props.value == "0" ? "" : props.value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: "11.11%",
    height: "9.5%",
    borderWidth: 1,
    borderColor: "#2c2a25",
    textAlign: "center",
    backgroundColor: "white",
    margin: 0,
    padding: 0,
  },
  selected_cell: {
    backgroundColor: "#faa307",
  },
  vertical_border: {
    borderLeftWidth: 3,
  },
  horizontal_border: { borderTopWidth: 3 },
  inner_cell: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cell_text: { fontSize: 20 },
});
