import React from "react";
import style from "./Square.module.css";

export interface SquareProps {
   rowIndex: number;
   columnIndex: number;
   squareValue?: number | undefined;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Square({ rowIndex, columnIndex, squareValue, onChange }: SquareProps) {
   return (
      <input
         className={style.boardSquare}
         key={"" + rowIndex + columnIndex}
         data-index={"" + rowIndex + columnIndex}
         type="number"
         min={1}
         defaultValue={squareValue === -1 ? "" : squareValue}
         disabled={squareValue === -1 ? false : true}
         // TODO: decide between disabled for readOnly
         onChange={onChange}
         // assures user cannot enter a 0 in input field
         onKeyDown={(e) => e.key === "0" && e.preventDefault()}
         data-testid="board-square"
      ></input>
   );
}

export default Square;
