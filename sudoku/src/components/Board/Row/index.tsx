import React from "react";
import { JsxElement } from "typescript";
import Square from "../Square";
import style from "./Row.module.css";

export interface RowProps {
   rowIndex: number;
   columnIndex?: number;
   row?: (number | undefined)[];
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Row({ row, rowIndex, onChange, }: RowProps): JSX.Element {
   return (
      <div className={style.SudokuRow}>
         {row &&
            row.map((square, columnIndex) => {
               return (
                  <Square
                     key={"" + rowIndex + columnIndex}
                     squareValue={square}
                     rowIndex={rowIndex}
                     columnIndex={columnIndex}
                     onChange={onChange}
                  />
               );
            })}
      </div>
   );
}

export default Row;
