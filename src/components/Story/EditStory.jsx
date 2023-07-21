import { React, useState, useEffect } from "react";
import styles from "./EditStory.module.css";
import EditForm from "../StoryForm/EditForm.jsx";


const EditStory = ({ setOpen }) => {
  const closeS = () => {
      setOpen(false);
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
        <EditForm setOpen={setOpen} />
        <button className={styles.btn} onClick={closeS}>
          X
        </button>
      </div>
    </>
  );
};

export default EditStory;
