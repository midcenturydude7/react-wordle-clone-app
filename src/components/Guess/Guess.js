import React from "react";
import { range } from "../../utils";

function Guess({ numRows, numCols }) {
  return (
    <>
      {range(numRows).map((rowIndex) => (
        <p className="guess" key={rowIndex}>
          {range(numCols).map((colIndex) => (
            <span className="cell" key={colIndex}></span>
          ))}
        </p>
      ))}
    </>
  );
}

export default Guess;
