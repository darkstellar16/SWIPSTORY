import React from "react";
import styles from "./FilterCard.module.css";

import axios from "axios";

function FilterCard(props) {


  const token = JSON.parse(localStorage.getItem("Token"));

  const handleClick = async (text) => {
    const res = await axios.get(`http://localhost:8000/filter/?catg=${text}`);
    props.receiveText(text);
    props.receiveData(res.data);
  }

  
  return (
    <div className={styles.card} onClick={() => handleClick(props.text)}>
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
