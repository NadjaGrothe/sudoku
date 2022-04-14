import React from "react";
import { JsxElement } from "typescript";
import Square from "../Square";
import style from "./Row.module.css";

export interface RowProps {
   rowIndex: number;
   columnIndex?: number;
   row?: (number | undefined)[];
   readOnly: boolean;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Row({ row, rowIndex, onChange, readOnly }: RowProps): JSX.Element {
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
                     readOnly={readOnly}
                     onChange={onChange}
                  />
               );
            })}
      </div>
   );
}

export default Row;
