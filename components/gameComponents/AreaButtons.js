import { StyleSheet, Text, View } from "react-native";

import { ButtonHelp } from "./ButtonHelp";
import { ButtonNumber } from "./ButtonNumber";
import React from "react";

export const AreaButtons = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.area_numbers}>
        <ButtonNumber number={1} onPress={(number) => props.onPress(number)} />
        <ButtonNumber number={2} onPress={(number) => props.onPress(number)} />
        <ButtonNumber number={3} onPress={(number) => props.onPress(number)} />
        <ButtonNumber number={4} onPress={(number) => props.onPress(number)} />
        <ButtonNumber number={5} onPress={(number) => props.onPress(number)} />
        <ButtonNumber number={6} onPress={(number) => props.onPress(number)} />
        <ButtonNumber number={7} onPress={(number) => props.onPress(number)} />
        <ButtonNumber number={8} onPress={(number) => props.onPress(number)} />
        <ButtonNumber number={9} onPress={(number) => props.onPress(number)} />
      </View>
      <View style={styles.area_helpers}>
        <ButtonHelp action="undo" onPress={props.onPressUndo} />
        <ButtonHelp action="erase" onPress={props.onPressErase} />
        <ButtonHelp action="hint" onPress={props.onPressHint} />
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
  },
});
