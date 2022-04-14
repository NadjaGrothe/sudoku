import React from "react";
import { JsxElement } from "typescript";
import style from "./Board.module.css";
import Row from "./Row";

export interface BoardProps {
   rowIndex?: number;
   board: (number | undefined)[][];
   row?: (number | undefined)[];

   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Board({ board, onChange }: BoardProps): JSX.Element {
   return (
      <div className={style.SudokuBoard}>
         {board.map((row, rowIndex) => {
            return (
               <Row
                  key={rowIndex}
                  row={row}
                  rowIndex={rowIndex}
                  columnIndex={rowIndex}
                  onChange={onChange}
               />
            );
         })}
      </div>
   );
}

export default Board;
