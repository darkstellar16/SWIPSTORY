import React from 'react';
import { useState } from "react";
import styles from "../StoryCard/StoryCard.module.css"
import icon5 from "../../assets/icon5.png"
import Bkm from "../../assets/BookMark.svg"
import EditStory from "../Story/EditStory.jsx"
import ShowModal from '../ShowModal/ShowModal';

const StoryCard = ({ data, id, fullData }) => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const openForm = () => {
        setOpen(true);
    }
    const openModal = () => {
        setShow(true);
    }

    const userId = JSON.parse(localStorage.getItem("userId"));

    const handleClick = async() => {


        alert("clicked");
    }
    // console.log(id);



console.log(fullData);

    
    return (
        <div className={styles.headCard}>
            <img className={styles.bkm} src={Bkm} onClick={handleClick}></img>
            <div className={styles.card}>
                <img className={styles.cardPhoto} src={data.image} alt="Card" onClick={openModal} />
                <div className={styles.cardOverlay}>

                    <h3 className={styles.cardTitle}>{data.heading}</h3>
                    <p className={styles.cardDescription}>{data.description}</p>
                </div>
            </div>
            { //Check if message failed
                (userId === id)
                    ? (<button className={styles.edit} onClick={openForm}><img src={icon5} ></img>Edit</button>)
                    : null
            }
            {open && <EditStory setOpen={setOpen} />}
            {show && < ShowModal setOpen={setShow} fullData={fullData} />}
        </div>
    );
};

export default StoryCard;