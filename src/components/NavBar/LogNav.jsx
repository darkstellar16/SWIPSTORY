import { React, useState } from "react";
import styles from "./LogNav.module.css";
import AddStory from "../AddStory/AddStory.jsx"
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

function LogNav() {
  const [openS, setIsOpenS] = useState(false);
  // const[isLogged,setIsLogged]=useState(false);
  const addStory = () => {
    setIsOpenS(true);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.story}>SWIP TORY</div>
        <button className={styles.bookMark}><img src={icon4} className={styles.bkm}></img>
        </button>
        <button className={styles.sign} onClick={addStory}>Add story</button>
        <img src={icon3} className={styles.icon3}></img>
      </div>
      {openS && <AddStory setIsOpenS={setIsOpenS} />}
    </>
  );
}
export default LogNav;
