import { React, useState } from "react";
import styles from "./LogNav.module.css";
import AddStory from "../Story/AddStory.jsx"
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

import { useNavigate } from 'react-router-dom';

function LogNav() {
  const [openS, setIsOpenS] = useState(false);
  // const[isLogged,setIsLogged]=useState(false);
  const addStory = () => {
    setIsOpenS(true);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/bookmark')
  }

  const handleLogout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("userId");
    navigate('/');
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.story}>SWIP TORY</div>
        <button className={styles.bookMark} onClick={handleNavigate}><img src={icon4} className={styles.bkm}></img></button>
        <button className={styles.sign} onClick={addStory}>ADD STORY</button>
        <img src={icon3} className={styles.icon3}></img>
        <button className={styles.logout} onClick={handleLogout}>LOGOUT</button>
      </div>
      {openS && <AddStory setIsOpenS={setIsOpenS} />}
    </>
  );
}
export default LogNav;
