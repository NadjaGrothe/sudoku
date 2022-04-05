import React from "react";
import "./Square.style.css";

export interface SquareProps {
   index: number;
   value?: number | undefined;
   isDisabled: boolean;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Square({ index, value, isDisabled, onChange }: SquareProps) {
   return (
      <input
         key={index}
         className="Board-square"
         type="number"
         defaultValue={value}
         disabled={isDisabled}
         onChange={onChange}
         data-testid="board-square"
      ></input>
   );}
   

export default Square;
