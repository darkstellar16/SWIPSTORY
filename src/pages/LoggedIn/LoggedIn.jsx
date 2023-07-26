import React from "react";
import FilterCard from "../../components/Filter/FilterCard.jsx";
import LogNav from "../../components/NavBar/LogNav.jsx"
import styles from "../LoggedIn/LoggedIn.module.css"
import icon from "../../assets/icon.svg";
import icon2 from "../../assets/icon2.png";
import StoryCard from "../../components/StoryCard/StoryCard.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function LoggedIn() {

  const [data, setData] = useState();
  const [myStory, setMyStory] = useState();
  const [id, setId] = useState();
  let arr = [
    {
      text: "All",
      href: icon,
    },
    {
      text: "Education",
      href: icon2,
    },
    {
      text: "Health",
      href: icon,
    },
    {
      text: "Travel",
      href: icon2,
    },
    {
      text: "Movies",
      href: icon,
    },
    {
      text: "Food",
      href: icon2,
    },
  ];

  const receiveData = (data) => {
    setData(data);
  }
  // console.log(data);
  const userId = JSON.parse(localStorage.getItem("userId"));
  // console.log(userId);
  const storyData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/mystory/?userId=${userId}`)
      // console.log(res.data);
      setMyStory(res.data);
      setId(res.data[0].userId)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    storyData();
  }, [])

  return (
    <>
      <div className={styles.mainContent}>
        <LogNav />
        <div className={styles.mainCard}>
          {arr.map((item) =>
            <FilterCard receiveData={receiveData} text={item.text} img={item.href} />
          )}
        </div>
        <div className={styles.yourStory}>Your Stories</div>
        <div className={styles.mycardContent} >{myStory?.map((item) => {
          return <StoryCard data={item?.posts[0]} id={id} />
        })}</div>
        <div className={styles.cardContent} >{data?.map((item) => {
          return <StoryCard data={item?.posts[0] } fullData = {item?.posts} />
        })}</div>
      </div>
    </>
  );
}

export default LoggedIn;
