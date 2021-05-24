import * as React from "react";

import { StyleSheet, Text, View } from "react-native";
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
    won,
    setWon,
  } = useGameContext();

  let [history, setHistory] = useState([]);
  let [solvedArray, setSolvedArray] = useState([]); // used for isSolved
  let [puzzle, setPuzzle] = useState([]);
  let puzzlesJSON = require("./data/dataSmall.json");

  function newGame() {
    puzzlesJSON = require("./data/dataSmall.json");
    let data = puzzlesJSON[Math.floor(Math.random() * puzzlesJSON.length)];
    setPuzzle(normalizeToArray(data.puzzle));
    setSudokuArray(normalizeToArray(data.puzzle));
    setHistory([normalizeToArray(data.puzzle)]);
    setWon(false);
  }
  function onPressCell(position) {
    setCellSelected(position);
  }
  function onPressUndo() {
    if (history.length) {
      let auxHistory = [...history];
      let auxArr = auxHistory.pop();
      setHistory(auxHistory);
      setSudokuArray(auxArr);
    }
  }
  function onPressErase() {
    if (sudokuArray[cellSelected[0]][cellSelected[1]] !== "0") {
      setCell(cellSelected, "0");
    }
  }
  function onPressSolve() {
    let auxSudokuArray = [...puzzle];
    solveSudoku(auxSudokuArray);
    setSudokuArray(auxSudokuArray);
    setWon(true);
    setCellSelected(cellSelected + 1);
  }
  function onPressNumber(number) {
    setCell(cellSelected, number);
  }

  function setCell(position, number) {
    if (puzzle[position[0]][position[1]] == "0") {
      let auxSudokuArray = [...sudokuArray];
      let auxHistory = [...history];

      auxHistory.push(auxSudokuArray);
      setHistory(auxHistory);

      auxSudokuArray[position[0]][position[1]] = number;
      setSudokuArray(auxSudokuArray);

      setCellSelected(position + 1);
    }
  }

  useEffect(() => {
    newGame();
  }, []);

  if (!won)
    return (
      <View style={styles.screen}>
        <AreaGame
          style={styles.board}
          onPress={(position) => {
            onPressCell(position);
          }}
          onPressNewGame={newGame}
        />
        <AreaButtons
          style={styles.buttons}
          onPressNumber={(number) => onPressNumber(number)}
          onPressUndo={onPressUndo}
          onPressErase={onPressErase}
          onPressSolve={onPressSolve}
        />
      </View>
    );
  else
    return (
      <View style={styles.screen}>
        <AreaGame
          style={styles.board}
          onPress={(position) => {
            onPressCell(position);
          }}
          onPressNewGame={newGame}
        />
        <Text>YOU SOLVED IT!</Text>
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
