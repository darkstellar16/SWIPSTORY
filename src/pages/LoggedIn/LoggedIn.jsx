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
  const [text, setText] = useState();
  const [myStory, setMyStory] = useState();
  const [rerender, setRerender] = useState(true);
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

  const reRender = () => {
    setRerender((prev) => !prev)
  }
  const receiveData = (data) => {
    setData(data);
  }
  const receiveText = (text) => {
    setText(text);
  }
  const userId = JSON.parse(localStorage.getItem("userId"));
  const storyData = async () => {
    try {
      const res = await axios.get(`https://swipstorybackend.onrender.com/mystory/?userId=${userId}`)
      setMyStory(res.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    storyData();
  }, [rerender])
  return (
    <>
      <div className={styles.mainContent}>
        <LogNav />
        <div className={styles.mainCard}>
          {arr.map((item) =>
            <FilterCard receiveData={receiveData} receiveText={receiveText} text={item.text} img={item.href} />
          )}
        </div>
        {myStory?.length !== 0 ? (<><div className={styles.yourStory}>YOUR STORIES</div>
        <div className={styles.mycardContent} >
          {myStory?.map((item) => {
          return <StoryCard data={item?.posts[0]} fullData={item} reRender={reRender} />
        })}
        </div>
        </>
        ) : null}
        {text && <div className={styles.story}>{`${text} Stories`}</div>}
        <div className={styles.cardContent} >{data?.map((item) => {
          return <StoryCard data={item?.posts[0]} fullData={item} reRender={reRender} />
        })}</div>
      </div>
    </>
  );
}

export default LoggedIn;