import React from "react";
import styles from "../StoryCard/StoryCard.module.css"
import icon5 from "../../assets/icon5.png"
import AddStory from "../AddStory/AddStory.jsx"
import { useState } from "react";




const StoryCard = (props) => {

    const [open, setOpen] = useState(false);

    const openForm = () => {
        setOpen(true);
    }

    console.log(open);

    return (
        <>
            <div className={styles.Categ}>{props.category}</div>
            <div className={styles.dataCard}>
                <h4 className={styles.head}>{props.heading}</h4>
                <p className={styles.desc}>{props.description}</p>
                <img src={props.photo} className={styles.pht}></img>
                <button className={styles.edit}><img className={styles.epht} src={icon5} onClick={openForm}></img>Edit</button>
            </div>
            {open && <AddStory  setOpen={setOpen} /> }
        </>

    )
}




export default StoryCard;