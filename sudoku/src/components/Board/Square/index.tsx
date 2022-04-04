import React from "react";

export interface SquareProps {
   value: number;
   isDisabled: boolean;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Square({ value, isDisabled, onChange }: SquareProps) {
   return isDisabled ? (
      <input disabled={isDisabled}>{value}</input>
   ) : (
      <input disabled={isDisabled} onChange={onChange}>
         {value}
      </input>
   );
}
export default Square;
