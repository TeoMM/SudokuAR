import * as React from "react";

import { StyleSheet, Text, View } from "react-native";

import { AreaButtons } from "./gameComponents/AreaButtons";
import { AreaGame } from "./gameComponents/AreaGame";

function PlayScreen() {
  return (
    <View style={styles.screen}>
      <AreaGame style={styles.board} />
      <AreaButtons style={styles.buttons} />
    </View>
  );
}

export default PlayScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#02A171",
  },
});
