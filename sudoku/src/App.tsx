import React from "react";
import "./App.css";
import Square from "./components/Board/Square";

function App() {
   return (
      <body className="App">
         <header className="App-header">
            <h1>Sudoku</h1>
         </header>
         <main className="App-main">
            <Square value={123} isDisabled={true}></Square>
            <Square
               value={undefined}
               isDisabled={false}
               onChange={(e) => console.log(e.target.value)}
            ></Square>
         </main>
      </body>
   );
}

export default App;
