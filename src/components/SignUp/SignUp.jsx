import { React, useState, useEffect, useContext } from "react";
import styles from "../SignUp/SignUp.module.css";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../App";
import axios from "axios";
import { toast } from 'react-toastify';

const SignUp = ({ setIsOpenS }) => {
  const closeS = () => {
    setIsOpenS(false);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLogin } = useContext(UserContext);

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      // console.log(username, password);
      const info = await axios.post("http://localhost:8000/login", {
        email: username,
        password: password,
      })
      // console.log(info.data.user._id);
      // console.log(info.data.user.token);
      localStorage.setItem("userId", JSON.stringify(info.data.user._id))
      localStorage.setItem("Token", JSON.stringify(info.data.user.token));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const check = await loginUser();
    if (check) {
      setLogin(true);
      toast.success('Sucessfully Sign-In', {
        position: "top-right",
        autoClose: 5000,
      });
      navigate('/log');
    }
    else {
      toast.error('Please enter Correct Details', {
        position: "top-right",
        autoClose: 5000,
      });
      navigate('/')
    }
  };

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowX = "scroll";
      document.body.style.overflowY = "scroll";
    };
  }, []);
  // console.log(login);
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
              type="email"
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
