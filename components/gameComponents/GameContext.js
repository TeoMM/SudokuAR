import React, { createContext, useContext, useState } from "react";

import moment from "moment";

export const GameContext = createContext([
  "0", // numberSelected
  () => {},

  [
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ], //sudokuArray
  () => {},

  moment(), // timeCounter
  () => {},

  [-1, -1], //cellSelected
  () => {},

  [], //initSudoku
  () => {},

  false, // won
  () => {},
]);

export const SudokuProvider = ({ children }) => {
  let [numberSelected, setNumberSelected] = useState("0");
  let [sudokuArray, setSudokuArray] = useState([
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ]);
  let [timeCounter, setTimeCounter] = useState(moment());
  let [cellSelected, setCellSelected] = useState([-1, -1]);
  let [initSudoku, setInitSudoku] = useState([]);
  let [won, setWon] = useState(false);

  return (
    <GameContext.Provider
      value={{
        numberSelected,
        setNumberSelected,
        sudokuArray,
        setSudokuArray,
        timeCounter,
        setTimeCounter,
        cellSelected,
        setCellSelected,
        initSudoku,
        setInitSudoku,
        won,
        setWon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);

// Usage
