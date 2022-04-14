import React from "react";
import style from "./Square.module.css";

export interface SquareProps {
   rowIndex: number;
   columnIndex: number;
   squareValue?: number | undefined;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Square({
   rowIndex,
   columnIndex,
   squareValue,
   onChange,
}: SquareProps) {
   // TODO: create max length validation for number input
   // TODO: only allow input numbers 1-9

   return (
      <input
         className={style.boardSquare}
         key={"" + rowIndex + columnIndex}
         type="number"
         defaultValue={squareValue === -1 ? "" : squareValue}
         disabled={squareValue === -1 ? false : true} 
         // TODO: decide between disabled for readOnly
         onChange={onChange}
         data-testid="board-square"
      ></input>
   );
}

export default Square;
