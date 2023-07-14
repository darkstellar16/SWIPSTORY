import React from "react";
import FilterCard from "../../components/Filter/FilterCard.jsx";
import LogNav from "../../components/NavBar/LogNav.jsx"
import styles from "../LoggedIn/LoggedIn.module.css"
import icon from "../../assets/icon.svg";
import icon2 from "../../assets/icon2.png";
// import StoryCard from "../../components/StoryCard/StoryCard.jsx";
import Card from "../../components/StoryCard/StoryCard.jsx";
import StoryCard from "../../components/StoryCard/StoryCard.jsx";
function LoggedIn() {
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
      text: "Movie",
      href: icon,
    },
    {
      text: "Fitness",
      href: icon2,
    },
  ];


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


  ]

  return (
    <>
      <div className={styles.mainContent}>
        <LogNav />
        <div className={styles.mainCard}>
          {arr.map((item) => {
            return <FilterCard text={item.text} img={item.href} />;
          })}
        </div>
        <div className={styles.cardContent} >{dummyData.map((item) => {
          return <StoryCard data={item} />
        })}
      </div>


    </div>
    </>
  );
}

export default LoggedIn;
