import React from "react";
import styles from "./FilterCard.module.css";

import axios from "axios";

function FilterCard(props) {
  //   console.log(img);

  const token = JSON.parse(localStorage.getItem("Token"));

  const handleClick = async (text) => {
    // console.log(text);
    const res = await axios.get(`http://localhost:8000/filter/?catg=${text}`);
    // console.log(res.data);
    if (token) {
      props.receiveText(text);
      props.receiveData(res.data);
    }
    else {
      props.storyData(res.data);
      props.storyText(text);
    }
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
