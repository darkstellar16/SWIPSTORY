import React from 'react';
import { useState } from "react";
import styles from "../StoryCard/StoryCard.module.css"
import icon5 from "../../assets/icon5.png"
import EditStory from "../Story/EditStory.jsx"
import ShowModal from '../ShowModal/ShowModal';


const StoryCard = ({ data }) => {

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    // console.log(data)

    const openForm = () => {
        setOpen(true);
        // setShow(true);
    }
    const openModal = () => {
        setShow(true);
        // console.log(open);
        // alert("clicked")
    }
    // const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s";
    return (
        <div className={styles.headCard}>
            <div className={styles.card}>
                <img className={styles.cardPhoto} src={data.url} alt="Card Background" onClick={openModal} />
                <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{data.heading}</h3>
                    <p className={styles.cardDescription}>{data.description}</p>               </div>
            </div>
            <button className={styles.edit} onClick={openForm}><img src={icon5} ></img>Edit</button>
            {open && <EditStory setOpen={setOpen} />}
            {show && < ShowModal setOpen={setShow} />}
        </div>
    );
};

export default StoryCard;