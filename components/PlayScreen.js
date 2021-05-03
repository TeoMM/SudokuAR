import * as React from "react";

import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import { AreaButtons } from "./gameComponents/AreaButtons";
import { AreaGame } from "./gameComponents/AreaGame";
import { normalizeToArray } from "./utils/normalizeToArray.js";
import { solveSudoku } from "./utils/solveSudoku.js";
import { useGameContext } from "./gameComponents/GameContext";

function PlayScreen() {
  const {
    numberSelected,
    setNumberSelected,
    sudokuArray,
    setSudokuArray,
    cellSelected,
    setCellSelected,
    initSudoku,
    setInitSudoku,
    setWon,
  } = useGameContext();

  let [history, setHistory] = useState([]);
  let [solvedArray, setSolvedArray] = useState([]);
  let puzzlesJSON = require("./data/dataSmall.json");

  function newGame() {
    puzzlesJSON = require("./data/dataSmall.json");
    let data = puzzlesJSON[Math.floor(Math.random() * puzzlesJSON.length)];
    let puzzle = data.puzzle;
    puzzle = normalizeToArray(puzzle);
    setInitSudoku(puzzle);
    setSudokuArray(puzzle);
    setHistory([]);
    setWon(false);
  }
  function onPressCell(position) {
    setCellSelected(position);
  }
  function onPressUndo() {}
  function onPressErase() {}
  function onPressSolve() {}
  function onPressNumber(number) {
    setCell(cellSelected, number);
  }

  function setCell(position, number) {
    if (initSudoku[position[0]][position[1]] === "0") {
      console.log("ad");
      let auxSudokuArray = sudokuArray;
      let auxHistory = history;
      auxHistory.push(auxSudokuArray);
      setHistory(auxHistory);
      auxSudokuArray[position[0]][position[1]] = number;
      setSudokuArray(auxSudokuArray);
      console.log(history);
    }
  }

  useEffect(() => {
    newGame();
  }, []);

  return (
    <View style={styles.screen}>
      <AreaGame
        style={styles.board}
        onPress={(position) => {
          onPressCell(position);
        }}
      />
      <AreaButtons
        style={styles.buttons}
        onPressNumber={(number) => onPressNumber(number)}
        onPressUndo={() => console.log("undo")}
        onPressErase={() => console.log(sudokuArray)}
        onPressSolve={() => console.log("solve")}
      />
    </View>
  );
}

export default PlayScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#02A171",
  },
  board: {
    paddingTop: "100px",
    height: "75%",
  },
  buttons: { height: "15%" },
});
