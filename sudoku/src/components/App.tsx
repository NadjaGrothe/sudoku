import React, { useState } from "react";
import { createSudokuBoard, SudokuCreator } from "@algorithm.ts/sudoku";

import "./App.css";
import Board from "./Board";

function App() {
   /* 
      ** SUDOKU GENERATOR NPM PACKAGE ** 
      https://www.npmjs.com/package/@algorithm.ts/sudoku

      - generates an object 
         - with 9x9 sudoku puzzle 
         - and solution (will only use puzzle)
      - difficulty easy if param empty or creator.createSudoku(1.0) for hard

      ! default puzzle is created with numbers 0-8 (adding 1 to each number to receive values of 1-9 instead)  
      ! non-filled numbers are -1   
   */

   //* Generate a random, easy, 9-by-9 sudoku puzzle
   const creator = new SudokuCreator({ childMatrixSize: 3 });
   /* by default createSudoku generates numbers 0-8
      → adding 1 to each number greater or equal to 0, to get numbers 1-9
   */
   const puzzle = creator.createSudoku().puzzle.map((arr) =>
      arr.map((num) => {
         if (num >= 0) return num + 1;
         return num;
      })
   );

   const [board, setBoard] = useState<number[][]>(puzzle);

   return (
      <div className="App">
         <header className="App-header">
            <h1>Sudoku </h1>
         </header>
         <main className="App-main">
            <Board
               board={board}
               onChange={(e) => console.log(e.target.value)}
            />
         </main>
      </div>
   );
}

export default App;
