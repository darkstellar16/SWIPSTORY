import { React, useState, useEffect } from "react";
import styles from "../ShowModal/ShowModal.module.css";
import ShowStory from "../ShowStory/ShowStory";



const ShowModal = ({ setOpen }) => {
    
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
                <ShowStory  setShow={setOpen}/>
            </div>
        </>
    );
};

export default ShowModal;
