import { React, useState, useEffect } from "react";
import styles from "../ShowModal/ShowModal.module.css";
import ShowStory from "../ShowStory/ShowStory";
import cross from "../../assets/CrossButton.svg"


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

    const closeS = () => {
        setOpen(false);
    };
    return (
        <>
            <div className={styles.mainModal}></div>
            <div className={styles.modalForm}>
                <ShowStory setShow={setOpen} fullData={fullData} />
                <img src={cross} style={{ position: "absolute", right: "70px",top:"40px", cursor: "pointer", color: "black", zIndex: "" }} onClick={closeS} ></img>

            </div>
        </>
    );
};

export default ShowModal;
