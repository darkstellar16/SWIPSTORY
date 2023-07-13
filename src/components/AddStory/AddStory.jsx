import { React, useState, useEffect } from "react";
import styles from "../AddStory/AddStory.module.css";
import StoryForm from "../StoryForm/StoryForm";


const AddStory = ({ setIsOpenS, setOpen }) => {
  const closeS = () => {
    if (setIsOpenS) {
      setIsOpenS(false);
    }
    else {
      setOpen(false);
    }

  };
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
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
        <StoryForm />
        <button className={styles.btn} onClick={closeS}>
          X
        </button>
      </div>
    </>
  );
};

export default AddStory;
