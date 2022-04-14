import React from "react";
import style from "./Square.module.css";

export interface SquareProps {
   rowIndex: number;
   columnIndex: number;
   squareValue?: number | undefined;
   readOnly: boolean;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Square({
   rowIndex,
   columnIndex,
   squareValue,
   readOnly,
   onChange,
}: SquareProps) {
   // TODO: create max length validation for number input
   // TODO: only allow input numbers 1-9
   // TODO: if value is 0, empty input field

   return (
      <input
         className={style.boardSquare}
         key={"" + rowIndex + columnIndex}
         type="number"
         defaultValue={squareValue}
         readOnly={readOnly}
         onChange={onChange}
         data-testid="board-square"
      ></input>
   );
}

export default Square;
