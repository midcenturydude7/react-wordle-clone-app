import React from "react";
import Guess from "../Guess/Guess";

function GuessRender({ guesses }) {
  return (
    <div className="guess-results">
      <Guess numRows={6} numCols={5} />
    </div>
  );
}

// <div className="guess-results">
//   {guesses.map(({ value, id }) => (
//     <p key={id}>{value}</p>
//   ))}
// </div>

export default GuessRender;
