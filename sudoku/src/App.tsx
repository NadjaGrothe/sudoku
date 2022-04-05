import React, { useState } from "react";
import "./App.css";
import Square from "./components/Board/Square";

function App() {
   const [board, setBoard] = useState<number[][]>(
      Array(9).fill(Array(9).fill(0))
   );

   console.log(board);

   return (
      <body className="App">
         <header className="App-header">
            <h1>Sudoku</h1>
         </header>
         <main className="App-main">
            <Square key={1} value={123} isDisabled={true}></Square>
            <Square
               key={2}
               value={undefined}
               isDisabled={false}
               onChange={(e) => console.log(e.target.value)}
            ></Square>
         </main>
      </body>
   );
}

export default App;
