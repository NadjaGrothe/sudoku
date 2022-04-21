import React, { useEffect, useMemo, useState } from "react";
import { SudokuCreator } from "@algorithm.ts/sudoku";
import _ from "lodash";

import style from "./App.module.css";
import Board from "./Board";

function App() {
   // useMemo to prevent generating new puzzles while playing
   const data = useMemo(() => {
      const creator = new SudokuCreator({ childMatrixSize: 3 });
      const generateSudoku = creator.createSudoku();

      const puzzle: number[][] = generateSudoku.puzzle.map((arr) =>
         arr.map((num) => {
            if (num >= 0) return num + 1;
            return num;
         })
      );

      const solution: number[][] = generateSudoku.solution.map((arr) =>
         arr.map((num) => {
            if (num >= 0) return num + 1;
            return num;
         })
      );

      return { puzzle, solution };
   }, []);

   //* Set board state to generated Sudoku puzzle 
   const [board, setBoard] = useState<number[][]>(data.puzzle);
   
   useEffect(() => {
      solutionValidation(board, data.solution);
   }, [board, data.solution]);

   //* update board state on player input
   function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      let inputValue = Number(e.target.value);
      // max length validation for input field
      if (inputValue > 9) {
         e.target.value = e.target.value[0];
         inputValue = Number(e.target.value[0]);
      }
      // records the two digit indexValue of a square (indexValues are two digit strings, first number refers to index of row in puzzle/board array, second number is the index inside the row → see README for clarification)
      const rowIndex = Number(e.target.getAttribute("data-index")?.charAt(0));
      const squareIndex = Number(
         e.target.getAttribute("data-index")?.charAt(1)
      );

      // update board state to reflect new player input Value
      let tempBoard = _.cloneDeep(board);
      tempBoard[rowIndex][squareIndex] = inputValue;
      setBoard(tempBoard);
   }

   //* Solution validation functionality
   function solutionValidation(board: number[][], solution: number[][]) {
      // check if current board state is the same as generated solution
      if (JSON.stringify(board) === JSON.stringify(solution)) {
         console.log("I WON");
      }
   }

   return (
      <div className={style.App}>
         <header className={style.AppHeader}>
            <h1>Sudoku </h1>
         </header>
         <main className={style.AppMain}>
            <Board puzzle={data.puzzle} onChange={handleOnChange} />
         </main>
      </div>
   );
}

export default App;
