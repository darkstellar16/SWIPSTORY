import { React, useState } from "react";
import styles from "./NavBar.module.css";
import Register from "../Register/Register";
import SignUp from "../SignUp/SignUp";

function NavBar() {
  const [openR, setIsOpenR] = useState(false);
  const [openS, setIsOpenS] = useState(false);
  // const[isLogged,setIsLogged]=useState(false);


  const openRes = () => {
    setIsOpenR(true);
  };

  const openSign = () => {
    setIsOpenS(true);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.story}>SWIP TORY</div>
        <button className={styles.register} onClick={openRes}>
          Register Now
        </button>
        <button className={styles.sign} onClick={openSign}>
          Sign In
        </button>
      </div>
      {openR && <Register setIsOpenR={setIsOpenR} />}
      {openS && <SignUp setIsOpenS={setIsOpenS} />}
    </>
  );
}
export default NavBar;
