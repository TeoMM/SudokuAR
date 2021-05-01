import { StyleSheet, View } from "react-native";

import { ButtonHelp } from "./ButtonHelp";
import { ButtonNumber } from "./ButtonNumber";
import React from "react";

export const AreaButtons = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.area_numbers}>
        <ButtonNumber number={1} onPress={() => props.onPressNumber("1")} />
        <ButtonNumber number={2} onPress={() => props.onPressNumber("2")} />
        <ButtonNumber number={3} onPress={() => props.onPressNumber("3")} />
        <ButtonNumber number={4} onPress={() => props.onPressNumber("4")} />
        <ButtonNumber number={5} onPress={() => props.onPressNumber("5")} />
        <ButtonNumber number={6} onPress={() => props.onPressNumber("6")} />
        <ButtonNumber number={7} onPress={() => props.onPressNumber("7")} />
        <ButtonNumber number={8} onPress={() => props.onPressNumber("8")} />
        <ButtonNumber number={9} onPress={() => props.onPressNumber("9")} />
      </View>
      <View style={styles.area_helpers}>
        <ButtonHelp action="undo" onPress={props.onPressUndo} />
        <ButtonHelp action="erase" onPress={props.onPressErase} />
        <ButtonHelp action="solve" onPress={props.onPressSolve} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  area_numbers: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "90%",
  },
  area_helpers: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    height: "15%",
    marginTop: "10%",
  },
});
