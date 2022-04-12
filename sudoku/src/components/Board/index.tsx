import React from 'react'
import { JsxElement } from 'typescript'
import style from "./Board.module.css"
import Row from './Row';

export interface BoardProps {
   rowIndex?: number;
   columnIndex?: number;
   board: (number | undefined)[][];
   row?: (number | undefined)[];
   square?: number | undefined;
   readOnly: boolean
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Board({ board, onChange, readOnly }: BoardProps): JSX.Element {
   return (
      <div className={style.SudokuBoard}>
         {board.map((row, rowIndex) => {
            return (
                  <Row
                     rowIndex={rowIndex}
                     columnIndex={rowIndex}
                     readOnly={readOnly}
                  />
               );
            })
         }
      </div>
   );
}

export default Board