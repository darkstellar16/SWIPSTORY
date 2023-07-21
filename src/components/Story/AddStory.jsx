import { React, useState, useEffect } from "react";
import styles from "./AddStory.module.css";
import StoryForm from "../StoryForm/StoryForm";


const AddStory = ({ setIsOpenS }) => {
  const closeS = () => {
    setIsOpenS(false);
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
        <StoryForm setIsOpenS={setIsOpenS} />
        <button className={styles.btn} onClick={closeS}>
          X
        </button>
      </div>
    </>
  );
};

export default AddStory;
