import React, { useState } from "react";
import "./App.css";
import Square from "./Board/Square";

function App() {
   const [board, setBoard] = useState<number[][]>(
      Array(9).fill(Array(9).fill(0))
   );

   return (
      <div className="App">
         <header className="App-header">
            <h1>Sudoku </h1>
         </header>
         <main className="App-main">
            <Square index={1} value={123} readOnly={true}></Square>
            <Square
               index={2}
               value={undefined}
               readOnly={false}
               onChange={(e) => console.log(e.target.value)}
            ></Square>
         </main>
      </div>
   );
}

export default App;
