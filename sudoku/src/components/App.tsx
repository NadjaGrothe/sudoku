import React, { useEffect, useMemo, useState } from "react";
import { SudokuCreator } from "@algorithm.ts/sudoku";
// lodash used to create deep copy of board state
import _ from "lodash";

import style from "./App.module.css";
import Board from "./Board";
import Button from "./Button";

function App() {
   // useMemo to prevent generating new puzzles while playing
   // const data = useMemo(() => {
   //    const creator = new SudokuCreator({ childMatrixSize: 3 });
   //    const generateSudoku = creator.createSudoku();

   //    const puzzle: number[][] = generateSudoku.puzzle.map((arr) =>
   //       arr.map((num) => {
   //          if (num >= 0) return num + 1;
   //          return num;
   //       })
   //    );

   //    const solution: number[][] = generateSudoku.solution.map((arr) =>
   //       arr.map((num) => {
   //          if (num >= 0) return num + 1;
   //          return num;
   //       })
   //    );

   //    return { puzzle, solution };
   // }, []);

   //* generation of new Sudoku puzzle
   function generateNewSudoku() {
      
      
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
      
      // FIXME: find a way to clear previous input field values on Button Click to avoid leftover numbers from previous game
      setBoard(puzzle);
      setSolution(solution);
   }

   //* Set board/solution state to generated Sudoku
   const [board, setBoard] = useState<number[][] | undefined>();
   const [solution, setSolution] = useState<number[][] | undefined>();
   //* player won state
   const [won, setWon] = useState<boolean>(false);

   useEffect(() => {
      generateNewSudoku();
   }, []);

   useEffect(() => {
      solutionValidation(board, solution);
   }, [board, solution]);

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
      if (board) {
         let tempBoard = _.cloneDeep(board);
         tempBoard[rowIndex][squareIndex] = inputValue;
         setBoard(tempBoard);
      }
   }

   //* Solution validation functionality
   function solutionValidation(board?: number[][], solution?: number[][]) {
      // check if current board state is the same as generated solution
      if (JSON.stringify(board) === JSON.stringify(solution)) {
         setWon(true);
      }
   }

   return (
      <div className={style.App}>
         <header className={style.AppHeader}>
            <h1>Sudoku </h1>
         </header>
         <main className={style.AppMain}>
            {won && <h1>You Won!</h1>}
            {board && 
            <Board puzzle={board} onChange={handleOnChange} />
            }
            <Button buttonText="New Game" onClick={generateNewSudoku} />
         </main>
      </div>
   );
}

export default App;
