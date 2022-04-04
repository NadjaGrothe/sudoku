import React from "react";
import "./Square.style.css";

export interface SquareProps {
   value?: number | undefined;
   isDisabled: boolean;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Square({ value, isDisabled, onChange }: SquareProps) {
   return isDisabled ? (
      <input
         className="Board-square"
         value={value}
         disabled={isDisabled}
      ></input>
   ) : (
      <input
         className="Board-square"
         type="number"
         defaultValue={value}
         disabled={isDisabled}
         onChange={onChange}
      ></input>
   );
}
export default Square;
