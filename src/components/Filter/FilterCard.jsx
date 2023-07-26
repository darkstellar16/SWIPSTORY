import React from "react";
import styles from "./FilterCard.module.css";

import axios from "axios";

function FilterCard(props) {
  //   console.log(img);


  const handleClick = async(text)=>{
    // console.log(text);

    const res = await axios.get(`http://localhost:8000/filter/?catg=${text}`);
    // console.log(res.data);
    props.receiveData(res.data);
  }
  return (
    <div className={styles.card}  onClick={()=> handleClick(props.text)}>
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
