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

      ! puzzle is created with numbers 0-8
      ! non-filled numbers are -1

      TODO: add 1 to each number above 0
   
   */

   const creator = new SudokuCreator({ childMatrixSize: 3 });
   const puzzle = creator.createSudoku().puzzle;

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
               readOnly={false}
            />
            {/* <Square index={1} value={1} readOnly={true}></Square>
            <Square
               index={2}
               value={undefined}
               readOnly={false}
               onChange={(e) => console.log(e.target.value)}
            ></Square> */}
         </main>
      </div>
   );
}

export default App;
