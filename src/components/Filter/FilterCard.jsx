import React from "react";
import styles from "./FilterCard.module.css";

function FilterCard(props) {
  //   console.log(img);
  return (
    <div className={styles.card}>
      <h4>{props.text}</h4>
      <img
        src={props.img}
        width="100"
        height="100"
        className={styles.img}
      ></img>
    </div>
  );
}

export default FilterCard;
