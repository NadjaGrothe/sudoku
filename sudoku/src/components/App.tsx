import React, { useEffect, useMemo, useState } from "react";
import { SudokuCreator } from "@algorithm.ts/sudoku";
// lodash used to create deep copy of board state
import _, { words } from "lodash";

import style from "./App.module.css";
import Board from "./Board";
import Button from "./Button";

function App() {
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

      setInitialBoard(puzzle);
      setPlayingBoard(puzzle);
      setSolution(solution);
   }

   //* States
   /* 
   - emptyBoard: creating empty playing grid, to reset input values when generating new game
   - initialBoard: to create grid with generated sudoku & active/inactive squares
   - playingBoard: stores player input values for solution verification
   - solution: solution of generated sudoku; used to compare with playingBoard
   - won: keeps track of wether the player has successfully solved the sudoku
   */
   const emptyBoard: number[][] = Array(9).fill(Array(9).fill(null));
   const [initialBoard, setInitialBoard] = useState<number[][] | undefined>(
      emptyBoard
   );
   const [playingBoard, setPlayingBoard] = useState(initialBoard);
   const [solution, setSolution] = useState<number[][] | undefined>();
   const [won, setWon] = useState<boolean>(false);

   useEffect(() => {
      generateNewSudoku();
   }, []);

   useEffect(() => {
      solutionValidation(playingBoard, solution);
   }, [playingBoard, solution]);

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
      if (playingBoard) {
         let tempBoard = _.cloneDeep(playingBoard);
         tempBoard[rowIndex][squareIndex] = inputValue;
         setPlayingBoard(tempBoard);
      }
   }

   //* Solution validation functionality
   function solutionValidation(
      playingBoard?: number[][],
      solution?: number[][]
   ) {
      // checks if current board state is the same as generated solution
      if (JSON.stringify(playingBoard) === JSON.stringify(solution)) {
         setWon(true);
      }
   }

   //* New Game Button functionality
   function handleClick(){
      setWon(false)
      generateNewSudoku()
   }

   /* FIXME: INPUT FIELDS: player input value is not being cleared when clicking "New Game" Button → player input values overwrite the square values of the newly generated puzzle
   (before adding the emptyBoard, the values of the previously generated puzzle would remain, they are now being cleared - "just" the resetting of the values entered by the player are not being cleared yet ) */

   return (
      <div className={style.App}>
         <header className={style.AppHeader}>
            <h1>Sudoku </h1>
         </header>
         <main className={style.AppMain}>
            {won && <h1>You Won!</h1>}
            {initialBoard && (
               <Board puzzle={initialBoard} onChange={handleOnChange} />
            )}
            <Button buttonText="New Game" onClick={handleClick} />
         </main>
      </div>
   );
}

export default App;
