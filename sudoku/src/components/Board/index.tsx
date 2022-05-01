import style from "./Board.module.css";
import Row from "./Row";

export interface BoardProps {
   rowIndex?: number;
   puzzle: number[][];
   row?: (number | undefined)[];
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Board({ puzzle, onChange }: BoardProps): JSX.Element {
   return (
      <div className={style.SudokuBoard}>
         {puzzle.map((row, rowIndex) => {
            return (
               <Row
                  key={rowIndex}
                  row={row}
                  rowIndex={rowIndex}
                  onChange={onChange}
               />
            );
         })}
      </div>
   );
}

export default Board;
