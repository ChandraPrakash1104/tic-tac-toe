import React, { useState } from "react";
import Square from "./Square";
import classes from "./Matrix.module.css";

const Matrix = (props) => {
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [finalMatrix, setFinalMatrix] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleClick = (per) => {
    setCurrentPlayer((curr) => !curr);
    const i = Math.floor(per.id / 3);
    const j = per.id % 3;
    console.log(`i = ${i} j = ${j}`);
    const mat = [...finalMatrix];

    if (per.player) {
      mat[i][j] = 1;
    } else mat[i][j] = 2;
    console.log(...mat);
    setFinalMatrix(mat);
  };

  const renderSquares = () => {
    return Array.from({ length: 9 }, (_, index) => (
      <Square
        key={index}
        id={index}
        player={currentPlayer}
        handleClick={handleClick}
        matrix={finalMatrix}
      />
    ));
  };

  return <div className={classes.container}>{renderSquares()}</div>;
};

export default Matrix;
