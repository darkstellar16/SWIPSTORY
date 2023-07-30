import React from "react";
import LogNav from "../../components/NavBar/LogNav.jsx"
import styles from "../BookMark/BookMark.module.css"
import StoryCard from "../../components/StoryCard/StoryCard.jsx";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const BookMark = () => {
    let posts = [
        {
            heading: "Nutritious Food",
            description: "Food that makes our body healthy and disease-free is regarded as healthy food",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
        {
            heading: "Nutritious ",
            description: "Food that makes our body healthy and diseavsjlkzdsnfklzsjlfsfjx.dnklsnse-free is regarded as healthy food",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s",
            category: "Food",
        },
    ]

    const [bookmark, setBookmark] = useState([]);
    const uid = JSON.parse(localStorage.getItem("userId"));
   

    const token = JSON.parse(localStorage.getItem('Token'));

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://swipstorybackend.onrender.com/bookmark/?uid=${uid}`, config)
            setBookmark(res.data.bookmark);
            
        }

        if (uid)
            getData();

    }, [])

    return (
        <>
            <div className={styles.mainContent}>
                <LogNav />
                <div className={styles.head}>Your Bookmarks</div>
            </div>
            <div style={{ display: 'flex' }}>
                {bookmark?.map((item) => {
                    return <StoryCard data={item?.posts[0]} fullData={item} />
                })}
            </div>
        </>
    )
}

export default BookMark