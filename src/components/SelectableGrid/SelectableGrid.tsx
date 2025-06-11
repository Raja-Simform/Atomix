import { useState } from "react";
interface SelectableProps {
  rows: number;
  cols: number;
}
export default function SelectableGrid({ rows, cols }: SelectableProps) {
  const [start, setStart] = useState(false);
  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(false))
  );
  const [startPos, setStartPos] = useState<Array<number>>([0, 0]);

  function handleMouseOver(i: number, j: number) {
    if (start) {
      setGrid(Array.from({ length: rows }, () => Array(cols).fill(false)));
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row) => [...row]);

        let rowStart = 0;
        let rowEnd = 0;
        let colStart = 0;
        let colEnd = 0;
        const [startRow, startCol] = startPos;
        if (startRow > i) {
          rowStart = i;
          rowEnd = startRow;
        } else {
          rowStart = startRow;
          rowEnd = i;
        }
        if (startCol > j) {
          colStart = j;
          colEnd = startCol;
        } else {
          colStart = startCol;
          colEnd = j;
        }

        for (let row = rowStart; row <= rowEnd; row++) {
          for (let col = colStart; col <= colEnd; col++) {
            newGrid[row][col] = true;
          }
        }
        return newGrid;
      });
    }
  }
  function handleMouseDown(i: number, j: number) {
    setStart(true);
    setStartPos([i, j]);
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(false)));
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      newGrid[i][j] = true;
      return newGrid;
    });
  }

  function handleMouseUp() {
    setStart(false);
  }

  function generateGrid() {
    return grid.map((row, i) => (
      <div key={i} className="row">
        {row.map((cell, j) => (
          <div
            key={j}
            className={`cell ${cell ? "selected" : ""}`}
            style={{ background: cell ? "blue" : "white" }}
            onMouseOver={() => handleMouseOver(i, j)}
            onMouseDown={() => handleMouseDown(i, j)}
            onMouseUp={handleMouseUp}
          ></div>
        ))}
      </div>
    ));
  }

  return <div className="grid">{generateGrid()}</div>;
}
