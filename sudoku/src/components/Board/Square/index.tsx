import React from "react";
import "./Square.style.css";

export interface SquareProps {
   index: number;
   value?: number | undefined;
   readOnly: boolean;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Square({ index, value, readOnly, onChange }: SquareProps) {
   // TODO: is there a better html tag than input I could use, that would make testing easier?
   // ? possibly use tables? (<td></td> for data cells in tables) (<tr></tr> for rows of each of the 9 arrays)

   return (
      <input
         key={index}
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
