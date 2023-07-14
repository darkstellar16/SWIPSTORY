import React from 'react';
import styles from "./BookMarkCard.module.css"

const BookMarkCard = ({ data }) => {

    // const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s";
    return (
        <div className={styles.headCard}>
            <div className={styles.card}>
                <img className={styles.cardPhoto} src={data.url} alt="Card Background" />
                <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{data.heading}</h3>
                    <p className={styles.cardDescription}>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookMarkCard;