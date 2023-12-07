import { useState } from "react";
import classes from "./Square.module.css";

const Square = (props) => {
  const [bgColor, setBgColor] = useState();
  const [value, setValue] = useState();

  const handleClick = (e) => {
    if (value != "X" && value != "O") {
      if (props.player) {
        setBgColor("yellow");
        setValue("X");
      } else {
        setBgColor("green");
        setValue("O");
      }
      props.handleClick({ id: props.key, player: props.player });
    }
  };

  return (
    <div
      className={classes.box}
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
    >
      <h2 className={classes.box__value}>{value}</h2>
    </div>
  );
};

export default Square;
