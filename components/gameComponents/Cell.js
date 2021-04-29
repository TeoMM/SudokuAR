import { StyleSheet, Text, View } from "react-native";

import React from "react";

export const Cell = (props) => {
  return (
    <View style={styles.cell}>
      <Text>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: "11.11%",
    height: "10%",
    borderWidth: 1,
    borderColor: "#2c2a25",
  },
  selected_cell: {},
});
