import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

export const Cell = (props) => {
  const computeStyle = () => {
    if (
      props.position[0] % 3 == 0 &&
      props.position[0] > 0 &&
      props.position[1] % 3 == 0 &&
      props.position[1] > 0
    ) {
      return [styles.inner_cell, styles.vertical_border, styles.horizontal_border];
    } else if (props.position[1] % 3 == 0 && props.position[1] > 0) {
      return [styles.inner_cell, styles.vertical_border];
    } else if (props.position[0] % 3 == 0 && props.position[0] > 0) {
      return [styles.inner_cell, styles.horizontal_border];
    } else {
      return styles.inner_cell;
    }
  };

  return (
    <View style={styles.cell}>
      <TouchableOpacity style={computeStyle()}>
        <Text style={styles.cell_text}>{props.position[1]}</Text>
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
