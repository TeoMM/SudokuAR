import * as React from "react";

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import Clipboard from "expo-clipboard";
import { normalizeToArray } from "./utils/normalizeToArray.js";
import { solveSudoku } from "./utils/solveSudoku.js";
import { useState } from "react";

function TextScreen() {
  const [inputArray, setInputArray] = useState();
  const [result, setResult] = useState();

  function onPressButton() {
    let auxArr = inputArray.slice();
    auxArr = normalizeToArray(auxArr);
    solveSudoku(auxArr);
    setResult(auxArr);

    Clipboard.setString(JSON.stringify(auxArr));
  }

  return (
    <View style={styles.wrapper}>
      <Text>Solve your text-like Sudoku!</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setInputArray(value)}
        value={inputArray}
        placeholder="Input sudoku as String"
      />
      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <Text style={styles.button_text}>Solve it!</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result ? result : ""}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    minWidth: "50%",
  },
  button_text: {
    color: "dodgerblue",
  },
  result: {
    margin: "10%",
  },
});

export default TextScreen;
