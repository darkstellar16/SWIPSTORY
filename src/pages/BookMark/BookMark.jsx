import React from "react";
import LogNav from "../../components/NavBar/LogNav.jsx"
import styles from "../BookMark/BookMark.module.css"

import BookMarkCard from "../../components/StoryCard/BookMarkCard.jsx";

const BookMark = () => {
    let dummyData = [
        {
            heading: "Nutritious Food",
            description: "Food that makes our body healthy and disease-free is regarded as healthy food",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
    ]
    return (
        <>
            <div className={styles.mainContent}>
                <LogNav />
                <div className={styles.head}>Your Bookmarks</div>
            </div>
            <div className={styles.cardContent} >{dummyData.map((item) => {
                return <BookMarkCard data={item} />
            })}</div>

        </>
    )
}




export default BookMark