import React from "react";
import "./Square.module.css";

export interface SquareProps {
   rowIndex: number;
   columnIndex: number;
   //index: number;
   value?: number | undefined;
   readOnly: boolean;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Square({
   rowIndex,
   columnIndex,
   value,
   readOnly,
   onChange,
}: SquareProps) {
   // TODO: create max length validation for number input

   return (
      <input
         key={"" + rowIndex + columnIndex}
         className="Board-square"
         type="number"
         defaultValue={value}
         readOnly={readOnly}
         onChange={onChange}
         data-testid="board-square"
      ></input>
   );
}

export default Square;
