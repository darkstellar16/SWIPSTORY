import React from 'react';
import { useState } from "react";
import styles from "../StoryCard/StoryCard.module.css"
import icon5 from "../../assets/icon5.png"
import Bkm from "../../assets/BookMark.svg"
import ShowModal from '../ShowModal/ShowModal';
import axios from 'axios';
import { toast } from 'react-toastify';

const StoryCard = ({ data, fullData, reRender }) => {
    const [show, setShow] = useState(false);
    const openModal = () => {
        setShow(true);
    }

    const userId = JSON.parse(localStorage.getItem("userId"));

    const handleBookmark = async (id) => {

        const data = {
            uid: userId,
            pid: id
        }
        const res = await axios.post("https://swipstorybackend.onrender.com/bookmark/add", data);
        if (res) {
            toast.success('Sucessfully BookMarked', {
                position: "top-right",
                autoClose: 5000,
            });
            reRender()
        }
    }

    const handleDelete = async (id) => {
        const res = await axios.delete(`https://swipstorybackend.onrender.com/remove?id=${id}`)
        if (res) {
            toast.success('Sucessfully deleted', {
                position: "top-right",
                autoClose: 5000,

            });
            reRender();
        }


    }



    return (
        <div className={styles.headCard}>
            <img className={styles.bkm} src={Bkm} onClick={() => handleBookmark(fullData._id)}></img>
            <div className={styles.card}>
                <img className={styles.cardPhoto} src={data.image} alt="Card" onClick={openModal} />
                <div className={styles.cardOverlay}>
                    <div className={styles.cardTitle}>{data.heading}</div>
                    <p className={styles.cardDescription}>{data.description}</p>
                </div>
            </div>
            {
                (userId === fullData?.userId)
                    ? (<img className={styles.del} src={icon5} onClick={() => handleDelete(fullData._id)}></img>)
                    : null
            }

            {show && < ShowModal setOpen={setShow} fullData={fullData?.posts} />}
        </div >
    );
};

export default StoryCard;