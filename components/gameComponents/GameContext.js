import React, { createContext, useContext, useState } from "react";

import moment from "moment";

const GameContext = createContext([
  "0", // numberSelected
  () => {},

  [], //sudokuArray
  () => {},

  moment(), // timeCounter
  () => {},

  -1, //cellSelected
  () => {},

  [], //initSudokuArray
  () => {},

  false, // won
  () => {},
]);

export const SudokuProvider = ({ children }) => {
  let [numberSelected, setNumberSelected] = useState("0");
  let [sudokuArray, setSudokuArray] = useState([]);
  let [timeCounter, setTimeCounter] = useState(moment());
  let [cellSelected, setCellSelected] = useState(-1);
  let [initSudokuArray, setInitSudokuArray] = useState([]);
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
        initSudokuArray,
        setInitSudokuArray,
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
