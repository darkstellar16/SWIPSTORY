import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../Register/Register.module.css";

const Register = ({ setIsOpenR }) => {
  const closeR = () => {
    setIsOpenR(false);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <form>
          <div className={styles.form}>
            <h3>Register to Swip Story</h3>
            <h3 className={styles.u}>Username</h3>
            <h3 className={styles.p}>Password</h3>
            <input
              type="text"
              className={styles.user}
              Placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className={styles.pass}
              Placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.sbm} onSubmit={handleSubmit}>
              Register
            </button>
          </div>
        </form>
        <button className={styles.btn} onClick={closeR}>
          X
        </button>
      </div>
    </>
  );
};

export default Register;
