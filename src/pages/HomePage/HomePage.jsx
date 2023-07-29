import { React, useState } from "react";
import FilterCard from "../../components/Filter/FilterCard.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import styles from "../HomePage/HomePage.module.css"
import icon from "../../assets/icon.svg";
import icon2 from "../../assets/icon2.png";
import StoryCard from "../../components/StoryCard/StoryCard.jsx";


function HomePage() {
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
  const [data, setData] = useState();
  const [text, setText] = useState();
  const receiveData = (data) => {
    setData(data);
  }
  const receiveText = (text) => {
    setText(text);
  }

  return (
    <div className={styles.mainContent}>
      <NavBar />
      <div className={styles.mainCard}>
        {arr.map((item, indx) => {
          return <FilterCard receiveData={receiveData} receiveText={receiveText} key={indx} text={item.text} img={item.href} />;
        })}
      </div>
      {text && <div className={styles.story}>{` ${text} Stories`}</div>}
      <div className={styles.cardContent}>{data?.map((item) => {
        return <StoryCard data={item?.posts[0]} fullData={item.posts} />
      })} </div>

    </div>
  );
}

export default HomePage;
