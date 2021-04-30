import { StyleSheet, Text, View } from "react-native";

import { ButtonHelp } from "./ButtonHelp";
import { ButtonNumber } from "./ButtonNumber";
import React from "react";

export const AreaButtons = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.area_numbers}>
        <ButtonNumber number={1} onPress={() => props.onPress("1")} />
        <ButtonNumber number={2} onPress={() => props.onPress("2")} />
        <ButtonNumber number={3} onPress={() => props.onPress("3")} />
        <ButtonNumber number={4} onPress={() => props.onPress("4")} />
        <ButtonNumber number={5} onPress={() => props.onPress("5")} />
        <ButtonNumber number={6} onPress={() => props.onPress("6")} />
        <ButtonNumber number={7} onPress={() => props.onPress("7")} />
        <ButtonNumber number={8} onPress={() => props.onPress("8")} />
        <ButtonNumber number={9} onPress={() => props.onPress("9")} />
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
    marginTop: "10%",
  },
});
