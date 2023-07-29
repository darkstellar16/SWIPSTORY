import { React, useState, useEffect } from "react";
import styles from "../ShowModal/ShowModal.module.css";
import ShowStory from "../ShowStory/ShowStory";



const ShowModal = ({ setOpen, fullData }) => {

    useEffect(() => {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowX = "scroll";
            document.body.style.overflowY = "scroll";
        };
    }, []); 

    // console.log(fullData);

    return (
        <>
            <div className={styles.mainModal}></div>
            <div className={styles.modalForm}>
                <ShowStory setShow={setOpen} fullData={fullData} />
            </div>
        </>
    );
};

export default ShowModal;
