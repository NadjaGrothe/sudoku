import React from "react";
import "./Square.style.css";

export interface SquareProps {
   key: number
   value?: number | undefined;
   isDisabled: boolean;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Square({ key, value, isDisabled, onChange }: SquareProps) {
   return isDisabled ? (
      <input
         key={key}
         className="Board-square"
         value={value}
         disabled={isDisabled}
      ></input>
   ) : (
      <input
         key={key}
         className="Board-square"
         type="number"
         defaultValue={value}
         disabled={isDisabled}
         onChange={onChange}
      ></input>
   );
}
export default Square;
