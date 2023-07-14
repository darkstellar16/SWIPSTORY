import { React, useState, useEffect } from "react";
import styles from "../SignUp/SignUp.module.css";
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setIsOpenS }) => {
  const closeS = () => {
    setIsOpenS(false);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    // console.log("fbasdhkj,");
    navigate('/log');
  };


  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowX = "scroll";
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className={styles.mainModal}></div>
      <div className={styles.modalForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <h3>Login to Swip Story</h3>
            <h3 className={styles.u}>Username</h3>
            <h3 className={styles.p}>Password</h3>
            <input
              type="text"
              className={styles.user}
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className={styles.pass}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.sbm} type='submit'>
              Login
            </button>
          </div>
        </form>
        <button className={styles.btn} onClick={closeS}>
          X
        </button>
      </div>
    </>
  );
};

export default SignUp;
