import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../Register/Register.module.css";
import axios from 'axios';

const Register = ({ setIsOpenR }) => {
  const closeR = () => {
    setIsOpenR(false);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowX = "scroll";
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const registerUser = async () => {
    try {
      console.log(username, password);

      const data = await axios.post('https://swipstorybackend.onrender.com/register', {
        email: username,
        password: password
      })
      return true
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    const check = await registerUser();
    if (check) {
      registerUser();
      setIsOpenR(false);
    }
    else {
      alert("Invalid Credentials");
    }


    // setIsOpenR(false);
  };

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
              type="email"
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
            <button className={styles.sbm} onClick={handleSubmit}>
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
